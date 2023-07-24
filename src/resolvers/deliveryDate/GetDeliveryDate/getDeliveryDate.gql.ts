import { gql } from '@apollo/client';

export const GET_DELIVERY_DATE = gql`
    query GetDeliveryDate {
        deliveryTime {
            deliveryDateFormat
            deliveryDateOff
            deliveryDaysOff
            isEnabledDeliveryComment
            deliveryTime
            isEnabledHouseSecurityCode
        }
    }
`;

export default {
    getDeliveryDateQuery: GET_DELIVERY_DATE
};
