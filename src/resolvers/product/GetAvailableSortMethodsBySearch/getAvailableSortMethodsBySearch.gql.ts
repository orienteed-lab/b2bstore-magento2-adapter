import { gql } from '@apollo/client';

export const GET_AVAILABLE_SORT_METHODS_BY_SEARCH = gql`
    query GetAvailableSortMethodsBySearch($search: String!) {
        products(search: $search) {
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
    getAvailableSortMethodsBySearchQuery: GET_AVAILABLE_SORT_METHODS_BY_SEARCH
};
