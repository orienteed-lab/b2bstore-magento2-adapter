import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './submitGuestPriceAlert.gql';

const SubmitGuestPriceAlert =
    (clientProps: ClientProps) => () => {
        const { useMutation, mergeOperations } = clientProps;

        const operations = mergeOperations(DEFAULT_OPERATIONS);
        const { submitGuestPriceAlertMutation } = operations;

        const [submitGuestPriceAlert] = useMutation(submitGuestPriceAlertMutation);

        return { submitGuestPriceAlert };
    };

export default SubmitGuestPriceAlert;
