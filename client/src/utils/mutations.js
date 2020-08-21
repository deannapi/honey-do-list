import gql from "graphql-tag";

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
      token
      user {
        _id
      }
    }
  }
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
