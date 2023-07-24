import { ClientProps } from 'src';
import { GetItemCountQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getItemCount.gql'

const GetItemCount = (clientProps: ClientProps) => (resolverProps: GetItemCountQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getItemCountQuery } = mergeOperations(DEFAULT_OPERATIONS);
    const { data } = useQuery(getItemCountQuery, {
        fetchPolicy: 'cache-and-network',
        variables: {
            cartId
        },
        skip: !cartId,
        errorPolicy: 'all'
    });

    return { data };
};

export default GetItemCount;
