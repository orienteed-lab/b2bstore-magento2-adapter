import { ClientProps } from 'src';
import { GetParentSkuBySkuQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getParentSkuBySku.gql'

const GetParentSkuBySku = (clientProps: ClientProps) => (resolverProps: GetParentSkuBySkuQueryVariables = {sku: ''}) => {
    const { mergeOperations, useAwaitQuery } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getParentSkuBySkuQuery } = operations;

    const getParentSku = useAwaitQuery(getParentSkuBySkuQuery);

    return { getParentSku };
};

export default GetParentSkuBySku;
