import { gql } from '@apollo/client';

export const GET_CMS_DYNAMIC_BLOCKS = gql`
    query GetCmsDynamicBlocks(
        $cartId: String
        $productId: ID
        $type: DynamicBlockTypeEnum!
        $locations: [DynamicBlockLocationEnum]
        $uids: [ID]!
    ) {
        dynamicBlocks(input: { cart_id: $cartId, product_uid: $productId, dynamic_block_uids: $uids, locations: $locations, type: $type }) {
            items {
                content {
                    html
                }
                uid
            }
            salesRulesData @client
        }
    }
`;

export default {
    getCmsDynamicBlocksQuery: GET_CMS_DYNAMIC_BLOCKS
};
