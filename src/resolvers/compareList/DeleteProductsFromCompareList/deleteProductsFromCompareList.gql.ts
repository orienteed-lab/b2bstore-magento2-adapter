import { gql } from '@apollo/client';

export const DELETE_PRODUCTS_FROM_COMPARE_LIST = gql`
    mutation DeleteProductsFromCompareList($uid: ID!, $products: [ID]!) {
        removeProductsFromCompareList(input: { uid: $uid, products: $products }) {
            uid
            item_count
            attributes {
                code
                label
            }
            items {
                uid
                product {
                    uid
                    sku
                    name
                    description {
                        html
                    }
                }
            }
        }
    }
`;

export default {
    deleteProductsFromCompareListMutation: DELETE_PRODUCTS_FROM_COMPARE_LIST
};
