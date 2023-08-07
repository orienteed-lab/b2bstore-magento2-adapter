import { gql } from '@apollo/client';

import { subscriberOutput } from '../../fragments/subscriberOutputFragment.gql';

export const SUBMIT_CUSTOMER_PRICE_ALERT = gql`
    mutation MpProductAlertCustomerNotifyPriceDrops($productSku: String!) {
        MpProductAlertCustomerNotifyPriceDrops(input: { productSku: $productSku }) {
            ...subscriberOutput
        }
    }
    ${subscriberOutput}
`;

export default {
    submitCustomerPriceAlertMutation: SUBMIT_CUSTOMER_PRICE_ALERT
};
