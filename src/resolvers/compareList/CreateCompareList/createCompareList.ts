import { ClientProps } from 'src';
import { CreateCompareListMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './createCompareList.gql';

const CreateCompareList = (clientProps: ClientProps) => (resolverProps: CreateCompareListMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { createCompareListMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [createCompareList] = useMutation(createCompareListMutation);

    return { createCompareList };
};

export default CreateCompareList;
