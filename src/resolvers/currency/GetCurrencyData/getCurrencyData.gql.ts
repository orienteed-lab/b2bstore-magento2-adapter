// @ts-nocheck

import { gql } from '@apollo/client';
import BrowserPersistence from '../../../util/simplePersistence';

const storage = new BrowserPersistence();

/**
 * Custom type policies necessary for the currency query.
 */
export const CUSTOM_TYPES = {
    Currency: {
        fields: {
            /**
             * @client field policies must be defined if queried along server
             * props or the entire query will return null.
             */
            current_currency_code: {
                read(_, { readField }) {
                    return storage.getItem('store_view_currency') || readField('default_display_currency_code');
                }
            }
        }
    }
};

export const GET_CURRENCY_DATA = gql`
    query GetCurrencyData {
        currency {
            current_currency_code @client
            default_display_currency_code
            available_currency_codes
        }
    }
`;

export default {
    getCurrencyDataQuery: GET_CURRENCY_DATA
};
