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
        savedBooks: [Book]
    }
    
    type Book {
        bookId: ID
        authors: [Author]
        description: String
        title: String
        image: Image
        link: Link
    }
    
    type Auth {
        token: ID!
        user: User
    }

    input SavedBookContent {
        authors: [Author]
        description: String
        bookId: ID
        media: [MediaDetails!]
        link: [MediaDetails!]
    }

    input MediaDetails {
        url: String!
        format: MediaFormat!
    }

    // input MediaFormat {
    //     IMAGE
    // }
`;

module.exports = typeDefs;