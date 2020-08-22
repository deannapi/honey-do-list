const { AuthenticationError } = require('apollo-server-express');
<<<<<<< HEAD
const { User, Task, Comment } = require('../models');
=======
const { User, Comment } = require('../models');
>>>>>>> 62bad4eb20a395e8cdd7757b3515a67b6ba927dd
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
        },
        // get all comments
        comments: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Comment.find(params).sort({ createdAt: -1 });
        },
        // get a comment by id
        comment: async (parent, { _id }) => {
            return Comment.findOne({ _id });
        },
        //  get all users
        users: async () => {
            return User.find()
                .select('__v -password')
                .populate('family')
                .populate('comments');
        }
    },

    Mutation: {
        addUser: async(parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Incorrect credentials!");
            }
            const token = signToken(user);

            return { token, user };
        },

        addComment: async (parent, args, context) => {
            if (context.user) {
                const comment = await Comment.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { comments: comment._id }},
                    { new: true }
                );
                return comment;
            }
            throw new AuthenticationError('You are not logged in.');
<<<<<<< HEAD
=======
        },

        addReaction: async (parent, {commentId, reactionBody }, context) => {
            if (context.user) {
                const updatedComment = await Comment.findByIdAndUpdate(
                { _id: commentId },
                { $push: { reactions: { reactionBody, username: context.user.username}}},
                { new: true, }
                );
                return updatedComment;
            }
            throw new AuthenticationError('You are not logged in.');
>>>>>>> 62bad4eb20a395e8cdd7757b3515a67b6ba927dd
        }
    }
};

module.exports = resolvers;