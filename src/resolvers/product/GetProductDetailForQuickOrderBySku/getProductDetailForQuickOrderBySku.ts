import { ClientProps } from 'src';
import { GetProductDetailForQuickOrderBySkuQueryVariables } from '@schema';

import DEFAULT_OPERATIONS from './getProductDetailForQuickOrderBySku.gql'

const GetProductDetailForQuickOrderBySku =
    (clientProps: ClientProps) => (resolverProps: GetProductDetailForQuickOrderBySkuQueryVariables = {sku: ''}) => {
        const { mergeOperations, useAwaitQuery } = clientProps;

        const operations = mergeOperations(DEFAULT_OPERATIONS);
        const { getProductDetailForQuickOrderBySkuQuery } = operations;

        const getproduct = useAwaitQuery(getProductDetailForQuickOrderBySkuQuery);

        return { getproduct };
    };

export default GetProductDetailForQuickOrderBySku;
