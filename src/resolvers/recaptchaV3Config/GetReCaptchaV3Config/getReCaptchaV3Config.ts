import { ClientProps } from 'src';

import DEFAULT_OPERATIONS from './getReCaptchaV3Config.gql';

const GetReCaptchaV3Config = (clientProps: ClientProps) => () => {
    const { useQuery, mergeOperations } = clientProps;

    const operations = mergeOperations(DEFAULT_OPERATIONS);
    const { getReCaptchaV3ConfigQuery } = operations;

    const { data, loading, error } = useQuery(getReCaptchaV3ConfigQuery, {
        fetchPolicy: 'cache-and-network'
    });

    return { data, loading, error };
};

export default GetReCaptchaV3Config;
