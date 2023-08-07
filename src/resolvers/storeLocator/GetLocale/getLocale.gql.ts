import { gql } from '@apollo/client';

export const GET_LOCALE = gql`
    query {
        storeConfig {
            locale
            store_code
        }
    }
`;

export default {
    getLocaleQuery: GET_LOCALE
};
