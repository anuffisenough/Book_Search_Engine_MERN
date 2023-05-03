const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
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
            return User.create({ username });
        },
        saveBook: async (parent, { SavedBookContent }) => {
            return User;
        },
        removeBook: async (parent, { bookId }) => {
            return User;
    },
},
};

module.exports = resolvers;