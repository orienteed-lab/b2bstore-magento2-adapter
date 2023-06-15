import { gql } from '@apollo/client';

export const CHANGE_CUSTOMER_PASSWORD = gql`
    mutation ChangeCustomerPassword($currentPassword: String!, $newPassword: String!) {
        changeCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword) {
            email
        }
    }
`;

export default {
    changeCustomerPasswordMutation: CHANGE_CUSTOMER_PASSWORD
};
