import { gql } from '@apollo/client';

export const SUBMIT_CURRENT_QUOTE = gql`
    mutation SubmitCurrentQuote {
        mpQuoteSubmit
    }
`;

export default {
    submitCurrentQuoteMutation: SUBMIT_CURRENT_QUOTE
};
