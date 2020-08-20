const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

// NEED TO GET STRIPE NUMBER STILL
const stripe = require('stripe')('');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(_id).populate({
                    // NOT SURE WHAT TO PUT HERE
                    path: "",
                    populate: "",
                })
                return user;
            }
            throw new AuthenticationError("You are not logged in.");
        }
    },

    Mutation: {
        addUser: async(parent, args) => {

        },

        login: async (parent, { email, password }) => {

        }
    }
};

module.exports = resolvers;