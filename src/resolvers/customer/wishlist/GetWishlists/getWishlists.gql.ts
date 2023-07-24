import { gql } from '@apollo/client';

import { WishlistPageFragmentCE, WishlistPageFragmentEE } from '../../../fragments/wishlistFragment.gql';

export const GET_WISHLISTS_CE = gql`
    query GetWishlists {
        customer {
            wishlists {
                ...WishlistPageFragment
            }
        }
    }
    ${WishlistPageFragmentCE}
`;

export const GET_WISHLISTS_EE = gql`
    query GetWishlists {
        customer {
            wishlists {
                ...WishlistPageFragment
            }
        }
    }
    ${WishlistPageFragmentEE}
`;

export default {
    getWishlistsQueryCE: GET_WISHLISTS_CE,
    getWishlistsQueryEE: GET_WISHLISTS_EE
};
