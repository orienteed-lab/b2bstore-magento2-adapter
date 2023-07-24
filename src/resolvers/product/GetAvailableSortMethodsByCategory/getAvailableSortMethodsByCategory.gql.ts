import { gql } from '@apollo/client';

export const GET_AVAILABLE_SORT_METHODS_BY_CATEGORY = gql`
    query GetAvailableSortMethodsByCategory($categoryIdFilter: FilterEqualTypeInput!) {
        products(filter: { category_uid: $categoryIdFilter }) {
            sort_fields {
                options {
                    label
                    value
                }
            }
        }
    }
`;

export default {
    getAvailableSortMethodsByCategoryQuery: GET_AVAILABLE_SORT_METHODS_BY_CATEGORY
};
