import { ClientProps } from 'src';
import { GetPriceSummaryQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getPriceSummary.gql'

const GetPriceSummary = (clientProps: ClientProps) => (resolverProps: GetPriceSummaryQueryVariables) => {
    const { mergeOperations, backendEdition, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getPriceSummaryQueryCE, getPriceSummaryQueryEE } = mergeOperations(DEFAULT_OPERATIONS);
    const getPriceSummaryQuery = backendEdition === 'EE' ? getPriceSummaryQueryEE : getPriceSummaryQueryCE;

    const { error, loading, data } = useQuery(getPriceSummaryQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        skip: !cartId,
        variables: {
            cartId
        }
    });

    return { data, loading, error };
};

export default GetPriceSummary;
