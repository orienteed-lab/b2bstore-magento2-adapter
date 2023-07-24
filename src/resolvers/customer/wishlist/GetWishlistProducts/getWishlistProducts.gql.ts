import { gql } from '@apollo/client';

import { WishlistItemFragment } from '../../../fragments/wishlistItemFragments.gql';

export const GET_WISHLIST_PRODUCTS = gql`
    query GetWishlistProducts($id: ID!, $currentPage: Int) {
        customer {
            wishlist_v2(id: $id) {
                id
                items_v2(currentPage: $currentPage) {
                    items {
                        id
                        ...WishlistItemFragment
                    }
                }
            }
        }
    }
    ${WishlistItemFragment}
`;

export default {
    getWishlistProductsQuery: GET_WISHLIST_PRODUCTS
};
