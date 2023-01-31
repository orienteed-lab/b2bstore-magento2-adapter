export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type AddAllItemsFromCartToMpQuoteOutput = {
    __typename?: 'AddAllItemsFromCartToMpQuoteOutput';
    quote: Quote;
};

export type AddBundleProductsToCartInput = {
    cart_id: Scalars['String'];
    cart_items: Array<InputMaybe<BundleProductCartItemInput>>;
};

export type AddBundleProductsToCartOutput = {
    __typename?: 'AddBundleProductsToCartOutput';
    cart: Cart;
};

export type AddBundleProductsToQuoteInput = {
    cart_items: Array<InputMaybe<BundleProductCartItemInput>>;
};

export type AddBundleProductsToQuoteOutput = {
    __typename?: 'AddBundleProductsToQuoteOutput';
    quote: Quote;
};

export type AddConfigurableProductsToCartInput = {
    cart_id: Scalars['String'];
    cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>;
};

export type AddConfigurableProductsToCartOutput = {
    __typename?: 'AddConfigurableProductsToCartOutput';
    cart: Cart;
};

export type AddConfigurableProductsToQuoteInput = {
    cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>;
};

export type AddConfigurableProductsToQuoteOutput = {
    __typename?: 'AddConfigurableProductsToQuoteOutput';
    quote: Quote;
};

export type AddDownloadableProductsToCartInput = {
    cart_id: Scalars['String'];
    cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>;
};

export type AddDownloadableProductsToCartOutput = {
    __typename?: 'AddDownloadableProductsToCartOutput';
    cart: Cart;
};

export type AddDownloadableProductsToQuoteInput = {
    cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>;
};

export type AddDownloadableProductsToQuoteOutput = {
    __typename?: 'AddDownloadableProductsToQuoteOutput';
    quote: Quote;
};

export type AddGiftRegistryItemInput = {
    entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
    note?: InputMaybe<Scalars['String']>;
    parent_sku?: InputMaybe<Scalars['String']>;
    quantity: Scalars['Float'];
    selected_options?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    sku: Scalars['String'];
};

export type AddGiftRegistryRegistrantInput = {
    dynamic_attributes?: InputMaybe<
        Array<InputMaybe<GiftRegistryDynamicAttributeInput>>
    >;
    email: Scalars['String'];
    firstname: Scalars['String'];
    lastname: Scalars['String'];
};

export type AddGiftRegistryRegistrantsOutput = {
    __typename?: 'AddGiftRegistryRegistrantsOutput';
    gift_registry?: Maybe<GiftRegistry>;
};

export type AddItemFromCartToMpQuoteOutput = {
    __typename?: 'AddItemFromCartToMpQuoteOutput';
    quote: Quote;
};

export type AddItemsBySkuToMpQuoteInput = {
    qty?: InputMaybe<Scalars['Int']>;
    skus: Array<InputMaybe<Scalars['String']>>;
};

export type AddItemsBySkuToMpQuoteOutput = {
    __typename?: 'AddItemsBySkuToMpQuoteOutput';
    quote: Quote;
};

export type AddMpQuoteToCartOutput = {
    __typename?: 'AddMpQuoteToCartOutput';
    cart: Cart;
};

export type AddProductsToCartOutput = {
    __typename?: 'AddProductsToCartOutput';
    cart: Cart;
    user_errors: Array<Maybe<CartUserInputError>>;
};

export type AddProductsToCompareListInput = {
    products: Array<InputMaybe<Scalars['ID']>>;
    uid: Scalars['ID'];
};

export type AddProductsToWishlistOutput = {
    __typename?: 'AddProductsToWishlistOutput';
    user_errors: Array<Maybe<WishListUserInputError>>;
    wishlist: Wishlist;
};

export type AddReturnCommentInput = {
    comment_text: Scalars['String'];
    return_uid: Scalars['ID'];
};

export type AddReturnCommentOutput = {
    __typename?: 'AddReturnCommentOutput';
    return?: Maybe<Return>;
};

export type AddReturnTrackingInput = {
    carrier_uid: Scalars['ID'];
    return_uid: Scalars['ID'];
    tracking_number: Scalars['String'];
};

export type AddReturnTrackingOutput = {
    __typename?: 'AddReturnTrackingOutput';
    return?: Maybe<Return>;
    return_shipping_tracking?: Maybe<ReturnShippingTracking>;
};

export type AddSimpleProductsToCartInput = {
    cart_id: Scalars['String'];
    cart_items: Array<InputMaybe<SimpleProductCartItemInput>>;
};

export type AddSimpleProductsToCartOutput = {
    __typename?: 'AddSimpleProductsToCartOutput';
    cart: Cart;
};

export type AddSimpleProductsToQuoteInput = {
    cart_items: Array<InputMaybe<SimpleProductCartItemInput>>;
};

export type AddSimpleProductsToQuoteOutput = {
    __typename?: 'AddSimpleProductsToQuoteOutput';
    quote: Quote;
};

export type AddVirtualProductsToCartInput = {
    cart_id: Scalars['String'];
    cart_items: Array<InputMaybe<VirtualProductCartItemInput>>;
};

export type AddVirtualProductsToCartOutput = {
    __typename?: 'AddVirtualProductsToCartOutput';
    cart: Cart;
};

export type AddVirtualProductsToQuoteInput = {
    cart_items: Array<InputMaybe<VirtualProductCartItemInput>>;
};

export type AddVirtualProductsToQuoteOutput = {
    __typename?: 'AddVirtualProductsToQuoteOutput';
    quote: Quote;
};

export type AddWishlistItemsToCartOutput = {
    __typename?: 'AddWishlistItemsToCartOutput';
    add_wishlist_items_to_cart_user_errors: Array<
        Maybe<WishlistCartUserInputError>
    >;
    status: Scalars['Boolean'];
    wishlist: Wishlist;
};

export type Aggregation = {
    __typename?: 'Aggregation';
    attribute_code: Scalars['String'];
    count?: Maybe<Scalars['Int']>;
    label?: Maybe<Scalars['String']>;
    options?: Maybe<Array<Maybe<AggregationOption>>>;
    position?: Maybe<Scalars['Int']>;
};

export type AggregationOption = AggregationOptionInterface & {
    __typename?: 'AggregationOption';
    count?: Maybe<Scalars['Int']>;
    label?: Maybe<Scalars['String']>;
    value: Scalars['String'];
};

export type AggregationOptionInterface = {
    count?: Maybe<Scalars['Int']>;
    label?: Maybe<Scalars['String']>;
    value: Scalars['String'];
};

export type AggregationsCategoryFilterInput = {
    includeDirectChildrenOnly?: InputMaybe<Scalars['Boolean']>;
};

export type AggregationsFilterInput = {
    category?: InputMaybe<AggregationsCategoryFilterInput>;
};

export type AppliedCoupon = {
    __typename?: 'AppliedCoupon';
    code: Scalars['String'];
};

export type AppliedGiftCard = {
    __typename?: 'AppliedGiftCard';
    applied_balance?: Maybe<Money>;
    code?: Maybe<Scalars['String']>;
    current_balance?: Maybe<Money>;
    expiration_date?: Maybe<Scalars['String']>;
};

export type AppliedStoreCredit = {
    __typename?: 'AppliedStoreCredit';
    applied_balance?: Maybe<Money>;
    current_balance?: Maybe<Money>;
    enabled?: Maybe<Scalars['Boolean']>;
};

export type ApplyCouponToCartInput = {
    cart_id: Scalars['String'];
    coupon_code: Scalars['String'];
};

export type ApplyCouponToCartOutput = {
    __typename?: 'ApplyCouponToCartOutput';
    cart: Cart;
};

export type ApplyGiftCardToCartInput = {
    cart_id: Scalars['String'];
    gift_card_code: Scalars['String'];
};

export type ApplyGiftCardToCartOutput = {
    __typename?: 'ApplyGiftCardToCartOutput';
    cart: Cart;
};

export type ApplyRewardPointsToCartOutput = {
    __typename?: 'ApplyRewardPointsToCartOutput';
    cart: Cart;
};

export type ApplyStoreCreditToCartInput = {
    cart_id: Scalars['String'];
};

export type ApplyStoreCreditToCartOutput = {
    __typename?: 'ApplyStoreCreditToCartOutput';
    cart: Cart;
};

export type AreaInput = {
    radius: Scalars['Int'];
    search_term: Scalars['String'];
};

export type AssignCompareListToCustomerOutput = {
    __typename?: 'AssignCompareListToCustomerOutput';
    compare_list?: Maybe<CompareList>;
    result: Scalars['Boolean'];
};

export type Attribute = {
    __typename?: 'Attribute';
    attribute_code?: Maybe<Scalars['String']>;
    attribute_options?: Maybe<Array<Maybe<AttributeOption>>>;
    attribute_type?: Maybe<Scalars['String']>;
    entity_type?: Maybe<Scalars['String']>;
    input_type?: Maybe<Scalars['String']>;
    storefront_properties?: Maybe<StorefrontProperties>;
};

export enum AttributeEntityTypeEnum {
    /** @deprecated  */
    Product = 'PRODUCT'
}

export type AttributeInput = {
    attribute_code?: InputMaybe<Scalars['String']>;
    entity_type?: InputMaybe<Scalars['String']>;
};

export type AttributeMetadataInterface = {
    attribute_labels?: Maybe<Array<Maybe<StoreLabels>>>;
    code?: Maybe<Scalars['String']>;
    data_type?: Maybe<ObjectDataTypeEnum>;
    entity_type?: Maybe<AttributeEntityTypeEnum>;
    is_system?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Scalars['String']>;
    sort_order?: Maybe<Scalars['Int']>;
    ui_input?: Maybe<UiInputTypeInterface>;
    uid?: Maybe<Scalars['ID']>;
};

export type AttributeOption = AttributeOptionInterface & {
    __typename?: 'AttributeOption';
    is_default?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
    value?: Maybe<Scalars['String']>;
};

export type AttributeOptionInterface = {
    is_default?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};

export type AttributeOptions = AttributeOptionsInterface & {
    __typename?: 'AttributeOptions';
    attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
};

export type AttributeOptionsInterface = {
    attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
};

export type AttributesMetadata = {
    __typename?: 'AttributesMetadata';
    items?: Maybe<Array<Maybe<AttributeMetadataInterface>>>;
};

export type AvailablePaymentMethod = {
    __typename?: 'AvailablePaymentMethod';
    code: Scalars['String'];
    is_deferred: Scalars['Boolean'];
    title: Scalars['String'];
};

export type AvailableShippingMethod = {
    __typename?: 'AvailableShippingMethod';
    amount: Money;
    available: Scalars['Boolean'];
    /** @deprecated The field should not be used on the storefront. */
    base_amount?: Maybe<Money>;
    carrier_code: Scalars['String'];
    carrier_title: Scalars['String'];
    error_message?: Maybe<Scalars['String']>;
    method_code?: Maybe<Scalars['String']>;
    method_title?: Maybe<Scalars['String']>;
    price_excl_tax: Money;
    price_incl_tax: Money;
};

export enum BatchMutationStatus {
    /** @deprecated  */
    Failure = 'FAILURE',
    /** @deprecated  */
    MixedResults = 'MIXED_RESULTS',
    /** @deprecated  */
    Success = 'SUCCESS'
}

export type BestsellersProductOutput = {
    __typename?: 'BestsellersProductOutput';
    currency?: Maybe<Scalars['String']>;
    period?: Maybe<Scalars['String']>;
    product_id?: Maybe<Scalars['String']>;
    product_image_url?: Maybe<Scalars['String']>;
    product_name?: Maybe<Scalars['String']>;
    product_price?: Maybe<Scalars['String']>;
    product_sku?: Maybe<Scalars['String']>;
    product_url?: Maybe<Scalars['String']>;
    qty_ordered?: Maybe<Scalars['Int']>;
};

export type BillingAddressInput = {
    address?: InputMaybe<CartAddressInput>;
    customer_address_id?: InputMaybe<Scalars['Int']>;
    same_as_shipping?: InputMaybe<Scalars['Boolean']>;
    use_for_shipping?: InputMaybe<Scalars['Boolean']>;
};

export type BillingCartAddress = CartAddressInterface & {
    __typename?: 'BillingCartAddress';
    city: Scalars['String'];
    company?: Maybe<Scalars['String']>;
    country: CartAddressCountry;
    /** @deprecated The field is used only in shipping address. */
    customer_notes?: Maybe<Scalars['String']>;
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    postcode?: Maybe<Scalars['String']>;
    region?: Maybe<CartAddressRegion>;
    street: Array<Maybe<Scalars['String']>>;
    telephone?: Maybe<Scalars['String']>;
    uid: Scalars['String'];
    vat_id?: Maybe<Scalars['String']>;
};

export type BraintreeCcVaultInput = {
    device_data?: InputMaybe<Scalars['String']>;
    public_hash: Scalars['String'];
};

export type BraintreeInput = {
    device_data?: InputMaybe<Scalars['String']>;
    is_active_payment_token_enabler: Scalars['Boolean'];
    payment_method_nonce: Scalars['String'];
};

export type Breadcrumb = {
    __typename?: 'Breadcrumb';
    /** @deprecated Use `category_uid` instead. */
    category_id?: Maybe<Scalars['Int']>;
    category_level?: Maybe<Scalars['Int']>;
    category_name?: Maybe<Scalars['String']>;
    category_uid: Scalars['ID'];
    category_url_key?: Maybe<Scalars['String']>;
    category_url_path?: Maybe<Scalars['String']>;
};

export type BundleCartItem = CartItemInterface & {
    __typename?: 'BundleCartItem';
    available_gift_wrapping: Array<Maybe<GiftWrapping>>;
    bundle_options: Array<Maybe<SelectedBundleOption>>;
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    errors?: Maybe<Array<Maybe<CartItemError>>>;
    gift_message?: Maybe<GiftMessage>;
    gift_wrapping?: Maybe<GiftWrapping>;
    /** @deprecated Use `uid` instead. */
    id: Scalars['String'];
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    quantity: Scalars['Float'];
    uid: Scalars['ID'];
};

export type BundleCreditMemoItem = CreditMemoItemInterface & {
    __typename?: 'BundleCreditMemoItem';
    bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
    discounts?: Maybe<Array<Maybe<Discount>>>;
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_refunded?: Maybe<Scalars['Float']>;
};

export type BundleInvoiceItem = InvoiceItemInterface & {
    __typename?: 'BundleInvoiceItem';
    bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
    discounts?: Maybe<Array<Maybe<Discount>>>;
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_invoiced?: Maybe<Scalars['Float']>;
};

export type BundleItem = {
    __typename?: 'BundleItem';
    /** @deprecated Use `uid` instead */
    option_id?: Maybe<Scalars['Int']>;
    options?: Maybe<Array<Maybe<BundleItemOption>>>;
    position?: Maybe<Scalars['Int']>;
    price_range: PriceRange;
    required?: Maybe<Scalars['Boolean']>;
    sku?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    uid?: Maybe<Scalars['ID']>;
};

export type BundleItemOption = {
    __typename?: 'BundleItemOption';
    can_change_quantity?: Maybe<Scalars['Boolean']>;
    /** @deprecated Use `uid` instead */
    id?: Maybe<Scalars['Int']>;
    is_default?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Scalars['String']>;
    position?: Maybe<Scalars['Int']>;
    price?: Maybe<Scalars['Float']>;
    price_type?: Maybe<PriceTypeEnum>;
    product?: Maybe<ProductInterface>;
    /** @deprecated Use `quantity` instead. */
    qty?: Maybe<Scalars['Float']>;
    quantity?: Maybe<Scalars['Float']>;
    uid: Scalars['ID'];
};

export type BundleOptionInput = {
    id: Scalars['Int'];
    quantity: Scalars['Float'];
    value: Array<InputMaybe<Scalars['String']>>;
};

export type BundleOrderItem = OrderItemInterface & {
    __typename?: 'BundleOrderItem';
    bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
    discounts?: Maybe<Array<Maybe<Discount>>>;
    eligible_for_return?: Maybe<Scalars['Boolean']>;
    entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
    gift_message?: Maybe<GiftMessage>;
    gift_wrapping?: Maybe<GiftWrapping>;
    id: Scalars['ID'];
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    product_type?: Maybe<Scalars['String']>;
    product_url_key?: Maybe<Scalars['String']>;
    quantity_canceled?: Maybe<Scalars['Float']>;
    quantity_invoiced?: Maybe<Scalars['Float']>;
    quantity_ordered?: Maybe<Scalars['Float']>;
    quantity_refunded?: Maybe<Scalars['Float']>;
    quantity_returned?: Maybe<Scalars['Float']>;
    quantity_shipped?: Maybe<Scalars['Float']>;
    selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
    status?: Maybe<Scalars['String']>;
};

export type BundleProduct = CustomizableProductInterface &
    PhysicalProductInterface &
    ProductInterface &
    RoutableInterface & {
        __typename?: 'BundleProduct';
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_announcement_date?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_brand?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_custom_engraving_text?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_detailed_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_gemstone_addon?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_recyclable_material?: Maybe<Scalars['Int']>;
        /** @deprecated The field should not be used on the storefront. */
        attribute_set_id?: Maybe<Scalars['Int']>;
        canonical_url?: Maybe<Scalars['String']>;
        categories?: Maybe<Array<Maybe<CategoryInterface>>>;
        /** @deprecated Use the `custom_attributes` field instead. */
        color?: Maybe<Scalars['Int']>;
        country_of_manufacture?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        created_at?: Maybe<Scalars['String']>;
        crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        custom_attributes: Array<Maybe<CustomAttribute>>;
        description?: Maybe<ComplexTextValue>;
        /** @deprecated Use the `custom_attributes` field instead. */
        description_extra?: Maybe<Scalars['String']>;
        dynamic_price?: Maybe<Scalars['Boolean']>;
        dynamic_sku?: Maybe<Scalars['Boolean']>;
        dynamic_weight?: Maybe<Scalars['Boolean']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_color?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_material?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_size?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_style?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        format?: Maybe<Scalars['Int']>;
        gift_message_available?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        has_video?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `uid` field instead. */
        id?: Maybe<Scalars['Int']>;
        image?: Maybe<ProductImage>;
        is_returnable?: Maybe<Scalars['String']>;
        items?: Maybe<Array<Maybe<BundleItem>>>;
        /** @deprecated Use the `custom_attributes` field instead. */
        manufacturer?: Maybe<Scalars['Int']>;
        media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
        /** @deprecated Use `media_gallery` instead. */
        media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
        meta_description?: Maybe<Scalars['String']>;
        meta_keyword?: Maybe<Scalars['String']>;
        meta_title?: Maybe<Scalars['String']>;
        name?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        new_from_date?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        new_to_date?: Maybe<Scalars['String']>;
        only_x_left_in_stock?: Maybe<Scalars['Float']>;
        options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
        options_container?: Maybe<Scalars['String']>;
        orParentSku?: Maybe<Scalars['String']>;
        orParentUrlKey?: Maybe<Scalars['String']>;
        /** @deprecated Use `price_range` for product price information. */
        price?: Maybe<ProductPrices>;
        price_range: PriceRange;
        price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
        price_view?: Maybe<PriceViewEnum>;
        product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
        rating_summary: Scalars['Float'];
        redirect_code: Scalars['Int'];
        related_products?: Maybe<Array<Maybe<ProductInterface>>>;
        relative_url?: Maybe<Scalars['String']>;
        review_count: Scalars['Int'];
        reviews: ProductReviews;
        ship_bundle_items?: Maybe<ShipBundleItemsEnum>;
        short_description?: Maybe<ComplexTextValue>;
        sku?: Maybe<Scalars['String']>;
        small_image?: Maybe<ProductImage>;
        /** @deprecated The field should not be used on the storefront. */
        special_from_date?: Maybe<Scalars['String']>;
        special_price?: Maybe<Scalars['Float']>;
        special_to_date?: Maybe<Scalars['String']>;
        staged: Scalars['Boolean'];
        stock_status?: Maybe<ProductStockStatus>;
        swatch_image?: Maybe<Scalars['String']>;
        thumbnail?: Maybe<ProductImage>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_price?: Maybe<Scalars['Float']>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
        type?: Maybe<UrlRewriteEntityTypeEnum>;
        /** @deprecated Use `__typename` instead. */
        type_id?: Maybe<Scalars['String']>;
        uid: Scalars['ID'];
        /** @deprecated The field should not be used on the storefront. */
        updated_at?: Maybe<Scalars['String']>;
        upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        url_key?: Maybe<Scalars['String']>;
        /** @deprecated Use product's `canonical_url` or url rewrites instead */
        url_path?: Maybe<Scalars['String']>;
        url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
        url_suffix?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        video_file?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        websites?: Maybe<Array<Maybe<Website>>>;
        weight?: Maybe<Scalars['Float']>;
    };

export type BundleProductReviewsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type BundleProductCartItemInput = {
    bundle_options: Array<InputMaybe<BundleOptionInput>>;
    customizable_options?: InputMaybe<
        Array<InputMaybe<CustomizableOptionInput>>
    >;
    data: CartItemInput;
};

export type BundleQuoteItem = QuoteItemInterface & {
    __typename?: 'BundleQuoteItem';
    bundle_options: Array<Maybe<SelectedBundleOption>>;
    calculation_price?: Maybe<Scalars['String']>;
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    discount?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    qty: Scalars['Float'];
    quote_id?: Maybe<Scalars['Int']>;
    request_price?: Maybe<Scalars['String']>;
    sku?: Maybe<Scalars['String']>;
};

export type BundleShipmentItem = ShipmentItemInterface & {
    __typename?: 'BundleShipmentItem';
    bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_shipped: Scalars['Float'];
};

export type BundleWishlistItem = WishlistItemInterface & {
    __typename?: 'BundleWishlistItem';
    added_at: Scalars['String'];
    bundle_options?: Maybe<Array<Maybe<SelectedBundleOption>>>;
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    product?: Maybe<ProductInterface>;
    quantity: Scalars['Float'];
};

export type Cart = {
    __typename?: 'Cart';
    /** @deprecated Use `applied_coupons` instead. */
    applied_coupon?: Maybe<AppliedCoupon>;
    applied_coupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
    applied_gift_cards?: Maybe<Array<Maybe<AppliedGiftCard>>>;
    applied_reward_points?: Maybe<RewardPointsAmount>;
    applied_store_credit?: Maybe<AppliedStoreCredit>;
    available_gift_wrappings: Array<Maybe<GiftWrapping>>;
    available_payment_methods?: Maybe<Array<Maybe<AvailablePaymentMethod>>>;
    billing_address?: Maybe<BillingCartAddress>;
    comment?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    external_order_number?: Maybe<Scalars['String']>;
    gift_message?: Maybe<GiftMessage>;
    gift_receipt_included: Scalars['Boolean'];
    gift_wrapping?: Maybe<GiftWrapping>;
    id: Scalars['ID'];
    isBillingAddressSame: Scalars['Boolean'];
    is_virtual: Scalars['Boolean'];
    items?: Maybe<Array<Maybe<CartItemInterface>>>;
    paymentNonce?: Maybe<Scalars['String']>;
    prices?: Maybe<CartPrices>;
    printed_card_included: Scalars['Boolean'];
    selected_payment_method?: Maybe<SelectedPaymentMethod>;
    shipping_addresses: Array<Maybe<ShippingCartAddress>>;
    total_quantity: Scalars['Float'];
};

export type CartAddressCountry = {
    __typename?: 'CartAddressCountry';
    code: Scalars['String'];
    label: Scalars['String'];
};

export type CartAddressInput = {
    city: Scalars['String'];
    company?: InputMaybe<Scalars['String']>;
    country_code: Scalars['String'];
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    postcode?: InputMaybe<Scalars['String']>;
    region?: InputMaybe<Scalars['String']>;
    region_id?: InputMaybe<Scalars['Int']>;
    save_in_address_book?: InputMaybe<Scalars['Boolean']>;
    street: Array<InputMaybe<Scalars['String']>>;
    telephone?: InputMaybe<Scalars['String']>;
    vat_id?: InputMaybe<Scalars['String']>;
};

export type CartAddressInterface = {
    city: Scalars['String'];
    company?: Maybe<Scalars['String']>;
    country: CartAddressCountry;
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    postcode?: Maybe<Scalars['String']>;
    region?: Maybe<CartAddressRegion>;
    street: Array<Maybe<Scalars['String']>>;
    telephone?: Maybe<Scalars['String']>;
    uid: Scalars['String'];
    vat_id?: Maybe<Scalars['String']>;
};

export type CartAddressRegion = {
    __typename?: 'CartAddressRegion';
    code?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    region_id?: Maybe<Scalars['Int']>;
};

export type CartDiscount = {
    __typename?: 'CartDiscount';
    amount: Money;
    label: Array<Maybe<Scalars['String']>>;
};

export type CartItemError = {
    __typename?: 'CartItemError';
    code: CartItemErrorType;
    message: Scalars['String'];
};

export enum CartItemErrorType {
    /** @deprecated  */
    ItemIncrements = 'ITEM_INCREMENTS',
    /** @deprecated  */
    ItemQty = 'ITEM_QTY',
    /** @deprecated  */
    Undefined = 'UNDEFINED'
}

export type CartItemInput = {
    entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
    parent_sku?: InputMaybe<Scalars['String']>;
    quantity: Scalars['Float'];
    selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    sku: Scalars['String'];
};

export type CartItemInterface = {
    errors?: Maybe<Array<Maybe<CartItemError>>>;
    /** @deprecated Use `uid` instead. */
    id: Scalars['String'];
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    quantity: Scalars['Float'];
    uid: Scalars['ID'];
};

export type CartItemPrices = {
    __typename?: 'CartItemPrices';
    discounts?: Maybe<Array<Maybe<Discount>>>;
    fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
    price: Money;
    price_including_tax: Money;
    row_total: Money;
    row_total_including_tax: Money;
    total_item_discount?: Maybe<Money>;
};

export type CartItemQuantity = {
    __typename?: 'CartItemQuantity';
    /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
    cart_item_id: Scalars['Int'];
    /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
    quantity: Scalars['Float'];
};

export type CartItemSelectedOptionValuePrice = {
    __typename?: 'CartItemSelectedOptionValuePrice';
    type: PriceTypeEnum;
    units: Scalars['String'];
    value: Scalars['Float'];
};

export type CartItemUpdateInput = {
    cart_item_id?: InputMaybe<Scalars['Int']>;
    cart_item_uid?: InputMaybe<Scalars['ID']>;
    customizable_options?: InputMaybe<
        Array<InputMaybe<CustomizableOptionInput>>
    >;
    gift_message?: InputMaybe<GiftMessageInput>;
    gift_wrapping_id?: InputMaybe<Scalars['ID']>;
    quantity?: InputMaybe<Scalars['Float']>;
};

export type CartItemsOutput = {
    __typename?: 'CartItemsOutput';
    cart_id?: Maybe<Scalars['String']>;
    cart_item_id?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['String']>;
    product_id?: Maybe<Scalars['String']>;
    product_name?: Maybe<Scalars['String']>;
    qty?: Maybe<Scalars['Int']>;
    sku?: Maybe<Scalars['String']>;
    store_id?: Maybe<Scalars['Int']>;
    subtotal_converted?: Maybe<Scalars['String']>;
};

export type CartPrices = {
    __typename?: 'CartPrices';
    applied_taxes?: Maybe<Array<Maybe<CartTaxItem>>>;
    /** @deprecated Use discounts instead. */
    discount?: Maybe<CartDiscount>;
    discounts?: Maybe<Array<Maybe<Discount>>>;
    gift_options?: Maybe<GiftOptionsPrices>;
    grand_total?: Maybe<Money>;
    subtotal_excluding_tax?: Maybe<Money>;
    subtotal_including_tax?: Maybe<Money>;
    subtotal_with_discount_excluding_tax?: Maybe<Money>;
};

export type CartTaxItem = {
    __typename?: 'CartTaxItem';
    amount: Money;
    label: Scalars['String'];
};

export type CartUserInputError = {
    __typename?: 'CartUserInputError';
    code: CartUserInputErrorType;
    message: Scalars['String'];
};

export enum CartUserInputErrorType {
    /** @deprecated  */
    InsufficientStock = 'INSUFFICIENT_STOCK',
    /** @deprecated  */
    NotSalable = 'NOT_SALABLE',
    /** @deprecated  */
    PermissionDenied = 'PERMISSION_DENIED',
    /** @deprecated  */
    ProductNotFound = 'PRODUCT_NOT_FOUND',
    /** @deprecated  */
    Undefined = 'UNDEFINED'
}

export type CategoryFilterInput = {
    category_uid?: InputMaybe<FilterEqualTypeInput>;
    ids?: InputMaybe<FilterEqualTypeInput>;
    name?: InputMaybe<FilterMatchTypeInput>;
    parent_category_uid?: InputMaybe<FilterEqualTypeInput>;
    parent_id?: InputMaybe<FilterEqualTypeInput>;
    url_key?: InputMaybe<FilterEqualTypeInput>;
    url_path?: InputMaybe<FilterEqualTypeInput>;
};

export type CategoryInterface = {
    automatic_sorting?: Maybe<Scalars['String']>;
    available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
    breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
    canonical_url?: Maybe<Scalars['String']>;
    category_icon?: Maybe<Scalars['String']>;
    children_count?: Maybe<Scalars['String']>;
    cms_block?: Maybe<CmsBlock>;
    /** @deprecated The field should not be used on the storefront. */
    created_at?: Maybe<Scalars['String']>;
    custom_layout_update_file?: Maybe<Scalars['String']>;
    default_sort_by?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    display_mode?: Maybe<Scalars['String']>;
    filter_price_range?: Maybe<Scalars['Float']>;
    /** @deprecated Use `uid` instead. */
    id?: Maybe<Scalars['Int']>;
    image?: Maybe<Scalars['String']>;
    include_in_menu?: Maybe<Scalars['Int']>;
    is_anchor?: Maybe<Scalars['Int']>;
    landing_page?: Maybe<Scalars['Int']>;
    level?: Maybe<Scalars['Int']>;
    meta_description?: Maybe<Scalars['String']>;
    meta_keywords?: Maybe<Scalars['String']>;
    meta_title?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    path_in_store?: Maybe<Scalars['String']>;
    position?: Maybe<Scalars['Int']>;
    product_count?: Maybe<Scalars['Int']>;
    products?: Maybe<CategoryProducts>;
    staged: Scalars['Boolean'];
    uid: Scalars['ID'];
    /** @deprecated The field should not be used on the storefront. */
    updated_at?: Maybe<Scalars['String']>;
    url_key?: Maybe<Scalars['String']>;
    url_path?: Maybe<Scalars['String']>;
    url_suffix?: Maybe<Scalars['String']>;
};

export type CategoryInterfaceProductsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<ProductAttributeSortInput>;
};

export type CategoryProducts = {
    __typename?: 'CategoryProducts';
    items?: Maybe<Array<Maybe<ProductInterface>>>;
    page_info?: Maybe<SearchResultPageInfo>;
    total_count?: Maybe<Scalars['Int']>;
};

export type CategoryResult = {
    __typename?: 'CategoryResult';
    items?: Maybe<Array<Maybe<CategoryTree>>>;
    page_info?: Maybe<SearchResultPageInfo>;
    total_count?: Maybe<Scalars['Int']>;
};

