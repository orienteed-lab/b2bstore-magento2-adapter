import { gql } from '@apollo/client';

import { AccountInformationPageFragment } from '../../fragments/accountInformationPageFragment.gql';

export const SET_CUSTOMER_INFORMATION = gql`
    mutation SetCustomerInformation($customerInput: CustomerInput!) {
        updateCustomer(input: $customerInput) {
            customer {
                ...AccountInformationPageFragment
            }
        }
    }
    ${AccountInformationPageFragment}
`;

export default {
    setCustomerInformationMutation: SET_CUSTOMER_INFORMATION
};
