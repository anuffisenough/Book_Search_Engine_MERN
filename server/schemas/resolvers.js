const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
    },

    Mutation: {
        loginUser: async (parent, args) => {
            return Auth;
        },

        addUser: async (parent, args) => {
            return User.create(args);
        },
        saveBook: async (parent, args) => {
            return User;
        },
        removeBook: async (parent, args) => {
            return User;
    },
},
};

module.exports = resolvers;