export type CategoryTree = CategoryInterface &
    RoutableInterface & {
        __typename?: 'CategoryTree';
        automatic_sorting?: Maybe<Scalars['String']>;
        available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
        breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
        canonical_url?: Maybe<Scalars['String']>;
        category_icon?: Maybe<Scalars['String']>;
        children?: Maybe<Array<Maybe<CategoryTree>>>;
        children_count?: Maybe<Scalars['String']>;
        cms_block?: Maybe<CmsBlock>;
        /** @deprecated The field should not be used on the storefront. */
        created_at?: Maybe<Scalars['String']>;
        custom_layout_update_file?: Maybe<Scalars['String']>;
        default_sort_by?: Maybe<Scalars['String']>;
        description?: Maybe<Scalars['String']>;
        display_mode?: Maybe<Scalars['String']>;
        filter_price_range?: Maybe<Scalars['Float']>;
        /** @deprecated Use `uid` instead. */
        id?: Maybe<Scalars['Int']>;
        image?: Maybe<Scalars['String']>;
        include_in_menu?: Maybe<Scalars['Int']>;
        is_anchor?: Maybe<Scalars['Int']>;
        landing_page?: Maybe<Scalars['Int']>;
        level?: Maybe<Scalars['Int']>;
        meta_description?: Maybe<Scalars['String']>;
        meta_keywords?: Maybe<Scalars['String']>;
        meta_title?: Maybe<Scalars['String']>;
        name?: Maybe<Scalars['String']>;
        path?: Maybe<Scalars['String']>;
        path_in_store?: Maybe<Scalars['String']>;
        position?: Maybe<Scalars['Int']>;
        product_count?: Maybe<Scalars['Int']>;
        products?: Maybe<CategoryProducts>;
        redirect_code: Scalars['Int'];
        relative_url?: Maybe<Scalars['String']>;
        staged: Scalars['Boolean'];
        type?: Maybe<UrlRewriteEntityTypeEnum>;
        uid: Scalars['ID'];
        /** @deprecated The field should not be used on the storefront. */
        updated_at?: Maybe<Scalars['String']>;
        url_key?: Maybe<Scalars['String']>;
        url_path?: Maybe<Scalars['String']>;
        url_suffix?: Maybe<Scalars['String']>;
    };

export type CategoryTreeProductsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<ProductAttributeSortInput>;
};

export type CheckoutAgreement = {
    __typename?: 'CheckoutAgreement';
    agreement_id: Scalars['Int'];
    checkbox_text: Scalars['String'];
    content: Scalars['String'];
    content_height?: Maybe<Scalars['String']>;
    is_html: Scalars['Boolean'];
    mode: CheckoutAgreementMode;
    name: Scalars['String'];
};

export enum CheckoutAgreementMode {
    /** @deprecated  */
    Auto = 'AUTO',
    /** @deprecated  */
    Manual = 'MANUAL'
}

export type CheckoutUserInputError = {
    __typename?: 'CheckoutUserInputError';
    code: CheckoutUserInputErrorCodes;
    message: Scalars['String'];
    path: Array<Maybe<Scalars['String']>>;
};

export enum CheckoutUserInputErrorCodes {
    /** @deprecated  */
    InsufficientStock = 'INSUFFICIENT_STOCK',
    /** @deprecated  */
    NotSalable = 'NOT_SALABLE',
    /** @deprecated  */
    ProductNotFound = 'PRODUCT_NOT_FOUND',
    /** @deprecated  */
    ReorderNotAvailable = 'REORDER_NOT_AVAILABLE',
    /** @deprecated  */
    Undefined = 'UNDEFINED'
}

export type CmsBlock = {
    __typename?: 'CmsBlock';
    content?: Maybe<Scalars['String']>;
    identifier?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
};

export type CmsBlocks = {
    __typename?: 'CmsBlocks';
    items?: Maybe<Array<Maybe<CmsBlock>>>;
};

export type CmsPage = RoutableInterface & {
    __typename?: 'CmsPage';
    content?: Maybe<Scalars['String']>;
    content_heading?: Maybe<Scalars['String']>;
    identifier?: Maybe<Scalars['String']>;
    meta_description?: Maybe<Scalars['String']>;
    meta_keywords?: Maybe<Scalars['String']>;
    meta_title?: Maybe<Scalars['String']>;
    page_layout?: Maybe<Scalars['String']>;
    redirect_code: Scalars['Int'];
    relative_url?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    type?: Maybe<UrlRewriteEntityTypeEnum>;
    url_key?: Maybe<Scalars['String']>;
};

export type ColorSwatchData = SwatchDataInterface & {
    __typename?: 'ColorSwatchData';
    value?: Maybe<Scalars['String']>;
};

export type ComparableAttribute = {
    __typename?: 'ComparableAttribute';
    code: Scalars['String'];
    label: Scalars['String'];
};

export type ComparableItem = {
    __typename?: 'ComparableItem';
    attributes: Array<Maybe<ProductAttribute>>;
    product: ProductInterface;
    uid: Scalars['ID'];
};

export type CompareList = {
    __typename?: 'CompareList';
    attributes?: Maybe<Array<Maybe<ComparableAttribute>>>;
    item_count: Scalars['Int'];
    items?: Maybe<Array<Maybe<ComparableItem>>>;
    uid: Scalars['ID'];
};

export type ComplexTextValue = {
    __typename?: 'ComplexTextValue';
    html: Scalars['String'];
};

export type ConfigurableAttributeOption = {
    __typename?: 'ConfigurableAttributeOption';
    code?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
    value_index?: Maybe<Scalars['Int']>;
};

export type ConfigurableCartItem = CartItemInterface & {
    __typename?: 'ConfigurableCartItem';
    available_gift_wrapping: Array<Maybe<GiftWrapping>>;
    configurable_options: Array<Maybe<SelectedConfigurableOption>>;
    configured_variant: ProductInterface;
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    errors?: Maybe<Array<Maybe<CartItemError>>>;
    gift_message?: Maybe<GiftMessage>;
    gift_wrapping?: Maybe<GiftWrapping>;
    /** @deprecated Use `uid` instead. */
    id: Scalars['String'];
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    quantity: Scalars['Float'];
    uid: Scalars['ID'];
};

export type ConfigurableOptionAvailableForSelection = {
    __typename?: 'ConfigurableOptionAvailableForSelection';
    attribute_code: Scalars['String'];
    option_value_uids: Array<Maybe<Scalars['ID']>>;
};

export type ConfigurableProduct = CustomizableProductInterface &
    PhysicalProductInterface &
    ProductInterface &
    RoutableInterface & {
        __typename?: 'ConfigurableProduct';
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_announcement_date?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_brand?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_custom_engraving_text?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_detailed_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_gemstone_addon?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_recyclable_material?: Maybe<Scalars['Int']>;
        /** @deprecated The field should not be used on the storefront. */
        attribute_set_id?: Maybe<Scalars['Int']>;
        canonical_url?: Maybe<Scalars['String']>;
        categories?: Maybe<Array<Maybe<CategoryInterface>>>;
        /** @deprecated Use the `custom_attributes` field instead. */
        color?: Maybe<Scalars['Int']>;
        configurable_options?: Maybe<Array<Maybe<ConfigurableProductOptions>>>;
        configurable_product_options_selection?: Maybe<ConfigurableProductOptionsSelection>;
        country_of_manufacture?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        created_at?: Maybe<Scalars['String']>;
        crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        custom_attributes: Array<Maybe<CustomAttribute>>;
        description?: Maybe<ComplexTextValue>;
        /** @deprecated Use the `custom_attributes` field instead. */
        description_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_color?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_material?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_size?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_style?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        format?: Maybe<Scalars['Int']>;
        gift_message_available?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        has_video?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `uid` field instead. */
        id?: Maybe<Scalars['Int']>;
        image?: Maybe<ProductImage>;
        is_returnable?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        manufacturer?: Maybe<Scalars['Int']>;
        media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
        /** @deprecated Use `media_gallery` instead. */
        media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
        meta_description?: Maybe<Scalars['String']>;
        meta_keyword?: Maybe<Scalars['String']>;
        meta_title?: Maybe<Scalars['String']>;
        name?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        new_from_date?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        new_to_date?: Maybe<Scalars['String']>;
        only_x_left_in_stock?: Maybe<Scalars['Float']>;
        options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
        options_container?: Maybe<Scalars['String']>;
        orParentSku?: Maybe<Scalars['String']>;
        orParentUrlKey?: Maybe<Scalars['String']>;
        /** @deprecated Use `price_range` for product price information. */
        price?: Maybe<ProductPrices>;
        price_range: PriceRange;
        price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
        product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
        rating_summary: Scalars['Float'];
        redirect_code: Scalars['Int'];
        related_products?: Maybe<Array<Maybe<ProductInterface>>>;
        relative_url?: Maybe<Scalars['String']>;
        review_count: Scalars['Int'];
        reviews: ProductReviews;
        short_description?: Maybe<ComplexTextValue>;
        sku?: Maybe<Scalars['String']>;
        small_image?: Maybe<ProductImage>;
        /** @deprecated The field should not be used on the storefront. */
        special_from_date?: Maybe<Scalars['String']>;
        special_price?: Maybe<Scalars['Float']>;
        special_to_date?: Maybe<Scalars['String']>;
        staged: Scalars['Boolean'];
        stock_status?: Maybe<ProductStockStatus>;
        swatch_image?: Maybe<Scalars['String']>;
        thumbnail?: Maybe<ProductImage>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_price?: Maybe<Scalars['Float']>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
        type?: Maybe<UrlRewriteEntityTypeEnum>;
        /** @deprecated Use `__typename` instead. */
        type_id?: Maybe<Scalars['String']>;
        uid: Scalars['ID'];
        /** @deprecated The field should not be used on the storefront. */
        updated_at?: Maybe<Scalars['String']>;
        upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        url_key?: Maybe<Scalars['String']>;
        /** @deprecated Use product's `canonical_url` or url rewrites instead */
        url_path?: Maybe<Scalars['String']>;
        url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
        url_suffix?: Maybe<Scalars['String']>;
        variants?: Maybe<Array<Maybe<ConfigurableVariant>>>;
        /** @deprecated Use the `custom_attributes` field instead. */
        video_file?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        websites?: Maybe<Array<Maybe<Website>>>;
        weight?: Maybe<Scalars['Float']>;
    };

export type ConfigurableProductConfigurable_Product_Options_SelectionArgs = {
    configurableOptionValueUids?: InputMaybe<Array<Scalars['ID']>>;
};

export type ConfigurableProductReviewsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type ConfigurableProductCartItemInput = {
    customizable_options?: InputMaybe<
        Array<InputMaybe<CustomizableOptionInput>>
    >;
    data: CartItemInput;
    parent_sku?: InputMaybe<Scalars['String']>;
    variant_sku?: InputMaybe<Scalars['String']>;
};

export type ConfigurableProductOption = {
    __typename?: 'ConfigurableProductOption';
    attribute_code: Scalars['String'];
    label: Scalars['String'];
    uid: Scalars['ID'];
    values?: Maybe<Array<Maybe<ConfigurableProductOptionValue>>>;
};

export type ConfigurableProductOptionValue = {
    __typename?: 'ConfigurableProductOptionValue';
    is_available: Scalars['Boolean'];
    is_use_default: Scalars['Boolean'];
    label: Scalars['String'];
    swatch?: Maybe<SwatchDataInterface>;
    uid: Scalars['ID'];
};

export type ConfigurableProductOptions = {
    __typename?: 'ConfigurableProductOptions';
    attribute_code?: Maybe<Scalars['String']>;
    /** @deprecated Use `attribute_uid` instead. */
    attribute_id?: Maybe<Scalars['String']>;
    /** @deprecated Use `attribute_uid` instead. */
    attribute_id_v2?: Maybe<Scalars['Int']>;
    attribute_uid: Scalars['ID'];
    /** @deprecated Use `uid` instead. */
    id?: Maybe<Scalars['Int']>;
    label?: Maybe<Scalars['String']>;
    position?: Maybe<Scalars['Int']>;
    /** @deprecated `product_id` is not needed and can be obtained from its parent. */
    product_id?: Maybe<Scalars['Int']>;
    uid: Scalars['ID'];
    use_default?: Maybe<Scalars['Boolean']>;
    values?: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>;
};

export type ConfigurableProductOptionsSelection = {
    __typename?: 'ConfigurableProductOptionsSelection';
    configurable_options?: Maybe<Array<Maybe<ConfigurableProductOption>>>;
    media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
    options_available_for_selection?: Maybe<
        Array<Maybe<ConfigurableOptionAvailableForSelection>>
    >;
    variant?: Maybe<SimpleProduct>;
};

export type ConfigurableProductOptionsValues = {
    __typename?: 'ConfigurableProductOptionsValues';
    default_label?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    store_label?: Maybe<Scalars['String']>;
    swatch_data?: Maybe<SwatchDataInterface>;
    uid?: Maybe<Scalars['ID']>;
    use_default_value?: Maybe<Scalars['Boolean']>;
    /** @deprecated Use `uid` instead. */
    value_index?: Maybe<Scalars['Int']>;
};

export type ConfigurableQuoteItem = QuoteItemInterface & {
    __typename?: 'ConfigurableQuoteItem';
    calculation_price?: Maybe<Scalars['String']>;
    configurable_options: Array<Maybe<SelectedConfigurableOption>>;
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    discount?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    qty: Scalars['Float'];
    quote_id?: Maybe<Scalars['Int']>;
    request_price?: Maybe<Scalars['String']>;
    sku?: Maybe<Scalars['String']>;
};

export type ConfigurableVariant = {
    __typename?: 'ConfigurableVariant';
    attributes?: Maybe<Array<Maybe<ConfigurableAttributeOption>>>;
    product?: Maybe<SimpleProduct>;
};

export type ConfigurableWishlistItem = WishlistItemInterface & {
    __typename?: 'ConfigurableWishlistItem';
    added_at: Scalars['String'];
    /** @deprecated Use `ConfigurableWishlistItem.configured_variant.sku` instead. */
    child_sku: Scalars['String'];
    configurable_options?: Maybe<Array<Maybe<SelectedConfigurableOption>>>;
    configured_variant?: Maybe<ProductInterface>;
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    product?: Maybe<ProductInterface>;
    quantity: Scalars['Float'];
};

export type ContactUsInput = {
    comment: Scalars['String'];
    email: Scalars['String'];
    name: Scalars['String'];
    telephone?: InputMaybe<Scalars['String']>;
};

export type ContactUsOutput = {
    __typename?: 'ContactUsOutput';
    status: Scalars['Boolean'];
};

export type CopyProductsBetweenWishlistsOutput = {
    __typename?: 'CopyProductsBetweenWishlistsOutput';
    destination_wishlist: Wishlist;
    source_wishlist: Wishlist;
    user_errors: Array<Maybe<WishListUserInputError>>;
};

export type Country = {
    __typename?: 'Country';
    available_regions?: Maybe<Array<Maybe<Region>>>;
    full_name_english?: Maybe<Scalars['String']>;
    full_name_locale?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    three_letter_abbreviation?: Maybe<Scalars['String']>;
    two_letter_abbreviation?: Maybe<Scalars['String']>;
};

export enum CountryCodeEnum {
    /** @deprecated  */
    Ad = 'AD',
    /** @deprecated  */
    Ae = 'AE',
    /** @deprecated  */
    Af = 'AF',
    /** @deprecated  */
    Ag = 'AG',
    /** @deprecated  */
    Ai = 'AI',
    /** @deprecated  */
    Al = 'AL',
    /** @deprecated  */
    Am = 'AM',
    /** @deprecated  */
    An = 'AN',
    /** @deprecated  */
    Ao = 'AO',
    /** @deprecated  */
    Aq = 'AQ',
    /** @deprecated  */
    Ar = 'AR',
    /** @deprecated  */
    As = 'AS',
    /** @deprecated  */
    At = 'AT',
    /** @deprecated  */
    Au = 'AU',
    /** @deprecated  */
    Aw = 'AW',
    /** @deprecated  */
    Ax = 'AX',
    /** @deprecated  */
    Az = 'AZ',
    /** @deprecated  */
    Ba = 'BA',
    /** @deprecated  */
    Bb = 'BB',
    /** @deprecated  */
    Bd = 'BD',
    /** @deprecated  */
    Be = 'BE',
    /** @deprecated  */
    Bf = 'BF',
    /** @deprecated  */
    Bg = 'BG',
    /** @deprecated  */
    Bh = 'BH',
    /** @deprecated  */
    Bi = 'BI',
    /** @deprecated  */
    Bj = 'BJ',
    /** @deprecated  */
    Bl = 'BL',
    /** @deprecated  */
    Bm = 'BM',
    /** @deprecated  */
    Bn = 'BN',
    /** @deprecated  */
    Bo = 'BO',
    /** @deprecated  */
    Br = 'BR',
    /** @deprecated  */
    Bs = 'BS',
    /** @deprecated  */
    Bt = 'BT',
    /** @deprecated  */
    Bv = 'BV',
    /** @deprecated  */
    Bw = 'BW',
    /** @deprecated  */
    By = 'BY',
    /** @deprecated  */
    Bz = 'BZ',
    /** @deprecated  */
    Ca = 'CA',
    /** @deprecated  */
    Cc = 'CC',
    /** @deprecated  */
    Cd = 'CD',
    /** @deprecated  */
    Cf = 'CF',
    /** @deprecated  */
    Cg = 'CG',
    /** @deprecated  */
    Ch = 'CH',
    /** @deprecated  */
    Ci = 'CI',
    /** @deprecated  */
    Ck = 'CK',
    /** @deprecated  */
    Cl = 'CL',
    /** @deprecated  */
    Cm = 'CM',
    /** @deprecated  */
    Cn = 'CN',
    /** @deprecated  */
    Co = 'CO',
    /** @deprecated  */
    Cr = 'CR',
    /** @deprecated  */
    Cu = 'CU',
    /** @deprecated  */
    Cv = 'CV',
    /** @deprecated  */
    Cx = 'CX',
    /** @deprecated  */
    Cy = 'CY',
    /** @deprecated  */
    Cz = 'CZ',
    /** @deprecated  */
    De = 'DE',
    /** @deprecated  */
    Dj = 'DJ',
    /** @deprecated  */
    Dk = 'DK',
    /** @deprecated  */
    Dm = 'DM',
    /** @deprecated  */
    Do = 'DO',
    /** @deprecated  */
    Dz = 'DZ',
    /** @deprecated  */
    Ec = 'EC',
    /** @deprecated  */
    Ee = 'EE',
    /** @deprecated  */
    Eg = 'EG',
    /** @deprecated  */
    Eh = 'EH',
    /** @deprecated  */
    Er = 'ER',
    /** @deprecated  */
    Es = 'ES',
    /** @deprecated  */
    Et = 'ET',
    /** @deprecated  */
    Fi = 'FI',
    /** @deprecated  */
    Fj = 'FJ',
    /** @deprecated  */
    Fk = 'FK',
    /** @deprecated  */
    Fm = 'FM',
    /** @deprecated  */
    Fo = 'FO',
    /** @deprecated  */
    Fr = 'FR',
    /** @deprecated  */
    Ga = 'GA',
    /** @deprecated  */
    Gb = 'GB',
    /** @deprecated  */
    Gd = 'GD',
    /** @deprecated  */
    Ge = 'GE',
    /** @deprecated  */
    Gf = 'GF',
    /** @deprecated  */
    Gg = 'GG',
    /** @deprecated  */
    Gh = 'GH',
    /** @deprecated  */
    Gi = 'GI',
    /** @deprecated  */
    Gl = 'GL',
    /** @deprecated  */
    Gm = 'GM',
    /** @deprecated  */
    Gn = 'GN',
    /** @deprecated  */
    Gp = 'GP',
    /** @deprecated  */
    Gq = 'GQ',
    /** @deprecated  */
    Gr = 'GR',
    /** @deprecated  */
    Gs = 'GS',
    /** @deprecated  */
    Gt = 'GT',
    /** @deprecated  */
    Gu = 'GU',
    /** @deprecated  */
    Gw = 'GW',
    /** @deprecated  */
    Gy = 'GY',
    /** @deprecated  */
    Hk = 'HK',
    /** @deprecated  */
    Hm = 'HM',
    /** @deprecated  */
    Hn = 'HN',
    /** @deprecated  */
    Hr = 'HR',
    /** @deprecated  */
    Ht = 'HT',
    /** @deprecated  */
    Hu = 'HU',
    /** @deprecated  */
    Id = 'ID',
    /** @deprecated  */
    Ie = 'IE',
    /** @deprecated  */
    Il = 'IL',
    /** @deprecated  */
    Im = 'IM',
    /** @deprecated  */
    In = 'IN',
    /** @deprecated  */
    Io = 'IO',
    /** @deprecated  */
    Iq = 'IQ',
    /** @deprecated  */
    Ir = 'IR',
    /** @deprecated  */
    Is = 'IS',
    /** @deprecated  */
    It = 'IT',
    /** @deprecated  */
    Je = 'JE',
    /** @deprecated  */
    Jm = 'JM',
    /** @deprecated  */
    Jo = 'JO',
    /** @deprecated  */
    Jp = 'JP',
    /** @deprecated  */
    Ke = 'KE',
    /** @deprecated  */
    Kg = 'KG',
    /** @deprecated  */
    Kh = 'KH',
    /** @deprecated  */
    Ki = 'KI',
    /** @deprecated  */
    Km = 'KM',
    /** @deprecated  */
    Kn = 'KN',
    /** @deprecated  */
    Kp = 'KP',
    /** @deprecated  */
    Kr = 'KR',
    /** @deprecated  */
    Kw = 'KW',
    /** @deprecated  */
    Ky = 'KY',
    /** @deprecated  */
    Kz = 'KZ',
    /** @deprecated  */
    La = 'LA',
    /** @deprecated  */
    Lb = 'LB',
    /** @deprecated  */
    Lc = 'LC',
    /** @deprecated  */
    Li = 'LI',
    /** @deprecated  */
    Lk = 'LK',
    /** @deprecated  */
    Lr = 'LR',
    /** @deprecated  */
    Ls = 'LS',
    /** @deprecated  */
    Lt = 'LT',
    /** @deprecated  */
    Lu = 'LU',
    /** @deprecated  */
    Lv = 'LV',
    /** @deprecated  */
    Ly = 'LY',
    /** @deprecated  */
    Ma = 'MA',
    /** @deprecated  */
    Mc = 'MC',
    /** @deprecated  */
    Md = 'MD',
    /** @deprecated  */
    Me = 'ME',
    /** @deprecated  */
    Mf = 'MF',
    /** @deprecated  */
    Mg = 'MG',
    /** @deprecated  */
    Mh = 'MH',
    /** @deprecated  */
    Mk = 'MK',
    /** @deprecated  */
    Ml = 'ML',
    /** @deprecated  */
    Mm = 'MM',
    /** @deprecated  */
    Mn = 'MN',
    /** @deprecated  */
    Mo = 'MO',
    /** @deprecated  */
    Mp = 'MP',
    /** @deprecated  */
    Mq = 'MQ',
    /** @deprecated  */
    Mr = 'MR',
    /** @deprecated  */
    Ms = 'MS',
    /** @deprecated  */
    Mt = 'MT',
    /** @deprecated  */
    Mu = 'MU',
    /** @deprecated  */
    Mv = 'MV',
    /** @deprecated  */
    Mw = 'MW',
    /** @deprecated  */
    Mx = 'MX',
    /** @deprecated  */
    My = 'MY',
    /** @deprecated  */
    Mz = 'MZ',
    /** @deprecated  */
    Na = 'NA',
    /** @deprecated  */
    Nc = 'NC',
    /** @deprecated  */
    Ne = 'NE',
    /** @deprecated  */
    Nf = 'NF',
    /** @deprecated  */
    Ng = 'NG',
    /** @deprecated  */
    Ni = 'NI',
    /** @deprecated  */
    Nl = 'NL',
    /** @deprecated  */
    No = 'NO',
    /** @deprecated  */
    Np = 'NP',
    /** @deprecated  */
    Nr = 'NR',
    /** @deprecated  */
    Nu = 'NU',
    /** @deprecated  */
    Nz = 'NZ',
    /** @deprecated  */
    Om = 'OM',
    /** @deprecated  */
    Pa = 'PA',
    /** @deprecated  */
    Pe = 'PE',
    /** @deprecated  */
    Pf = 'PF',
    /** @deprecated  */
    Pg = 'PG',
    /** @deprecated  */
    Ph = 'PH',
    /** @deprecated  */
    Pk = 'PK',
    /** @deprecated  */
    Pl = 'PL',
    /** @deprecated  */
    Pm = 'PM',
    /** @deprecated  */
    Pn = 'PN',
    /** @deprecated  */
    Ps = 'PS',
    /** @deprecated  */
    Pt = 'PT',
    /** @deprecated  */
    Pw = 'PW',
    /** @deprecated  */
    Py = 'PY',
    /** @deprecated  */
    Qa = 'QA',
    /** @deprecated  */
    Re = 'RE',
    /** @deprecated  */
    Ro = 'RO',
    /** @deprecated  */
    Rs = 'RS',
    /** @deprecated  */
    Ru = 'RU',
    /** @deprecated  */
    Rw = 'RW',
    /** @deprecated  */
    Sa = 'SA',
    /** @deprecated  */
    Sb = 'SB',
    /** @deprecated  */
    Sc = 'SC',
    /** @deprecated  */
    Sd = 'SD',
    /** @deprecated  */
    Se = 'SE',
    /** @deprecated  */
    Sg = 'SG',
    /** @deprecated  */
    Sh = 'SH',
    /** @deprecated  */
    Si = 'SI',
    /** @deprecated  */
    Sj = 'SJ',
    /** @deprecated  */
    Sk = 'SK',
    /** @deprecated  */
    Sl = 'SL',
    /** @deprecated  */
    Sm = 'SM',
    /** @deprecated  */
    Sn = 'SN',
    /** @deprecated  */
    So = 'SO',
    /** @deprecated  */
    Sr = 'SR',
    /** @deprecated  */
    St = 'ST',
    /** @deprecated  */
    Sv = 'SV',
    /** @deprecated  */
    Sy = 'SY',
    /** @deprecated  */
    Sz = 'SZ',
    /** @deprecated  */
    Tc = 'TC',
    /** @deprecated  */
    Td = 'TD',
    /** @deprecated  */
    Tf = 'TF',
    /** @deprecated  */
    Tg = 'TG',
    /** @deprecated  */
    Th = 'TH',
    /** @deprecated  */
    Tj = 'TJ',
    /** @deprecated  */
    Tk = 'TK',
    /** @deprecated  */
    Tl = 'TL',
    /** @deprecated  */
    Tm = 'TM',
    /** @deprecated  */
    Tn = 'TN',
    /** @deprecated  */
    To = 'TO',
    /** @deprecated  */
    Tr = 'TR',
    /** @deprecated  */
    Tt = 'TT',
    /** @deprecated  */
    Tv = 'TV',
    /** @deprecated  */
    Tw = 'TW',
    /** @deprecated  */
    Tz = 'TZ',
    /** @deprecated  */
    Ua = 'UA',
    /** @deprecated  */
    Ug = 'UG',
    /** @deprecated  */
    Um = 'UM',
    /** @deprecated  */
    Us = 'US',
    /** @deprecated  */
    Uy = 'UY',
    /** @deprecated  */
    Uz = 'UZ',
    /** @deprecated  */
    Va = 'VA',
    /** @deprecated  */
    Vc = 'VC',
    /** @deprecated  */
    Ve = 'VE',
    /** @deprecated  */
    Vg = 'VG',
    /** @deprecated  */
    Vi = 'VI',
    /** @deprecated  */
    Vn = 'VN',
    /** @deprecated  */
    Vu = 'VU',
    /** @deprecated  */
    Wf = 'WF',
    /** @deprecated  */
    Ws = 'WS',
    /** @deprecated  */
    Ye = 'YE',
    /** @deprecated  */
    Yt = 'YT',
    /** @deprecated  */
    Za = 'ZA',
    /** @deprecated  */
    Zm = 'ZM',
    /** @deprecated  */
    Zw = 'ZW'
}

