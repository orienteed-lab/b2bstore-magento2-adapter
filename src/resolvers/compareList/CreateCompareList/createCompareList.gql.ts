import { gql } from '@apollo/client';

export const CREATE_COMPARE_LIST = gql`
    mutation CreateCompareList($products: [ID!]) {
        createCompareList(input: { products: $products }) {
            uid
            item_count
            attributes {
                code
                label
            }
            items {
                uid
                product {
                    sku
                    uid
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
    createCompareListMutation: CREATE_COMPARE_LIST
};
