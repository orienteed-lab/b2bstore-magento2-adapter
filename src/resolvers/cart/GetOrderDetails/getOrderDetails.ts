import { ClientProps } from 'src';
import { GetOrderDetailsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getOrderDetails.gql'

const GetOrderDetails = (clientProps: ClientProps) => (resolverProps: GetOrderDetailsQueryVariables = {cartId: ''}) => {
    const { mergeOperations, useLazyQuery } = clientProps;
    
    const { getOrderDetailsQuery } = mergeOperations(DEFAULT_OPERATIONS);
    const [getOrderDetails, { data, loading }] = useLazyQuery(
        getOrderDetailsQuery,
        {
            // We use this query to fetch details _just_ before submission, so we
            // want to make sure it is fresh. We also don't want to cache this data
            // because it may contain PII.
            fetchPolicy: 'no-cache'
        }
    );

    return { getOrderDetails, data, loading };
};

export default GetOrderDetails;
