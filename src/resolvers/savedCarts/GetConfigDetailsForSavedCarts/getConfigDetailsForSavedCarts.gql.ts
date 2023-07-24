import { gql } from '@apollo/client';

export const GET_CONFIG_DETAILS = gql`
    query GetConfigDetailsForSavedCarts {
        mpSaveCartConfigs {
            enabled
            button_title
            allow_share
            show_button_guest
        }
    }
`;

export default {
    getConfigDetailsForSavedCartsQuery: GET_CONFIG_DETAILS
};
