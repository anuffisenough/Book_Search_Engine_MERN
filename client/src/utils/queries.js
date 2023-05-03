import { gql } from ApolloServer;

export const GET_ME = gql`
    query me {
        User {
            _id: ID
            username: String
            email: String
            bookCount: Int
            savedBooks: [Book]
        }
    }
`;