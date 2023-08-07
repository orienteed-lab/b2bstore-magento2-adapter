import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './submitGuestStockAlert.gql';

const SubmitGuestStockAlert =
    (clientProps: ClientProps) => () => {
        const { useMutation, mergeOperations } = clientProps;

        const operations = mergeOperations(DEFAULT_OPERATIONS);
        const { submitGuestStockAlertMutation } = operations;

        const [submitGuestStockAlert] = useMutation(submitGuestStockAlertMutation);

        return { submitGuestStockAlert };
    };

export default SubmitGuestStockAlert;
