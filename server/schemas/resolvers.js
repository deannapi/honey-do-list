const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('');

const resolvers = {
    Query: {

    },

    Mutation: {
        addUser: async(parent, args) => {

        },

        login: async (parent, { email, password }) => {

        }
    }
};

module.exports = resolvers;