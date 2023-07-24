import { ClientProps } from 'src';
import { SetOrderAttributesMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './setOrderAttributes.gql';

const SetOrderAttributes = (clientProps: ClientProps) => (resolverProps: SetOrderAttributesMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { setOrderAttributesMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [customAttributeQuoteSave] = useMutation(setOrderAttributesMutation);

    return { customAttributeQuoteSave };
};

export default SetOrderAttributes;
