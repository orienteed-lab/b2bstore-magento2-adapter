import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getCustomerCompareList.gql';

const GetCustomerCompareList = (clientProps: ClientProps) => () => {
    const { mergeOperations, useLazyQuery } = clientProps;

    const { getCustomerCompareListQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const [getCustomerCompareList, { data, loading }] = useLazyQuery(getCustomerCompareListQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { getCustomerCompareList, data, loading };
};

export default GetCustomerCompareList;
