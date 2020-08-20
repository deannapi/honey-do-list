const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        user: User
    }

    type Mutation {
        addUser(
            firstName: String!,
            lastName: String!,
            username: String!,
            email: String!,
            password: String!
        ): Auth
        login(email: String!, password: String!): Auth
    }

    type Auth {
        token: ID
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
    }
`;

module.exports = typeDefs;