import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './submitLocation.gql';

const SubmitLocation = (clientProps: ClientProps) => () => {
    const { useMutation, mergeOperations } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { submitLocationMutation } = operations;

    const [handleSubmitLocation, { loading }] = useMutation(submitLocationMutation);

    return { handleSubmitLocation, loading };
};

export default SubmitLocation;
