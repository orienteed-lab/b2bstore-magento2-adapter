import { gql } from '@apollo/client';

export const GET_PRODUCT_FOR_QUICK_ORDER_BY_SKU = gql`
    query GetProductDetailForQuickOrderBySku($sku: String!) {
        products(search: $sku) {
            items {
                stock_status
                orParentSku
                id
                uid
                name
                sku
                price {
                    minimalPrice {
                        amount {
                            value
                            currency
                        }
                    }
                    regularPrice {
                        amount {
                            value
                            currency
                        }
                    }
                }
            }
            total_count
        }
    }
`;

export default {
    getProductDetailForQuickOrderBySkuQuery: GET_PRODUCT_FOR_QUICK_ORDER_BY_SKU
};
