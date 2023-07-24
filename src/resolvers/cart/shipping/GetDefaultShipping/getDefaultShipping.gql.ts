import { gql } from '@apollo/client';

export const GET_DEFAULT_SHIPPING = gql`
    query GetDefaultShipping {
        customer {
            default_shipping
        }
    }
`;

export default {
    getDefaultShippingQuery: GET_DEFAULT_SHIPPING
};
