import { gql } from '@apollo/client';

import { WishlistPageFragmentCE, WishlistPageFragmentEE } from '../../../fragments/wishlistFragment.gql';

export const REMOVE_PRODUCTS_FROM_WISHLIST_CE = gql`
    mutation RemoveProductsFromWishlist($wishlistId: ID!, $wishlistItemsId: [ID!]!) {
        removeProductsFromWishlist(wishlistId: $wishlistId, wishlistItemsIds: $wishlistItemsId) {
            wishlist {
                id
                ...WishlistPageFragment
            }
        }
    }
    ${WishlistPageFragmentCE}
`;

export const REMOVE_PRODUCTS_FROM_WISHLIST_EE = gql`
    mutation RemoveProductsFromWishlist($wishlistId: ID!, $wishlistItemsId: [ID!]!) {
        removeProductsFromWishlist(wishlistId: $wishlistId, wishlistItemsIds: $wishlistItemsId) {
            wishlist {
                id
                ...WishlistPageFragment
            }
        }
    }
    ${WishlistPageFragmentEE}
`;

export default {
    removeProductsFromWishlistMutationCE: REMOVE_PRODUCTS_FROM_WISHLIST_CE,
    removeProductsFromWishlistMutationEE: REMOVE_PRODUCTS_FROM_WISHLIST_EE
};
