import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './submitCustomerStockAlert.gql';

const SubmitCustomerStockAlert =
    (clientProps: ClientProps) => () => {
        const { useMutation, mergeOperations } = clientProps;

        const operations = mergeOperations(DEFAULT_OPERATIONS);
        const { submitCustomerStockAlertMutation } = operations;

        const [submitCustomerStockAlert] = useMutation(submitCustomerStockAlertMutation);

        return { submitCustomerStockAlert };
    };

export default SubmitCustomerStockAlert;
