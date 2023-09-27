import { gql } from '@apollo/client';

export const CREATE_ACCOUNT = gql`
    mutation CreateAccount(
        $email: String!
        $firstname: String!
        $password: String!
        $is_subscribed: Boolean!
    ) {
        createCustomer(
            input: {
                email: $email
                firstname: $firstname
                password: $password
                is_subscribed: $is_subscribed
            }
        ) {
            customer {
                email
            }
        }
    }
`;

export default {
    createAccountMutation: CREATE_ACCOUNT
};
