import { ClientProps } from 'src';
import { GetImageBySkuQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getImageBySku.gql';

const GetImageBySku = (clientProps: ClientProps) => (resolverProps: GetImageBySkuQueryVariables) => {
    const { mergeOperations, useAwaitQuery } = clientProps;

    const { getImageBySkuQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const fetchProductImage = useAwaitQuery(getImageBySkuQuery);

    return { fetchProductImage };
};

export default GetImageBySku;
