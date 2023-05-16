import { gql } from '@apollo/client';


export const GET_ME = gql`
    { 
    me {
        User {
            _id
            username
            email
            bookCount
            savedBooks { 
                bookId
                authors
                description
                title
                image
                link 
            }
        }
    }
}
`;