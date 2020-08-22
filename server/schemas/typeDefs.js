const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      username: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addComment(commentBody: String!): Comment
    addReaction(reactionBody: String!): Reaction
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    tasks: [Task]
    comments: [Comment]
  }

  type Task {
    _id: ID
    taskName: String
    user: [User]
  }

  type Comment {
    _id: ID
    commentBody: String
    user: [User]
    createdAt: String
    username: String
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
`;

module.exports = typeDefs;
