import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
  query getAllUsers {
    users {
      name,
      email
    }
  }
`

export const GET_USER_BY_EMAIL = gql`
  query getUserByEmail($email: String) {
    users(where: { email: { _eq: $email } }) {
      name,
      email
    }
  }
`

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    insert_users(objects: { name: $name, email: $email }) {
      returning {
        email,
        name
      }
    }
  }
`;

export const SUBSCRIPTION_ALL_USERS = gql`
  subscription SubscriptionListAllUsers {
    users {
      name
      email
    }
  }
`