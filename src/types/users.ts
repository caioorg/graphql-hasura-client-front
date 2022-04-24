declare namespace UsersTypes {
  interface User {
    name: string;
    email: string;
    id?: number
  }

  interface UsersData {
    users: User[]
  }

  interface UserByEmail {
    email: string
  }
}

export default UsersTypes