export type CreateCompareListInput = {
    products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type CreateGiftRegistryInput = {
    dynamic_attributes?: InputMaybe<
        Array<InputMaybe<GiftRegistryDynamicAttributeInput>>
    >;
    event_name: Scalars['String'];
    gift_registry_type_uid: Scalars['ID'];
    message: Scalars['String'];
    privacy_settings: GiftRegistryPrivacySettings;
    registrants: Array<InputMaybe<AddGiftRegistryRegistrantInput>>;
    shipping_address?: InputMaybe<GiftRegistryShippingAddressInput>;
    status: GiftRegistryStatus;
};

export type CreateGiftRegistryOutput = {
    __typename?: 'CreateGiftRegistryOutput';
    gift_registry?: Maybe<GiftRegistry>;
};

export type CreatePayflowProTokenOutput = {
    __typename?: 'CreatePayflowProTokenOutput';
    response_message: Scalars['String'];
    result: Scalars['Int'];
    result_code: Scalars['Int'];
    secure_token: Scalars['String'];
    secure_token_id: Scalars['String'];
};

export type CreateProductReviewInput = {
    nickname: Scalars['String'];
    ratings: Array<InputMaybe<ProductReviewRatingInput>>;
    sku: Scalars['String'];
    summary: Scalars['String'];
    text: Scalars['String'];
};

export type CreateProductReviewOutput = {
    __typename?: 'CreateProductReviewOutput';
    review: ProductReview;
};

export type CreateWishlistInput = {
    name: Scalars['String'];
    visibility: WishlistVisibilityEnum;
};

export type CreateWishlistOutput = {
    __typename?: 'CreateWishlistOutput';
    wishlist: Wishlist;
};

export type CreditCardDetailsInput = {
    cc_exp_month: Scalars['Int'];
    cc_exp_year: Scalars['Int'];
    cc_last_4: Scalars['Int'];
    cc_type: Scalars['String'];
};

export type CreditMemo = {
    __typename?: 'CreditMemo';
    comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
    id: Scalars['ID'];
    items?: Maybe<Array<Maybe<CreditMemoItemInterface>>>;
    number: Scalars['String'];
    total?: Maybe<CreditMemoTotal>;
};

export type CreditMemoItem = CreditMemoItemInterface & {
    __typename?: 'CreditMemoItem';
    discounts?: Maybe<Array<Maybe<Discount>>>;
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_refunded?: Maybe<Scalars['Float']>;
};

export type CreditMemoItemInterface = {
    discounts?: Maybe<Array<Maybe<Discount>>>;
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_refunded?: Maybe<Scalars['Float']>;
};

export type CreditMemoTotal = {
    __typename?: 'CreditMemoTotal';
    adjustment: Money;
    base_grand_total: Money;
    discounts?: Maybe<Array<Maybe<Discount>>>;
    grand_total: Money;
    shipping_handling?: Maybe<ShippingHandling>;
    subtotal: Money;
    taxes?: Maybe<Array<Maybe<TaxItem>>>;
    total_shipping: Money;
    total_tax: Money;
};

export type Currency = {
    __typename?: 'Currency';
    available_currency_codes?: Maybe<Array<Maybe<Scalars['String']>>>;
    base_currency_code?: Maybe<Scalars['String']>;
    base_currency_symbol?: Maybe<Scalars['String']>;
    current_currency_code: Scalars['String'];
    /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
    default_display_currecy_code?: Maybe<Scalars['String']>;
    /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
    default_display_currecy_symbol?: Maybe<Scalars['String']>;
    default_display_currency_code?: Maybe<Scalars['String']>;
    default_display_currency_symbol?: Maybe<Scalars['String']>;
    exchange_rates?: Maybe<Array<Maybe<ExchangeRate>>>;
};

export enum CurrencyEnum {
    /** @deprecated  */
    Aed = 'AED',
    /** @deprecated  */
    Afn = 'AFN',
    /** @deprecated  */
    All = 'ALL',
    /** @deprecated  */
    Amd = 'AMD',
    /** @deprecated  */
    Ang = 'ANG',
    /** @deprecated  */
    Aoa = 'AOA',
    /** @deprecated  */
    Ars = 'ARS',
    /** @deprecated  */
    Aud = 'AUD',
    /** @deprecated  */
    Awg = 'AWG',
    /** @deprecated  */
    Azm = 'AZM',
    /** @deprecated  */
    Azn = 'AZN',
    /** @deprecated  */
    Bam = 'BAM',
    /** @deprecated  */
    Bbd = 'BBD',
    /** @deprecated  */
    Bdt = 'BDT',
    /** @deprecated  */
    Bgn = 'BGN',
    /** @deprecated  */
    Bhd = 'BHD',
    /** @deprecated  */
    Bif = 'BIF',
    /** @deprecated  */
    Bmd = 'BMD',
    /** @deprecated  */
    Bnd = 'BND',
    /** @deprecated  */
    Bob = 'BOB',
    /** @deprecated  */
    Brl = 'BRL',
    /** @deprecated  */
    Bsd = 'BSD',
    /** @deprecated  */
    Btn = 'BTN',
    /** @deprecated  */
    Buk = 'BUK',
    /** @deprecated  */
    Bwp = 'BWP',
    /** @deprecated  */
    Byn = 'BYN',
    /** @deprecated  */
    Bzd = 'BZD',
    /** @deprecated  */
    Cad = 'CAD',
    /** @deprecated  */
    Cdf = 'CDF',
    /** @deprecated  */
    Che = 'CHE',
    /** @deprecated  */
    Chf = 'CHF',
    /** @deprecated  */
    Chw = 'CHW',
    /** @deprecated  */
    Clp = 'CLP',
    /** @deprecated  */
    Cny = 'CNY',
    /** @deprecated  */
    Cop = 'COP',
    /** @deprecated  */
    Crc = 'CRC',
    /** @deprecated  */
    Cup = 'CUP',
    /** @deprecated  */
    Cve = 'CVE',
    /** @deprecated  */
    Czk = 'CZK',
    /** @deprecated  */
    Djf = 'DJF',
    /** @deprecated  */
    Dkk = 'DKK',
    /** @deprecated  */
    Dop = 'DOP',
    /** @deprecated  */
    Dzd = 'DZD',
    /** @deprecated  */
    Eek = 'EEK',
    /** @deprecated  */
    Egp = 'EGP',
    /** @deprecated  */
    Ern = 'ERN',
    /** @deprecated  */
    Etb = 'ETB',
    /** @deprecated  */
    Eur = 'EUR',
    /** @deprecated  */
    Fjd = 'FJD',
    /** @deprecated  */
    Fkp = 'FKP',
    /** @deprecated  */
    Gbp = 'GBP',
    /** @deprecated  */
    Gek = 'GEK',
    /** @deprecated  */
    Gel = 'GEL',
    /** @deprecated  */
    Ghs = 'GHS',
    /** @deprecated  */
    Gip = 'GIP',
    /** @deprecated  */
    Gmd = 'GMD',
    /** @deprecated  */
    Gnf = 'GNF',
    /** @deprecated  */
    Gqe = 'GQE',
    /** @deprecated  */
    Gtq = 'GTQ',
    /** @deprecated  */
    Gyd = 'GYD',
    /** @deprecated  */
    Hkd = 'HKD',
    /** @deprecated  */
    Hnl = 'HNL',
    /** @deprecated  */
    Hrk = 'HRK',
    /** @deprecated  */
    Htg = 'HTG',
    /** @deprecated  */
    Huf = 'HUF',
    /** @deprecated  */
    Idr = 'IDR',
    /** @deprecated  */
    Ils = 'ILS',
    /** @deprecated  */
    Inr = 'INR',
    /** @deprecated  */
    Iqd = 'IQD',
    /** @deprecated  */
    Irr = 'IRR',
    /** @deprecated  */
    Isk = 'ISK',
    /** @deprecated  */
    Jmd = 'JMD',
    /** @deprecated  */
    Jod = 'JOD',
    /** @deprecated  */
    Jpy = 'JPY',
    /** @deprecated  */
    Kes = 'KES',
    /** @deprecated  */
    Kgs = 'KGS',
    /** @deprecated  */
    Khr = 'KHR',
    /** @deprecated  */
    Kmf = 'KMF',
    /** @deprecated  */
    Kpw = 'KPW',
    /** @deprecated  */
    Krw = 'KRW',
    /** @deprecated  */
    Kwd = 'KWD',
    /** @deprecated  */
    Kyd = 'KYD',
    /** @deprecated  */
    Kzt = 'KZT',
    /** @deprecated  */
    Lak = 'LAK',
    /** @deprecated  */
    Lbp = 'LBP',
    /** @deprecated  */
    Lkr = 'LKR',
    /** @deprecated  */
    Lrd = 'LRD',
    /** @deprecated  */
    Lsl = 'LSL',
    /** @deprecated  */
    Lsm = 'LSM',
    /** @deprecated  */
    Ltl = 'LTL',
    /** @deprecated  */
    Lvl = 'LVL',
    /** @deprecated  */
    Lyd = 'LYD',
    /** @deprecated  */
    Mad = 'MAD',
    /** @deprecated  */
    Mdl = 'MDL',
    /** @deprecated  */
    Mga = 'MGA',
    /** @deprecated  */
    Mkd = 'MKD',
    /** @deprecated  */
    Mmk = 'MMK',
    /** @deprecated  */
    Mnt = 'MNT',
    /** @deprecated  */
    Mop = 'MOP',
    /** @deprecated  */
    Mro = 'MRO',
    /** @deprecated  */
    Mur = 'MUR',
    /** @deprecated  */
    Mvr = 'MVR',
    /** @deprecated  */
    Mwk = 'MWK',
    /** @deprecated  */
    Mxn = 'MXN',
    /** @deprecated  */
    Myr = 'MYR',
    /** @deprecated  */
    Mzn = 'MZN',
    /** @deprecated  */
    Nad = 'NAD',
    /** @deprecated  */
    Ngn = 'NGN',
    /** @deprecated  */
    Nic = 'NIC',
    /** @deprecated  */
    Nok = 'NOK',
    /** @deprecated  */
    Npr = 'NPR',
    /** @deprecated  */
    Nzd = 'NZD',
    /** @deprecated  */
    Omr = 'OMR',
    /** @deprecated  */
    Pab = 'PAB',
    /** @deprecated  */
    Pen = 'PEN',
    /** @deprecated  */
    Pgk = 'PGK',
    /** @deprecated  */
    Php = 'PHP',
    /** @deprecated  */
    Pkr = 'PKR',
    /** @deprecated  */
    Pln = 'PLN',
    /** @deprecated  */
    Pyg = 'PYG',
    /** @deprecated  */
    Qar = 'QAR',
    /** @deprecated  */
    Rhd = 'RHD',
    /** @deprecated  */
    Rol = 'ROL',
    /** @deprecated  */
    Ron = 'RON',
    /** @deprecated  */
    Rsd = 'RSD',
    /** @deprecated  */
    Rub = 'RUB',
    /** @deprecated  */
    Rwf = 'RWF',
    /** @deprecated  */
    Sar = 'SAR',
    /** @deprecated  */
    Sbd = 'SBD',
    /** @deprecated  */
    Scr = 'SCR',
    /** @deprecated  */
    Sdg = 'SDG',
    /** @deprecated  */
    Sek = 'SEK',
    /** @deprecated  */
    Sgd = 'SGD',
    /** @deprecated  */
    Shp = 'SHP',
    /** @deprecated  */
    Skk = 'SKK',
    /** @deprecated  */
    Sll = 'SLL',
    /** @deprecated  */
    Sos = 'SOS',
    /** @deprecated  */
    Srd = 'SRD',
    /** @deprecated  */
    Std = 'STD',
    /** @deprecated  */
    Svc = 'SVC',
    /** @deprecated  */
    Syp = 'SYP',
    /** @deprecated  */
    Szl = 'SZL',
    /** @deprecated  */
    Thb = 'THB',
    /** @deprecated  */
    Tjs = 'TJS',
    /** @deprecated  */
    Tmm = 'TMM',
    /** @deprecated  */
    Tnd = 'TND',
    /** @deprecated  */
    Top = 'TOP',
    /** @deprecated  */
    Trl = 'TRL',
    /** @deprecated  */
    Try = 'TRY',
    /** @deprecated  */
    Ttd = 'TTD',
    /** @deprecated  */
    Twd = 'TWD',
    /** @deprecated  */
    Tzs = 'TZS',
    /** @deprecated  */
    Uah = 'UAH',
    /** @deprecated  */
    Ugx = 'UGX',
    /** @deprecated  */
    Usd = 'USD',
    /** @deprecated  */
    Uyu = 'UYU',
    /** @deprecated  */
    Uzs = 'UZS',
    /** @deprecated  */
    Veb = 'VEB',
    /** @deprecated  */
    Vef = 'VEF',
    /** @deprecated  */
    Vnd = 'VND',
    /** @deprecated  */
    Vuv = 'VUV',
    /** @deprecated  */
    Wst = 'WST',
    /** @deprecated  */
    Xcd = 'XCD',
    /** @deprecated  */
    Xof = 'XOF',
    /** @deprecated  */
    Xpf = 'XPF',
    /** @deprecated  */
    Yer = 'YER',
    /** @deprecated  */
    Ytl = 'YTL',
    /** @deprecated  */
    Zar = 'ZAR',
    /** @deprecated  */
    Zmk = 'ZMK',
    /** @deprecated  */
    Zwd = 'ZWD'
}

export type CustomAttribute = {
    __typename?: 'CustomAttribute';
    attribute_metadata?: Maybe<AttributeMetadataInterface>;
    entered_attribute_value?: Maybe<EnteredAttributeValue>;
    selected_attribute_options?: Maybe<SelectedAttributeOption>;
};

export type CustomAttributeMetadata = {
    __typename?: 'CustomAttributeMetadata';
    items?: Maybe<Array<Maybe<Attribute>>>;
};

export enum CustomAttributesListsEnum {
    /** @deprecated  */
    AdvancedCatalogSearch = 'ADVANCED_CATALOG_SEARCH',
    /** @deprecated  */
    ProductsCompare = 'PRODUCTS_COMPARE',
    /** @deprecated  */
    ProductsListing = 'PRODUCTS_LISTING',
    /** @deprecated  */
    ProductDetailsPage = 'PRODUCT_DETAILS_PAGE',
    /** @deprecated  */
    ProductFilter = 'PRODUCT_FILTER',
    /** @deprecated  */
    ProductSearchResultsFilter = 'PRODUCT_SEARCH_RESULTS_FILTER',
    /** @deprecated  */
    ProductSort = 'PRODUCT_SORT'
}

export type Customer = {
    __typename?: 'Customer';
    addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
    allow_remote_shopping_assistance: Scalars['Boolean'];
    compare_list?: Maybe<CompareList>;
    created_at?: Maybe<Scalars['String']>;
    date_of_birth?: Maybe<Scalars['String']>;
    default_billing?: Maybe<Scalars['String']>;
    default_shipping?: Maybe<Scalars['String']>;
    /** @deprecated Use `date_of_birth` instead. */
    dob?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    firstname?: Maybe<Scalars['String']>;
    gender?: Maybe<Scalars['Int']>;
    gift_registries?: Maybe<Array<Maybe<GiftRegistry>>>;
    gift_registry?: Maybe<GiftRegistry>;
    /** @deprecated Customer group should not be exposed in the storefront scenarios. */
    group_id?: Maybe<Scalars['Int']>;
    /** @deprecated `id` is not needed as part of `Customer`, because on the server side, it can be identified based on the customer token used for authentication. There is no need to know customer ID on the client side. */
    id?: Maybe<Scalars['Int']>;
    is_subscribed?: Maybe<Scalars['Boolean']>;
    lastname?: Maybe<Scalars['String']>;
    middlename?: Maybe<Scalars['String']>;
    moodle_id?: Maybe<Scalars['String']>;
    moodle_token?: Maybe<Scalars['String']>;
    mp_quote_id?: Maybe<Scalars['Int']>;
    orders?: Maybe<CustomerOrders>;
    prefix?: Maybe<Scalars['String']>;
    return?: Maybe<Return>;
    returns?: Maybe<Returns>;
    reviews: ProductReviews;
    reward_points?: Maybe<RewardPoints>;
    store_credit?: Maybe<CustomerStoreCredit>;
    suffix?: Maybe<Scalars['String']>;
    taxvat?: Maybe<Scalars['String']>;
    /** @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2` instead. */
    wishlist: Wishlist;
    wishlist_v2?: Maybe<Wishlist>;
    wishlists: Array<Maybe<Wishlist>>;
};

export type CustomerGift_RegistryArgs = {
    giftRegistryUid: Scalars['ID'];
};

export type CustomerOrdersArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    filter?: InputMaybe<CustomerOrdersFilterInput>;
    pageSize?: InputMaybe<Scalars['Int']>;
    scope?: InputMaybe<ScopeTypeEnum>;
    sort?: InputMaybe<CustomerOrderSortInput>;
};

export type CustomerReturnArgs = {
    uid: Scalars['ID'];
};

export type CustomerReturnsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type CustomerReviewsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type CustomerWishlist_V2Args = {
    id: Scalars['ID'];
};

export type CustomerWishlistsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type CustomerAddress = {
    __typename?: 'CustomerAddress';
    city?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    country_code?: Maybe<CountryCodeEnum>;
    /** @deprecated Use `country_code` instead. */
    country_id?: Maybe<Scalars['String']>;
    /** @deprecated Custom attributes should not be put into a container. */
    custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
    /** @deprecated `customer_id` is not needed as part of `CustomerAddress`. The `id` is a unique identifier for the addresses. */
    customer_id?: Maybe<Scalars['Int']>;
    default_billing?: Maybe<Scalars['Boolean']>;
    default_shipping?: Maybe<Scalars['Boolean']>;
    extension_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
    fax?: Maybe<Scalars['String']>;
    firstname?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    lastname?: Maybe<Scalars['String']>;
    middlename?: Maybe<Scalars['String']>;
    postcode?: Maybe<Scalars['String']>;
    prefix?: Maybe<Scalars['String']>;
    region?: Maybe<CustomerAddressRegion>;
    region_id?: Maybe<Scalars['Int']>;
    street?: Maybe<Array<Maybe<Scalars['String']>>>;
    suffix?: Maybe<Scalars['String']>;
    telephone?: Maybe<Scalars['String']>;
    vat_id?: Maybe<Scalars['String']>;
};

export type CustomerAddressAttribute = {
    __typename?: 'CustomerAddressAttribute';
    attribute_code?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};

export type CustomerAddressAttributeInput = {
    attribute_code: Scalars['String'];
    value: Scalars['String'];
};

export type CustomerAddressInput = {
    city?: InputMaybe<Scalars['String']>;
    company?: InputMaybe<Scalars['String']>;
    country_code?: InputMaybe<CountryCodeEnum>;
    country_id?: InputMaybe<CountryCodeEnum>;
    custom_attributes?: InputMaybe<
        Array<InputMaybe<CustomerAddressAttributeInput>>
    >;
    default_billing?: InputMaybe<Scalars['Boolean']>;
    default_shipping?: InputMaybe<Scalars['Boolean']>;
    fax?: InputMaybe<Scalars['String']>;
    firstname?: InputMaybe<Scalars['String']>;
    lastname?: InputMaybe<Scalars['String']>;
    middlename?: InputMaybe<Scalars['String']>;
    postcode?: InputMaybe<Scalars['String']>;
    prefix?: InputMaybe<Scalars['String']>;
    region?: InputMaybe<CustomerAddressRegionInput>;
    street?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    suffix?: InputMaybe<Scalars['String']>;
    telephone?: InputMaybe<Scalars['String']>;
    vat_id?: InputMaybe<Scalars['String']>;
};

export type CustomerAddressRegion = {
    __typename?: 'CustomerAddressRegion';
    region?: Maybe<Scalars['String']>;
    region_code?: Maybe<Scalars['String']>;
    region_id?: Maybe<Scalars['Int']>;
};

export type CustomerAddressRegionInput = {
    region?: InputMaybe<Scalars['String']>;
    region_code?: InputMaybe<Scalars['String']>;
    region_id?: InputMaybe<Scalars['Int']>;
};

export type CustomerCreateInput = {
    allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']>;
    date_of_birth?: InputMaybe<Scalars['String']>;
    dob?: InputMaybe<Scalars['String']>;
    email: Scalars['String'];
    firstname: Scalars['String'];
    gender?: InputMaybe<Scalars['Int']>;
    is_subscribed?: InputMaybe<Scalars['Boolean']>;
    lastname: Scalars['String'];
    middlename?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
    prefix?: InputMaybe<Scalars['String']>;
    suffix?: InputMaybe<Scalars['String']>;
    taxvat?: InputMaybe<Scalars['String']>;
};

export type CustomerDownloadableProduct = {
    __typename?: 'CustomerDownloadableProduct';
    date?: Maybe<Scalars['String']>;
    download_url?: Maybe<Scalars['String']>;
    order_increment_id?: Maybe<Scalars['String']>;
    remaining_downloads?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
};

export type CustomerDownloadableProducts = {
    __typename?: 'CustomerDownloadableProducts';
    items?: Maybe<Array<Maybe<CustomerDownloadableProduct>>>;
};

export type CustomerInput = {
    date_of_birth?: InputMaybe<Scalars['String']>;
    dob?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    firstname?: InputMaybe<Scalars['String']>;
    gender?: InputMaybe<Scalars['Int']>;
    is_subscribed?: InputMaybe<Scalars['Boolean']>;
    lastname?: InputMaybe<Scalars['String']>;
    middlename?: InputMaybe<Scalars['String']>;
    moodle_id?: InputMaybe<Scalars['String']>;
    moodle_token?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
    prefix?: InputMaybe<Scalars['String']>;
    suffix?: InputMaybe<Scalars['String']>;
    taxvat?: InputMaybe<Scalars['String']>;
};

export type CustomerOrder = {
    __typename?: 'CustomerOrder';
    billing_address?: Maybe<OrderAddress>;
    carrier?: Maybe<Scalars['String']>;
    comment?: Maybe<Scalars['String']>;
    comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
    /** @deprecated Use the `order_date` field instead. */
    created_at?: Maybe<Scalars['String']>;
    credit_memos?: Maybe<Array<Maybe<CreditMemo>>>;
    external_order_number?: Maybe<Scalars['String']>;
    gift_message?: Maybe<GiftMessage>;
    gift_receipt_included: Scalars['Boolean'];
    gift_wrapping?: Maybe<GiftWrapping>;
    /** @deprecated Use the `totals.grand_total` field instead. */
    grand_total?: Maybe<Scalars['Float']>;
    id: Scalars['ID'];
    /** @deprecated Use the `id` field instead. */
    increment_id?: Maybe<Scalars['String']>;
    invoices: Array<Maybe<Invoice>>;
    items?: Maybe<Array<Maybe<OrderItemInterface>>>;
    items_eligible_for_return?: Maybe<Array<Maybe<OrderItemInterface>>>;
    mp_delivery_information?: Maybe<MpDeliveryInformationOutput>;
    number: Scalars['String'];
    order_date: Scalars['String'];
    /** @deprecated Use the `number` field instead. */
    order_number: Scalars['String'];
    payment_methods?: Maybe<Array<Maybe<OrderPaymentMethod>>>;
    printed_card_included: Scalars['Boolean'];
    returns?: Maybe<Returns>;
    shipments?: Maybe<Array<Maybe<OrderShipment>>>;
    shipping_address?: Maybe<OrderAddress>;
    shipping_method?: Maybe<Scalars['String']>;
    state: Scalars['String'];
    status: Scalars['String'];
    store_id?: Maybe<Scalars['String']>;
    total?: Maybe<OrderTotal>;
};

export type CustomerOrderReturnsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type CustomerOrderSortInput = {
    sort_direction: SortEnum;
    sort_field: CustomerOrderSortableField;
};

export enum CustomerOrderSortableField {
    /** @deprecated  */
    CreatedAt = 'CREATED_AT',
    /** @deprecated  */
    Number = 'NUMBER'
}

export type CustomerOrders = {
    __typename?: 'CustomerOrders';
    items: Array<Maybe<CustomerOrder>>;
    page_info?: Maybe<SearchResultPageInfo>;
    total_count?: Maybe<Scalars['Int']>;
};

export type CustomerOrdersFilterInput = {
    number?: InputMaybe<FilterStringTypeInput>;
};

export type CustomerOutput = {
    __typename?: 'CustomerOutput';
    customer: Customer;
};

export type CustomerPaymentTokens = {
    __typename?: 'CustomerPaymentTokens';
    items: Array<Maybe<PaymentToken>>;
};

export type CustomerStoreCredit = {
    __typename?: 'CustomerStoreCredit';
    balance_history?: Maybe<CustomerStoreCreditHistory>;
    current_balance?: Maybe<Money>;
    enabled?: Maybe<Scalars['Boolean']>;
};

export type CustomerStoreCreditBalance_HistoryArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type CustomerStoreCreditHistory = {
    __typename?: 'CustomerStoreCreditHistory';
    items?: Maybe<Array<Maybe<CustomerStoreCreditHistoryItem>>>;
    page_info?: Maybe<SearchResultPageInfo>;
    total_count?: Maybe<Scalars['Int']>;
};

export type CustomerStoreCreditHistoryItem = {
    __typename?: 'CustomerStoreCreditHistoryItem';
    action?: Maybe<Scalars['String']>;
    actual_balance?: Maybe<Money>;
    balance_change?: Maybe<Money>;
    date_time_changed?: Maybe<Scalars['String']>;
};

export type CustomerToken = {
    __typename?: 'CustomerToken';
    token?: Maybe<Scalars['String']>;
};

export type CustomerUpdateInput = {
    allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']>;
    date_of_birth?: InputMaybe<Scalars['String']>;
    dob?: InputMaybe<Scalars['String']>;
    firstname?: InputMaybe<Scalars['String']>;
    gender?: InputMaybe<Scalars['Int']>;
    is_subscribed?: InputMaybe<Scalars['Boolean']>;
    lastname?: InputMaybe<Scalars['String']>;
    middlename?: InputMaybe<Scalars['String']>;
    prefix?: InputMaybe<Scalars['String']>;
    suffix?: InputMaybe<Scalars['String']>;
    taxvat?: InputMaybe<Scalars['String']>;
};

export type CustomizableAreaOption = CustomizableOptionInterface & {
    __typename?: 'CustomizableAreaOption';
    /** @deprecated Use `uid` instead */
    option_id?: Maybe<Scalars['Int']>;
    product_sku?: Maybe<Scalars['String']>;
    required?: Maybe<Scalars['Boolean']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
    value?: Maybe<CustomizableAreaValue>;
};

export type CustomizableAreaValue = {
    __typename?: 'CustomizableAreaValue';
    max_characters?: Maybe<Scalars['Int']>;
    price?: Maybe<Scalars['Float']>;
    price_type?: Maybe<PriceTypeEnum>;
    sku?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};

export type CustomizableCheckboxOption = CustomizableOptionInterface & {
    __typename?: 'CustomizableCheckboxOption';
    /** @deprecated Use `uid` instead */
    option_id?: Maybe<Scalars['Int']>;
    required?: Maybe<Scalars['Boolean']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
    value?: Maybe<Array<Maybe<CustomizableCheckboxValue>>>;
};

export type CustomizableCheckboxValue = {
    __typename?: 'CustomizableCheckboxValue';
    option_type_id?: Maybe<Scalars['Int']>;
    price?: Maybe<Scalars['Float']>;
    price_type?: Maybe<PriceTypeEnum>;
    sku?: Maybe<Scalars['String']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};

export type CustomizableDateOption = CustomizableOptionInterface & {
    __typename?: 'CustomizableDateOption';
    /** @deprecated Use `uid` instead */
    option_id?: Maybe<Scalars['Int']>;
    product_sku?: Maybe<Scalars['String']>;
    required?: Maybe<Scalars['Boolean']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
    value?: Maybe<CustomizableDateValue>;
};

export enum CustomizableDateTypeEnum {
    /** @deprecated  */
    Date = 'DATE',
    /** @deprecated  */
    DateTime = 'DATE_TIME',
    /** @deprecated  */
    Time = 'TIME'
}

export type CustomizableDateValue = {
    __typename?: 'CustomizableDateValue';
    price?: Maybe<Scalars['Float']>;
    price_type?: Maybe<PriceTypeEnum>;
    sku?: Maybe<Scalars['String']>;
    type?: Maybe<CustomizableDateTypeEnum>;
    uid: Scalars['ID'];
};

export type CustomizableDropDownOption = CustomizableOptionInterface & {
    __typename?: 'CustomizableDropDownOption';
    /** @deprecated Use `uid` instead */
    option_id?: Maybe<Scalars['Int']>;
    required?: Maybe<Scalars['Boolean']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
    value?: Maybe<Array<Maybe<CustomizableDropDownValue>>>;
};

export type CustomizableDropDownValue = {
    __typename?: 'CustomizableDropDownValue';
    option_type_id?: Maybe<Scalars['Int']>;
    price?: Maybe<Scalars['Float']>;
    price_type?: Maybe<PriceTypeEnum>;
    sku?: Maybe<Scalars['String']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};

export type CustomizableFieldOption = CustomizableOptionInterface & {
    __typename?: 'CustomizableFieldOption';
    /** @deprecated Use `uid` instead */
    option_id?: Maybe<Scalars['Int']>;
    product_sku?: Maybe<Scalars['String']>;
    required?: Maybe<Scalars['Boolean']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
    value?: Maybe<CustomizableFieldValue>;
};

export type CustomizableFieldValue = {
    __typename?: 'CustomizableFieldValue';
    max_characters?: Maybe<Scalars['Int']>;
    price?: Maybe<Scalars['Float']>;
    price_type?: Maybe<PriceTypeEnum>;
    sku?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};

export type CustomizableFileOption = CustomizableOptionInterface & {
    __typename?: 'CustomizableFileOption';
    /** @deprecated Use `uid` instead */
    option_id?: Maybe<Scalars['Int']>;
    product_sku?: Maybe<Scalars['String']>;
    required?: Maybe<Scalars['Boolean']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
    value?: Maybe<CustomizableFileValue>;
};

export type CustomizableFileValue = {
    __typename?: 'CustomizableFileValue';
    file_extension?: Maybe<Scalars['String']>;
    image_size_x?: Maybe<Scalars['Int']>;
    image_size_y?: Maybe<Scalars['Int']>;
    price?: Maybe<Scalars['Float']>;
    price_type?: Maybe<PriceTypeEnum>;
    sku?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};

export type CustomizableMultipleOption = CustomizableOptionInterface & {
    __typename?: 'CustomizableMultipleOption';
    /** @deprecated Use `uid` instead */
    option_id?: Maybe<Scalars['Int']>;
    required?: Maybe<Scalars['Boolean']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
    value?: Maybe<Array<Maybe<CustomizableMultipleValue>>>;
};

export type CustomizableMultipleValue = {
    __typename?: 'CustomizableMultipleValue';
    option_type_id?: Maybe<Scalars['Int']>;
    price?: Maybe<Scalars['Float']>;
    price_type?: Maybe<PriceTypeEnum>;
    sku?: Maybe<Scalars['String']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};

export type CustomizableOptionInput = {
    id?: InputMaybe<Scalars['Int']>;
    value_string: Scalars['String'];
};

export type CustomizableOptionInterface = {
    /** @deprecated Use `uid` instead */
    option_id?: Maybe<Scalars['Int']>;
    required?: Maybe<Scalars['Boolean']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};

export type CustomizableProductInterface = {
    options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
};

export type CustomizableRadioOption = CustomizableOptionInterface & {
    __typename?: 'CustomizableRadioOption';
    /** @deprecated Use `uid` instead */
    option_id?: Maybe<Scalars['Int']>;
    required?: Maybe<Scalars['Boolean']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
    value?: Maybe<Array<Maybe<CustomizableRadioValue>>>;
};

export type CustomizableRadioValue = {
    __typename?: 'CustomizableRadioValue';
    option_type_id?: Maybe<Scalars['Int']>;
    price?: Maybe<Scalars['Float']>;
    price_type?: Maybe<PriceTypeEnum>;
    sku?: Maybe<Scalars['String']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};

export type DeleteCompareListOutput = {
    __typename?: 'DeleteCompareListOutput';
    result: Scalars['Boolean'];
};

export type DeleteItemFromMpQuoteOutput = {
    __typename?: 'DeleteItemFromMpQuoteOutput';
    quote: Quote;
};

export type DeletePaymentTokenOutput = {
    __typename?: 'DeletePaymentTokenOutput';
    customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
    result: Scalars['Boolean'];
};

export type DeleteWishlistOutput = {
    __typename?: 'DeleteWishlistOutput';
    status: Scalars['Boolean'];
    wishlists: Array<Maybe<Wishlist>>;
};

export type DeliveryInformation = {
    __typename?: 'DeliveryInformation';
    deliveryDateFormat?: Maybe<Scalars['String']>;
    deliveryDateOff?: Maybe<Array<Maybe<Scalars['String']>>>;
    deliveryDaysOff?: Maybe<Array<Maybe<Scalars['String']>>>;
    deliveryTime?: Maybe<Array<Maybe<Scalars['String']>>>;
    isEnabledDeliveryComment?: Maybe<Scalars['String']>;
    isEnabledDeliveryTime?: Maybe<Scalars['String']>;
    isEnabledHouseSecurityCode?: Maybe<Scalars['String']>;
};

export type DeliveryTimeInput = {
    mp_delivery_comment?: InputMaybe<Scalars['String']>;
    mp_delivery_date?: InputMaybe<Scalars['String']>;
    mp_delivery_time?: InputMaybe<Scalars['String']>;
    mp_house_security_code?: InputMaybe<Scalars['String']>;
};

export type Discount = {
    __typename?: 'Discount';
    amount: Money;
    label: Scalars['String'];
};

export type DownloadableCartItem = CartItemInterface & {
    __typename?: 'DownloadableCartItem';
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    errors?: Maybe<Array<Maybe<CartItemError>>>;
    /** @deprecated Use `uid` instead. */
    id: Scalars['String'];
    links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    quantity: Scalars['Float'];
    samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
    uid: Scalars['ID'];
};

export type DownloadableCreditMemoItem = CreditMemoItemInterface & {
    __typename?: 'DownloadableCreditMemoItem';
    discounts?: Maybe<Array<Maybe<Discount>>>;
    downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_refunded?: Maybe<Scalars['Float']>;
};

export enum DownloadableFileTypeEnum {
    /** @deprecated `sample_url` serves to get the downloadable sample */
    File = 'FILE',
    /** @deprecated `sample_url` serves to get the downloadable sample */
    Url = 'URL'
}

export type DownloadableInvoiceItem = InvoiceItemInterface & {
    __typename?: 'DownloadableInvoiceItem';
    discounts?: Maybe<Array<Maybe<Discount>>>;
    downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_invoiced?: Maybe<Scalars['Float']>;
};

export type DownloadableItemsLinks = {
    __typename?: 'DownloadableItemsLinks';
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};

export type DownloadableOrderItem = OrderItemInterface & {
    __typename?: 'DownloadableOrderItem';
    discounts?: Maybe<Array<Maybe<Discount>>>;
    downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
    eligible_for_return?: Maybe<Scalars['Boolean']>;
    entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
    gift_message?: Maybe<GiftMessage>;
    gift_wrapping?: Maybe<GiftWrapping>;
    id: Scalars['ID'];
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    product_type?: Maybe<Scalars['String']>;
    product_url_key?: Maybe<Scalars['String']>;
    quantity_canceled?: Maybe<Scalars['Float']>;
    quantity_invoiced?: Maybe<Scalars['Float']>;
    quantity_ordered?: Maybe<Scalars['Float']>;
    quantity_refunded?: Maybe<Scalars['Float']>;
    quantity_returned?: Maybe<Scalars['Float']>;
    quantity_shipped?: Maybe<Scalars['Float']>;
    selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
    status?: Maybe<Scalars['String']>;
};

