import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getCustomerAlerts.gql';

interface GetCustomerAlertsProps {
    priceCurrentPage: any;
    stockCurrentPage: any;
}

const GetCustomerAlerts =
    (clientProps: ClientProps) =>
    (resolverProps: GetCustomerAlertsProps) => {
        const { useQuery, mergeOperations } = clientProps;
        const { priceCurrentPage, stockCurrentPage } = resolverProps;

        const operations = mergeOperations(DEFAULT_OPERATIONS);
        const { getCustomerAlertsQuery } = operations;

        const { loading, data, refetch } = useQuery(getCustomerAlertsQuery, {
            fetchPolicy: 'no-cache',
            variables: { priceCurrentPage, stockCurrentPage }
        });

        return { data, loading, refetch };
    };

export default GetCustomerAlerts;
