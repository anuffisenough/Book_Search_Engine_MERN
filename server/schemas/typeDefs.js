const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }
    
    type Mutation {
        login: Auth
        addUser(username, email, password): Auth
        saveBook: User
        removeBook: User
    }
    
    type User {
        _id: ID
        username: String
        email: Email
        bookCount:
        savedBooks:
    }
    
    type Book {
        bookId: ID
        authors:
        description:
        title:
        image:
        link:
    }
    
    type Auth {
        token:
        user:
    }
`;

module.exports = typeDefs;