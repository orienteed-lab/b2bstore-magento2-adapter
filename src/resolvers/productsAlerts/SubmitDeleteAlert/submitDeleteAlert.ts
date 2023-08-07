import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './submitDeleteAlert.gql';

const SubmitDeleteAlert =
    (clientProps: ClientProps) => () => {
        const { useMutation, mergeOperations } = clientProps;

        const operations = mergeOperations(DEFAULT_OPERATIONS);
        const { submitDeleteAlertMutation } = operations;

        const [submitDeleteAlertAPI] = useMutation(submitDeleteAlertMutation);

        return { submitDeleteAlertAPI };
    };

export default SubmitDeleteAlert;
