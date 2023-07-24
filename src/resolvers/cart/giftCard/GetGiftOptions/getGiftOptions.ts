import { ClientProps } from 'src';
import { GetGiftOptionsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getGiftOptions.gql'; 

const GetGiftOptions = (clientProps: ClientProps) => (resolverProps: GetGiftOptionsQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getGiftOptionsQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, error, loading } = useQuery(getGiftOptionsQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        skip: !cartId,
        variables: { cartId }
    });

    return { data, loading, error };
};

export default GetGiftOptions;
