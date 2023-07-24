import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getCustomerOrdersForCsr.gql';

const GetCustomerOrdersForCsr = (clientProps: ClientProps) => () => {
    const { mergeOperations, useAwaitQuery } = clientProps;

    const { getCustomerOrdersForCsrQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const fetchCustomerOrders = useAwaitQuery(getCustomerOrdersForCsrQuery);

    return fetchCustomerOrders;
};

export default GetCustomerOrdersForCsr;
