import { gql } from '@apollo/client';
import { PriceSummaryFragmentCE, PriceSummaryFragmentEE } from '../../fragments/priceSummaryFragments.gql';

export const GET_PRICE_SUMMARY_CE = gql`
    query GetPriceSummary($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...PriceSummaryFragment
        }
    }
    ${PriceSummaryFragmentCE}
`;

export const GET_PRICE_SUMMARY_EE = gql`
    query GetPriceSummary($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            ...PriceSummaryFragment
        }
    }
    ${PriceSummaryFragmentEE}
`;

export default {
    getPriceSummaryQueryCE: GET_PRICE_SUMMARY_CE,
    getPriceSummaryQueryEE: GET_PRICE_SUMMARY_EE
};
