<<<<<<< HEAD
import gql from 'graphql-tag';
=======
import gql from "graphql-tag";
>>>>>>> 62bad4eb20a395e8cdd7757b3515a67b6ba927dd

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
<<<<<<< HEAD
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
=======
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
>>>>>>> 62bad4eb20a395e8cdd7757b3515a67b6ba927dd
      token
      user {
        _id
      }
    }
  }
<<<<<<< HEAD
`;
=======
`;

export const CREATE_GROUP = gql`
  mutation createGroup($groupName: String!, $groupPassword: String!) {
    createGroup(groupName: $groupName, groupPassword: $groupPassword) {
      token
      user {
        _id
      }
    }
  }
`;

export const JOIN_GROUP = gql`
  mutation joinGroup($groupName: String!, $groupPassword: String!) {
    joinGroup(groupName: $groupName, groupPassword: $groupPassword) {
      token
      user {
        _id
      }
    }
  }
`;
>>>>>>> 62bad4eb20a395e8cdd7757b3515a67b6ba927dd