export type DownloadableProduct = CustomizableProductInterface &
    ProductInterface &
    RoutableInterface & {
        __typename?: 'DownloadableProduct';
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_announcement_date?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_brand?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_custom_engraving_text?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_detailed_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_gemstone_addon?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_recyclable_material?: Maybe<Scalars['Int']>;
        /** @deprecated The field should not be used on the storefront. */
        attribute_set_id?: Maybe<Scalars['Int']>;
        canonical_url?: Maybe<Scalars['String']>;
        categories?: Maybe<Array<Maybe<CategoryInterface>>>;
        /** @deprecated Use the `custom_attributes` field instead. */
        color?: Maybe<Scalars['Int']>;
        country_of_manufacture?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        created_at?: Maybe<Scalars['String']>;
        crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        custom_attributes: Array<Maybe<CustomAttribute>>;
        description?: Maybe<ComplexTextValue>;
        /** @deprecated Use the `custom_attributes` field instead. */
        description_extra?: Maybe<Scalars['String']>;
        downloadable_product_links?: Maybe<
            Array<Maybe<DownloadableProductLinks>>
        >;
        downloadable_product_samples?: Maybe<
            Array<Maybe<DownloadableProductSamples>>
        >;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_color?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_material?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_size?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_style?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        format?: Maybe<Scalars['Int']>;
        gift_message_available?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        has_video?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `uid` field instead. */
        id?: Maybe<Scalars['Int']>;
        image?: Maybe<ProductImage>;
        is_returnable?: Maybe<Scalars['String']>;
        links_purchased_separately?: Maybe<Scalars['Int']>;
        links_title?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        manufacturer?: Maybe<Scalars['Int']>;
        media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
        /** @deprecated Use `media_gallery` instead. */
        media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
        meta_description?: Maybe<Scalars['String']>;
        meta_keyword?: Maybe<Scalars['String']>;
        meta_title?: Maybe<Scalars['String']>;
        name?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        new_from_date?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        new_to_date?: Maybe<Scalars['String']>;
        only_x_left_in_stock?: Maybe<Scalars['Float']>;
        options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
        options_container?: Maybe<Scalars['String']>;
        orParentSku?: Maybe<Scalars['String']>;
        orParentUrlKey?: Maybe<Scalars['String']>;
        /** @deprecated Use `price_range` for product price information. */
        price?: Maybe<ProductPrices>;
        price_range: PriceRange;
        price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
        product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
        rating_summary: Scalars['Float'];
        redirect_code: Scalars['Int'];
        related_products?: Maybe<Array<Maybe<ProductInterface>>>;
        relative_url?: Maybe<Scalars['String']>;
        review_count: Scalars['Int'];
        reviews: ProductReviews;
        short_description?: Maybe<ComplexTextValue>;
        sku?: Maybe<Scalars['String']>;
        small_image?: Maybe<ProductImage>;
        /** @deprecated The field should not be used on the storefront. */
        special_from_date?: Maybe<Scalars['String']>;
        special_price?: Maybe<Scalars['Float']>;
        special_to_date?: Maybe<Scalars['String']>;
        staged: Scalars['Boolean'];
        stock_status?: Maybe<ProductStockStatus>;
        swatch_image?: Maybe<Scalars['String']>;
        thumbnail?: Maybe<ProductImage>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_price?: Maybe<Scalars['Float']>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
        type?: Maybe<UrlRewriteEntityTypeEnum>;
        /** @deprecated Use `__typename` instead. */
        type_id?: Maybe<Scalars['String']>;
        uid: Scalars['ID'];
        /** @deprecated The field should not be used on the storefront. */
        updated_at?: Maybe<Scalars['String']>;
        upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        url_key?: Maybe<Scalars['String']>;
        /** @deprecated Use product's `canonical_url` or url rewrites instead */
        url_path?: Maybe<Scalars['String']>;
        url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
        url_suffix?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        video_file?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        websites?: Maybe<Array<Maybe<Website>>>;
    };

export type DownloadableProductReviewsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type DownloadableProductCartItemInput = {
    customizable_options?: InputMaybe<
        Array<InputMaybe<CustomizableOptionInput>>
    >;
    data: CartItemInput;
    downloadable_product_links?: InputMaybe<
        Array<InputMaybe<DownloadableProductLinksInput>>
    >;
};

export type DownloadableProductLinks = {
    __typename?: 'DownloadableProductLinks';
    /** @deprecated This information should not be exposed on frontend. */
    id?: Maybe<Scalars['Int']>;
    /** @deprecated This information should not be exposed on frontend. */
    is_shareable?: Maybe<Scalars['Boolean']>;
    /** @deprecated `sample_url` serves to get the downloadable sample */
    link_type?: Maybe<DownloadableFileTypeEnum>;
    /** @deprecated This information should not be exposed on frontend. */
    number_of_downloads?: Maybe<Scalars['Int']>;
    price?: Maybe<Scalars['Float']>;
    /** @deprecated `sample_url` serves to get the downloadable sample */
    sample_file?: Maybe<Scalars['String']>;
    /** @deprecated `sample_url` serves to get the downloadable sample */
    sample_type?: Maybe<DownloadableFileTypeEnum>;
    sample_url?: Maybe<Scalars['String']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};

export type DownloadableProductLinksInput = {
    link_id: Scalars['Int'];
};

export type DownloadableProductSamples = {
    __typename?: 'DownloadableProductSamples';
    /** @deprecated This information should not be exposed on frontend. */
    id?: Maybe<Scalars['Int']>;
    /** @deprecated `sample_url` serves to get the downloadable sample */
    sample_file?: Maybe<Scalars['String']>;
    /** @deprecated `sample_url` serves to get the downloadable sample */
    sample_type?: Maybe<DownloadableFileTypeEnum>;
    sample_url?: Maybe<Scalars['String']>;
    sort_order?: Maybe<Scalars['Int']>;
    title?: Maybe<Scalars['String']>;
};

export type DownloadableQuoteItem = QuoteItemInterface & {
    __typename?: 'DownloadableQuoteItem';
    calculation_price?: Maybe<Scalars['String']>;
    customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
    discount?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
    name?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    qty: Scalars['Float'];
    quote_id?: Maybe<Scalars['Int']>;
    request_price?: Maybe<Scalars['String']>;
    samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
    sku?: Maybe<Scalars['String']>;
};

export type DownloadableWishlistItem = WishlistItemInterface & {
    __typename?: 'DownloadableWishlistItem';
    added_at: Scalars['String'];
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    links_v2?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
    product?: Maybe<ProductInterface>;
    quantity: Scalars['Float'];
    samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
};

export type DuplicateMpQuoteOutput = {
    __typename?: 'DuplicateMpQuoteOutput';
    quote: Quote;
};

export type DynamicBlock = {
    __typename?: 'DynamicBlock';
    content: ComplexTextValue;
    uid: Scalars['ID'];
};

export enum DynamicBlockLocationEnum {
    /** @deprecated  */
    Content = 'CONTENT',
    /** @deprecated  */
    Footer = 'FOOTER',
    /** @deprecated  */
    Header = 'HEADER',
    /** @deprecated  */
    Left = 'LEFT',
    /** @deprecated  */
    Right = 'RIGHT'
}

export enum DynamicBlockTypeEnum {
    /** @deprecated  */
    CartPriceRuleRelated = 'CART_PRICE_RULE_RELATED',
    /** @deprecated  */
    CatalogPriceRuleRelated = 'CATALOG_PRICE_RULE_RELATED',
    /** @deprecated  */
    Specified = 'SPECIFIED'
}

export type DynamicBlocks = {
    __typename?: 'DynamicBlocks';
    items: Array<Maybe<DynamicBlock>>;
    page_info?: Maybe<SearchResultPageInfo>;
    salesRulesData?: Maybe<Scalars['String']>;
    total_count: Scalars['Int'];
};

export type DynamicBlocksFilterInput = {
    cart_id?: InputMaybe<Scalars['String']>;
    dynamic_block_uids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    locations?: InputMaybe<Array<InputMaybe<DynamicBlockLocationEnum>>>;
    product_uid?: InputMaybe<Scalars['ID']>;
    type: DynamicBlockTypeEnum;
};

export type EmailResponse = {
    __typename?: 'EmailResponse';
    message?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['Boolean']>;
};

export type EnteredAttributeValue = {
    __typename?: 'EnteredAttributeValue';
    value?: Maybe<Scalars['String']>;
};

export type EnteredCustomAttributeInput = {
    attribute_code: Scalars['String'];
    value: Scalars['String'];
};

export type EnteredOptionInput = {
    uid: Scalars['ID'];
    value: Scalars['String'];
};

export type EntityUrl = {
    __typename?: 'EntityUrl';
    /** @deprecated Use `relative_url` instead. */
    canonical_url?: Maybe<Scalars['String']>;
    entity_uid?: Maybe<Scalars['ID']>;
    /** @deprecated Use `entity_uid` instead. */
    id?: Maybe<Scalars['Int']>;
    redirectCode?: Maybe<Scalars['Int']>;
    relative_url?: Maybe<Scalars['String']>;
    type?: Maybe<UrlRewriteEntityTypeEnum>;
};

export type ErrorInterface = {
    message: Scalars['String'];
};

export type ExchangeRate = {
    __typename?: 'ExchangeRate';
    currency_to?: Maybe<Scalars['String']>;
    rate?: Maybe<Scalars['Float']>;
};

export type ExtraInfoBankTransferPayment = {
    __typename?: 'ExtraInfoBankTransferPayment';
    instructions?: Maybe<Scalars['String']>;
};

