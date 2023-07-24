import { ClientProps } from 'src';
import { MergeCartsMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './mergeCarts.gql';

const MergeCarts = (clientProps: ClientProps) => (resolverProps: MergeCartsMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { mergeCartsMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [mergeCarts] = useMutation(mergeCartsMutation);

    return { mergeCarts };
};

export default MergeCarts;
