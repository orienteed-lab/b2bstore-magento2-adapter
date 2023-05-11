import { ClientProps } from 'src';
import { GetProductListingQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductListing.gql'

const GetProductListing = (clientProps: ClientProps) => (resolverProps: GetProductListingQueryVariables = {cartId:''}) => {
    const { mergeOperations, useLazyQuery } = clientProps;
    
    const { getProductListingQuery } = mergeOperations(DEFAULT_OPERATIONS);
    const [fetchProductListing, { called, data, error, loading }] = useLazyQuery(getProductListingQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { fetchProductListing, data, loading, error, called };
};

export default GetProductListing;
