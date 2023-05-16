import { ClientProps } from 'src';
import { GetSummaryDataQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getSummaryData.gql';

const GetSummaryData = (clientProps: ClientProps) => (resolverProps: GetSummaryDataQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getSummaryDataQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data, loading } = useQuery(getSummaryDataQuery, {
        skip: !cartId,
        variables: { cartId }
    });

    return { data, loading };
};

export default GetSummaryData;
