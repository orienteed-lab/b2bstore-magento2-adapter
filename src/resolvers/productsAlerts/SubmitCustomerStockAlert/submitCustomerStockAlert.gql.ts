import { gql } from '@apollo/client';

import { subscriberOutput } from '../../fragments/subscriberOutputFragment.gql';

export const SUBMIT_CUSTOMER_STOCK_ALERT = gql`
    mutation MpProductAlertCustomerNotifyInStock($productSku: String!) {
        MpProductAlertCustomerNotifyInStock(input: { productSku: $productSku }) {
            ...subscriberOutput
        }
    }
    ${subscriberOutput}
`;

export default {
    submitCustomerStockAlertMutation: SUBMIT_CUSTOMER_STOCK_ALERT
};
