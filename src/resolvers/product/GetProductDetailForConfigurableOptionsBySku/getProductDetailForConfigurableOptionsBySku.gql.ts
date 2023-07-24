import { gql } from '@apollo/client';

import { ProductFormFragment } from '../../fragments/productFullDetailFragment.gql';

export const GET_PRODUCT_DETAIL_FOR_CONFIGURABLE_OPTIONS_BY_SKU = gql`
    query GetProductDetailForConfigurableOptionsBySku($sku: String) {
        products(filter: { sku: { eq: $sku } }) {
            items {
                id
                uid
                ...ProductFormFragment
            }
        }
    }
    ${ProductFormFragment}
`;

export default {
    getProductDetailForConfigurableOptionsBySkuQuery: GET_PRODUCT_DETAIL_FOR_CONFIGURABLE_OPTIONS_BY_SKU
};
