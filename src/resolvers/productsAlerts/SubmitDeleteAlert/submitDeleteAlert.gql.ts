import { gql } from '@apollo/client';

export const SUBMIT_DELETE_ALERT = gql`
    mutation MpProductAlertSubscriberDelete($id: Int!) {
        MpProductAlertSubscriberDelete(input: { id: $id })
    }
`;

export default {
    submitDeleteAlertMutation: SUBMIT_DELETE_ALERT
};
