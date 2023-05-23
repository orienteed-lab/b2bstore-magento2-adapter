import { gql } from '@apollo/client';

import { ShippingInformationFragment } from '../../../fragments/shippingInformationFragments.gql';

export const GET_SHIPPING_INFORMATION = gql`
    query GetShippingInformation($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...ShippingInformationFragment
        }
    }
    ${ShippingInformationFragment}
`;

export default {
    getShippingInformationQuery: GET_SHIPPING_INFORMATION
};
