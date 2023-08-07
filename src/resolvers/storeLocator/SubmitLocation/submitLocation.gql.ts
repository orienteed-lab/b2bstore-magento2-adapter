import { gql } from '@apollo/client';

export const SUBMIT_LOCATION = gql`
    mutation SaveLocationMpStoreLocator($locationId: String!, $timePickup: String!, $cartId: String) {
        SaveLocationMpStoreLocator(input: { locationId: $locationId, timePickup: $timePickup, cartId: $cartId })
    }
`;

export default {
    submitLocationMutation: SUBMIT_LOCATION
};
