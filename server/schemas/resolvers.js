const { User } = require('../models');
const { signToken } = require('../utils/auth');
const {AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({_id: context.user._id })
                .select('-__v -password')
                .populate('savedBooks');
            return userData;
        }
        
        throw new AuthenticationError('Not logged in');
    }
},

    Mutation: {
        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

        if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

        addUser: async (parent, { username, email, password}) => {
            const user = await User.create({ username });

            if (!user) {
                throw new AuthenticationError('Something went wrong!');
            }
        },
        saveBook: async (parent, { SavedBookContent }, context) => {
            if (context.user) {
                const bookData = await 
            }
            return User;
        },
        removeBook: async (parent, { bookId }) => {
            return User;
    },
},
};

module.exports = resolvers;