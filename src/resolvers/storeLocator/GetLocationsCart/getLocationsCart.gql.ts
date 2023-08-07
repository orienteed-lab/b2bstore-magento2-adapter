import { gql } from '@apollo/client';

export const GET_LOCATIONS_CART = gql`
    query MpStoreLocatorPickupLocationList($cartId: String!) {
        MpStoreLocatorPickupLocationList(cartId: $cartId) {
            total_count
            items {
                location_id
                latitude
                longitude
                name
                images
                email
                city
                country
                street
                state_province
                time_zone
            }
        }
    }
`;

export default {
    getLocationsCartQuery: GET_LOCATIONS_CART
};
