import { gql } from '@apollo/client';

export const GET_STOREID = gql`
    query StoreConfig {
        storeConfig {
            id
            store_code
        }
    }
`;

export default {
    getStoreIdQuery: GET_STOREID
};
