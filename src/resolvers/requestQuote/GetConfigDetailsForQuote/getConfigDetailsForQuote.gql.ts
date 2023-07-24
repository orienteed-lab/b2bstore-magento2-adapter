import { gql } from '@apollo/client';

export const GET_QUOTE_CONFIG_DETAILS = gql`
    query GetConfigDetailsForQuote {
        mpQuoteConfig {
            allow_category
            category
            customer_groups
            file_type
            icon_url
            is_allow_attach
            is_allow_guest
            redirect_page
        }
    }
`;

export default {
    getConfigDetailsForQuoteQuery: GET_QUOTE_CONFIG_DETAILS
};
