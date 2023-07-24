import { gql } from '@apollo/client';

export const GET_ROUTE_DATA = gql`
    query GetRouteData($url: String!) {
        route(url: $url) {
            relative_url
        }
    }
`;
export default {
    getRouteDataQuery: GET_ROUTE_DATA
};
