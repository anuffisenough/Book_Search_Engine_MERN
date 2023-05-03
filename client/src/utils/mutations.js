import { gql } from ApolloServer;

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        token
        user
    }
`
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        token
        user
    }
`

export const SAVE_BOOK = gql`
    mutation saveBook(content: SavedBookContent) {
        _id
        username
        email
        bookCount
        savedBooks
    }`

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        _id
        username
        email
        bookCount
        savedBooks
    }`