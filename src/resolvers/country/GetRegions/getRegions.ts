import { ClientProps } from 'src';
import { GetRegionsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getRegions.gql';

const GetRegions = (clientProps: ClientProps) => (resolverProps: GetRegionsQueryVariables) => {
    const { useQuery, mergeOperations } = clientProps;
    const { countryCode } = resolverProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getRegionsQuery } = operations;

    const { data, loading, error } = useQuery(getRegionsQuery, {
        variables: { countryCode },
        skip: !countryCode
    });

    return { data, loading, error };
};

export default GetRegions;
