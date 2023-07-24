import { ClientProps } from 'src';
import { GetBillingAddressQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getBillingAddress.gql'

interface GetBillingAddressProps extends GetBillingAddressQueryVariables {
    type: 'request';
}

const GetBillingAddress = (clientProps: ClientProps) => (resolverProps: GetBillingAddressProps) => {
    const { mergeOperations, useLazyQuery, useQuery } = clientProps;
    const { cartId, type } = resolverProps;

    const { getBillingAddressQuery } = mergeOperations(DEFAULT_OPERATIONS);

    if(type === 'request'){
        const [loadBillingAddressQuery, { data }] = useLazyQuery(getBillingAddressQuery, {
            skip: !cartId,
            variables: { cartId }
        });
    
        return { loadBillingAddressQuery, data };
    }

    const { data } = useQuery(getBillingAddressQuery, {
        skip: !cartId,
        variables: { cartId }
    });

    return { data };
};

export default GetBillingAddress;