export type FilterEqualTypeInput = {
    eq?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FilterMatchTypeInput = {
    match?: InputMaybe<Scalars['String']>;
};

export type FilterRangeTypeInput = {
    from?: InputMaybe<Scalars['String']>;
    to?: InputMaybe<Scalars['String']>;
};

export type FilterStringTypeInput = {
    eq?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    match?: InputMaybe<Scalars['String']>;
};

export type FilterTypeInput = {
    eq?: InputMaybe<Scalars['String']>;
    finset?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    from?: InputMaybe<Scalars['String']>;
    gt?: InputMaybe<Scalars['String']>;
    gteq?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    like?: InputMaybe<Scalars['String']>;
    lt?: InputMaybe<Scalars['String']>;
    lteq?: InputMaybe<Scalars['String']>;
    moreq?: InputMaybe<Scalars['String']>;
    neq?: InputMaybe<Scalars['String']>;
    nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    notnull?: InputMaybe<Scalars['String']>;
    null?: InputMaybe<Scalars['String']>;
    to?: InputMaybe<Scalars['String']>;
};

export type FixedProductTax = {
    __typename?: 'FixedProductTax';
    amount?: Maybe<Money>;
    label?: Maybe<Scalars['String']>;
};

export enum FixedProductTaxDisplaySettings {
    /** @deprecated  */
    ExcludeFptAndIncludeWithDetails = 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS',
    /** @deprecated  */
    ExcludeFptWithoutDetails = 'EXCLUDE_FPT_WITHOUT_DETAILS',
    /** @deprecated  */
    FptDisabled = 'FPT_DISABLED',
    /** @deprecated  */
    IncludeFptWithoutDetails = 'INCLUDE_FPT_WITHOUT_DETAILS',
    /** @deprecated  */
    IncludeFptWithDetails = 'INCLUDE_FPT_WITH_DETAILS'
}

export type GenerateCustomerTokenAsAdminInput = {
    customer_email: Scalars['String'];
};

export type GenerateCustomerTokenAsAdminOutput = {
    __typename?: 'GenerateCustomerTokenAsAdminOutput';
    customer_token: Scalars['String'];
};

export type GetMpQuoteOutput = {
    __typename?: 'GetMpQuoteOutput';
    quote: Quote;
};

export type GiftCardAccount = {
    __typename?: 'GiftCardAccount';
    balance?: Maybe<Money>;
    code?: Maybe<Scalars['String']>;
    expiration_date?: Maybe<Scalars['String']>;
};

export type GiftCardAccountInput = {
    gift_card_code: Scalars['String'];
};

export type GiftCardAmounts = {
    __typename?: 'GiftCardAmounts';
    attribute_id?: Maybe<Scalars['Int']>;
    uid: Scalars['ID'];
    value?: Maybe<Scalars['Float']>;
    /** @deprecated Use `uid` instead */
    value_id?: Maybe<Scalars['Int']>;
    website_id?: Maybe<Scalars['Int']>;
    website_value?: Maybe<Scalars['Float']>;
};

export type GiftCardCartItem = CartItemInterface & {
    __typename?: 'GiftCardCartItem';
    amount: Money;
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    errors?: Maybe<Array<Maybe<CartItemError>>>;
    /** @deprecated Use `uid` instead. */
    id: Scalars['String'];
    message?: Maybe<Scalars['String']>;
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    quantity: Scalars['Float'];
    recipient_email?: Maybe<Scalars['String']>;
    recipient_name: Scalars['String'];
    sender_email?: Maybe<Scalars['String']>;
    sender_name: Scalars['String'];
    uid: Scalars['ID'];
};

export type GiftCardCreditMemoItem = CreditMemoItemInterface & {
    __typename?: 'GiftCardCreditMemoItem';
    discounts?: Maybe<Array<Maybe<Discount>>>;
    gift_card?: Maybe<GiftCardItem>;
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_refunded?: Maybe<Scalars['Float']>;
};

export type GiftCardInvoiceItem = InvoiceItemInterface & {
    __typename?: 'GiftCardInvoiceItem';
    discounts?: Maybe<Array<Maybe<Discount>>>;
    gift_card?: Maybe<GiftCardItem>;
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_invoiced?: Maybe<Scalars['Float']>;
};

export type GiftCardItem = {
    __typename?: 'GiftCardItem';
    message?: Maybe<Scalars['String']>;
    recipient_email?: Maybe<Scalars['String']>;
    recipient_name?: Maybe<Scalars['String']>;
    sender_email?: Maybe<Scalars['String']>;
    sender_name?: Maybe<Scalars['String']>;
};

export type GiftCardOptions = {
    __typename?: 'GiftCardOptions';
    amount?: Maybe<Money>;
    custom_giftcard_amount?: Maybe<Money>;
    message?: Maybe<Scalars['String']>;
    recipient_email?: Maybe<Scalars['String']>;
    recipient_name?: Maybe<Scalars['String']>;
    sender_email?: Maybe<Scalars['String']>;
    sender_name?: Maybe<Scalars['String']>;
};

export type GiftCardOrderItem = OrderItemInterface & {
    __typename?: 'GiftCardOrderItem';
    discounts?: Maybe<Array<Maybe<Discount>>>;
    eligible_for_return?: Maybe<Scalars['Boolean']>;
    entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
    gift_card?: Maybe<GiftCardItem>;
    gift_message?: Maybe<GiftMessage>;
    gift_wrapping?: Maybe<GiftWrapping>;
    id: Scalars['ID'];
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    product_type?: Maybe<Scalars['String']>;
    product_url_key?: Maybe<Scalars['String']>;
    quantity_canceled?: Maybe<Scalars['Float']>;
    quantity_invoiced?: Maybe<Scalars['Float']>;
    quantity_ordered?: Maybe<Scalars['Float']>;
    quantity_refunded?: Maybe<Scalars['Float']>;
    quantity_returned?: Maybe<Scalars['Float']>;
    quantity_shipped?: Maybe<Scalars['Float']>;
    selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
    status?: Maybe<Scalars['String']>;
};

export type GiftCardProduct = CustomizableProductInterface &
    PhysicalProductInterface &
    ProductInterface &
    RoutableInterface & {
        __typename?: 'GiftCardProduct';
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_announcement_date?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_brand?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_custom_engraving_text?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_detailed_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_gemstone_addon?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_recyclable_material?: Maybe<Scalars['Int']>;
        allow_message?: Maybe<Scalars['Boolean']>;
        allow_open_amount?: Maybe<Scalars['Boolean']>;
        /** @deprecated The field should not be used on the storefront. */
        attribute_set_id?: Maybe<Scalars['Int']>;
        canonical_url?: Maybe<Scalars['String']>;
        categories?: Maybe<Array<Maybe<CategoryInterface>>>;
        /** @deprecated Use the `custom_attributes` field instead. */
        color?: Maybe<Scalars['Int']>;
        country_of_manufacture?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        created_at?: Maybe<Scalars['String']>;
        crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        custom_attributes: Array<Maybe<CustomAttribute>>;
        description?: Maybe<ComplexTextValue>;
        /** @deprecated Use the `custom_attributes` field instead. */
        description_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_color?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_material?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_size?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_style?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        format?: Maybe<Scalars['Int']>;
        gift_card_options: Array<Maybe<CustomizableOptionInterface>>;
        gift_message_available?: Maybe<Scalars['String']>;
        giftcard_amounts?: Maybe<Array<Maybe<GiftCardAmounts>>>;
        giftcard_type?: Maybe<GiftCardTypeEnum>;
        /** @deprecated Use the `custom_attributes` field instead. */
        has_video?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `uid` field instead. */
        id?: Maybe<Scalars['Int']>;
        image?: Maybe<ProductImage>;
        is_redeemable?: Maybe<Scalars['Boolean']>;
        is_returnable?: Maybe<Scalars['String']>;
        lifetime?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        manufacturer?: Maybe<Scalars['Int']>;
        media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
        /** @deprecated Use `media_gallery` instead. */
        media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
        message_max_length?: Maybe<Scalars['Int']>;
        meta_description?: Maybe<Scalars['String']>;
        meta_keyword?: Maybe<Scalars['String']>;
        meta_title?: Maybe<Scalars['String']>;
        name?: Maybe<Scalars['String']>;
        new_from_date?: Maybe<Scalars['String']>;
        new_to_date?: Maybe<Scalars['String']>;
        only_x_left_in_stock?: Maybe<Scalars['Float']>;
        open_amount_max?: Maybe<Scalars['Float']>;
        open_amount_min?: Maybe<Scalars['Float']>;
        options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
        options_container?: Maybe<Scalars['String']>;
        orParentSku?: Maybe<Scalars['String']>;
        orParentUrlKey?: Maybe<Scalars['String']>;
        /** @deprecated Use `price_range` for product price information. */
        price?: Maybe<ProductPrices>;
        price_range: PriceRange;
        price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
        product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
        rating_summary: Scalars['Float'];
        redirect_code: Scalars['Int'];
        related_products?: Maybe<Array<Maybe<ProductInterface>>>;
        relative_url?: Maybe<Scalars['String']>;
        review_count: Scalars['Int'];
        reviews: ProductReviews;
        short_description?: Maybe<ComplexTextValue>;
        sku?: Maybe<Scalars['String']>;
        small_image?: Maybe<ProductImage>;
        /** @deprecated The field should not be used on the storefront. */
        special_from_date?: Maybe<Scalars['String']>;
        special_price?: Maybe<Scalars['Float']>;
        special_to_date?: Maybe<Scalars['String']>;
        staged: Scalars['Boolean'];
        stock_status?: Maybe<ProductStockStatus>;
        swatch_image?: Maybe<Scalars['String']>;
        thumbnail?: Maybe<ProductImage>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_price?: Maybe<Scalars['Float']>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
        type?: Maybe<UrlRewriteEntityTypeEnum>;
        /** @deprecated Use `__typename` instead. */
        type_id?: Maybe<Scalars['String']>;
        uid: Scalars['ID'];
        /** @deprecated The field should not be used on the storefront. */
        updated_at?: Maybe<Scalars['String']>;
        upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        url_key?: Maybe<Scalars['String']>;
        /** @deprecated Use product's `canonical_url` or url rewrites instead */
        url_path?: Maybe<Scalars['String']>;
        url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
        url_suffix?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        video_file?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        websites?: Maybe<Array<Maybe<Website>>>;
        weight?: Maybe<Scalars['Float']>;
    };

export type GiftCardProductReviewsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type GiftCardShipmentItem = ShipmentItemInterface & {
    __typename?: 'GiftCardShipmentItem';
    gift_card?: Maybe<GiftCardItem>;
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_shipped: Scalars['Float'];
};

export enum GiftCardTypeEnum {
    /** @deprecated  */
    Combined = 'COMBINED',
    /** @deprecated  */
    Physical = 'PHYSICAL',
    /** @deprecated  */
    Virtual = 'VIRTUAL'
}

export type GiftCardWishlistItem = WishlistItemInterface & {
    __typename?: 'GiftCardWishlistItem';
    added_at: Scalars['String'];
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    description?: Maybe<Scalars['String']>;
    gift_card_options: GiftCardOptions;
    id: Scalars['ID'];
    product?: Maybe<ProductInterface>;
    quantity: Scalars['Float'];
};

export type GiftMessage = {
    __typename?: 'GiftMessage';
    from: Scalars['String'];
    message: Scalars['String'];
    to: Scalars['String'];
};

export type GiftMessageInput = {
    from: Scalars['String'];
    message: Scalars['String'];
    to: Scalars['String'];
};

export type GiftOptionsPrices = {
    __typename?: 'GiftOptionsPrices';
    gift_wrapping_for_items?: Maybe<Money>;
    gift_wrapping_for_order?: Maybe<Money>;
    printed_card?: Maybe<Money>;
};

export type GiftRegistry = {
    __typename?: 'GiftRegistry';
    created_at: Scalars['String'];
    dynamic_attributes?: Maybe<Array<Maybe<GiftRegistryDynamicAttribute>>>;
    event_name: Scalars['String'];
    items?: Maybe<Array<Maybe<GiftRegistryItemInterface>>>;
    message: Scalars['String'];
    owner_name: Scalars['String'];
    privacy_settings: GiftRegistryPrivacySettings;
    registrants?: Maybe<Array<Maybe<GiftRegistryRegistrant>>>;
    shipping_address?: Maybe<CustomerAddress>;
    status: GiftRegistryStatus;
    type?: Maybe<GiftRegistryType>;
    uid: Scalars['ID'];
};

export type GiftRegistryDynamicAttribute =
    GiftRegistryDynamicAttributeInterface & {
        __typename?: 'GiftRegistryDynamicAttribute';
        code: Scalars['ID'];
        group: GiftRegistryDynamicAttributeGroup;
        label: Scalars['String'];
        value: Scalars['String'];
    };

export enum GiftRegistryDynamicAttributeGroup {
    /** @deprecated  */
    DetailedInformation = 'DETAILED_INFORMATION',
    /** @deprecated  */
    EventInformation = 'EVENT_INFORMATION',
    /** @deprecated  */
    GeneralInformation = 'GENERAL_INFORMATION',
    /** @deprecated  */
    PrivacySettings = 'PRIVACY_SETTINGS',
    /** @deprecated  */
    Registrant = 'REGISTRANT',
    /** @deprecated  */
    ShippingAddress = 'SHIPPING_ADDRESS'
}

export type GiftRegistryDynamicAttributeInput = {
    code: Scalars['ID'];
    value: Scalars['String'];
};

export type GiftRegistryDynamicAttributeInterface = {
    code: Scalars['ID'];
    label: Scalars['String'];
    value: Scalars['String'];
};

export type GiftRegistryDynamicAttributeMetadata =
    GiftRegistryDynamicAttributeMetadataInterface & {
        __typename?: 'GiftRegistryDynamicAttributeMetadata';
        attribute_group: Scalars['String'];
        code: Scalars['ID'];
        input_type: Scalars['String'];
        is_required: Scalars['Boolean'];
        label: Scalars['String'];
        sort_order?: Maybe<Scalars['Int']>;
    };

export type GiftRegistryDynamicAttributeMetadataInterface = {
    attribute_group: Scalars['String'];
    code: Scalars['ID'];
    input_type: Scalars['String'];
    is_required: Scalars['Boolean'];
    label: Scalars['String'];
    sort_order?: Maybe<Scalars['Int']>;
};

export type GiftRegistryItem = GiftRegistryItemInterface & {
    __typename?: 'GiftRegistryItem';
    created_at: Scalars['String'];
    note?: Maybe<Scalars['String']>;
    product?: Maybe<ProductInterface>;
    quantity: Scalars['Float'];
    quantity_fulfilled: Scalars['Float'];
    uid: Scalars['ID'];
};

export type GiftRegistryItemInterface = {
    created_at: Scalars['String'];
    note?: Maybe<Scalars['String']>;
    product?: Maybe<ProductInterface>;
    quantity: Scalars['Float'];
    quantity_fulfilled: Scalars['Float'];
    uid: Scalars['ID'];
};

export type GiftRegistryItemUserErrorInterface = {
    status: Scalars['Boolean'];
    user_errors: Array<Maybe<GiftRegistryItemsUserError>>;
};

export type GiftRegistryItemUserErrors = GiftRegistryItemUserErrorInterface & {
    __typename?: 'GiftRegistryItemUserErrors';
    status: Scalars['Boolean'];
    user_errors: Array<Maybe<GiftRegistryItemsUserError>>;
};

export type GiftRegistryItemsUserError = {
    __typename?: 'GiftRegistryItemsUserError';
    code: GiftRegistryItemsUserErrorType;
    gift_registry_item_uid?: Maybe<Scalars['ID']>;
    gift_registry_uid?: Maybe<Scalars['ID']>;
    message: Scalars['String'];
    product_uid?: Maybe<Scalars['ID']>;
};

export enum GiftRegistryItemsUserErrorType {
    /** @deprecated  */
    NotFound = 'NOT_FOUND',
    /** @deprecated  */
    OutOfStock = 'OUT_OF_STOCK',
    /** @deprecated  */
    Undefined = 'UNDEFINED'
}

export type GiftRegistryOutput = GiftRegistryOutputInterface & {
    __typename?: 'GiftRegistryOutput';
    gift_registry?: Maybe<GiftRegistry>;
};

export type GiftRegistryOutputInterface = {
    gift_registry?: Maybe<GiftRegistry>;
};

export enum GiftRegistryPrivacySettings {
    /** @deprecated  */
    Private = 'PRIVATE',
    /** @deprecated  */
    Public = 'PUBLIC'
}

export type GiftRegistryRegistrant = {
    __typename?: 'GiftRegistryRegistrant';
    dynamic_attributes?: Maybe<
        Array<Maybe<GiftRegistryRegistrantDynamicAttribute>>
    >;
    email: Scalars['String'];
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    uid: Scalars['ID'];
};

export type GiftRegistryRegistrantDynamicAttribute =
    GiftRegistryDynamicAttributeInterface & {
        __typename?: 'GiftRegistryRegistrantDynamicAttribute';
        code: Scalars['ID'];
        label: Scalars['String'];
        value: Scalars['String'];
    };

export type GiftRegistrySearchResult = {
    __typename?: 'GiftRegistrySearchResult';
    event_date?: Maybe<Scalars['String']>;
    event_title: Scalars['String'];
    gift_registry_uid: Scalars['ID'];
    location?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    type?: Maybe<Scalars['String']>;
};

export type GiftRegistryShippingAddressInput = {
    address_data?: InputMaybe<CustomerAddressInput>;
    address_id?: InputMaybe<Scalars['ID']>;
};

export enum GiftRegistryStatus {
    /** @deprecated  */
    Active = 'ACTIVE',
    /** @deprecated  */
    Inactive = 'INACTIVE'
}

export type GiftRegistryType = {
    __typename?: 'GiftRegistryType';
    dynamic_attributes_metadata?: Maybe<
        Array<Maybe<GiftRegistryDynamicAttributeMetadataInterface>>
    >;
    label: Scalars['String'];
    uid: Scalars['ID'];
};

export type GiftWrapping = {
    __typename?: 'GiftWrapping';
    design: Scalars['String'];
    /** @deprecated Use `uid` instead */
    id: Scalars['ID'];
    image?: Maybe<GiftWrappingImage>;
    price: Money;
    uid: Scalars['ID'];
};

export type GiftWrappingImage = {
    __typename?: 'GiftWrappingImage';
    label: Scalars['String'];
    url: Scalars['String'];
};

export type GroupedProduct = PhysicalProductInterface &
    ProductInterface &
    RoutableInterface & {
        __typename?: 'GroupedProduct';
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_announcement_date?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_brand?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_custom_engraving_text?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_detailed_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_gemstone_addon?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_recyclable_material?: Maybe<Scalars['Int']>;
        /** @deprecated The field should not be used on the storefront. */
        attribute_set_id?: Maybe<Scalars['Int']>;
        canonical_url?: Maybe<Scalars['String']>;
        categories?: Maybe<Array<Maybe<CategoryInterface>>>;
        /** @deprecated Use the `custom_attributes` field instead. */
        color?: Maybe<Scalars['Int']>;
        country_of_manufacture?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        created_at?: Maybe<Scalars['String']>;
        crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        custom_attributes: Array<Maybe<CustomAttribute>>;
        description?: Maybe<ComplexTextValue>;
        /** @deprecated Use the `custom_attributes` field instead. */
        description_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_color?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_material?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_size?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_style?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        format?: Maybe<Scalars['Int']>;
        gift_message_available?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        has_video?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `uid` field instead. */
        id?: Maybe<Scalars['Int']>;
        image?: Maybe<ProductImage>;
        is_returnable?: Maybe<Scalars['String']>;
        items?: Maybe<Array<Maybe<GroupedProductItem>>>;
        /** @deprecated Use the `custom_attributes` field instead. */
        manufacturer?: Maybe<Scalars['Int']>;
        media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
        /** @deprecated Use `media_gallery` instead. */
        media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
        meta_description?: Maybe<Scalars['String']>;
        meta_keyword?: Maybe<Scalars['String']>;
        meta_title?: Maybe<Scalars['String']>;
        name?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        new_from_date?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        new_to_date?: Maybe<Scalars['String']>;
        only_x_left_in_stock?: Maybe<Scalars['Float']>;
        options_container?: Maybe<Scalars['String']>;
        orParentSku?: Maybe<Scalars['String']>;
        orParentUrlKey?: Maybe<Scalars['String']>;
        /** @deprecated Use `price_range` for product price information. */
        price?: Maybe<ProductPrices>;
        price_range: PriceRange;
        price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
        product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
        rating_summary: Scalars['Float'];
        redirect_code: Scalars['Int'];
        related_products?: Maybe<Array<Maybe<ProductInterface>>>;
        relative_url?: Maybe<Scalars['String']>;
        review_count: Scalars['Int'];
        reviews: ProductReviews;
        short_description?: Maybe<ComplexTextValue>;
        sku?: Maybe<Scalars['String']>;
        small_image?: Maybe<ProductImage>;
        /** @deprecated The field should not be used on the storefront. */
        special_from_date?: Maybe<Scalars['String']>;
        special_price?: Maybe<Scalars['Float']>;
        special_to_date?: Maybe<Scalars['String']>;
        staged: Scalars['Boolean'];
        stock_status?: Maybe<ProductStockStatus>;
        swatch_image?: Maybe<Scalars['String']>;
        thumbnail?: Maybe<ProductImage>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_price?: Maybe<Scalars['Float']>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
        type?: Maybe<UrlRewriteEntityTypeEnum>;
        /** @deprecated Use `__typename` instead. */
        type_id?: Maybe<Scalars['String']>;
        uid: Scalars['ID'];
        /** @deprecated The field should not be used on the storefront. */
        updated_at?: Maybe<Scalars['String']>;
        upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        url_key?: Maybe<Scalars['String']>;
        /** @deprecated Use product's `canonical_url` or url rewrites instead */
        url_path?: Maybe<Scalars['String']>;
        url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
        url_suffix?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        video_file?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        websites?: Maybe<Array<Maybe<Website>>>;
        weight?: Maybe<Scalars['Float']>;
    };

export type GroupedProductReviewsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type GroupedProductItem = {
    __typename?: 'GroupedProductItem';
    position?: Maybe<Scalars['Int']>;
    product?: Maybe<ProductInterface>;
    qty?: Maybe<Scalars['Float']>;
};

export type GroupedProductWishlistItem = WishlistItemInterface & {
    __typename?: 'GroupedProductWishlistItem';
    added_at: Scalars['String'];
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    product?: Maybe<ProductInterface>;
    quantity: Scalars['Float'];
};

export type HostedProInput = {
    cancel_url: Scalars['String'];
    return_url: Scalars['String'];
};

export type HostedProUrl = {
    __typename?: 'HostedProUrl';
    secure_form_url?: Maybe<Scalars['String']>;
};

export type HostedProUrlInput = {
    cart_id: Scalars['String'];
};

export type HttpQueryParameter = {
    __typename?: 'HttpQueryParameter';
    name?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};

export type ImageSwatchData = SwatchDataInterface & {
    __typename?: 'ImageSwatchData';
    thumbnail?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};

export type IncidencesData = {
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    images?: InputMaybe<Array<InputMaybe<IncidencesImage>>>;
    reference?: InputMaybe<Scalars['String']>;
    units?: InputMaybe<Scalars['Int']>;
};

export type IncidencesImage = {
    base64?: InputMaybe<Scalars['String']>;
    lastModified?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    size?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
    webkitRelativePath?: InputMaybe<Scalars['String']>;
};

export type InternalError = ErrorInterface & {
    __typename?: 'InternalError';
    message: Scalars['String'];
};

export type Invoice = {
    __typename?: 'Invoice';
    comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
    id: Scalars['ID'];
    items?: Maybe<Array<Maybe<InvoiceItemInterface>>>;
    number: Scalars['String'];
    total?: Maybe<InvoiceTotal>;
};

export type InvoiceItem = InvoiceItemInterface & {
    __typename?: 'InvoiceItem';
    discounts?: Maybe<Array<Maybe<Discount>>>;
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_invoiced?: Maybe<Scalars['Float']>;
};

export type InvoiceItemInterface = {
    discounts?: Maybe<Array<Maybe<Discount>>>;
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_invoiced?: Maybe<Scalars['Float']>;
};

export type InvoiceTotal = {
    __typename?: 'InvoiceTotal';
    base_grand_total: Money;
    discounts?: Maybe<Array<Maybe<Discount>>>;
    grand_total: Money;
    shipping_handling?: Maybe<ShippingHandling>;
    subtotal: Money;
    taxes?: Maybe<Array<Maybe<TaxItem>>>;
    total_shipping: Money;
    total_tax: Money;
};

export type IsEmailAvailableOutput = {
    __typename?: 'IsEmailAvailableOutput';
    is_email_available?: Maybe<Scalars['Boolean']>;
};

export type ItemSelectedBundleOption = {
    __typename?: 'ItemSelectedBundleOption';
    /** @deprecated Use `uid` instead. */
    id: Scalars['ID'];
    label: Scalars['String'];
    uid: Scalars['ID'];
    values?: Maybe<Array<Maybe<ItemSelectedBundleOptionValue>>>;
};

export type ItemSelectedBundleOptionValue = {
    __typename?: 'ItemSelectedBundleOptionValue';
    /** @deprecated Use `uid` instead. */
    id: Scalars['ID'];
    price: Money;
    product_name: Scalars['String'];
    product_sku: Scalars['String'];
    quantity: Scalars['Float'];
    uid: Scalars['ID'];
};

export type KeyValue = {
    __typename?: 'KeyValue';
    name?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};

export type LayerFilter = {
    __typename?: 'LayerFilter';
    /** @deprecated Use `Aggregation.options` instead. */
    filter_items?: Maybe<Array<Maybe<LayerFilterItemInterface>>>;
    /** @deprecated Use `Aggregation.count` instead. */
    filter_items_count?: Maybe<Scalars['Int']>;
    /** @deprecated Use `Aggregation.label` instead. */
    name?: Maybe<Scalars['String']>;
    /** @deprecated Use `Aggregation.attribute_code` instead. */
    request_var?: Maybe<Scalars['String']>;
};

export type LayerFilterItem = LayerFilterItemInterface & {
    __typename?: 'LayerFilterItem';
    /** @deprecated Use `AggregationOption.count` instead. */
    items_count?: Maybe<Scalars['Int']>;
    /** @deprecated Use `AggregationOption.label` instead. */
    label?: Maybe<Scalars['String']>;
    /** @deprecated Use `AggregationOption.value` instead. */
    value_string?: Maybe<Scalars['String']>;
};

export type LayerFilterItemInterface = {
    /** @deprecated Use `AggregationOption.count` instead. */
    items_count?: Maybe<Scalars['Int']>;
    /** @deprecated Use `AggregationOption.label` instead. */
    label?: Maybe<Scalars['String']>;
    /** @deprecated Use `AggregationOption.value` instead. */
    value_string?: Maybe<Scalars['String']>;
};

export type MediaGalleryEntry = {
    __typename?: 'MediaGalleryEntry';
    content?: Maybe<ProductMediaGalleryEntriesContent>;
    disabled?: Maybe<Scalars['Boolean']>;
    file?: Maybe<Scalars['String']>;
    /** @deprecated Use `uid` instead. */
    id?: Maybe<Scalars['Int']>;
    label?: Maybe<Scalars['String']>;
    media_type?: Maybe<Scalars['String']>;
    position?: Maybe<Scalars['Int']>;
    types?: Maybe<Array<Maybe<Scalars['String']>>>;
    uid: Scalars['ID'];
    video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

export type MediaGalleryInterface = {
    disabled?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Scalars['String']>;
    position?: Maybe<Scalars['Int']>;
    url?: Maybe<Scalars['String']>;
};

export type Money = {
    __typename?: 'Money';
    currency?: Maybe<CurrencyEnum>;
    value?: Maybe<Scalars['Float']>;
};

export type MoveCartItemsToGiftRegistryOutput =
    GiftRegistryItemUserErrorInterface &
        GiftRegistryOutputInterface & {
            __typename?: 'MoveCartItemsToGiftRegistryOutput';
            gift_registry?: Maybe<GiftRegistry>;
            status: Scalars['Boolean'];
            user_errors: Array<Maybe<GiftRegistryItemsUserError>>;
        };

export type MoveProductsBetweenWishlistsOutput = {
    __typename?: 'MoveProductsBetweenWishlistsOutput';
    destination_wishlist: Wishlist;
    source_wishlist: Wishlist;
    user_errors: Array<Maybe<WishListUserInputError>>;
};

export type MpCartsFilterInput = {
    cart_id?: InputMaybe<FilterTypeInput>;
    cart_name?: InputMaybe<FilterTypeInput>;
    created_at?: InputMaybe<FilterTypeInput>;
    customer_id?: InputMaybe<FilterTypeInput>;
    description?: InputMaybe<FilterTypeInput>;
    store_id?: InputMaybe<FilterTypeInput>;
    updated_at?: InputMaybe<FilterTypeInput>;
};

export type MpCartsOutput = {
    __typename?: 'MpCartsOutput';
    cart_id?: Maybe<Scalars['Int']>;
    cart_name?: Maybe<Scalars['String']>;
    cart_total?: Maybe<Money>;
    created_at?: Maybe<Scalars['String']>;
    customer_id?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<CartItemsOutput>>>;
    share_url?: Maybe<Scalars['String']>;
    store_id?: Maybe<Scalars['String']>;
    token?: Maybe<Scalars['String']>;
};

export type MpDeliveryInformationOutput = {
    __typename?: 'MpDeliveryInformationOutput';
    mp_delivery_comment?: Maybe<Scalars['String']>;
    mp_delivery_date?: Maybe<Scalars['String']>;
    mp_delivery_time?: Maybe<Scalars['String']>;
    mp_house_security_code?: Maybe<Scalars['String']>;
};

export type MpFilters = {
    from: Scalars['String'];
    period_type?: InputMaybe<Scalars['String']>;
    show_empty_rows?: InputMaybe<Scalars['Boolean']>;
    store_id?: InputMaybe<Scalars['Int']>;
    to: Scalars['String'];
};

export type MpGetCartsOutput = {
    __typename?: 'MpGetCartsOutput';
    items?: Maybe<Array<Maybe<MpCartsOutput>>>;
    page_info?: Maybe<SearchResultPageInfo>;
    total_count?: Maybe<Scalars['Int']>;
};

export type MpGetProductsOutput = {
    __typename?: 'MpGetProductsOutput';
    items?: Maybe<Array<Maybe<MpProductsOutput>>>;
    total_count?: Maybe<Scalars['Int']>;
};

export type MpProductsFilterInput = {
    created_at?: InputMaybe<FilterTypeInput>;
    customer_id?: InputMaybe<FilterTypeInput>;
    id?: InputMaybe<FilterTypeInput>;
    product_id?: InputMaybe<FilterTypeInput>;
    qty?: InputMaybe<FilterTypeInput>;
    store_id?: InputMaybe<FilterTypeInput>;
    updated_at?: InputMaybe<FilterTypeInput>;
};

export type MpProductsOutput = {
    __typename?: 'MpProductsOutput';
    created_at?: Maybe<Scalars['String']>;
    customer_id?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['Int']>;
    image_url?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['String']>;
    product_id?: Maybe<Scalars['Int']>;
    product_name?: Maybe<Scalars['String']>;
    share_url?: Maybe<Scalars['String']>;
    store_id?: Maybe<Scalars['Int']>;
    subtotal_converted?: Maybe<Scalars['String']>;
    token?: Maybe<Scalars['String']>;
};

export type MpQuoteConversation = {
    __typename?: 'MpQuoteConversation';
    author_name?: Maybe<Scalars['String']>;
    content?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['String']>;
    files?: Maybe<Scalars['String']>;
    is_customer_notified?: Maybe<Scalars['Int']>;
    quote_id?: Maybe<Scalars['Int']>;
    reply_id?: Maybe<Scalars['Int']>;
    type?: Maybe<Scalars['Int']>;
};

export type MpQuoteConversationFilterInput = {
    author_name?: InputMaybe<FilterTypeInput>;
    content?: InputMaybe<FilterTypeInput>;
    created_at?: InputMaybe<FilterTypeInput>;
    quote_id?: InputMaybe<FilterTypeInput>;
    reply_id?: InputMaybe<FilterTypeInput>;
    type?: InputMaybe<FilterTypeInput>;
};

export type MpQuoteConversationSortInput = {
    author_name?: InputMaybe<SortEnum>;
    created_at?: InputMaybe<SortEnum>;
    quote_id?: InputMaybe<SortEnum>;
    reply_id?: InputMaybe<SortEnum>;
    type?: InputMaybe<SortEnum>;
};

export type MpQuoteFilterInput = {
    base_subtotal?: InputMaybe<FilterTypeInput>;
    created_at?: InputMaybe<FilterTypeInput>;
    entity_id?: InputMaybe<FilterTypeInput>;
    expired_at?: InputMaybe<FilterTypeInput>;
    is_active?: InputMaybe<FilterTypeInput>;
    items_count?: InputMaybe<FilterTypeInput>;
    items_qty?: InputMaybe<FilterTypeInput>;
    remote_ip?: InputMaybe<FilterTypeInput>;
    status?: InputMaybe<FilterTypeInput>;
    store_id?: InputMaybe<FilterTypeInput>;
    subtotal?: InputMaybe<FilterTypeInput>;
    updated_at?: InputMaybe<FilterTypeInput>;
};

export type MpQuoteListOutput = {
    __typename?: 'MpQuoteListOutput';
    items?: Maybe<Array<Maybe<Quote>>>;
    page_info?: Maybe<SearchResultPageInfo>;
    total_count?: Maybe<Scalars['Int']>;
};

export type MpQuoteReplyFileInput = {
    file?: InputMaybe<Scalars['String']>;
    file_id?: InputMaybe<Scalars['String']>;
    location?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    size?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};

export type MpSaveCartConfigsOutput = {
    __typename?: 'MpSaveCartConfigsOutput';
    allow_share?: Maybe<Scalars['Int']>;
    button_title?: Maybe<Scalars['String']>;
    enabled?: Maybe<Scalars['Int']>;
    icon?: Maybe<Scalars['String']>;
    icon_url?: Maybe<Scalars['String']>;
    page_link_area?: Maybe<Scalars['String']>;
    show_button_guest?: Maybe<Scalars['Int']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    MpDeliveryTime?: Maybe<Scalars['Boolean']>;
    addAllItemsFromCartToMpQuote?: Maybe<AddAllItemsFromCartToMpQuoteOutput>;
    addBundleProductsToCart?: Maybe<AddBundleProductsToCartOutput>;
    addBundleProductsToMpQuote?: Maybe<AddBundleProductsToQuoteOutput>;
    addConfigurableProductsToCart?: Maybe<AddConfigurableProductsToCartOutput>;
    addConfigurableProductsToMpQuote?: Maybe<AddConfigurableProductsToQuoteOutput>;
    addDownloadableProductsToCart?: Maybe<AddDownloadableProductsToCartOutput>;
    addDownloadableProductsToMpQuote?: Maybe<AddDownloadableProductsToQuoteOutput>;
    addGiftRegistryRegistrants?: Maybe<AddGiftRegistryRegistrantsOutput>;
    addItemFromCartToMpQuote?: Maybe<AddItemFromCartToMpQuoteOutput>;
    addItemsBySkuToMpQuote?: Maybe<AddItemsBySkuToMpQuoteOutput>;
    addMpQuoteToCart?: Maybe<AddMpQuoteToCartOutput>;
    addProductsToCart?: Maybe<AddProductsToCartOutput>;
    addProductsToCompareList?: Maybe<CompareList>;
    addProductsToWishlist?: Maybe<AddProductsToWishlistOutput>;
    addReturnComment?: Maybe<AddReturnCommentOutput>;
    addReturnTracking?: Maybe<AddReturnTrackingOutput>;
    addSimpleProductsToCart?: Maybe<AddSimpleProductsToCartOutput>;
    addSimpleProductsToMpQuote?: Maybe<AddSimpleProductsToQuoteOutput>;
    addVirtualProductsToCart?: Maybe<AddVirtualProductsToCartOutput>;
    addVirtualProductsToMpQuote?: Maybe<AddVirtualProductsToQuoteOutput>;
    addWishlistItemsToCart?: Maybe<AddWishlistItemsToCartOutput>;
    applyCouponToCart?: Maybe<ApplyCouponToCartOutput>;
    applyGiftCardToCart?: Maybe<ApplyGiftCardToCartOutput>;
    applyRewardPointsToCart?: Maybe<ApplyRewardPointsToCartOutput>;
    applyStoreCreditToCart?: Maybe<ApplyStoreCreditToCartOutput>;
    assignCompareListToCustomer?: Maybe<AssignCompareListToCustomerOutput>;
    assignCustomerToGuestCart: Cart;
    beCustomerSendMail?: Maybe<MessageResult>;
    cancelMpQuote?: Maybe<Scalars['Boolean']>;
    changeCustomerPassword?: Maybe<Customer>;
    contactUs?: Maybe<ContactUsOutput>;
    copyProductsBetweenWishlists?: Maybe<CopyProductsBetweenWishlistsOutput>;
    createBraintreeClientToken: Scalars['String'];
    createCompareList?: Maybe<CompareList>;
    createCustomer?: Maybe<CustomerOutput>;
    createCustomerAddress?: Maybe<CustomerAddress>;
    createCustomerV2?: Maybe<CustomerOutput>;
    createEmptyCart?: Maybe<Scalars['String']>;
    createGiftRegistry?: Maybe<CreateGiftRegistryOutput>;
    createPayflowProToken?: Maybe<CreatePayflowProTokenOutput>;
    createPaypalExpressToken?: Maybe<PaypalExpressTokenOutput>;
    createProductReview: CreateProductReviewOutput;
    createWishlist?: Maybe<CreateWishlistOutput>;
    customAttributeQuoteSave?: Maybe<SuccessMessage>;
    deleteCompareList?: Maybe<DeleteCompareListOutput>;
    deleteCurrentMpQuote?: Maybe<Scalars['Boolean']>;
    deleteCustomer?: Maybe<Scalars['Boolean']>;
    deleteCustomerAddress?: Maybe<Scalars['Boolean']>;
    deleteItemFromMpQuote?: Maybe<DeleteItemFromMpQuoteOutput>;
    deletePaymentToken?: Maybe<DeletePaymentTokenOutput>;
    deleteSubmittedMpQuote?: Maybe<Scalars['Boolean']>;
    deleteWishlist?: Maybe<DeleteWishlistOutput>;
    duplicateMpQuote?: Maybe<DuplicateMpQuoteOutput>;
    generateCustomerToken?: Maybe<CustomerToken>;
    generateCustomerTokenAsAdmin?: Maybe<GenerateCustomerTokenAsAdminOutput>;
    handlePayflowProResponse?: Maybe<PayflowProResponseOutput>;
    mergeCarts: Cart;
    moveCartItemsToGiftRegistry?: Maybe<MoveCartItemsToGiftRegistryOutput>;
    moveProductsBetweenWishlists?: Maybe<MoveProductsBetweenWishlistsOutput>;
    mpQuoteSubmit?: Maybe<Scalars['Int']>;
    mpSaveCart?: Maybe<Scalars['Boolean']>;
    mpSaveCartDeleteCart?: Maybe<Scalars['Boolean']>;
    mpSaveCartDeleteProduct?: Maybe<Scalars['Boolean']>;
    mpSaveCartRestoreCart?: Maybe<Scalars['Boolean']>;
    mpSaveCartRestoreProduct?: Maybe<Scalars['Boolean']>;
    mpSaveCartSaveItem?: Maybe<Scalars['Boolean']>;
    mpSaveCartShareCart?: Maybe<Scalars['Boolean']>;
    mpSaveCartShareProduct?: Maybe<Scalars['Boolean']>;
    nonCustomerSendMail?: Maybe<MessageResult>;
    o_mpSaveCart?: Maybe<Scalars['Boolean']>;
    orderIncidencesEmail?: Maybe<EmailResponse>;
    placeOrder?: Maybe<PlaceOrderOutput>;
    redeemGiftCardBalanceAsStoreCredit?: Maybe<GiftCardAccount>;
    removeCouponFromCart?: Maybe<RemoveCouponFromCartOutput>;
    removeGiftCardFromCart?: Maybe<RemoveGiftCardFromCartOutput>;
    removeGiftRegistry?: Maybe<RemoveGiftRegistryOutput>;
    removeGiftRegistryItems?: Maybe<RemoveGiftRegistryItemsOutput>;
    removeGiftRegistryRegistrants?: Maybe<RemoveGiftRegistryRegistrantsOutput>;
    removeItemFromCart?: Maybe<RemoveItemFromCartOutput>;
    removeProductsFromCompareList?: Maybe<CompareList>;
    removeProductsFromWishlist?: Maybe<RemoveProductsFromWishlistOutput>;
    removeReturnTracking?: Maybe<RemoveReturnTrackingOutput>;
    removeRewardPointsFromCart?: Maybe<RemoveRewardPointsFromCartOutput>;
    removeStoreCreditFromCart?: Maybe<RemoveStoreCreditFromCartOutput>;
    reorderItems?: Maybe<ReorderItemsOutput>;
    requestPasswordResetEmail?: Maybe<Scalars['Boolean']>;
    requestReturn?: Maybe<RequestReturnOutput>;
    resetPassword?: Maybe<Scalars['Boolean']>;
    revokeCustomerToken?: Maybe<RevokeCustomerTokenOutput>;
    saveMpQuoteReply?: Maybe<Scalars['Boolean']>;
    sendEmailToFriend?: Maybe<SendEmailToFriendOutput>;
    setBillingAddressOnCart?: Maybe<SetBillingAddressOnCartOutput>;
    setGiftOptionsOnCart?: Maybe<SetGiftOptionsOnCartOutput>;
    setGuestEmailOnCart?: Maybe<SetGuestEmailOnCartOutput>;
    /** @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request. */
    setPaymentMethodAndPlaceOrder?: Maybe<PlaceOrderOutput>;
    setPaymentMethodOnCart?: Maybe<SetPaymentMethodOnCartOutput>;
    setShippingAddressesOnCart?: Maybe<SetShippingAddressesOnCartOutput>;
    setShippingMethodsOnCart?: Maybe<SetShippingMethodsOnCartOutput>;
    shareGiftRegistry?: Maybe<ShareGiftRegistryOutput>;
    subscribeEmailToNewsletter?: Maybe<SubscribeEmailToNewsletterOutput>;
    updateCartItems?: Maybe<UpdateCartItemsOutput>;
    updateCustomer?: Maybe<CustomerOutput>;
    updateCustomerAddress?: Maybe<CustomerAddress>;
    updateCustomerEmail?: Maybe<CustomerOutput>;
    updateCustomerV2?: Maybe<CustomerOutput>;
    updateGiftRegistry?: Maybe<UpdateGiftRegistryOutput>;
    updateGiftRegistryItems?: Maybe<UpdateGiftRegistryItemsOutput>;
    updateGiftRegistryRegistrants?: Maybe<UpdateGiftRegistryRegistrantsOutput>;
    updateMpQuote?: Maybe<UpdateMpQuoteOutput>;
    updateProductsInWishlist?: Maybe<UpdateProductsInWishlistOutput>;
    updateWishlist?: Maybe<UpdateWishlistOutput>;
};

export type MutationMpDeliveryTimeArgs = {
    cart_id: Scalars['String'];
    mp_delivery_time?: InputMaybe<DeliveryTimeInput>;
};

export type MutationAddBundleProductsToCartArgs = {
    input?: InputMaybe<AddBundleProductsToCartInput>;
};

export type MutationAddBundleProductsToMpQuoteArgs = {
    input?: InputMaybe<AddBundleProductsToQuoteInput>;
};

export type MutationAddConfigurableProductsToCartArgs = {
    input?: InputMaybe<AddConfigurableProductsToCartInput>;
};

export type MutationAddConfigurableProductsToMpQuoteArgs = {
    input?: InputMaybe<AddConfigurableProductsToQuoteInput>;
};

export type MutationAddDownloadableProductsToCartArgs = {
    input?: InputMaybe<AddDownloadableProductsToCartInput>;
};

export type MutationAddDownloadableProductsToMpQuoteArgs = {
    input?: InputMaybe<AddDownloadableProductsToQuoteInput>;
};

export type MutationAddGiftRegistryRegistrantsArgs = {
    giftRegistryUid: Scalars['ID'];
    registrants: Array<AddGiftRegistryRegistrantInput>;
};

export type MutationAddItemFromCartToMpQuoteArgs = {
    cart_item_id: Scalars['String'];
};

export type MutationAddItemsBySkuToMpQuoteArgs = {
    input?: InputMaybe<AddItemsBySkuToMpQuoteInput>;
};

export type MutationAddMpQuoteToCartArgs = {
    quote_id: Scalars['Int'];
};

export type MutationAddProductsToCartArgs = {
    cartId: Scalars['String'];
    cartItems: Array<CartItemInput>;
};

export type MutationAddProductsToCompareListArgs = {
    input?: InputMaybe<AddProductsToCompareListInput>;
};

export type MutationAddProductsToWishlistArgs = {
    wishlistId: Scalars['ID'];
    wishlistItems: Array<WishlistItemInput>;
};

export type MutationAddReturnCommentArgs = {
    input: AddReturnCommentInput;
};

export type MutationAddReturnTrackingArgs = {
    input: AddReturnTrackingInput;
};

export type MutationAddSimpleProductsToCartArgs = {
    input?: InputMaybe<AddSimpleProductsToCartInput>;
};

export type MutationAddSimpleProductsToMpQuoteArgs = {
    input?: InputMaybe<AddSimpleProductsToQuoteInput>;
};

export type MutationAddVirtualProductsToCartArgs = {
    input?: InputMaybe<AddVirtualProductsToCartInput>;
};

export type MutationAddVirtualProductsToMpQuoteArgs = {
    input?: InputMaybe<AddVirtualProductsToQuoteInput>;
};

export type MutationAddWishlistItemsToCartArgs = {
    wishlistId: Scalars['ID'];
    wishlistItemIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type MutationApplyCouponToCartArgs = {
    input?: InputMaybe<ApplyCouponToCartInput>;
};

export type MutationApplyGiftCardToCartArgs = {
    input?: InputMaybe<ApplyGiftCardToCartInput>;
};

export type MutationApplyRewardPointsToCartArgs = {
    cartId: Scalars['ID'];
};

export type MutationApplyStoreCreditToCartArgs = {
    input: ApplyStoreCreditToCartInput;
};

export type MutationAssignCompareListToCustomerArgs = {
    uid: Scalars['ID'];
};

export type MutationAssignCustomerToGuestCartArgs = {
    cart_id: Scalars['String'];
};

export type MutationBeCustomerSendMailArgs = {
    email: Scalars['String'];
    nif: Scalars['String'];
    no_of_client: Scalars['Int'];
};

export type MutationCancelMpQuoteArgs = {
    quote_id: Scalars['Int'];
};

export type MutationChangeCustomerPasswordArgs = {
    currentPassword: Scalars['String'];
    newPassword: Scalars['String'];
};

export type MutationContactUsArgs = {
    input: ContactUsInput;
};

export type MutationCopyProductsBetweenWishlistsArgs = {
    destinationWishlistUid: Scalars['ID'];
    sourceWishlistUid: Scalars['ID'];
    wishlistItems: Array<WishlistItemCopyInput>;
};

export type MutationCreateCompareListArgs = {
    input?: InputMaybe<CreateCompareListInput>;
};

export type MutationCreateCustomerArgs = {
    input: CustomerInput;
};

export type MutationCreateCustomerAddressArgs = {
    input: CustomerAddressInput;
};

export type MutationCreateCustomerV2Args = {
    input: CustomerCreateInput;
};

export type MutationCreateEmptyCartArgs = {
    input?: InputMaybe<CreateEmptyCartInput>;
};

export type MutationCreateGiftRegistryArgs = {
    giftRegistry: CreateGiftRegistryInput;
};

export type MutationCreatePayflowProTokenArgs = {
    input: PayflowProTokenInput;
};

export type MutationCreatePaypalExpressTokenArgs = {
    input: PaypalExpressTokenInput;
};

export type MutationCreateProductReviewArgs = {
    input: CreateProductReviewInput;
};

export type MutationCreateWishlistArgs = {
    input: CreateWishlistInput;
};

export type MutationCustomAttributeQuoteSaveArgs = {
    comment?: InputMaybe<Scalars['String']>;
    external_order_number?: InputMaybe<Scalars['String']>;
    masked_id: Scalars['String'];
};

export type MutationDeleteCompareListArgs = {
    uid: Scalars['ID'];
};

export type MutationDeleteCustomerAddressArgs = {
    id: Scalars['Int'];
};

export type MutationDeleteItemFromMpQuoteArgs = {
    item_id: Scalars['Int'];
};

export type MutationDeletePaymentTokenArgs = {
    public_hash: Scalars['String'];
};

export type MutationDeleteSubmittedMpQuoteArgs = {
    quote_id: Scalars['Int'];
};

export type MutationDeleteWishlistArgs = {
    wishlistId: Scalars['ID'];
};

export type MutationDuplicateMpQuoteArgs = {
    quote_id: Scalars['Int'];
};

export type MutationGenerateCustomerTokenArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};

export type MutationGenerateCustomerTokenAsAdminArgs = {
    input: GenerateCustomerTokenAsAdminInput;
};

export type MutationHandlePayflowProResponseArgs = {
    input: PayflowProResponseInput;
};

export type MutationMergeCartsArgs = {
    destination_cart_id?: InputMaybe<Scalars['String']>;
    source_cart_id: Scalars['String'];
};

export type MutationMoveCartItemsToGiftRegistryArgs = {
    cartUid: Scalars['ID'];
    giftRegistryUid: Scalars['ID'];
};

export type MutationMoveProductsBetweenWishlistsArgs = {
    destinationWishlistUid: Scalars['ID'];
    sourceWishlistUid: Scalars['ID'];
    wishlistItems: Array<WishlistItemMoveInput>;
};

export type MutationMpSaveCartArgs = {
    cart_id: Scalars['Int'];
    cart_name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
};

export type MutationMpSaveCartDeleteCartArgs = {
    token: Scalars['String'];
};

export type MutationMpSaveCartDeleteProductArgs = {
    token: Scalars['String'];
};

export type MutationMpSaveCartRestoreCartArgs = {
    cart_id: Scalars['String'];
    token: Scalars['String'];
};

export type MutationMpSaveCartRestoreProductArgs = {
    cart_id: Scalars['String'];
    token: Scalars['String'];
};

export type MutationMpSaveCartSaveItemArgs = {
    cart_id: Scalars['Int'];
    item_id: Scalars['Int'];
};

export type MutationMpSaveCartShareCartArgs = {
    cart_id: Scalars['String'];
    token: Scalars['String'];
};

export type MutationMpSaveCartShareProductArgs = {
    cart_id: Scalars['String'];
    token: Scalars['String'];
};

export type MutationNonCustomerSendMailArgs = {
    address1: Scalars['String'];
    address2: Scalars['String'];
    contact_name: Scalars['String'];
    country: Scalars['String'];
    email: Scalars['String'];
    name: Scalars['String'];
    nif: Scalars['String'];
    phone_number: Scalars['String'];
    population: Scalars['Int'];
    postal_code: Scalars['String'];
    province: Scalars['String'];
};

export type MutationO_MpSaveCartArgs = {
    cart_id: Scalars['String'];
    cart_name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
};

export type MutationOrderIncidencesEmailArgs = {
    input?: InputMaybe<OrderIncidencesEmailInput>;
};

export type MutationPlaceOrderArgs = {
    input?: InputMaybe<PlaceOrderInput>;
};

export type MutationRedeemGiftCardBalanceAsStoreCreditArgs = {
    input: GiftCardAccountInput;
};

export type MutationRemoveCouponFromCartArgs = {
    input?: InputMaybe<RemoveCouponFromCartInput>;
};

export type MutationRemoveGiftCardFromCartArgs = {
    input?: InputMaybe<RemoveGiftCardFromCartInput>;
};

export type MutationRemoveGiftRegistryArgs = {
    giftRegistryUid: Scalars['ID'];
};

export type MutationRemoveGiftRegistryItemsArgs = {
    giftRegistryUid: Scalars['ID'];
    itemsUid: Array<Scalars['ID']>;
};

export type MutationRemoveGiftRegistryRegistrantsArgs = {
    giftRegistryUid: Scalars['ID'];
    registrantsUid: Array<Scalars['ID']>;
};

export type MutationRemoveItemFromCartArgs = {
    input?: InputMaybe<RemoveItemFromCartInput>;
};

export type MutationRemoveProductsFromCompareListArgs = {
    input?: InputMaybe<RemoveProductsFromCompareListInput>;
};

export type MutationRemoveProductsFromWishlistArgs = {
    wishlistId: Scalars['ID'];
    wishlistItemsIds: Array<Scalars['ID']>;
};

export type MutationRemoveReturnTrackingArgs = {
    input: RemoveReturnTrackingInput;
};

export type MutationRemoveRewardPointsFromCartArgs = {
    cartId: Scalars['ID'];
};

export type MutationRemoveStoreCreditFromCartArgs = {
    input: RemoveStoreCreditFromCartInput;
};

export type MutationReorderItemsArgs = {
    orderNumber: Scalars['String'];
};

export type MutationRequestPasswordResetEmailArgs = {
    email: Scalars['String'];
};

export type MutationRequestReturnArgs = {
    input: RequestReturnInput;
};

export type MutationResetPasswordArgs = {
    email: Scalars['String'];
    newPassword: Scalars['String'];
    resetPasswordToken: Scalars['String'];
};

export type MutationSaveMpQuoteReplyArgs = {
    content?: InputMaybe<Scalars['String']>;
    files?: InputMaybe<Array<InputMaybe<MpQuoteReplyFileInput>>>;
    quote_id?: InputMaybe<Scalars['Int']>;
};

export type MutationSendEmailToFriendArgs = {
    input?: InputMaybe<SendEmailToFriendInput>;
};

export type MutationSetBillingAddressOnCartArgs = {
    input?: InputMaybe<SetBillingAddressOnCartInput>;
};

export type MutationSetGiftOptionsOnCartArgs = {
    input?: InputMaybe<SetGiftOptionsOnCartInput>;
};

export type MutationSetGuestEmailOnCartArgs = {
    input?: InputMaybe<SetGuestEmailOnCartInput>;
};

export type MutationSetPaymentMethodAndPlaceOrderArgs = {
    input?: InputMaybe<SetPaymentMethodAndPlaceOrderInput>;
};

export type MutationSetPaymentMethodOnCartArgs = {
    input?: InputMaybe<SetPaymentMethodOnCartInput>;
};

export type MutationSetShippingAddressesOnCartArgs = {
    input?: InputMaybe<SetShippingAddressesOnCartInput>;
};

export type MutationSetShippingMethodsOnCartArgs = {
    input?: InputMaybe<SetShippingMethodsOnCartInput>;
};

export type MutationShareGiftRegistryArgs = {
    giftRegistryUid: Scalars['ID'];
    invitees: Array<ShareGiftRegistryInviteeInput>;
    sender: ShareGiftRegistrySenderInput;
};

export type MutationSubscribeEmailToNewsletterArgs = {
    email: Scalars['String'];
};

export type MutationUpdateCartItemsArgs = {
    input?: InputMaybe<UpdateCartItemsInput>;
};

export type MutationUpdateCustomerArgs = {
    input: CustomerInput;
};

export type MutationUpdateCustomerAddressArgs = {
    id: Scalars['Int'];
    input?: InputMaybe<CustomerAddressInput>;
};

export type MutationUpdateCustomerEmailArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};

export type MutationUpdateCustomerV2Args = {
    input: CustomerUpdateInput;
};

export type MutationUpdateGiftRegistryArgs = {
    giftRegistry: UpdateGiftRegistryInput;
    giftRegistryUid: Scalars['ID'];
};

export type MutationUpdateGiftRegistryItemsArgs = {
    giftRegistryUid: Scalars['ID'];
    items: Array<UpdateGiftRegistryItemInput>;
};

export type MutationUpdateGiftRegistryRegistrantsArgs = {
    giftRegistryUid: Scalars['ID'];
    registrants: Array<UpdateGiftRegistryRegistrantInput>;
};

export type MutationUpdateMpQuoteArgs = {
    input: UpdateMpQuoteInput;
};

export type MutationUpdateProductsInWishlistArgs = {
    wishlistId: Scalars['ID'];
    wishlistItems: Array<WishlistItemUpdateInput>;
};

export type MutationUpdateWishlistArgs = {
    name?: InputMaybe<Scalars['String']>;
    visibility?: InputMaybe<WishlistVisibilityEnum>;
    wishlistId: Scalars['ID'];
};

export type NoSuchEntityUidError = ErrorInterface & {
    __typename?: 'NoSuchEntityUidError';
    message: Scalars['String'];
    uid: Scalars['ID'];
};

export enum ObjectDataTypeEnum {
    /** @deprecated  */
    Boolean = 'BOOLEAN',
    /** @deprecated  */
    Complex = 'COMPLEX',
    /** @deprecated  */
    Float = 'FLOAT',
    /** @deprecated  */
    Int = 'INT',
    /** @deprecated  */
    String = 'STRING'
}

export type Order = {
    __typename?: 'Order';
    /** @deprecated Use `order_number` instead. */
    order_id?: Maybe<Scalars['String']>;
    order_number: Scalars['String'];
};

export type OrderAddress = {
    __typename?: 'OrderAddress';
    city: Scalars['String'];
    company?: Maybe<Scalars['String']>;
    country_code?: Maybe<CountryCodeEnum>;
    fax?: Maybe<Scalars['String']>;
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    middlename?: Maybe<Scalars['String']>;
    postcode?: Maybe<Scalars['String']>;
    prefix?: Maybe<Scalars['String']>;
    region?: Maybe<Scalars['String']>;
    region_id?: Maybe<Scalars['ID']>;
    street: Array<Maybe<Scalars['String']>>;
    suffix?: Maybe<Scalars['String']>;
    telephone?: Maybe<Scalars['String']>;
    vat_id?: Maybe<Scalars['String']>;
};

export type OrderIncidencesEmailInput = {
    email: Scalars['String'];
    incidences?: InputMaybe<Array<InputMaybe<IncidencesData>>>;
    name: Scalars['String'];
    order_number: Scalars['String'];
    phone: Scalars['String'];
};

export type OrderItem = OrderItemInterface & {
    __typename?: 'OrderItem';
    discounts?: Maybe<Array<Maybe<Discount>>>;
    eligible_for_return?: Maybe<Scalars['Boolean']>;
    entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
    gift_message?: Maybe<GiftMessage>;
    gift_wrapping?: Maybe<GiftWrapping>;
    id: Scalars['ID'];
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    product_type?: Maybe<Scalars['String']>;
    product_url_key?: Maybe<Scalars['String']>;
    quantity_canceled?: Maybe<Scalars['Float']>;
    quantity_invoiced?: Maybe<Scalars['Float']>;
    quantity_ordered?: Maybe<Scalars['Float']>;
    quantity_refunded?: Maybe<Scalars['Float']>;
    quantity_returned?: Maybe<Scalars['Float']>;
    quantity_shipped?: Maybe<Scalars['Float']>;
    selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
    status?: Maybe<Scalars['String']>;
};

export type OrderItemInterface = {
    discounts?: Maybe<Array<Maybe<Discount>>>;
    eligible_for_return?: Maybe<Scalars['Boolean']>;
    entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
    gift_message?: Maybe<GiftMessage>;
    gift_wrapping?: Maybe<GiftWrapping>;
    id: Scalars['ID'];
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    product_type?: Maybe<Scalars['String']>;
    product_url_key?: Maybe<Scalars['String']>;
    quantity_canceled?: Maybe<Scalars['Float']>;
    quantity_invoiced?: Maybe<Scalars['Float']>;
    quantity_ordered?: Maybe<Scalars['Float']>;
    quantity_refunded?: Maybe<Scalars['Float']>;
    quantity_returned?: Maybe<Scalars['Float']>;
    quantity_shipped?: Maybe<Scalars['Float']>;
    selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
    status?: Maybe<Scalars['String']>;
};

export type OrderItemOption = {
    __typename?: 'OrderItemOption';
    label: Scalars['String'];
    value: Scalars['String'];
};

export type OrderPaymentMethod = {
    __typename?: 'OrderPaymentMethod';
    additional_data?: Maybe<Array<Maybe<KeyValue>>>;
    name: Scalars['String'];
    type: Scalars['String'];
};

export type OrderShipment = {
    __typename?: 'OrderShipment';
    comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
    id: Scalars['ID'];
    items?: Maybe<Array<Maybe<ShipmentItemInterface>>>;
    number: Scalars['String'];
    tracking?: Maybe<Array<Maybe<ShipmentTracking>>>;
};

export type OrderTotal = {
    __typename?: 'OrderTotal';
    base_grand_total: Money;
    discounts?: Maybe<Array<Maybe<Discount>>>;
    grand_total: Money;
    shipping_handling?: Maybe<ShippingHandling>;
    subtotal: Money;
    taxes?: Maybe<Array<Maybe<TaxItem>>>;
    total_giftcard?: Maybe<Money>;
    total_shipping: Money;
    total_tax: Money;
};

export type PayflowExpressInput = {
    payer_id: Scalars['String'];
    token: Scalars['String'];
};

export type PayflowLinkInput = {
    cancel_url: Scalars['String'];
    error_url: Scalars['String'];
    return_url: Scalars['String'];
};

export enum PayflowLinkMode {
    /** @deprecated  */
    Live = 'LIVE',
    /** @deprecated  */
    Test = 'TEST'
}

export type PayflowLinkToken = {
    __typename?: 'PayflowLinkToken';
    mode?: Maybe<PayflowLinkMode>;
    paypal_url?: Maybe<Scalars['String']>;
    secure_token?: Maybe<Scalars['String']>;
    secure_token_id?: Maybe<Scalars['String']>;
};

export type PayflowLinkTokenInput = {
    cart_id: Scalars['String'];
};

export type PayflowProInput = {
    cc_details: CreditCardDetailsInput;
    is_active_payment_token_enabler?: InputMaybe<Scalars['Boolean']>;
};

export type PayflowProResponseInput = {
    cart_id: Scalars['String'];
    paypal_payload: Scalars['String'];
};

export type PayflowProResponseOutput = {
    __typename?: 'PayflowProResponseOutput';
    cart: Cart;
};

export type PayflowProToken = {
    __typename?: 'PayflowProToken';
    response_message: Scalars['String'];
    result: Scalars['Int'];
    result_code: Scalars['Int'];
    secure_token: Scalars['String'];
    secure_token_id: Scalars['String'];
};

export type PayflowProTokenInput = {
    cart_id: Scalars['String'];
    urls: PayflowProUrlInput;
};

export type PayflowProUrlInput = {
    cancel_url: Scalars['String'];
    error_url: Scalars['String'];
    return_url: Scalars['String'];
};

export type PaymentMethodInput = {
    braintree?: InputMaybe<BraintreeInput>;
    braintree_cc_vault?: InputMaybe<BraintreeCcVaultInput>;
    code: Scalars['String'];
    hosted_pro?: InputMaybe<HostedProInput>;
    payflow_express?: InputMaybe<PayflowExpressInput>;
    payflow_link?: InputMaybe<PayflowLinkInput>;
    payflowpro?: InputMaybe<PayflowProInput>;
    payflowpro_cc_vault?: InputMaybe<VaultTokenInput>;
    paypal_express?: InputMaybe<PaypalExpressInput>;
    purchase_order_number?: InputMaybe<Scalars['String']>;
};

export type PaymentToken = {
    __typename?: 'PaymentToken';
    details?: Maybe<Scalars['String']>;
    payment_method_code: Scalars['String'];
    public_hash: Scalars['String'];
    type: PaymentTokenTypeEnum;
};

export enum PaymentTokenTypeEnum {
    /** @deprecated  */
    Account = 'account',
    /** @deprecated  */
    Card = 'card'
}

export type PaypalExpressInput = {
    payer_id: Scalars['String'];
    token: Scalars['String'];
};

export type PaypalExpressToken = {
    __typename?: 'PaypalExpressToken';
    /** @deprecated Use `PaypalExpressTokenOutput.paypal_urls` instead. */
    paypal_urls?: Maybe<PaypalExpressUrlList>;
    /** @deprecated Use `PaypalExpressTokenOutput.token` instead. */
    token?: Maybe<Scalars['String']>;
};

export type PaypalExpressTokenInput = {
    cart_id: Scalars['String'];
    code: Scalars['String'];
    express_button?: InputMaybe<Scalars['Boolean']>;
    urls: PaypalExpressUrlsInput;
    use_paypal_credit?: InputMaybe<Scalars['Boolean']>;
};

export type PaypalExpressTokenOutput = {
    __typename?: 'PaypalExpressTokenOutput';
    paypal_urls?: Maybe<PaypalExpressUrlList>;
    token?: Maybe<Scalars['String']>;
};

export type PaypalExpressUrlList = {
    __typename?: 'PaypalExpressUrlList';
    edit?: Maybe<Scalars['String']>;
    start?: Maybe<Scalars['String']>;
};

export type PaypalExpressUrlsInput = {
    cancel_url: Scalars['String'];
    pending_url?: InputMaybe<Scalars['String']>;
    return_url: Scalars['String'];
    success_url?: InputMaybe<Scalars['String']>;
};

export type PhysicalProductInterface = {
    weight?: Maybe<Scalars['Float']>;
};

export type PickupLocation = {
    __typename?: 'PickupLocation';
    city?: Maybe<Scalars['String']>;
    contact_name?: Maybe<Scalars['String']>;
    country_id?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    fax?: Maybe<Scalars['String']>;
    latitude?: Maybe<Scalars['Float']>;
    longitude?: Maybe<Scalars['Float']>;
    name?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    pickup_location_code?: Maybe<Scalars['String']>;
    postcode?: Maybe<Scalars['String']>;
    region?: Maybe<Scalars['String']>;
    region_id?: Maybe<Scalars['Int']>;
    street?: Maybe<Scalars['String']>;
};

export type PickupLocationFilterInput = {
    city?: InputMaybe<FilterTypeInput>;
    country_id?: InputMaybe<FilterTypeInput>;
    name?: InputMaybe<FilterTypeInput>;
    pickup_location_code?: InputMaybe<FilterTypeInput>;
    postcode?: InputMaybe<FilterTypeInput>;
    region?: InputMaybe<FilterTypeInput>;
    region_id?: InputMaybe<FilterTypeInput>;
    street?: InputMaybe<FilterTypeInput>;
};

export type PickupLocationSortInput = {
    city?: InputMaybe<SortEnum>;
    contact_name?: InputMaybe<SortEnum>;
    country_id?: InputMaybe<SortEnum>;
    description?: InputMaybe<SortEnum>;
    distance?: InputMaybe<SortEnum>;
    email?: InputMaybe<SortEnum>;
    fax?: InputMaybe<SortEnum>;
    latitude?: InputMaybe<SortEnum>;
    longitude?: InputMaybe<SortEnum>;
    name?: InputMaybe<SortEnum>;
    phone?: InputMaybe<SortEnum>;
    pickup_location_code?: InputMaybe<SortEnum>;
    postcode?: InputMaybe<SortEnum>;
    region?: InputMaybe<SortEnum>;
    region_id?: InputMaybe<SortEnum>;
    street?: InputMaybe<SortEnum>;
};

export type PickupLocations = {
    __typename?: 'PickupLocations';
    items?: Maybe<Array<Maybe<PickupLocation>>>;
    page_info?: Maybe<SearchResultPageInfo>;
    total_count?: Maybe<Scalars['Int']>;
};

export type PlaceOrderInput = {
    cart_id: Scalars['String'];
};

export type PlaceOrderOutput = {
    __typename?: 'PlaceOrderOutput';
    order: Order;
};

export type Price = {
    __typename?: 'Price';
    /** @deprecated Use `ProductPrice` instead. */
    adjustments?: Maybe<Array<Maybe<PriceAdjustment>>>;
    /** @deprecated Use `ProductPrice` instead. */
    amount?: Maybe<Money>;
};

export type PriceAdjustment = {
    __typename?: 'PriceAdjustment';
    amount?: Maybe<Money>;
    /** @deprecated `PriceAdjustment` is deprecated. */
    code?: Maybe<PriceAdjustmentCodesEnum>;
    /** @deprecated `PriceAdjustment` is deprecated. */
    description?: Maybe<PriceAdjustmentDescriptionEnum>;
};

export enum PriceAdjustmentCodesEnum {
    /** @deprecated `PriceAdjustmentCodesEnum` is deprecated. Tax is included or excluded in the price. Tax is not shown separately in Catalog. */
    Tax = 'TAX',
    /** @deprecated WEEE code is deprecated. Use `fixed_product_taxes.label` instead. */
    Weee = 'WEEE',
    /** @deprecated Use `fixed_product_taxes` instead.  Tax is included or excluded in price. The tax is not shown separtely in Catalog. */
    WeeeTax = 'WEEE_TAX'
}

export enum PriceAdjustmentDescriptionEnum {
    /** @deprecated  */
    Excluded = 'EXCLUDED',
    /** @deprecated  */
    Included = 'INCLUDED'
}

export type PriceRange = {
    __typename?: 'PriceRange';
    maximum_price?: Maybe<ProductPrice>;
    minimum_price: ProductPrice;
};

export enum PriceTypeEnum {
    /** @deprecated  */
    Dynamic = 'DYNAMIC',
    /** @deprecated  */
    Fixed = 'FIXED',
    /** @deprecated  */
    Percent = 'PERCENT'
}

export enum PriceViewEnum {
    /** @deprecated  */
    AsLowAs = 'AS_LOW_AS',
    /** @deprecated  */
    PriceRange = 'PRICE_RANGE'
}

export type ProductAttribute = {
    __typename?: 'ProductAttribute';
    code: Scalars['String'];
    value: Scalars['String'];
};

export type ProductAttributeFilterInput = {
    accessory_brand?: InputMaybe<FilterEqualTypeInput>;
    accessory_gemstone_addon?: InputMaybe<FilterEqualTypeInput>;
    accessory_recyclable_material?: InputMaybe<FilterEqualTypeInput>;
    category_id?: InputMaybe<FilterEqualTypeInput>;
    category_uid?: InputMaybe<FilterEqualTypeInput>;
    color?: InputMaybe<FilterEqualTypeInput>;
    color_asiento?: InputMaybe<FilterEqualTypeInput>;
    color_carcasa_tejido?: InputMaybe<FilterEqualTypeInput>;
    color_estructura?: InputMaybe<FilterEqualTypeInput>;
    color_tablero?: InputMaybe<FilterEqualTypeInput>;
    color_tejido?: InputMaybe<FilterEqualTypeInput>;
    created_at?: InputMaybe<FilterTypeInput>;
    description?: InputMaybe<FilterMatchTypeInput>;
    fashion_color?: InputMaybe<FilterEqualTypeInput>;
    fashion_material?: InputMaybe<FilterEqualTypeInput>;
    fashion_size?: InputMaybe<FilterEqualTypeInput>;
    fashion_style?: InputMaybe<FilterEqualTypeInput>;
    forma?: InputMaybe<FilterEqualTypeInput>;
    format?: InputMaybe<FilterEqualTypeInput>;
    has_video?: InputMaybe<FilterEqualTypeInput>;
    material_estructura?: InputMaybe<FilterEqualTypeInput>;
    medida_comercial?: InputMaybe<FilterEqualTypeInput>;
    name?: InputMaybe<FilterMatchTypeInput>;
    news_from_date?: InputMaybe<FilterTypeInput>;
    news_to_date?: InputMaybe<FilterTypeInput>;
    price?: InputMaybe<FilterRangeTypeInput>;
    short_description?: InputMaybe<FilterMatchTypeInput>;
    sku?: InputMaybe<FilterEqualTypeInput>;
    url_key?: InputMaybe<FilterEqualTypeInput>;
};

export type ProductAttributeMetadata = AttributeMetadataInterface & {
    __typename?: 'ProductAttributeMetadata';
    attribute_labels?: Maybe<Array<Maybe<StoreLabels>>>;
    code?: Maybe<Scalars['String']>;
    data_type?: Maybe<ObjectDataTypeEnum>;
    entity_type?: Maybe<AttributeEntityTypeEnum>;
    is_system?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Scalars['String']>;
    sort_order?: Maybe<Scalars['Int']>;
    ui_input?: Maybe<UiInputTypeInterface>;
    uid?: Maybe<Scalars['ID']>;
    used_in_components?: Maybe<Array<Maybe<CustomAttributesListsEnum>>>;
};

export type ProductAttributeSortInput = {
    accessory_brand?: InputMaybe<SortEnum>;
    name?: InputMaybe<SortEnum>;
    position?: InputMaybe<SortEnum>;
    price?: InputMaybe<SortEnum>;
    relevance?: InputMaybe<SortEnum>;
};

export type ProductDiscount = {
    __typename?: 'ProductDiscount';
    amount_off?: Maybe<Scalars['Float']>;
    percent_off?: Maybe<Scalars['Float']>;
};

export type ProductFilterInput = {
    category_id?: InputMaybe<FilterTypeInput>;
    country_of_manufacture?: InputMaybe<FilterTypeInput>;
    created_at?: InputMaybe<FilterTypeInput>;
    custom_layout?: InputMaybe<FilterTypeInput>;
    custom_layout_update?: InputMaybe<FilterTypeInput>;
    description?: InputMaybe<FilterTypeInput>;
    gift_message_available?: InputMaybe<FilterTypeInput>;
    has_options?: InputMaybe<FilterTypeInput>;
    image?: InputMaybe<FilterTypeInput>;
    image_label?: InputMaybe<FilterTypeInput>;
    is_returnable?: InputMaybe<FilterTypeInput>;
    manufacturer?: InputMaybe<FilterTypeInput>;
    max_price?: InputMaybe<FilterTypeInput>;
    meta_description?: InputMaybe<FilterTypeInput>;
    meta_keyword?: InputMaybe<FilterTypeInput>;
    meta_title?: InputMaybe<FilterTypeInput>;
    min_price?: InputMaybe<FilterTypeInput>;
    name?: InputMaybe<FilterTypeInput>;
    news_from_date?: InputMaybe<FilterTypeInput>;
    news_to_date?: InputMaybe<FilterTypeInput>;
    options_container?: InputMaybe<FilterTypeInput>;
    or?: InputMaybe<ProductFilterInput>;
    price?: InputMaybe<FilterTypeInput>;
    required_options?: InputMaybe<FilterTypeInput>;
    short_description?: InputMaybe<FilterTypeInput>;
    sku?: InputMaybe<FilterTypeInput>;
    small_image?: InputMaybe<FilterTypeInput>;
    small_image_label?: InputMaybe<FilterTypeInput>;
    special_from_date?: InputMaybe<FilterTypeInput>;
    special_price?: InputMaybe<FilterTypeInput>;
    special_to_date?: InputMaybe<FilterTypeInput>;
    swatch_image?: InputMaybe<FilterTypeInput>;
    thumbnail?: InputMaybe<FilterTypeInput>;
    thumbnail_label?: InputMaybe<FilterTypeInput>;
    tier_price?: InputMaybe<FilterTypeInput>;
    updated_at?: InputMaybe<FilterTypeInput>;
    url_key?: InputMaybe<FilterTypeInput>;
    url_path?: InputMaybe<FilterTypeInput>;
    weight?: InputMaybe<FilterTypeInput>;
};

export type ProductImage = MediaGalleryInterface & {
    __typename?: 'ProductImage';
    disabled?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Scalars['String']>;
    position?: Maybe<Scalars['Int']>;
    url?: Maybe<Scalars['String']>;
};

export type ProductInfoInput = {
    sku: Scalars['String'];
};

export type ProductInterface = {
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_announcement_date?: Maybe<Scalars['String']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_brand?: Maybe<Scalars['Int']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_custom_engraving_text?: Maybe<Scalars['String']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_detailed_extra?: Maybe<Scalars['String']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_extra?: Maybe<Scalars['String']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_gemstone_addon?: Maybe<Scalars['String']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    accessory_recyclable_material?: Maybe<Scalars['Int']>;
    /** @deprecated The field should not be used on the storefront. */
    attribute_set_id?: Maybe<Scalars['Int']>;
    canonical_url?: Maybe<Scalars['String']>;
    categories?: Maybe<Array<Maybe<CategoryInterface>>>;
    /** @deprecated Use the `custom_attributes` field instead. */
    color?: Maybe<Scalars['Int']>;
    country_of_manufacture?: Maybe<Scalars['String']>;
    /** @deprecated The field should not be used on the storefront. */
    created_at?: Maybe<Scalars['String']>;
    crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
    custom_attributes: Array<Maybe<CustomAttribute>>;
    description?: Maybe<ComplexTextValue>;
    /** @deprecated Use the `custom_attributes` field instead. */
    description_extra?: Maybe<Scalars['String']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_color?: Maybe<Scalars['Int']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_material?: Maybe<Scalars['String']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_size?: Maybe<Scalars['Int']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    fashion_style?: Maybe<Scalars['String']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    format?: Maybe<Scalars['Int']>;
    gift_message_available?: Maybe<Scalars['String']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    has_video?: Maybe<Scalars['Int']>;
    /** @deprecated Use the `uid` field instead. */
    id?: Maybe<Scalars['Int']>;
    image?: Maybe<ProductImage>;
    is_returnable?: Maybe<Scalars['String']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    manufacturer?: Maybe<Scalars['Int']>;
    media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
    /** @deprecated Use `media_gallery` instead. */
    media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
    meta_description?: Maybe<Scalars['String']>;
    meta_keyword?: Maybe<Scalars['String']>;
    meta_title?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    /** @deprecated The field should not be used on the storefront. */
    new_from_date?: Maybe<Scalars['String']>;
    /** @deprecated The field should not be used on the storefront. */
    new_to_date?: Maybe<Scalars['String']>;
    only_x_left_in_stock?: Maybe<Scalars['Float']>;
    options_container?: Maybe<Scalars['String']>;
    orParentSku?: Maybe<Scalars['String']>;
    orParentUrlKey?: Maybe<Scalars['String']>;
    /** @deprecated Use `price_range` for product price information. */
    price?: Maybe<ProductPrices>;
    price_range: PriceRange;
    price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
    product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
    rating_summary: Scalars['Float'];
    related_products?: Maybe<Array<Maybe<ProductInterface>>>;
    review_count: Scalars['Int'];
    reviews: ProductReviews;
    short_description?: Maybe<ComplexTextValue>;
    sku?: Maybe<Scalars['String']>;
    small_image?: Maybe<ProductImage>;
    /** @deprecated The field should not be used on the storefront. */
    special_from_date?: Maybe<Scalars['String']>;
    special_price?: Maybe<Scalars['Float']>;
    special_to_date?: Maybe<Scalars['String']>;
    staged: Scalars['Boolean'];
    stock_status?: Maybe<ProductStockStatus>;
    swatch_image?: Maybe<Scalars['String']>;
    thumbnail?: Maybe<ProductImage>;
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_price?: Maybe<Scalars['Float']>;
    /** @deprecated Use `price_tiers` for product tier price information. */
    tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
    /** @deprecated Use `__typename` instead. */
    type_id?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
    /** @deprecated The field should not be used on the storefront. */
    updated_at?: Maybe<Scalars['String']>;
    upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
    url_key?: Maybe<Scalars['String']>;
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>;
    url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
    url_suffix?: Maybe<Scalars['String']>;
    /** @deprecated Use the `custom_attributes` field instead. */
    video_file?: Maybe<Scalars['String']>;
    /** @deprecated The field should not be used on the storefront. */
    websites?: Maybe<Array<Maybe<Website>>>;
};

export type ProductInterfaceReviewsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type ProductLinks = ProductLinksInterface & {
    __typename?: 'ProductLinks';
    link_type?: Maybe<Scalars['String']>;
    linked_product_sku?: Maybe<Scalars['String']>;
    linked_product_type?: Maybe<Scalars['String']>;
    position?: Maybe<Scalars['Int']>;
    sku?: Maybe<Scalars['String']>;
};

export type ProductLinksInterface = {
    link_type?: Maybe<Scalars['String']>;
    linked_product_sku?: Maybe<Scalars['String']>;
    linked_product_type?: Maybe<Scalars['String']>;
    position?: Maybe<Scalars['Int']>;
    sku?: Maybe<Scalars['String']>;
};

export type ProductMediaGalleryEntriesContent = {
    __typename?: 'ProductMediaGalleryEntriesContent';
    base64_encoded_data?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
};

export type ProductMediaGalleryEntriesVideoContent = {
    __typename?: 'ProductMediaGalleryEntriesVideoContent';
    media_type?: Maybe<Scalars['String']>;
    video_description?: Maybe<Scalars['String']>;
    video_metadata?: Maybe<Scalars['String']>;
    video_provider?: Maybe<Scalars['String']>;
    video_title?: Maybe<Scalars['String']>;
    video_url?: Maybe<Scalars['String']>;
};

export type ProductPrice = {
    __typename?: 'ProductPrice';
    discount?: Maybe<ProductDiscount>;
    final_price: Money;
    fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
    regular_price: Money;
};

export type ProductPrices = {
    __typename?: 'ProductPrices';
    /** @deprecated Use `PriceRange.maximum_price` instead. */
    maximalPrice?: Maybe<Price>;
    /** @deprecated Use `PriceRange.minimum_price` instead. */
    minimalPrice?: Maybe<Price>;
    /** @deprecated Use `regular_price` from `PriceRange.minimum_price` or `PriceRange.maximum_price` instead. */
    regularPrice?: Maybe<Price>;
};

export type ProductReview = {
    __typename?: 'ProductReview';
    average_rating: Scalars['Float'];
    created_at: Scalars['String'];
    nickname: Scalars['String'];
    product: ProductInterface;
    ratings_breakdown: Array<Maybe<ProductReviewRating>>;
    summary: Scalars['String'];
    text: Scalars['String'];
};

export type ProductReviewRating = {
    __typename?: 'ProductReviewRating';
    name: Scalars['String'];
    value: Scalars['String'];
};

export type ProductReviewRatingInput = {
    id: Scalars['String'];
    value_id: Scalars['String'];
};

export type ProductReviewRatingMetadata = {
    __typename?: 'ProductReviewRatingMetadata';
    id: Scalars['String'];
    name: Scalars['String'];
    values: Array<Maybe<ProductReviewRatingValueMetadata>>;
};

export type ProductReviewRatingValueMetadata = {
    __typename?: 'ProductReviewRatingValueMetadata';
    value: Scalars['String'];
    value_id: Scalars['String'];
};

export type ProductReviewRatingsMetadata = {
    __typename?: 'ProductReviewRatingsMetadata';
    items: Array<Maybe<ProductReviewRatingMetadata>>;
};

export type ProductReviews = {
    __typename?: 'ProductReviews';
    items: Array<Maybe<ProductReview>>;
    page_info: SearchResultPageInfo;
};

export type ProductSortInput = {
    country_of_manufacture?: InputMaybe<SortEnum>;
    created_at?: InputMaybe<SortEnum>;
    custom_layout?: InputMaybe<SortEnum>;
    custom_layout_update?: InputMaybe<SortEnum>;
    description?: InputMaybe<SortEnum>;
    gift_message_available?: InputMaybe<SortEnum>;
    has_options?: InputMaybe<SortEnum>;
    image?: InputMaybe<SortEnum>;
    image_label?: InputMaybe<SortEnum>;
    is_returnable?: InputMaybe<SortEnum>;
    manufacturer?: InputMaybe<SortEnum>;
    meta_description?: InputMaybe<SortEnum>;
    meta_keyword?: InputMaybe<SortEnum>;
    meta_title?: InputMaybe<SortEnum>;
    name?: InputMaybe<SortEnum>;
    news_from_date?: InputMaybe<SortEnum>;
    news_to_date?: InputMaybe<SortEnum>;
    options_container?: InputMaybe<SortEnum>;
    price?: InputMaybe<SortEnum>;
    required_options?: InputMaybe<SortEnum>;
    short_description?: InputMaybe<SortEnum>;
    sku?: InputMaybe<SortEnum>;
    small_image?: InputMaybe<SortEnum>;
    small_image_label?: InputMaybe<SortEnum>;
    special_from_date?: InputMaybe<SortEnum>;
    special_price?: InputMaybe<SortEnum>;
    special_to_date?: InputMaybe<SortEnum>;
    swatch_image?: InputMaybe<SortEnum>;
    thumbnail?: InputMaybe<SortEnum>;
    thumbnail_label?: InputMaybe<SortEnum>;
    tier_price?: InputMaybe<SortEnum>;
    updated_at?: InputMaybe<SortEnum>;
    url_key?: InputMaybe<SortEnum>;
    url_path?: InputMaybe<SortEnum>;
    weight?: InputMaybe<SortEnum>;
};

export enum ProductStockStatus {
    /** @deprecated  */
    InStock = 'IN_STOCK',
    /** @deprecated  */
    OutOfStock = 'OUT_OF_STOCK'
}

export type ProductTierPrices = {
    __typename?: 'ProductTierPrices';
    /** @deprecated Not relevant for the storefront. */
    customer_group_id?: Maybe<Scalars['String']>;
    /** @deprecated Use `TierPrice.discount` instead. */
    percentage_value?: Maybe<Scalars['Float']>;
    /** @deprecated Use `TierPrice.quantity` instead. */
    qty?: Maybe<Scalars['Float']>;
    /** @deprecated Use `TierPrice.final_price` instead. */
    value?: Maybe<Scalars['Float']>;
    /** @deprecated Not relevant for the storefront. */
    website_id?: Maybe<Scalars['Float']>;
};

export type ProductVideo = MediaGalleryInterface & {
    __typename?: 'ProductVideo';
    disabled?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Scalars['String']>;
    position?: Maybe<Scalars['Int']>;
    url?: Maybe<Scalars['String']>;
    video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

export type Products = {
    __typename?: 'Products';
    aggregations?: Maybe<Array<Maybe<Aggregation>>>;
    /** @deprecated Use `aggregations` instead. */
    filters?: Maybe<Array<Maybe<LayerFilter>>>;
    items?: Maybe<Array<Maybe<ProductInterface>>>;
    page_info?: Maybe<SearchResultPageInfo>;
    sort_fields?: Maybe<SortFields>;
    suggestions?: Maybe<Array<Maybe<SearchSuggestion>>>;
    total_count?: Maybe<Scalars['Int']>;
};

export type ProductsAggregationsArgs = {
    filter?: InputMaybe<AggregationsFilterInput>;
};

export type Query = {
    __typename?: 'Query';
    WebkulPaymentCreditsystemConfig?: Maybe<WebkulPaymentCreditsystemConfig>;
    attributesMetadata?: Maybe<AttributesMetadata>;
    availableStores?: Maybe<Array<Maybe<StoreConfig>>>;
    cart?: Maybe<Cart>;
    categories?: Maybe<CategoryResult>;
    /** @deprecated Use `categories` instead. */
    category?: Maybe<CategoryTree>;
    /** @deprecated Use `categories` instead. */
    categoryList?: Maybe<Array<Maybe<CategoryTree>>>;
    checkoutAgreements?: Maybe<Array<Maybe<CheckoutAgreement>>>;
    cmsBlocks?: Maybe<CmsBlocks>;
    cmsPage?: Maybe<CmsPage>;
    compareList?: Maybe<CompareList>;
    countries?: Maybe<Array<Maybe<Country>>>;
    country?: Maybe<Country>;
    currency?: Maybe<Currency>;
    customAttributeMetadata?: Maybe<CustomAttributeMetadata>;
    customer?: Maybe<Customer>;
    customerCart: Cart;
    customerDownloadableProducts?: Maybe<CustomerDownloadableProducts>;
    /** @deprecated Use the `customer` query instead. */
    customerOrders?: Maybe<CustomerOrders>;
    customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
    customerWishlistProducts: Array<Scalars['String']>;
    deliveryTime?: Maybe<DeliveryInformation>;
    dynamicBlocks: DynamicBlocks;
    getHostedProUrl?: Maybe<HostedProUrl>;
    getPayflowLinkToken?: Maybe<PayflowLinkToken>;
    giftCardAccount?: Maybe<GiftCardAccount>;
    giftRegistry?: Maybe<GiftRegistry>;
    giftRegistryEmailSearch?: Maybe<Array<Maybe<GiftRegistrySearchResult>>>;
    giftRegistryIdSearch?: Maybe<Array<Maybe<GiftRegistrySearchResult>>>;
    giftRegistryTypeSearch?: Maybe<Array<Maybe<GiftRegistrySearchResult>>>;
    giftRegistryTypes?: Maybe<Array<Maybe<GiftRegistryType>>>;
    isEmailAvailable?: Maybe<IsEmailAvailableOutput>;
    mpQuote?: Maybe<GetMpQuoteOutput>;
    mpQuoteConfig?: Maybe<MpQuoteConfigOutput>;
    mpQuoteConversation?: Maybe<MpQuoteConversationOutput>;
    mpQuoteList?: Maybe<MpQuoteListOutput>;
    mpSaveCartConfigs?: Maybe<MpSaveCartConfigsOutput>;
    mpSaveCartGetCarts?: Maybe<MpGetCartsOutput>;
    mpSaveCartGetProducts?: Maybe<MpGetProductsOutput>;
    mpSaveCartViewCarts?: Maybe<MpCartsOutput>;
    mpSmtpBestsellers?: Maybe<SmtpBestsellersOutput>;
    pickupLocations?: Maybe<PickupLocations>;
    productReviewRatingsMetadata: ProductReviewRatingsMetadata;
    products?: Maybe<Products>;
    recaptchaV3Config?: Maybe<ReCaptchaConfigurationV3>;
    route?: Maybe<RoutableInterface>;
    storeConfig?: Maybe<StoreConfig>;
    /** @deprecated Use the `route` query instead. */
    urlResolver?: Maybe<EntityUrl>;
    /** @deprecated Moved under `Customer.wishlist`. */
    wishlist?: Maybe<WishlistOutput>;
};

export type QueryAttributesMetadataArgs = {
    attributeUids?: InputMaybe<Array<Scalars['ID']>>;
    entityType: AttributeEntityTypeEnum;
    showSystemAttributes?: InputMaybe<Scalars['Boolean']>;
};

export type QueryAvailableStoresArgs = {
    useCurrentGroup?: InputMaybe<Scalars['Boolean']>;
};

export type QueryCartArgs = {
    cart_id: Scalars['String'];
};

export type QueryCategoriesArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    filters?: InputMaybe<CategoryFilterInput>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type QueryCategoryArgs = {
    id?: InputMaybe<Scalars['Int']>;
};

export type QueryCategoryListArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    filters?: InputMaybe<CategoryFilterInput>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type QueryCmsBlocksArgs = {
    identifiers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCmsPageArgs = {
    id?: InputMaybe<Scalars['Int']>;
    identifier?: InputMaybe<Scalars['String']>;
};

export type QueryCompareListArgs = {
    uid: Scalars['ID'];
};

export type QueryCountryArgs = {
    id?: InputMaybe<Scalars['String']>;
};

export type QueryCustomAttributeMetadataArgs = {
    attributes: Array<AttributeInput>;
};

export type QueryDynamicBlocksArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    input?: InputMaybe<DynamicBlocksFilterInput>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type QueryGetHostedProUrlArgs = {
    input: HostedProUrlInput;
};

export type QueryGetPayflowLinkTokenArgs = {
    input: PayflowLinkTokenInput;
};

export type QueryGiftCardAccountArgs = {
    input: GiftCardAccountInput;
};

export type QueryGiftRegistryArgs = {
    giftRegistryUid: Scalars['ID'];
};

export type QueryGiftRegistryEmailSearchArgs = {
    email: Scalars['String'];
};

export type QueryGiftRegistryIdSearchArgs = {
    giftRegistryUid: Scalars['ID'];
};

export type QueryGiftRegistryTypeSearchArgs = {
    firstName: Scalars['String'];
    giftRegistryTypeUid?: InputMaybe<Scalars['ID']>;
    lastName: Scalars['String'];
};

export type QueryIsEmailAvailableArgs = {
    email: Scalars['String'];
};

export type QueryMpQuoteArgs = {
    quote_id?: InputMaybe<Scalars['Int']>;
};

export type QueryMpQuoteConversationArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    filter?: InputMaybe<MpQuoteConversationFilterInput>;
    pageSize?: InputMaybe<Scalars['Int']>;
    quote_id: Scalars['Int'];
    sort?: InputMaybe<MpQuoteConversationSortInput>;
};

export type QueryMpQuoteListArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    filter?: InputMaybe<MpQuoteFilterInput>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type QueryMpSaveCartGetCartsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    filter?: InputMaybe<MpCartsFilterInput>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type QueryMpSaveCartGetProductsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    filter?: InputMaybe<MpProductsFilterInput>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type QueryMpSaveCartViewCartsArgs = {
    token: Scalars['String'];
};

export type QueryMpSmtpBestsellersArgs = {
    app_id: Scalars['String'];
    filters?: InputMaybe<MpFilters>;
    secret_key: Scalars['String'];
};

export type QueryPickupLocationsArgs = {
    area?: InputMaybe<AreaInput>;
    currentPage?: InputMaybe<Scalars['Int']>;
    filters?: InputMaybe<PickupLocationFilterInput>;
    pageSize?: InputMaybe<Scalars['Int']>;
    productsInfo?: InputMaybe<Array<InputMaybe<ProductInfoInput>>>;
    sort?: InputMaybe<PickupLocationSortInput>;
};

export type QueryProductsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    filter?: InputMaybe<ProductAttributeFilterInput>;
    pageSize?: InputMaybe<Scalars['Int']>;
    search?: InputMaybe<Scalars['String']>;
    sort?: InputMaybe<ProductAttributeSortInput>;
};

export type QueryRouteArgs = {
    url: Scalars['String'];
};

export type QueryUrlResolverArgs = {
    url: Scalars['String'];
};

export type Quote = {
    __typename?: 'Quote';
    base_currency_code?: Maybe<Scalars['String']>;
    base_subtotal?: Maybe<Scalars['Float']>;
    created_at?: Maybe<Scalars['String']>;
    customer_email?: Maybe<Scalars['String']>;
    customer_group_id?: Maybe<Scalars['Int']>;
    customer_id?: Maybe<Scalars['Int']>;
    discount?: Maybe<Scalars['String']>;
    entity_id?: Maybe<Scalars['Int']>;
    expired_at?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_sent_reminder?: Maybe<Scalars['Boolean']>;
    items?: Maybe<Array<Maybe<QuoteItemInterface>>>;
    items_count?: Maybe<Scalars['String']>;
    items_qty?: Maybe<Scalars['String']>;
    quote_currency_code?: Maybe<Scalars['String']>;
    remote_ip?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    store_id?: Maybe<Scalars['Int']>;
    subtotal?: Maybe<Scalars['Float']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type QuoteItemInterface = {
    calculation_price?: Maybe<Scalars['String']>;
    discount?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    qty: Scalars['Float'];
    quote_id?: Maybe<Scalars['Int']>;
    request_price?: Maybe<Scalars['String']>;
    sku?: Maybe<Scalars['String']>;
};

export type ReCaptchaConfigurationV3 = {
    __typename?: 'ReCaptchaConfigurationV3';
    badge_position: Scalars['String'];
    failure_message: Scalars['String'];
    forms: Array<Maybe<ReCaptchaFormEnum>>;
    language_code?: Maybe<Scalars['String']>;
    minimum_score: Scalars['Float'];
    website_key: Scalars['String'];
};

export enum ReCaptchaFormEnum {
    /** @deprecated  */
    Braintree = 'BRAINTREE',
    /** @deprecated  */
    Contact = 'CONTACT',
    /** @deprecated  */
    CustomerCreate = 'CUSTOMER_CREATE',
    /** @deprecated  */
    CustomerEdit = 'CUSTOMER_EDIT',
    /** @deprecated  */
    CustomerForgotPassword = 'CUSTOMER_FORGOT_PASSWORD',
    /** @deprecated  */
    CustomerLogin = 'CUSTOMER_LOGIN',
    /** @deprecated  */
    Newsletter = 'NEWSLETTER',
    /** @deprecated  */
    PlaceOrder = 'PLACE_ORDER',
    /** @deprecated  */
    ProductReview = 'PRODUCT_REVIEW',
    /** @deprecated  */
    Sendfriend = 'SENDFRIEND'
}

export type Region = {
    __typename?: 'Region';
    code?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
};

export type RemoveCouponFromCartInput = {
    cart_id: Scalars['String'];
};

export type RemoveCouponFromCartOutput = {
    __typename?: 'RemoveCouponFromCartOutput';
    cart?: Maybe<Cart>;
};

export type RemoveGiftCardFromCartInput = {
    cart_id: Scalars['String'];
    gift_card_code: Scalars['String'];
};

export type RemoveGiftCardFromCartOutput = {
    __typename?: 'RemoveGiftCardFromCartOutput';
    cart: Cart;
};

export type RemoveGiftRegistryItemsOutput = {
    __typename?: 'RemoveGiftRegistryItemsOutput';
    gift_registry?: Maybe<GiftRegistry>;
};

export type RemoveGiftRegistryOutput = {
    __typename?: 'RemoveGiftRegistryOutput';
    success: Scalars['Boolean'];
};

export type RemoveGiftRegistryRegistrantsOutput = {
    __typename?: 'RemoveGiftRegistryRegistrantsOutput';
    gift_registry?: Maybe<GiftRegistry>;
};

export type RemoveItemFromCartInput = {
    cart_id: Scalars['String'];
    cart_item_id?: InputMaybe<Scalars['Int']>;
    cart_item_uid?: InputMaybe<Scalars['ID']>;
};

export type RemoveItemFromCartOutput = {
    __typename?: 'RemoveItemFromCartOutput';
    cart: Cart;
};

export type RemoveProductsFromCompareListInput = {
    products: Array<InputMaybe<Scalars['ID']>>;
    uid: Scalars['ID'];
};

export type RemoveProductsFromWishlistOutput = {
    __typename?: 'RemoveProductsFromWishlistOutput';
    user_errors: Array<Maybe<WishListUserInputError>>;
    wishlist: Wishlist;
};

export type RemoveReturnTrackingInput = {
    return_shipping_tracking_uid: Scalars['ID'];
};

export type RemoveReturnTrackingOutput = {
    __typename?: 'RemoveReturnTrackingOutput';
    return?: Maybe<Return>;
};

export type RemoveRewardPointsFromCartOutput = {
    __typename?: 'RemoveRewardPointsFromCartOutput';
    cart: Cart;
};

export type RemoveStoreCreditFromCartInput = {
    cart_id: Scalars['String'];
};

export type RemoveStoreCreditFromCartOutput = {
    __typename?: 'RemoveStoreCreditFromCartOutput';
    cart: Cart;
};

export type ReorderItemsOutput = {
    __typename?: 'ReorderItemsOutput';
    cart: Cart;
    userInputErrors: Array<Maybe<CheckoutUserInputError>>;
};

export type RequestReturnInput = {
    comment_text?: InputMaybe<Scalars['String']>;
    contact_email?: InputMaybe<Scalars['String']>;
    items: Array<InputMaybe<RequestReturnItemInput>>;
    order_uid: Scalars['ID'];
};

export type RequestReturnItemInput = {
    entered_custom_attributes?: InputMaybe<
        Array<InputMaybe<EnteredCustomAttributeInput>>
    >;
    order_item_uid: Scalars['ID'];
    quantity_to_return: Scalars['Float'];
    selected_custom_attributes?: InputMaybe<
        Array<InputMaybe<SelectedCustomAttributeInput>>
    >;
};

export type RequestReturnOutput = {
    __typename?: 'RequestReturnOutput';
    return?: Maybe<Return>;
    returns?: Maybe<Returns>;
};

export type RequestReturnOutputReturnsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type Return = {
    __typename?: 'Return';
    available_shipping_carriers?: Maybe<Array<Maybe<ReturnShippingCarrier>>>;
    comments?: Maybe<Array<Maybe<ReturnComment>>>;
    created_at: Scalars['String'];
    customer: ReturnCustomer;
    items?: Maybe<Array<Maybe<ReturnItem>>>;
    number: Scalars['String'];
    order?: Maybe<CustomerOrder>;
    shipping?: Maybe<ReturnShipping>;
    status?: Maybe<ReturnStatus>;
    uid: Scalars['ID'];
};

export type ReturnComment = {
    __typename?: 'ReturnComment';
    author_name: Scalars['String'];
    created_at: Scalars['String'];
    text: Scalars['String'];
    uid: Scalars['ID'];
};

export type ReturnCustomAttribute = {
    __typename?: 'ReturnCustomAttribute';
    label: Scalars['String'];
    uid: Scalars['ID'];
    value: Scalars['String'];
};

export type ReturnCustomer = {
    __typename?: 'ReturnCustomer';
    email: Scalars['String'];
    firstname?: Maybe<Scalars['String']>;
    lastname?: Maybe<Scalars['String']>;
};

export type ReturnItem = {
    __typename?: 'ReturnItem';
    custom_attributes?: Maybe<Array<Maybe<ReturnCustomAttribute>>>;
    order_item: OrderItemInterface;
    quantity: Scalars['Float'];
    request_quantity: Scalars['Float'];
    status: ReturnItemStatus;
    uid: Scalars['ID'];
};

export enum ReturnItemStatus {
    /** @deprecated  */
    Approved = 'APPROVED',
    /** @deprecated  */
    Authorized = 'AUTHORIZED',
    /** @deprecated  */
    Denied = 'DENIED',
    /** @deprecated  */
    Pending = 'PENDING',
    /** @deprecated  */
    Received = 'RECEIVED',
    /** @deprecated  */
    Rejected = 'REJECTED'
}

export type ReturnShipping = {
    __typename?: 'ReturnShipping';
    address?: Maybe<ReturnShippingAddress>;
    tracking?: Maybe<Array<Maybe<ReturnShippingTracking>>>;
};

export type ReturnShippingTrackingArgs = {
    uid?: InputMaybe<Scalars['ID']>;
};

export type ReturnShippingAddress = {
    __typename?: 'ReturnShippingAddress';
    city: Scalars['String'];
    contact_name?: Maybe<Scalars['String']>;
    country: Country;
    postcode: Scalars['String'];
    region: Region;
    street: Array<Maybe<Scalars['String']>>;
    telephone?: Maybe<Scalars['String']>;
};

export type ReturnShippingCarrier = {
    __typename?: 'ReturnShippingCarrier';
    label: Scalars['String'];
    uid: Scalars['ID'];
};

export type ReturnShippingTracking = {
    __typename?: 'ReturnShippingTracking';
    carrier: ReturnShippingCarrier;
    status?: Maybe<ReturnShippingTrackingStatus>;
    tracking_number: Scalars['String'];
    uid: Scalars['ID'];
};

export type ReturnShippingTrackingStatus = {
    __typename?: 'ReturnShippingTrackingStatus';
    text: Scalars['String'];
    type: ReturnShippingTrackingStatusType;
};

export enum ReturnShippingTrackingStatusType {
    /** @deprecated  */
    Error = 'ERROR',
    /** @deprecated  */
    Information = 'INFORMATION'
}

export enum ReturnStatus {
    /** @deprecated  */
    Approved = 'APPROVED',
    /** @deprecated  */
    Authorized = 'AUTHORIZED',
    /** @deprecated  */
    Closed = 'CLOSED',
    /** @deprecated  */
    Denied = 'DENIED',
    /** @deprecated  */
    PartiallyApproved = 'PARTIALLY_APPROVED',
    /** @deprecated  */
    PartiallyAuthorized = 'PARTIALLY_AUTHORIZED',
    /** @deprecated  */
    PartiallyReceived = 'PARTIALLY_RECEIVED',
    /** @deprecated  */
    PartiallyRejected = 'PARTIALLY_REJECTED',
    /** @deprecated  */
    Pending = 'PENDING',
    /** @deprecated  */
    ProcessedAndClosed = 'PROCESSED_AND_CLOSED',
    /** @deprecated  */
    Received = 'RECEIVED',
    /** @deprecated  */
    Rejected = 'REJECTED'
}

export type Returns = {
    __typename?: 'Returns';
    items?: Maybe<Array<Maybe<Return>>>;
    page_info?: Maybe<SearchResultPageInfo>;
    total_count?: Maybe<Scalars['Int']>;
};

export type RevokeCustomerTokenOutput = {
    __typename?: 'RevokeCustomerTokenOutput';
    result: Scalars['Boolean'];
};

export type RewardPoints = {
    __typename?: 'RewardPoints';
    balance?: Maybe<RewardPointsAmount>;
    balance_history?: Maybe<Array<Maybe<RewardPointsBalanceHistoryItem>>>;
    exchange_rates?: Maybe<RewardPointsExchangeRates>;
    subscription_status?: Maybe<RewardPointsSubscriptionStatus>;
};

export type RewardPointsAmount = {
    __typename?: 'RewardPointsAmount';
    money: Money;
    points: Scalars['Float'];
};

export type RewardPointsBalanceHistoryItem = {
    __typename?: 'RewardPointsBalanceHistoryItem';
    balance?: Maybe<RewardPointsAmount>;
    change_reason: Scalars['String'];
    date: Scalars['String'];
    points_change: Scalars['Float'];
};

export type RewardPointsExchangeRates = {
    __typename?: 'RewardPointsExchangeRates';
    earning?: Maybe<RewardPointsRate>;
    redemption?: Maybe<RewardPointsRate>;
};

export type RewardPointsRate = {
    __typename?: 'RewardPointsRate';
    currency_amount: Scalars['Float'];
    points: Scalars['Float'];
};

export type RewardPointsSubscriptionStatus = {
    __typename?: 'RewardPointsSubscriptionStatus';
    balance_updates: RewardPointsSubscriptionStatusesEnum;
    points_expiration_notifications: RewardPointsSubscriptionStatusesEnum;
};

export enum RewardPointsSubscriptionStatusesEnum {
    /** @deprecated  */
    NotSubscribed = 'NOT_SUBSCRIBED',
    /** @deprecated  */
    Subscribed = 'SUBSCRIBED'
}

export type RoutableInterface = {
    redirect_code: Scalars['Int'];
    relative_url?: Maybe<Scalars['String']>;
    type?: Maybe<UrlRewriteEntityTypeEnum>;
};

export type SalesCommentItem = {
    __typename?: 'SalesCommentItem';
    message: Scalars['String'];
    timestamp: Scalars['String'];
};

export type SalesItemInterface = {
    __typename?: 'SalesItemInterface';
    gift_message?: Maybe<GiftMessage>;
};

export enum ScopeTypeEnum {
    /** @deprecated  */
    Global = 'GLOBAL',
    /** @deprecated  */
    Store = 'STORE',
    /** @deprecated  */
    Website = 'WEBSITE'
}

export type SearchResultPageInfo = {
    __typename?: 'SearchResultPageInfo';
    current_page?: Maybe<Scalars['Int']>;
    page_size?: Maybe<Scalars['Int']>;
    total_pages?: Maybe<Scalars['Int']>;
};

export type SearchSuggestion = {
    __typename?: 'SearchSuggestion';
    search: Scalars['String'];
};

export type SelectableInputTypeInterface = {
    attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
};

export type SelectedAttributeOption = {
    __typename?: 'SelectedAttributeOption';
    attribute_option?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
};

export type SelectedBundleOption = {
    __typename?: 'SelectedBundleOption';
    /** @deprecated Use `uid` instead */
    id: Scalars['Int'];
    label: Scalars['String'];
    type: Scalars['String'];
    uid: Scalars['ID'];
    values: Array<Maybe<SelectedBundleOptionValue>>;
};

export type SelectedBundleOptionValue = {
    __typename?: 'SelectedBundleOptionValue';
    id: Scalars['Int'];
    label: Scalars['String'];
    price: Scalars['Float'];
    quantity: Scalars['Float'];
    uid: Scalars['ID'];
};

export type SelectedConfigurableOption = {
    __typename?: 'SelectedConfigurableOption';
    configurable_product_option_uid: Scalars['ID'];
    configurable_product_option_value_uid: Scalars['ID'];
    /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_uid` instead. */
    id: Scalars['Int'];
    option_label: Scalars['String'];
    /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_value_uid` instead. */
    value_id: Scalars['Int'];
    value_label: Scalars['String'];
};

export type SelectedCustomAttributeInput = {
    attribute_code: Scalars['String'];
    value: Scalars['ID'];
};

export type SelectedCustomizableOption = {
    __typename?: 'SelectedCustomizableOption';
    customizable_option_uid: Scalars['ID'];
    /** @deprecated Use `SelectedCustomizableOption.customizable_option_uid` instead. */
    id: Scalars['Int'];
    is_required: Scalars['Boolean'];
    label: Scalars['String'];
    sort_order: Scalars['Int'];
    type: Scalars['String'];
    values: Array<Maybe<SelectedCustomizableOptionValue>>;
};

export type SelectedCustomizableOptionValue = {
    __typename?: 'SelectedCustomizableOptionValue';
    customizable_option_value_uid: Scalars['ID'];
    /** @deprecated Use `SelectedCustomizableOptionValue.customizable_option_value_uid` instead. */
    id: Scalars['Int'];
    label: Scalars['String'];
    price: CartItemSelectedOptionValuePrice;
    value: Scalars['String'];
};

export type SelectedPaymentMethod = {
    __typename?: 'SelectedPaymentMethod';
    code: Scalars['String'];
    purchase_order_number?: Maybe<Scalars['String']>;
    title: Scalars['String'];
};

export type SelectedShippingMethod = {
    __typename?: 'SelectedShippingMethod';
    amount: Money;
    /** @deprecated The field should not be used on the storefront. */
    base_amount?: Maybe<Money>;
    carrier_code: Scalars['String'];
    carrier_title: Scalars['String'];
    method_code: Scalars['String'];
    method_title: Scalars['String'];
    price_excl_tax: Money;
    price_incl_tax: Money;
};

export type SendEmailToFriendInput = {
    product_id: Scalars['Int'];
    recipients: Array<InputMaybe<SendEmailToFriendRecipientInput>>;
    sender: SendEmailToFriendSenderInput;
};

export type SendEmailToFriendOutput = {
    __typename?: 'SendEmailToFriendOutput';
    recipients?: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>;
    sender?: Maybe<SendEmailToFriendSender>;
};

export type SendEmailToFriendRecipient = {
    __typename?: 'SendEmailToFriendRecipient';
    email: Scalars['String'];
    name: Scalars['String'];
};

export type SendEmailToFriendRecipientInput = {
    email: Scalars['String'];
    name: Scalars['String'];
};

export type SendEmailToFriendSender = {
    __typename?: 'SendEmailToFriendSender';
    email: Scalars['String'];
    message: Scalars['String'];
    name: Scalars['String'];
};

export type SendEmailToFriendSenderInput = {
    email: Scalars['String'];
    message: Scalars['String'];
    name: Scalars['String'];
};

export type SendFriendConfiguration = {
    __typename?: 'SendFriendConfiguration';
    enabled_for_customers: Scalars['Boolean'];
    enabled_for_guests: Scalars['Boolean'];
};

export type SetBillingAddressOnCartInput = {
    billing_address: BillingAddressInput;
    cart_id: Scalars['String'];
};

export type SetBillingAddressOnCartOutput = {
    __typename?: 'SetBillingAddressOnCartOutput';
    cart: Cart;
};

export type SetGiftOptionsOnCartInput = {
    cart_id: Scalars['String'];
    gift_message?: InputMaybe<GiftMessageInput>;
    gift_receipt_included: Scalars['Boolean'];
    gift_wrapping_id?: InputMaybe<Scalars['ID']>;
    printed_card_included: Scalars['Boolean'];
};

export type SetGiftOptionsOnCartOutput = {
    __typename?: 'SetGiftOptionsOnCartOutput';
    cart: Cart;
};

export type SetGuestEmailOnCartInput = {
    cart_id: Scalars['String'];
    email: Scalars['String'];
};

export type SetGuestEmailOnCartOutput = {
    __typename?: 'SetGuestEmailOnCartOutput';
    cart: Cart;
};

export type SetPaymentMethodAndPlaceOrderInput = {
    cart_id: Scalars['String'];
    payment_method: PaymentMethodInput;
};

export type SetPaymentMethodOnCartInput = {
    cart_id: Scalars['String'];
    payment_method: PaymentMethodInput;
};

export type SetPaymentMethodOnCartOutput = {
    __typename?: 'SetPaymentMethodOnCartOutput';
    cart: Cart;
};

export type SetShippingAddressesOnCartInput = {
    cart_id: Scalars['String'];
    shipping_addresses: Array<InputMaybe<ShippingAddressInput>>;
};

export type SetShippingAddressesOnCartOutput = {
    __typename?: 'SetShippingAddressesOnCartOutput';
    cart: Cart;
};

export type SetShippingMethodsOnCartInput = {
    cart_id: Scalars['String'];
    shipping_methods: Array<InputMaybe<ShippingMethodInput>>;
};

export type SetShippingMethodsOnCartOutput = {
    __typename?: 'SetShippingMethodsOnCartOutput';
    cart: Cart;
};

export type ShareGiftRegistryInviteeInput = {
    email: Scalars['String'];
    name: Scalars['String'];
};

export type ShareGiftRegistryOutput = {
    __typename?: 'ShareGiftRegistryOutput';
    is_shared: Scalars['Boolean'];
};

export type ShareGiftRegistrySenderInput = {
    message: Scalars['String'];
    name: Scalars['String'];
};

export enum ShipBundleItemsEnum {
    /** @deprecated  */
    Separately = 'SEPARATELY',
    /** @deprecated  */
    Together = 'TOGETHER'
}

export type ShipmentItem = ShipmentItemInterface & {
    __typename?: 'ShipmentItem';
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_shipped: Scalars['Float'];
};

export type ShipmentItemInterface = {
    id: Scalars['ID'];
    order_item?: Maybe<OrderItemInterface>;
    product_name?: Maybe<Scalars['String']>;
    product_sale_price: Money;
    product_sku: Scalars['String'];
    quantity_shipped: Scalars['Float'];
};

export type ShipmentTracking = {
    __typename?: 'ShipmentTracking';
    carrier: Scalars['String'];
    number?: Maybe<Scalars['String']>;
    title: Scalars['String'];
};

export type ShippingAddressInput = {
    address?: InputMaybe<CartAddressInput>;
    customer_address_id?: InputMaybe<Scalars['Int']>;
    customer_notes?: InputMaybe<Scalars['String']>;
    pickup_location_code?: InputMaybe<Scalars['String']>;
};

export type ShippingCartAddress = CartAddressInterface & {
    __typename?: 'ShippingCartAddress';
    available_shipping_methods?: Maybe<Array<Maybe<AvailableShippingMethod>>>;
    /** @deprecated Use `cart_items_v2` instead. */
    cart_items?: Maybe<Array<Maybe<CartItemQuantity>>>;
    cart_items_v2?: Maybe<Array<Maybe<CartItemInterface>>>;
    city: Scalars['String'];
    company?: Maybe<Scalars['String']>;
    country: CartAddressCountry;
    customer_notes?: Maybe<Scalars['String']>;
    firstname: Scalars['String'];
    /** @deprecated This information should not be exposed on the frontend. */
    items_weight?: Maybe<Scalars['Float']>;
    lastname: Scalars['String'];
    pickup_location_code?: Maybe<Scalars['String']>;
    postcode?: Maybe<Scalars['String']>;
    region?: Maybe<CartAddressRegion>;
    selected_shipping_method?: Maybe<SelectedShippingMethod>;
    street: Array<Maybe<Scalars['String']>>;
    telephone?: Maybe<Scalars['String']>;
    uid: Scalars['String'];
    vat_id?: Maybe<Scalars['String']>;
};

export type ShippingDiscount = {
    __typename?: 'ShippingDiscount';
    amount: Money;
};

export type ShippingHandling = {
    __typename?: 'ShippingHandling';
    amount_excluding_tax?: Maybe<Money>;
    amount_including_tax?: Maybe<Money>;
    discounts?: Maybe<Array<Maybe<ShippingDiscount>>>;
    taxes?: Maybe<Array<Maybe<TaxItem>>>;
    total_amount: Money;
};

export type ShippingMethodInput = {
    carrier_code: Scalars['String'];
    method_code: Scalars['String'];
};

export type SimpleCartItem = CartItemInterface & {
    __typename?: 'SimpleCartItem';
    available_gift_wrapping: Array<Maybe<GiftWrapping>>;
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    errors?: Maybe<Array<Maybe<CartItemError>>>;
    gift_message?: Maybe<GiftMessage>;
    gift_wrapping?: Maybe<GiftWrapping>;
    /** @deprecated Use `uid` instead. */
    id: Scalars['String'];
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    quantity: Scalars['Float'];
    uid: Scalars['ID'];
};

export type SimpleProduct = CustomizableProductInterface &
    PhysicalProductInterface &
    ProductInterface &
    RoutableInterface & {
        __typename?: 'SimpleProduct';
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_announcement_date?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_brand?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_custom_engraving_text?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_detailed_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_gemstone_addon?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_recyclable_material?: Maybe<Scalars['Int']>;
        /** @deprecated The field should not be used on the storefront. */
        attribute_set_id?: Maybe<Scalars['Int']>;
        canonical_url?: Maybe<Scalars['String']>;
        categories?: Maybe<Array<Maybe<CategoryInterface>>>;
        /** @deprecated Use the `custom_attributes` field instead. */
        color?: Maybe<Scalars['Int']>;
        country_of_manufacture?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        created_at?: Maybe<Scalars['String']>;
        crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        custom_attributes: Array<Maybe<CustomAttribute>>;
        description?: Maybe<ComplexTextValue>;
        /** @deprecated Use the `custom_attributes` field instead. */
        description_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_color?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_material?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_size?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_style?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        format?: Maybe<Scalars['Int']>;
        gift_message_available?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        has_video?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `uid` field instead. */
        id?: Maybe<Scalars['Int']>;
        image?: Maybe<ProductImage>;
        is_returnable?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        manufacturer?: Maybe<Scalars['Int']>;
        media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
        /** @deprecated Use `media_gallery` instead. */
        media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
        medida_comercial?: Maybe<Scalars['Int']>;
        meta_description?: Maybe<Scalars['String']>;
        meta_keyword?: Maybe<Scalars['String']>;
        meta_title?: Maybe<Scalars['String']>;
        name?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        new_from_date?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        new_to_date?: Maybe<Scalars['String']>;
        only_x_left_in_stock?: Maybe<Scalars['Float']>;
        options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
        options_container?: Maybe<Scalars['String']>;
        orParentSku?: Maybe<Scalars['String']>;
        orParentUrlKey?: Maybe<Scalars['String']>;
        /** @deprecated Use `price_range` for product price information. */
        price?: Maybe<ProductPrices>;
        price_range: PriceRange;
        price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
        product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
        rating_summary: Scalars['Float'];
        redirect_code: Scalars['Int'];
        related_products?: Maybe<Array<Maybe<ProductInterface>>>;
        relative_url?: Maybe<Scalars['String']>;
        review_count: Scalars['Int'];
        reviews: ProductReviews;
        short_description?: Maybe<ComplexTextValue>;
        sku?: Maybe<Scalars['String']>;
        small_image?: Maybe<ProductImage>;
        /** @deprecated The field should not be used on the storefront. */
        special_from_date?: Maybe<Scalars['String']>;
        special_price?: Maybe<Scalars['Float']>;
        special_to_date?: Maybe<Scalars['String']>;
        staged: Scalars['Boolean'];
        stock_status?: Maybe<ProductStockStatus>;
        swatch_image?: Maybe<Scalars['String']>;
        thumbnail?: Maybe<ProductImage>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_price?: Maybe<Scalars['Float']>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
        type?: Maybe<UrlRewriteEntityTypeEnum>;
        /** @deprecated Use `__typename` instead. */
        type_id?: Maybe<Scalars['String']>;
        uid: Scalars['ID'];
        /** @deprecated The field should not be used on the storefront. */
        updated_at?: Maybe<Scalars['String']>;
        upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        url_key?: Maybe<Scalars['String']>;
        /** @deprecated Use product's `canonical_url` or url rewrites instead */
        url_path?: Maybe<Scalars['String']>;
        url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
        url_suffix?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        video_file?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        websites?: Maybe<Array<Maybe<Website>>>;
        weight?: Maybe<Scalars['Float']>;
    };

export type SimpleProductReviewsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type SimpleProductCartItemInput = {
    customizable_options?: InputMaybe<
        Array<InputMaybe<CustomizableOptionInput>>
    >;
    data: CartItemInput;
};

export type SimpleQuoteItem = QuoteItemInterface & {
    __typename?: 'SimpleQuoteItem';
    calculation_price?: Maybe<Scalars['String']>;
    customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
    discount?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    qty: Scalars['Float'];
    quote_id?: Maybe<Scalars['Int']>;
    request_price?: Maybe<Scalars['String']>;
    sku?: Maybe<Scalars['String']>;
};

export type SimpleWishlistItem = WishlistItemInterface & {
    __typename?: 'SimpleWishlistItem';
    added_at: Scalars['String'];
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    product?: Maybe<ProductInterface>;
    quantity: Scalars['Float'];
};

export type SmtpBestsellersOutput = {
    __typename?: 'SmtpBestsellersOutput';
    mpBestsellers?: Maybe<Array<Maybe<BestsellersProductOutput>>>;
};

export enum SortEnum {
    /** @deprecated  */
    Asc = 'ASC',
    /** @deprecated  */
    Desc = 'DESC'
}

export type SortField = {
    __typename?: 'SortField';
    label?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};

export type SortFields = {
    __typename?: 'SortFields';
    default?: Maybe<Scalars['String']>;
    options?: Maybe<Array<Maybe<SortField>>>;
};

export type StoreConfig = {
    __typename?: 'StoreConfig';
    absolute_footer?: Maybe<Scalars['String']>;
    allow_gift_receipt?: Maybe<Scalars['String']>;
    allow_gift_wrapping_on_order?: Maybe<Scalars['String']>;
    allow_gift_wrapping_on_order_items?: Maybe<Scalars['String']>;
    allow_guests_to_write_product_reviews?: Maybe<Scalars['String']>;
    allow_items?: Maybe<Scalars['String']>;
    allow_order?: Maybe<Scalars['String']>;
    allow_printed_card?: Maybe<Scalars['String']>;
    autocomplete_on_storefront?: Maybe<Scalars['Boolean']>;
    bank_transfer?: Maybe<ExtraInfoBankTransferPayment>;
    base_currency_code?: Maybe<Scalars['String']>;
    base_link_url?: Maybe<Scalars['String']>;
    base_media_url?: Maybe<Scalars['String']>;
    base_static_url?: Maybe<Scalars['String']>;
    base_url?: Maybe<Scalars['String']>;
    braintree_cc_vault_active?: Maybe<Scalars['String']>;
    cart_gift_wrapping?: Maybe<Scalars['String']>;
    cart_printed_card?: Maybe<Scalars['String']>;
    catalog_default_sort_by?: Maybe<Scalars['String']>;
    category_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
    category_url_suffix?: Maybe<Scalars['String']>;
    check_money_order_enable_for_specific_countries?: Maybe<Scalars['Boolean']>;
    check_money_order_enabled?: Maybe<Scalars['Boolean']>;
    check_money_order_make_check_payable_to?: Maybe<Scalars['String']>;
    check_money_order_max_order_total?: Maybe<Scalars['String']>;
    check_money_order_min_order_total?: Maybe<Scalars['String']>;
    check_money_order_new_order_status?: Maybe<Scalars['String']>;
    check_money_order_payment_from_specific_countries?: Maybe<
        Scalars['String']
    >;
    check_money_order_send_check_to?: Maybe<Scalars['String']>;
    check_money_order_sort_order?: Maybe<Scalars['Int']>;
    check_money_order_title?: Maybe<Scalars['String']>;
    cms_home_page?: Maybe<Scalars['String']>;
    cms_no_cookies?: Maybe<Scalars['String']>;
    cms_no_route?: Maybe<Scalars['String']>;
    /** @deprecated Use `store_code` instead. */
    code?: Maybe<Scalars['String']>;
    configurable_thumbnail_source?: Maybe<Scalars['String']>;
    contact_enabled: Scalars['Boolean'];
    copyright?: Maybe<Scalars['String']>;
    default_description?: Maybe<Scalars['String']>;
    default_display_currency_code?: Maybe<Scalars['String']>;
    default_keywords?: Maybe<Scalars['String']>;
    default_title?: Maybe<Scalars['String']>;
    demonotice?: Maybe<Scalars['Int']>;
    enable_multiple_wishlists?: Maybe<Scalars['String']>;
    front?: Maybe<Scalars['String']>;
    grid_per_page?: Maybe<Scalars['Int']>;
    grid_per_page_values?: Maybe<Scalars['String']>;
    head_includes?: Maybe<Scalars['String']>;
    head_shortcut_icon?: Maybe<Scalars['String']>;
    header_logo_src?: Maybe<Scalars['String']>;
    /** @deprecated Use `store_code` instead. */
    id?: Maybe<Scalars['Int']>;
    is_allow_guests_to_see_price?: Maybe<Scalars['String']>;
    is_default_store?: Maybe<Scalars['Boolean']>;
    is_default_store_group?: Maybe<Scalars['Boolean']>;
    is_required_login?: Maybe<Scalars['String']>;
    list_mode?: Maybe<Scalars['String']>;
    list_per_page?: Maybe<Scalars['Int']>;
    list_per_page_values?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
    logo_alt?: Maybe<Scalars['String']>;
    logo_height?: Maybe<Scalars['Int']>;
    logo_width?: Maybe<Scalars['Int']>;
    magento_reward_general_is_enabled?: Maybe<Scalars['String']>;
    magento_reward_general_is_enabled_on_front?: Maybe<Scalars['String']>;
    magento_reward_general_min_points_balance?: Maybe<Scalars['String']>;
    magento_reward_general_publish_history?: Maybe<Scalars['String']>;
    magento_reward_points_invitation_customer?: Maybe<Scalars['String']>;
    magento_reward_points_invitation_customer_limit?: Maybe<Scalars['String']>;
    magento_reward_points_invitation_order?: Maybe<Scalars['String']>;
    magento_reward_points_invitation_order_limit?: Maybe<Scalars['String']>;
    magento_reward_points_newsletter?: Maybe<Scalars['String']>;
    magento_reward_points_order?: Maybe<Scalars['String']>;
    magento_reward_points_register?: Maybe<Scalars['String']>;
    magento_reward_points_review?: Maybe<Scalars['String']>;
    magento_reward_points_review_limit?: Maybe<Scalars['String']>;
    magento_wishlist_general_is_enabled?: Maybe<Scalars['String']>;
    maximum_number_of_wishlists?: Maybe<Scalars['String']>;
    minimum_password_length?: Maybe<Scalars['String']>;
    newsletter_enabled: Scalars['Boolean'];
    no_route?: Maybe<Scalars['String']>;
    payment_payflowpro_cc_vault_active?: Maybe<Scalars['String']>;
    printed_card_price?: Maybe<Scalars['String']>;
    product_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
    product_reviews_enabled?: Maybe<Scalars['String']>;
    product_url_suffix?: Maybe<Scalars['String']>;
    required_character_classes_number?: Maybe<Scalars['String']>;
    returns_enabled: Scalars['String'];
    /** @deprecated Use `root_category_uid` instead. */
    root_category_id?: Maybe<Scalars['Int']>;
    root_category_uid?: Maybe<Scalars['ID']>;
    sales_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
    sales_gift_wrapping?: Maybe<Scalars['String']>;
    sales_printed_card?: Maybe<Scalars['String']>;
    secure_base_link_url?: Maybe<Scalars['String']>;
    secure_base_media_url?: Maybe<Scalars['String']>;
    secure_base_static_url?: Maybe<Scalars['String']>;
    secure_base_url?: Maybe<Scalars['String']>;
    send_friend?: Maybe<SendFriendConfiguration>;
    show_cms_breadcrumbs?: Maybe<Scalars['Int']>;
    store_code?: Maybe<Scalars['ID']>;
    store_group_code?: Maybe<Scalars['ID']>;
    store_group_name?: Maybe<Scalars['String']>;
    store_name?: Maybe<Scalars['String']>;
    store_sort_order?: Maybe<Scalars['Int']>;
    timezone?: Maybe<Scalars['String']>;
    title_prefix?: Maybe<Scalars['String']>;
    title_separator?: Maybe<Scalars['String']>;
    title_suffix?: Maybe<Scalars['String']>;
    use_store_in_url?: Maybe<Scalars['Boolean']>;
    website_code?: Maybe<Scalars['ID']>;
    /** @deprecated The field should not be used on the storefront. */
    website_id?: Maybe<Scalars['Int']>;
    website_name?: Maybe<Scalars['String']>;
    weight_unit?: Maybe<Scalars['String']>;
    welcome?: Maybe<Scalars['String']>;
    zero_subtotal_enable_for_specific_countries?: Maybe<Scalars['Boolean']>;
    zero_subtotal_enabled?: Maybe<Scalars['Boolean']>;
    zero_subtotal_new_order_status?: Maybe<Scalars['String']>;
    zero_subtotal_payment_action?: Maybe<Scalars['String']>;
    zero_subtotal_payment_from_specific_countries?: Maybe<Scalars['String']>;
    zero_subtotal_sort_order?: Maybe<Scalars['Int']>;
    zero_subtotal_title?: Maybe<Scalars['String']>;
};

export type StoreLabels = {
    __typename?: 'StoreLabels';
    label?: Maybe<Scalars['String']>;
    store_code?: Maybe<Scalars['String']>;
};

export type StorefrontProperties = {
    __typename?: 'StorefrontProperties';
    position?: Maybe<Scalars['Int']>;
    use_in_layered_navigation?: Maybe<UseInLayeredNavigationOptions>;
    use_in_product_listing?: Maybe<Scalars['Boolean']>;
    use_in_search_results_layered_navigation?: Maybe<Scalars['Boolean']>;
    visible_on_catalog_pages?: Maybe<Scalars['Boolean']>;
};

export type SubscribeEmailToNewsletterOutput = {
    __typename?: 'SubscribeEmailToNewsletterOutput';
    status?: Maybe<SubscriptionStatusesEnum>;
};

export enum SubscriptionStatusesEnum {
    /** @deprecated  */
    NotActive = 'NOT_ACTIVE',
    /** @deprecated  */
    Subscribed = 'SUBSCRIBED',
    /** @deprecated  */
    Unconfirmed = 'UNCONFIRMED',
    /** @deprecated  */
    Unsubscribed = 'UNSUBSCRIBED'
}

export type SuccessMessage = {
    __typename?: 'SuccessMessage';
    message?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
};

export type SwatchData = {
    __typename?: 'SwatchData';
    type?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};

export type SwatchDataInterface = {
    value?: Maybe<Scalars['String']>;
};

export type SwatchLayerFilterItem = LayerFilterItemInterface &
    SwatchLayerFilterItemInterface & {
        __typename?: 'SwatchLayerFilterItem';
        /** @deprecated Use `AggregationOption.count` instead. */
        items_count?: Maybe<Scalars['Int']>;
        /** @deprecated Use `AggregationOption.label` instead. */
        label?: Maybe<Scalars['String']>;
        swatch_data?: Maybe<SwatchData>;
        /** @deprecated Use `AggregationOption.value` instead. */
        value_string?: Maybe<Scalars['String']>;
    };

export type SwatchLayerFilterItemInterface = {
    swatch_data?: Maybe<SwatchData>;
};

export type TaxItem = {
    __typename?: 'TaxItem';
    amount: Money;
    rate: Scalars['Float'];
    title: Scalars['String'];
};

export type TextSwatchData = SwatchDataInterface & {
    __typename?: 'TextSwatchData';
    value?: Maybe<Scalars['String']>;
};

export type TierPrice = {
    __typename?: 'TierPrice';
    discount?: Maybe<ProductDiscount>;
    final_price?: Maybe<Money>;
    quantity?: Maybe<Scalars['Float']>;
};

export type UiAttributeTypeAny = UiInputTypeInterface & {
    __typename?: 'UiAttributeTypeAny';
    is_html_allowed?: Maybe<Scalars['Boolean']>;
    ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeBoolean = AttributeOptionsInterface &
    SelectableInputTypeInterface &
    UiInputTypeInterface & {
        __typename?: 'UiAttributeTypeBoolean';
        attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
        is_html_allowed?: Maybe<Scalars['Boolean']>;
        ui_input_type?: Maybe<UiInputTypeEnum>;
    };

export type UiAttributeTypeFixedProductTax = UiInputTypeInterface & {
    __typename?: 'UiAttributeTypeFixedProductTax';
    is_html_allowed?: Maybe<Scalars['Boolean']>;
    ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeMultiSelect = AttributeOptionsInterface &
    SelectableInputTypeInterface &
    UiInputTypeInterface & {
        __typename?: 'UiAttributeTypeMultiSelect';
        attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
        is_html_allowed?: Maybe<Scalars['Boolean']>;
        ui_input_type?: Maybe<UiInputTypeEnum>;
    };

export type UiAttributeTypePageBuilder = UiInputTypeInterface & {
    __typename?: 'UiAttributeTypePageBuilder';
    is_html_allowed?: Maybe<Scalars['Boolean']>;
    ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeSelect = AttributeOptionsInterface &
    SelectableInputTypeInterface &
    UiInputTypeInterface & {
        __typename?: 'UiAttributeTypeSelect';
        attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
        is_html_allowed?: Maybe<Scalars['Boolean']>;
        ui_input_type?: Maybe<UiInputTypeEnum>;
    };

export type UiAttributeTypeTextEditor = UiInputTypeInterface & {
    __typename?: 'UiAttributeTypeTextEditor';
    is_html_allowed?: Maybe<Scalars['Boolean']>;
    ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeTextarea = UiInputTypeInterface & {
    __typename?: 'UiAttributeTypeTextarea';
    is_html_allowed?: Maybe<Scalars['Boolean']>;
    ui_input_type?: Maybe<UiInputTypeEnum>;
};

export enum UiInputTypeEnum {
    /** @deprecated  */
    Boolean = 'BOOLEAN',
    /** @deprecated  */
    Date = 'DATE',
    /** @deprecated  */
    Datetime = 'DATETIME',
    /** @deprecated  */
    FixedProductTax = 'FIXED_PRODUCT_TAX',
    /** @deprecated  */
    Gallery = 'GALLERY',
    /** @deprecated  */
    Image = 'IMAGE',
    /** @deprecated  */
    MediaImage = 'MEDIA_IMAGE',
    /** @deprecated  */
    Multiselect = 'MULTISELECT',
    /** @deprecated  */
    Pagebuilder = 'PAGEBUILDER',
    /** @deprecated  */
    Price = 'PRICE',
    /** @deprecated  */
    Select = 'SELECT',
    /** @deprecated  */
    Text = 'TEXT',
    /** @deprecated  */
    Textarea = 'TEXTAREA',
    /** @deprecated  */
    Texteditor = 'TEXTEDITOR',
    /** @deprecated  */
    Weight = 'WEIGHT'
}

export type UiInputTypeInterface = {
    is_html_allowed?: Maybe<Scalars['Boolean']>;
    ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UpdateCartItemsInput = {
    cart_id: Scalars['String'];
    cart_items: Array<InputMaybe<CartItemUpdateInput>>;
};

export type UpdateCartItemsOutput = {
    __typename?: 'UpdateCartItemsOutput';
    cart: Cart;
};

export type UpdateGiftRegistryInput = {
    dynamic_attributes?: InputMaybe<
        Array<InputMaybe<GiftRegistryDynamicAttributeInput>>
    >;
    event_name?: InputMaybe<Scalars['String']>;
    message?: InputMaybe<Scalars['String']>;
    privacy_settings?: InputMaybe<GiftRegistryPrivacySettings>;
    shipping_address?: InputMaybe<GiftRegistryShippingAddressInput>;
    status?: InputMaybe<GiftRegistryStatus>;
};

export type UpdateGiftRegistryItemInput = {
    gift_registry_item_uid: Scalars['ID'];
    note?: InputMaybe<Scalars['String']>;
    quantity: Scalars['Float'];
};

export type UpdateGiftRegistryItemsOutput = {
    __typename?: 'UpdateGiftRegistryItemsOutput';
    gift_registry?: Maybe<GiftRegistry>;
};

export type UpdateGiftRegistryOutput = {
    __typename?: 'UpdateGiftRegistryOutput';
    gift_registry?: Maybe<GiftRegistry>;
};

export type UpdateGiftRegistryRegistrantInput = {
    dynamic_attributes?: InputMaybe<
        Array<InputMaybe<GiftRegistryDynamicAttributeInput>>
    >;
    email?: InputMaybe<Scalars['String']>;
    firstname?: InputMaybe<Scalars['String']>;
    gift_registry_registrant_uid: Scalars['ID'];
    lastname?: InputMaybe<Scalars['String']>;
};

export type UpdateGiftRegistryRegistrantsOutput = {
    __typename?: 'UpdateGiftRegistryRegistrantsOutput';
    gift_registry?: Maybe<GiftRegistry>;
};

export type UpdateMpQuoteItemInput = {
    item_id: Scalars['Int'];
    price?: InputMaybe<Scalars['Float']>;
    qty?: InputMaybe<Scalars['Int']>;
};

export type UpdateMpQuoteOutput = {
    __typename?: 'UpdateMpQuoteOutput';
    quote: Quote;
};

export type UpdateProductsInWishlistOutput = {
    __typename?: 'UpdateProductsInWishlistOutput';
    user_errors: Array<Maybe<WishListUserInputError>>;
    wishlist: Wishlist;
};

export type UpdateWishlistOutput = {
    __typename?: 'UpdateWishlistOutput';
    name: Scalars['String'];
    uid: Scalars['ID'];
    visibility: WishlistVisibilityEnum;
};

export type UrlRewrite = {
    __typename?: 'UrlRewrite';
    parameters?: Maybe<Array<Maybe<HttpQueryParameter>>>;
    url?: Maybe<Scalars['String']>;
};

export enum UrlRewriteEntityTypeEnum {
    /** @deprecated  */
    Category = 'CATEGORY',
    /** @deprecated  */
    CmsPage = 'CMS_PAGE',
    /** @deprecated  */
    Product = 'PRODUCT'
}

export enum UseInLayeredNavigationOptions {
    /** @deprecated  */
    FilterableNoResult = 'FILTERABLE_NO_RESULT',
    /** @deprecated  */
    FilterableWithResults = 'FILTERABLE_WITH_RESULTS',
    /** @deprecated  */
    No = 'NO'
}

export type VaultTokenInput = {
    public_hash: Scalars['String'];
};

export type VirtualCartItem = CartItemInterface & {
    __typename?: 'VirtualCartItem';
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    errors?: Maybe<Array<Maybe<CartItemError>>>;
    /** @deprecated Use `uid` instead. */
    id: Scalars['String'];
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    quantity: Scalars['Float'];
    uid: Scalars['ID'];
};

export type VirtualProduct = CustomizableProductInterface &
    ProductInterface &
    RoutableInterface & {
        __typename?: 'VirtualProduct';
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_announcement_date?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_brand?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_custom_engraving_text?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_detailed_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_description_pagebuilder_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_gemstone_addon?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        accessory_recyclable_material?: Maybe<Scalars['Int']>;
        /** @deprecated The field should not be used on the storefront. */
        attribute_set_id?: Maybe<Scalars['Int']>;
        canonical_url?: Maybe<Scalars['String']>;
        categories?: Maybe<Array<Maybe<CategoryInterface>>>;
        /** @deprecated Use the `custom_attributes` field instead. */
        color?: Maybe<Scalars['Int']>;
        country_of_manufacture?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        created_at?: Maybe<Scalars['String']>;
        crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        custom_attributes: Array<Maybe<CustomAttribute>>;
        description?: Maybe<ComplexTextValue>;
        /** @deprecated Use the `custom_attributes` field instead. */
        description_extra?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_color?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_material?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_size?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        fashion_style?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        format?: Maybe<Scalars['Int']>;
        gift_message_available?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        has_video?: Maybe<Scalars['Int']>;
        /** @deprecated Use the `uid` field instead. */
        id?: Maybe<Scalars['Int']>;
        image?: Maybe<ProductImage>;
        is_returnable?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        manufacturer?: Maybe<Scalars['Int']>;
        media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
        /** @deprecated Use `media_gallery` instead. */
        media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
        meta_description?: Maybe<Scalars['String']>;
        meta_keyword?: Maybe<Scalars['String']>;
        meta_title?: Maybe<Scalars['String']>;
        name?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        new_from_date?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        new_to_date?: Maybe<Scalars['String']>;
        only_x_left_in_stock?: Maybe<Scalars['Float']>;
        options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
        options_container?: Maybe<Scalars['String']>;
        orParentSku?: Maybe<Scalars['String']>;
        orParentUrlKey?: Maybe<Scalars['String']>;
        /** @deprecated Use `price_range` for product price information. */
        price?: Maybe<ProductPrices>;
        price_range: PriceRange;
        price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
        product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
        rating_summary: Scalars['Float'];
        redirect_code: Scalars['Int'];
        related_products?: Maybe<Array<Maybe<ProductInterface>>>;
        relative_url?: Maybe<Scalars['String']>;
        review_count: Scalars['Int'];
        reviews: ProductReviews;
        short_description?: Maybe<ComplexTextValue>;
        sku?: Maybe<Scalars['String']>;
        small_image?: Maybe<ProductImage>;
        /** @deprecated The field should not be used on the storefront. */
        special_from_date?: Maybe<Scalars['String']>;
        special_price?: Maybe<Scalars['Float']>;
        special_to_date?: Maybe<Scalars['String']>;
        staged: Scalars['Boolean'];
        stock_status?: Maybe<ProductStockStatus>;
        swatch_image?: Maybe<Scalars['String']>;
        thumbnail?: Maybe<ProductImage>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_price?: Maybe<Scalars['Float']>;
        /** @deprecated Use `price_tiers` for product tier price information. */
        tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
        type?: Maybe<UrlRewriteEntityTypeEnum>;
        /** @deprecated Use `__typename` instead. */
        type_id?: Maybe<Scalars['String']>;
        uid: Scalars['ID'];
        /** @deprecated The field should not be used on the storefront. */
        updated_at?: Maybe<Scalars['String']>;
        upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        url_key?: Maybe<Scalars['String']>;
        /** @deprecated Use product's `canonical_url` or url rewrites instead */
        url_path?: Maybe<Scalars['String']>;
        url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
        url_suffix?: Maybe<Scalars['String']>;
        /** @deprecated Use the `custom_attributes` field instead. */
        video_file?: Maybe<Scalars['String']>;
        /** @deprecated The field should not be used on the storefront. */
        websites?: Maybe<Array<Maybe<Website>>>;
    };

export type VirtualProductReviewsArgs = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type VirtualProductCartItemInput = {
    customizable_options?: InputMaybe<
        Array<InputMaybe<CustomizableOptionInput>>
    >;
    data: CartItemInput;
};

export type VirtualQuoteItem = QuoteItemInterface & {
    __typename?: 'VirtualQuoteItem';
    calculation_price?: Maybe<Scalars['String']>;
    customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
    discount?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    qty: Scalars['Float'];
    quote_id?: Maybe<Scalars['Int']>;
    request_price?: Maybe<Scalars['String']>;
    sku?: Maybe<Scalars['String']>;
};

export type VirtualWishlistItem = WishlistItemInterface & {
    __typename?: 'VirtualWishlistItem';
    added_at: Scalars['String'];
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    product?: Maybe<ProductInterface>;
    quantity: Scalars['Float'];
};

export type WebkulPaymentCreditsystemConfig = {
    __typename?: 'WebkulPaymentCreditsystemConfig';
    currencysymbol?: Maybe<Scalars['String']>;
    getcurrentcode?: Maybe<Scalars['String']>;
    grand_total?: Maybe<Scalars['String']>;
    grand_total_formatted?: Maybe<Scalars['String']>;
    leftincredit?: Maybe<Scalars['String']>;
    remainingcredit?: Maybe<Scalars['String']>;
    remainingcreditcurrentcurrency?: Maybe<Scalars['String']>;
    remainingcreditformatted?: Maybe<Scalars['String']>;
};

export type Website = {
    __typename?: 'Website';
    /** @deprecated The field should not be used on the storefront. */
    code?: Maybe<Scalars['String']>;
    /** @deprecated The field should not be used on the storefront. */
    default_group_id?: Maybe<Scalars['String']>;
    /** @deprecated The field should not be used on the storefront. */
    id?: Maybe<Scalars['Int']>;
    /** @deprecated The field should not be used on the storefront. */
    is_default?: Maybe<Scalars['Boolean']>;
    /** @deprecated The field should not be used on the storefront. */
    name?: Maybe<Scalars['String']>;
    /** @deprecated The field should not be used on the storefront. */
    sort_order?: Maybe<Scalars['Int']>;
};

export type WishListUserInputError = {
    __typename?: 'WishListUserInputError';
    code: WishListUserInputErrorType;
    message: Scalars['String'];
};

export enum WishListUserInputErrorType {
    /** @deprecated  */
    ProductNotFound = 'PRODUCT_NOT_FOUND',
    /** @deprecated  */
    Undefined = 'UNDEFINED'
}

export type Wishlist = {
    __typename?: 'Wishlist';
    id?: Maybe<Scalars['ID']>;
    /** @deprecated Use the `items_v2` field instead. */
    items?: Maybe<Array<Maybe<WishlistItem>>>;
    items_count?: Maybe<Scalars['Int']>;
    items_v2?: Maybe<WishlistItems>;
    name?: Maybe<Scalars['String']>;
    sharing_code?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
    visibility: WishlistVisibilityEnum;
};

export type WishlistItems_V2Args = {
    currentPage?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};

export type WishlistCartUserInputError = {
    __typename?: 'WishlistCartUserInputError';
    code: WishlistCartUserInputErrorType;
    message: Scalars['String'];
    wishlistId: Scalars['ID'];
    wishlistItemId: Scalars['ID'];
};

export enum WishlistCartUserInputErrorType {
    /** @deprecated  */
    InsufficientStock = 'INSUFFICIENT_STOCK',
    /** @deprecated  */
    NotSalable = 'NOT_SALABLE',
    /** @deprecated  */
    ProductNotFound = 'PRODUCT_NOT_FOUND',
    /** @deprecated  */
    Undefined = 'UNDEFINED'
}

export type WishlistItem = {
    __typename?: 'WishlistItem';
    added_at?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    product?: Maybe<ProductInterface>;
    qty?: Maybe<Scalars['Float']>;
};

export type WishlistItemCopyInput = {
    quantity?: InputMaybe<Scalars['Float']>;
    wishlist_item_id: Scalars['ID'];
};

export type WishlistItemInput = {
    entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
    parent_sku?: InputMaybe<Scalars['String']>;
    quantity: Scalars['Float'];
    selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    sku: Scalars['String'];
};

export type WishlistItemInterface = {
    added_at: Scalars['String'];
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    product?: Maybe<ProductInterface>;
    quantity: Scalars['Float'];
};

export type WishlistItemMoveInput = {
    quantity?: InputMaybe<Scalars['Float']>;
    wishlist_item_id: Scalars['ID'];
};

export type WishlistItemUpdateInput = {
    description?: InputMaybe<Scalars['String']>;
    entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
    quantity?: InputMaybe<Scalars['Float']>;
    selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    wishlist_item_id: Scalars['ID'];
};

export type WishlistItems = {
    __typename?: 'WishlistItems';
    items: Array<Maybe<WishlistItemInterface>>;
    page_info?: Maybe<SearchResultPageInfo>;
};

export type WishlistOutput = {
    __typename?: 'WishlistOutput';
    /** @deprecated Use the `Wishlist.items` field instead. */
    items?: Maybe<Array<Maybe<WishlistItem>>>;
    /** @deprecated Use the `Wishlist.items_count` field instead. */
    items_count?: Maybe<Scalars['Int']>;
    /** @deprecated This field is related to Commerce functionality and is always `null` in Open Source. */
    name?: Maybe<Scalars['String']>;
    /** @deprecated Use the `Wishlist.sharing_code` field instead. */
    sharing_code?: Maybe<Scalars['String']>;
    /** @deprecated Use the `Wishlist.updated_at` field instead. */
    updated_at?: Maybe<Scalars['String']>;
};

export enum WishlistVisibilityEnum {
    /** @deprecated  */
    Private = 'PRIVATE',
    /** @deprecated  */
    Public = 'PUBLIC'
}

export type CreateEmptyCartInput = {
    cart_id?: InputMaybe<Scalars['String']>;
};

export type MessageResult = {
    __typename?: 'messageResult';
    error?: Maybe<Scalars['Boolean']>;
    message?: Maybe<Scalars['String']>;
};

export type MpQuoteConfigOutput = {
    __typename?: 'mpQuoteConfigOutput';
    allow_category?: Maybe<Scalars['String']>;
    category?: Maybe<Scalars['String']>;
    customer_groups?: Maybe<Scalars['String']>;
    file_type?: Maybe<Scalars['String']>;
    icon_url?: Maybe<Scalars['String']>;
    is_allow_attach?: Maybe<Scalars['Boolean']>;
    is_allow_guest?: Maybe<Scalars['Boolean']>;
    redirect_page?: Maybe<Scalars['String']>;
};

export type MpQuoteConversationOutput = {
    __typename?: 'mpQuoteConversationOutput';
    items?: Maybe<Array<Maybe<MpQuoteConversation>>>;
    page_info?: Maybe<SearchResultPageInfo>;
    total_count?: Maybe<Scalars['Int']>;
};

export type UpdateMpQuoteInput = {
    items: Array<InputMaybe<UpdateMpQuoteItemInput>>;
    quote_id?: InputMaybe<Scalars['Int']>;
};

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
    __typename?: '__EnumValue';
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    isDeprecated: Scalars['Boolean'];
    deprecationReason?: Maybe<Scalars['String']>;
};

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
    __typename?: '__Field';
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    args: Array<__InputValue>;
    type: __Type;
    isDeprecated: Scalars['Boolean'];
    deprecationReason?: Maybe<Scalars['String']>;
};

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
    includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
    __typename?: '__InputValue';
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    type: __Type;
    /** A GraphQL-formatted string representing the default value for this input value. */
    defaultValue?: Maybe<Scalars['String']>;
    isDeprecated: Scalars['Boolean'];
    deprecationReason?: Maybe<Scalars['String']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
    __typename?: '__Type';
    kind: __TypeKind;
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    specifiedByUrl?: Maybe<Scalars['String']>;
    fields?: Maybe<Array<__Field>>;
    interfaces?: Maybe<Array<__Type>>;
    possibleTypes?: Maybe<Array<__Type>>;
    enumValues?: Maybe<Array<__EnumValue>>;
    inputFields?: Maybe<Array<__InputValue>>;
    ofType?: Maybe<__Type>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
    includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
    includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
    includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
    /** Indicates this type is a scalar. */
    Scalar = 'SCALAR',
    /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
    Object = 'OBJECT',
    /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
    Interface = 'INTERFACE',
    /** Indicates this type is a union. `possibleTypes` is a valid field. */
    Union = 'UNION',
    /** Indicates this type is an enum. `enumValues` is a valid field. */
    Enum = 'ENUM',
    /** Indicates this type is an input object. `inputFields` is a valid field. */
    InputObject = 'INPUT_OBJECT',
    /** Indicates this type is a list. `ofType` is a valid field. */
    List = 'LIST',
    /** Indicates this type is a non-null. `ofType` is a valid field. */
    NonNull = 'NON_NULL'
}
