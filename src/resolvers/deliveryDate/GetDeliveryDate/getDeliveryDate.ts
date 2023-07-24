import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getDeliveryDate.gql';

const GetDeliveryDate = (clientProps: ClientProps) => () => {
    const { mergeOperations, useQuery } = clientProps;

    const { getDeliveryDateQuery } = mergeOperations(DEFAULT_OPERATIONS);

    const { data } = useQuery(getDeliveryDateQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });


    return { data };
};

export default GetDeliveryDate;
