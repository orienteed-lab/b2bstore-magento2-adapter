import { ClientProps } from 'src';
import { GetCheckoutDetailsQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getCheckoutDetails.gql'

const GetCheckoutDetails = (clientProps: ClientProps) => (resolverProps: GetCheckoutDetailsQueryVariables) => {
    const { mergeOperations, useQuery } = clientProps;
    const { cartId } = resolverProps;

    const { getCheckoutDetailsQuery } = mergeOperations(DEFAULT_OPERATIONS);
    const { data, networkStatus } = useQuery(getCheckoutDetailsQuery, {
        /**
         * Skip fetching checkout details if the `cartId`
         * is a falsy value.
         */
        skip: !cartId,
        notifyOnNetworkStatusChange: true,
        variables: {
            cartId
        }
    })

    return { data, networkStatus };
};

export default GetCheckoutDetails;
