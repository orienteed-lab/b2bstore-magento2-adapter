import { ClientProps } from 'src';
import { PlaceOrderMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './placeOrder.gql';

const PlaceOrder = (clientProps: ClientProps) => (resolverProps: PlaceOrderMutationVariables) => {
    const { useMutation, mergeOperations } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { placeOrderMutation } = operations;

    const [runPlaceOrder, { data, loading, error }] = useMutation(placeOrderMutation);

    return { runPlaceOrder, data, loading, error };
};

export default PlaceOrder;
