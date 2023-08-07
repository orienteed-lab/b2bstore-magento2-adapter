import { gql } from '@apollo/client';

export const GET_LOCATIONS_HOLIDAYS = gql`
    query MpStoreLocatorConfig($storeId: String!) {
        MpStoreLocatorConfig(storeId: $storeId) {
            locationsData {
                name
                holidayData {
                    from
                    to
                }
            }
        }
    }
`;

export default {
    getLocationHolidaysQuery: GET_LOCATIONS_HOLIDAYS
};
