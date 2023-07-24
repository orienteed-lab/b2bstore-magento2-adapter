import { gql } from '@apollo/client';
import { CheckoutPageFragment } from '../../fragments/checkoutPageFragments.gql'

export const MERGE_CARTS = gql`
    mutation MergeCarts($sourceCartId: String!, $destinationCartId: String!) {
        mergeCarts(source_cart_id: $sourceCartId, destination_cart_id: $destinationCartId) {
            id
            items {
                uid
            }
            ...CheckoutPageFragment
        }
    }
    ${CheckoutPageFragment}
`;

export default {
    mergeCartsMutation: MERGE_CARTS
};
