import { ClientProps } from 'src';
import { GetSimpleProductQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getSimpleProduct.gql';

const GetSimpleProduct = (clientProps: ClientProps) => (resolverProps: GetSimpleProductQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { sku } = resolverProps;

    const { getSimpleProductQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, loading, error } = useQuery(getSimpleProductQuery, {
        variables: { sku: sku }
    });

    return { data, loading, error };
};

export default GetSimpleProduct;
