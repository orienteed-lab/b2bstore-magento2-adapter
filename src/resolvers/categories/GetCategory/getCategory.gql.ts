import { gql } from '@apollo/client';

import { CategoryFragment, ProductsFragment } from './categoryFragments.gql';

export const GET_CATEGORY = gql`
    query GetCategory(
        $id: String!
        $pageSize: Int!
        $currentPage: Int!
        $filters: ProductAttributeFilterInput!
        $sort: ProductAttributeSortInput
    ) {
        categories(filters: { category_uid: { in: [$id] } }) {
            items {
                uid
                ...CategoryFragment
            }
        }
        products(pageSize: $pageSize, currentPage: $currentPage, filter: $filters, sort: $sort) {
            ...ProductsFragment
        }
    }
    ${CategoryFragment}
    ${ProductsFragment}
`;
export default {
    getCategoryQuery: GET_CATEGORY
};
