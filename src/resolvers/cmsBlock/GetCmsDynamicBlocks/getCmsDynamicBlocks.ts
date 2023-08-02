import { ClientProps } from 'src';
import { GetCmsDynamicBlocksQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getCmsDynamicBlocks.gql';

const GetCmsDynamicBlocks = (clientProps: ClientProps) => (resolverProps: GetCmsDynamicBlocksQueryVariables) => {
    const { useQuery, mergeOperations } = clientProps;
    const { cartId, productId, type, locations, uids } = resolverProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getCmsDynamicBlocksQuery } = operations;

    const { client, data, loading, error, refetch } = useQuery(getCmsDynamicBlocksQuery, {
        variables: {
            cartId,
            productId,
            type,
            locations,
            uids
        },
        skip: !cartId
    });

    return { client, data, loading, error, refetch, getCmsDynamicBlocksQuery };
};

export default GetCmsDynamicBlocks;
