import { gql } from '@apollo/client';

export const GET_IMAGE_BY_SKU = gql`
    query GetImageBySku($sku: String) {
        products(search: $sku, filter: { sku: { eq: $sku } }) {
            items {
                uid
                image {
                    url
                }
            }
        }
    }
`;

export default {
    getImageBySkuQuery: GET_IMAGE_BY_SKU
};
