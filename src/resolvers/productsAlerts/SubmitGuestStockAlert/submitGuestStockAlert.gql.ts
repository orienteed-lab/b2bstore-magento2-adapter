import { gql } from '@apollo/client';

import { subscriberOutput } from '../../fragments/subscriberOutputFragment.gql';

export const SUBMIT_GUEST_STOCK_ALERT = gql`
    mutation MpProductAlertNotifyInStock($productSku: String!, $email: String!) {
        MpProductAlertNotifyInStock(input: { productSku: $productSku, email: $email }) {
            ...subscriberOutput
        }
    }
    ${subscriberOutput}
`;

export default {
    submitGuestStockAlertMutation: SUBMIT_GUEST_STOCK_ALERT
};
