const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }
    
    type Mutation {
        loginUser(email: String, password: String): Auth
        addUser(username: String, email: String, password: String): Auth
        saveBook(content: SavedBookContent): User
        removeBook(bookId: ID): User
    }
    
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [String]
    }
    
    type Book {
        bookId: ID
        authors: [String]
        description: String!
        title: String
        image: String
        link: String
    }
    
    type Auth {
        token: ID!
        user: User
    }

    input SavedBookContent {
        authors: [String]
        description: String!
        bookId: ID
        media: [String!]
        link: [String!]
    }

    input MediaDetails {
        url: String!
        format: String!
    }

     input MediaFormat {
         IMAGE
     }
`;

module.exports = typeDefs;