import { gql } from '@apollo/client';

import { WishlistItemFragment } from './wishlistItemFragments.gql';

export const WishlistPageFragmentCE = gql`
    fragment WishlistPageFragment on Wishlist {
        id
        items_count
        sharing_code
    }
`;

export const WishlistFragmentCE = gql`
    fragment WishlistFragment on Wishlist {
        id
        items_count
        sharing_code
        items_v2 {
            items {
                id
                ...WishlistItemFragment
            }
        }
    }
    ${WishlistItemFragment}
`;

export const WishlistPageFragmentEE = gql`
    fragment WishlistPageFragment on Wishlist {
        id
        items_count
        sharing_code
        name
        visibility
    }
`;

export const WishlistFragmentEE = gql`
    fragment WishlistFragment on Wishlist {
        id
        items_count
        sharing_code
        name
        visibility
        items_v2 {
            items {
                id
                ...WishlistItemFragment
            }
        }
    }
    ${WishlistItemFragment}
`;
