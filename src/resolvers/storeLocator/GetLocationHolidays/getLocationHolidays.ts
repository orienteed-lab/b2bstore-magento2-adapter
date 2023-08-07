import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getLocationHolidays.gql';

interface GetLocationHolidaysProps {
    storeId: string;
}

const GetLocationHolidays =
    (clientProps: ClientProps) =>
    (resolverProps: GetLocationHolidaysProps = { storeId: '1' }) => {
        const { useQuery, mergeOperations } = clientProps;
        const { storeId } = resolverProps;

        const operations = mergeOperations(DEFAULT_OPERATIONS);
        const { getLocationHolidaysQuery } = operations;

        const { data, loading } = useQuery(getLocationHolidaysQuery, {
            variables: { storeId },
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        });

        return { data, loading };
    };

export default GetLocationHolidays;
