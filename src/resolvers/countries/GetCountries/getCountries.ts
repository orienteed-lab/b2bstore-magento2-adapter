import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getCountries.gql';

const GetCountries = (clientProps: ClientProps) => () => {
    const { useQuery, mergeOperations } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getCountriesQuery } = operations;

    const { data, loading, error } = useQuery(getCountriesQuery);

    return { data, loading, error };
};

export default GetCountries;
