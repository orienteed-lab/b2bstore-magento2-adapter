import { ClientProps } from 'src';
import { SetDeliveryTimeMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './setDeliveryTime.gql';

const SetDeliveryTime = (clientProps: ClientProps) => (resolverProps: SetDeliveryTimeMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { setDeliveryTimeMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [deliverytime] = useMutation(setDeliveryTimeMutation);

    return { deliverytime };
};

export default SetDeliveryTime;
