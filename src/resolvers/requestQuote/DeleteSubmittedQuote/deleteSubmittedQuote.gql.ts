import { gql } from '@apollo/client';

export const DELETE_SUBMITTED_QUOTE = gql`
    mutation DeleteSubmittedQuote($quoteId: Int!) {
        deleteSubmittedMpQuote(quote_id: $quoteId)
    }
`;

export default {
    deleteSubmittedQuoteMutation: DELETE_SUBMITTED_QUOTE
};
