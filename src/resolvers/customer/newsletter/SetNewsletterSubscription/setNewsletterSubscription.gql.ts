import { gql } from '@apollo/client';

export const SET_NEWSLETTER_SUBSCRIPTION = gql`
    mutation SetNewsletterSubscription($isSubscribed: Boolean!) {
        updateCustomer(input: { is_subscribed: $isSubscribed }) {
            customer {
                is_subscribed
            }
        }
    }
`;

export default {
    setNewsletterSubscriptionMutation: SET_NEWSLETTER_SUBSCRIPTION
};
