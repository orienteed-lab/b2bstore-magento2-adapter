import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getMegaMenu.gql';

const GetMegaMenu = (clientProps: ClientProps) => () => {
    const { useQuery, mergeOperations } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getMegaMenuQuery } = operations;

    const { data, loading, error, refetch } = useQuery(getMegaMenuQuery);

    return { data, loading, error, refetch };
};

export default GetMegaMenu;
