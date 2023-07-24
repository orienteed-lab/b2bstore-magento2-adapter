import { gql } from '@apollo/client';

export const DELETE_CURRENT_QUOTE = gql`
    mutation DeleteCurrentQuote {
        deleteCurrentMpQuote
    }
`;

export default {
    deleteCurrentQuoteMutation: DELETE_CURRENT_QUOTE
};
