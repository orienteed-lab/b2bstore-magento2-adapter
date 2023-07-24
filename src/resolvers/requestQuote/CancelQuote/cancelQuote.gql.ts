import { gql } from '@apollo/client';

export const CANCEL_QUOTE = gql`
    mutation CancelQuote($quoteId: Int!) {
        cancelMpQuote(quote_id: $quoteId)
    }
`;

export default {
    cancelQuoteMutation: CANCEL_QUOTE
};
