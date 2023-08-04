import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './submitGuestPriceAlert.gql';

const SubmitGuestPriceAlert =
    (clientProps: ClientProps) => () => {
        const { useMutation, mergeOperations } = clientProps;

        const operations = mergeOperations(DEFAULT_OPERATIONS);
        const { submitGuestPriceAlertMutation } = operations;

        const [submiGuestPriceAlert] = useMutation(submitGuestPriceAlertMutation);

        return { submiGuestPriceAlert };
    };

export default SubmitGuestPriceAlert;
