import { gql } from '@apollo/client';

export const GET_PRODUCT_FILTERS_BY_SEARCH = gql`
    query GetProductFiltersBySearch($search: String!) {
        products(search: $search) {
            aggregations {
                label
                count
                attribute_code
                options {
                    label
                    value
                }
                position
            }
        }
    }
`;

export default {
    getProductFiltersBySearchQuery: GET_PRODUCT_FILTERS_BY_SEARCH
};
