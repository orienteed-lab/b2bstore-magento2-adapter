import { gql } from '@apollo/client';

export const ADD_PRODUCT_TO_WISHLIST = gql`
    mutation AddProductToWishlist($wishlistId: ID!, $itemOptions: WishlistItemInput!) {
        addProductsToWishlist(wishlistId: $wishlistId, wishlistItems: [$itemOptions]) {
            user_errors {
                code
                message
            }
        }
    }
`;

export default {
    addProductToWishlistMutation: ADD_PRODUCT_TO_WISHLIST
};
