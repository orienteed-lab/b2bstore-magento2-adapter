import { gql } from '@apollo/client';

export const subscriberOutput = gql`
    fragment subscriberOutput on MpSubscriberOutput {
        customer_email
        customer_group
        customer_id
        last_send_date
        old_price
        product_id
        send_count
        status
        store_id
        subscribe_created_at
        subscribe_updated_at
        subscriber_id
        type
        website_id
        __typename
    }
`;