import { ClientProps } from 'src';
import { GetRouteDataQueryVariables } from '@schema';
import DEFAULT_OPERATIONS from './getRouteData.gql';

const GetRouteData = (clientProps: ClientProps) => (resolverProps: GetRouteDataQueryVariables) => {
    const { useAwaitQuery, mergeOperations } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getRouteDataQuery } = operations;

    const fetchRouteData = useAwaitQuery(getRouteDataQuery);

    return { fetchRouteData };
};

export default GetRouteData;
