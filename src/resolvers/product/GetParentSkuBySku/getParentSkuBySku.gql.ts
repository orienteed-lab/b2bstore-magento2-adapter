import { gql } from '@apollo/client';

export const GET_PARENT_SKU_BY_SKU = gql`
    query GetParentSkuBySku($sku: String) {
        products(search: $sku, filter: { sku: { eq: $sku } }) {
            items {
                orParentSku
                uid
            }
        }
    }
`;

export default {
    getParentSkuBySkuQuery: GET_PARENT_SKU_BY_SKU
};
