import { ClientProps } from 'src';
import { SetShippingMethodMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './setShippingMethod.gql';

interface SetShippingMethodProps extends SetShippingMethodMutationVariables {
    onSuccess: any;
    hasOnSuccess: boolean;
}

const SetShippingMethod = (clientProps: ClientProps) => (resolverProps: SetShippingMethodProps) => {
    const { backendEdition, mergeOperations, useMutation } = clientProps;
    const { onSuccess, hasOnSuccess } = resolverProps;

    const { setShippingMethodMutationCE, setShippingMethodMutationEE } = mergeOperations(DEFAULT_OPERATIONS);
    const setShippingMethodMutation = backendEdition === 'EE' ? setShippingMethodMutationEE : setShippingMethodMutationCE;

    if (hasOnSuccess) {
        const [setShippingMethodCall, { error, loading }] = useMutation(setShippingMethodMutation, {
            onCompleted: () => {
                onSuccess();
            }
        });

        return { setShippingMethodCall, error, loading };
    } else {
        const [setShippingMethod, { called, loading }] = useMutation(setShippingMethodMutation);

        return { setShippingMethod, called, loading };
    }
};

export default SetShippingMethod;
