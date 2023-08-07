import { gql } from '@apollo/client';

import { subscriberOutput } from '../../fragments/subscriberOutputFragment.gql';

export const SUBMIT_GUEST_PRICE_ALERT = gql`
    mutation MpProductAlertNotifyPriceDrops($productSku: String!, $email: String!) {
        MpProductAlertNotifyPriceDrops(input: { productSku: $productSku, email: $email }) {
            ...subscriberOutput
        }
    }
    ${subscriberOutput}
`;

export default {
    submitGuestPriceAlertMutation: SUBMIT_GUEST_PRICE_ALERT
};
