import { ClientProps } from 'src';
import { DeleteProductsFromCompareListMutationVariables } from '@schema';

import DEFAULT_OPERATIONS from './deleteProductsFromCompareList.gql';

const DeleteProductsFromCompareList = (clientProps: ClientProps) => (resolverProps: DeleteProductsFromCompareListMutationVariables) => {
    const { mergeOperations, useMutation } = clientProps;

    const { deleteProductsFromCompareListMutation } = mergeOperations(DEFAULT_OPERATIONS);

    const [deleteProductsFromList] = useMutation(deleteProductsFromCompareListMutation);

    return { deleteProductsFromList };
};

export default DeleteProductsFromCompareList;
