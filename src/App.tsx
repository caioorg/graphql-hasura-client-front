import { useState, useCallback, FormEvent, ChangeEvent } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_ALL_USERS, CREATE_USER } from './services/users'
import UsersTypes from './types/users'


function App() {
  const [user, setUser] = useState<UsersTypes.User>({ name: '', email: ''})
  const { loading, error, data } = useQuery<UsersTypes.UsersData>(GET_ALL_USERS)
  const [createUser, statusCreate] = useMutation(CREATE_USER);

  const onHandleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => useCallback(() => {
    setUser({...user, [ e.target.name]: e.target.value})
  }, [user])
  
  const onHandleSubmit = useCallback((e: FormEvent<HTMLElement>) => {
    createUser({ variables: { ...user }})
    e.preventDefault();
  }, [user])

  if(loading || statusCreate.loading) return <p>Loading...</p>

  if(error || statusCreate.error) return <p>Error:  </p>

  return (
    <div className="App">
      <h2>List All Users</h2>
      {data?.users.map(user => (
        <p key={user.id}>name: {user.name} / email: {user.email}</p>
      ))}

      <div>
        <form onSubmit={onHandleSubmit}>
          <input
            type='text'
            placeholder='Name'
            name='name'
            onChange={onHandleChange}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={onHandleChange}
          />
          <button type="submit">Created</button>
        </form>
      </div>
    </div>
  )
}

export default App
