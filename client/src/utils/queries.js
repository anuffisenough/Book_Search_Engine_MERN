import { gql } from '@apollo/client';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

export const GET_ME = gql`
    { me {
        User {
            _id: ID
            username: String
            email: String
            bookCount: Int
            savedBooks: { bookId, authors, description, title, image, link }
        }
    }
}
`;