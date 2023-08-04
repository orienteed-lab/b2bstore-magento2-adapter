import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './submitCustomerPriceAlert.gql';

const SubmitCustomerPriceAlert =
    (clientProps: ClientProps) =>
    () => {
        const { useMutation, mergeOperations } = clientProps;

        const operations = mergeOperations(DEFAULT_OPERATIONS);
        const { submitCustomerPriceAlertMutation } = operations;

        const [submitCustomerPriceAlert] = useMutation(submitCustomerPriceAlertMutation);

        return { submitCustomerPriceAlert };
    };

export default SubmitCustomerPriceAlert;
