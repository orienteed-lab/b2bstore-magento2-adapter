import { gql } from '@apollo/client';

export const GET_CUSTOMER_SUBSCRIPTION = gql`
    query GetCustomerSubscription {
        customer {
            is_subscribed
        }
    }
`;

export default {
    getCustomerSubscriptionQuery: GET_CUSTOMER_SUBSCRIPTION
};
