import {
    getAvailableStoresData,
    getBillingAddress,
    getIsBillingAddressSame,
    setBillingAddress,
    setDefaultBillingAddress,
    applyCouponToCart,
    getAppliedCoupons,
    removeCouponFromCart,
    applyGiftCardToCart,
    getAppliedGiftCards,
    getGiftCardBalance,
    getGiftOptions,
    removeGiftCardFromCart,
    setGiftOptionsOnCart,
    deleteCreditCardPayment,
    getPaymentInformation,
    getPaymentMethods,
    getPaymentNonce,
    getSavedPayments,
    getSelectedPaymentMethod,
    setPaymentMethodOnCart,
    getDefaultShipping,
    getSelectedAndAvailableShippingMethods,
    getShippingInformation,
    getShippingMethods,
    setCustomerAddressIdOnCart,
    setShippingAddress,
    setShippingMethod,
    createCart,
    getCartDetails,
    getCheckoutDetails,
    getItemCount,
    getItemsInCart,
    getMiniCart,
    getOrderDetails,
    getProductListing,
    getSalesRulesData,
    getSummaryData,
    mergeCarts,
    removeItemFromCart,
    updateCartItems,
    getBreadcrumbs,
    getCategory,
    getCategoryData,
    getFilterInputs,
    getMegaMenu,
    getCmsBlocks,
    getCmsDynamicBlocks,
    getCmsPage,
    createCompareList,
    deleteProductsFromCompareList,
    getCustomerCompareList,
    submitContactForm,
    getCountries,
    getRegions,
    getCurrencyData,
    addNewCustomerAddressToAddressBook,
    deleteCustomerAddressFromAddressBook,
    getCustomerAddressesForAddressBook,
    getCustomerCartAddressesForAddressBook,
    updateCustomerAddressInAddressBook,
    getCustomerSubscription,
    setNewsletterSubscription,
    subscribeToNewsletter,
    addProductToWishlist,
    createWishlist,
    getProductsInWishlists,
    getWishlistProducts,
    getWishlistProductsForLocalField,
    getWishlists,
    removeProductsFromWishlist,
    updateWishlist,
    changeCustomerPassword,
    createAccount,
    getCustomerInformation,
    getCustomerOrders,
    getCustomerOrdersForCsr,
    isUserAuthed,
    requestPasswordResetEmail,
    resetPassword,
    setCustomerInformation,
    signIn,
    signOut,
    getDeliveryDate,
    setDeliveryTime,
    setOrderAttributes,
    placeOrder,
    addConfigurableProductToCart,
    addProductToCart,
    addSimpleProductToCart,
    getAutocompleteResults,
    getAvailableSortMethodsByCategory,
    getAvailableSortMethodsBySearch,
    getImageBySku,
    getParentSkuBySku,
    getProductAggregationsFilteredByCategory,
    getProductDetailForATCDialogBySku,
    getProductDetailForCmsDynamicBlockByUrlKey,
    getProductDetailForConfigurableOptionsBySku,
    getProductDetailForProductPageByUrlKey,
    getProductDetailForQuickOrderBySku,
    getProductFiltersBySearch,
    getProductItemsFilteredByCategory,
    getProductsDetailsBySearch,
    getProductsDetailsForQuoteBySearch,
    getProductsForPagebuilderByUrlKey,
    getProductThumbnailsByUrlKey,
    getSimpleProduct,
    updateConfigurableOptions,
    getReCaptchaV3Config,
    addConfigurableProductsToQuote,
    addQuoteToCart,
    addSimpleProductsToQuote,
    cancelQuote,
    deleteCurrentQuote,
    deleteItemFromQuote,
    deleteSubmittedQuote,
    duplicateQuote,
    getConfigDetailsForQuote,
    getQuoteById,
    getQuoteList,
    submitCurrentQuote,
    updateQuote,
    getRouteData,
    resolveURL,
    deleteSavedCarts,
    getConfigDetailsForSavedCarts,
    getSavedCarts,
    restoreSavedCarts,
    saveSavedCarts,
    shareSavedCarts,
    getStoreConfig,
    getWebkulPaymentCreditSystemConfig,
    setGuestShipping,
    setGuestEmailOnCart,
    isEmailAvailable,
    getPriceSummary,
    submitCustomerPriceAlert,
    getCustomerAlerts,
    submitGuestPriceAlert,
    submitCustomerStockAlert,
    submitGuestStockAlert,
    submitDeleteAlert,
    getConfigAlerts,
    getLocale,
    getStoreLocations,
    getLocationsCart,
    getLocationHolidays
} from './resolvers';

export interface ClientProps {
    mergeOperations: any;
    restClient: any;
    useAwaitQuery: any;
    useLazyQuery: any;
    useMutation: any;
    useQuery: any;
    useSubscription: any;
    backendEdition: string;
}

export const getResolvers = (clientProps: ClientProps) => {
    return {
        getAvailableStoresData: getAvailableStoresData(clientProps),
        getBillingAddress: getBillingAddress(clientProps),
        getIsBillingAddressSame: getIsBillingAddressSame(clientProps),
        setBillingAddress: setBillingAddress(clientProps),
        setDefaultBillingAddress: setDefaultBillingAddress(clientProps),
        applyCouponToCart: applyCouponToCart(clientProps),
        getAppliedCoupons: getAppliedCoupons(clientProps),
        removeCouponFromCart: removeCouponFromCart(clientProps),
        applyGiftCardToCart: applyGiftCardToCart(clientProps),
        getAppliedGiftCards: getAppliedGiftCards(clientProps),
        getGiftCardBalance: getGiftCardBalance(clientProps),
        getGiftOptions: getGiftOptions(clientProps),
        removeGiftCardFromCart: removeGiftCardFromCart(clientProps),
        setGiftOptionsOnCart: setGiftOptionsOnCart(clientProps),
        deleteCreditCardPayment: deleteCreditCardPayment(clientProps),
        getPaymentInformation: getPaymentInformation(clientProps),
        getPaymentMethods: getPaymentMethods(clientProps),
        getPaymentNonce: getPaymentNonce(clientProps),
        getSavedPayments: getSavedPayments(clientProps),
        getSelectedPaymentMethod: getSelectedPaymentMethod(clientProps),
        setPaymentMethodOnCart: setPaymentMethodOnCart(clientProps),
        getDefaultShipping: getDefaultShipping(clientProps),
        getSelectedAndAvailableShippingMethods: getSelectedAndAvailableShippingMethods(clientProps),
        getShippingInformation: getShippingInformation(clientProps),
        getShippingMethods: getShippingMethods(clientProps),
        setCustomerAddressIdOnCart: setCustomerAddressIdOnCart(clientProps),
        setShippingAddress: setShippingAddress(clientProps),
        setShippingMethod: setShippingMethod(clientProps),
        createCart: createCart(clientProps),
        getCartDetails: getCartDetails(clientProps),
        getCheckoutDetails: getCheckoutDetails(clientProps),
        getItemCount: getItemCount(clientProps),
        getItemsInCart: getItemsInCart(clientProps),
        getMiniCart: getMiniCart(clientProps),
        getOrderDetails: getOrderDetails(clientProps),
        getProductListing: getProductListing(clientProps),
        getSalesRulesData: getSalesRulesData(clientProps),
        getSummaryData: getSummaryData(clientProps),
        mergeCarts: mergeCarts(clientProps),
        removeItemFromCart: removeItemFromCart(clientProps),
        updateCartItems: updateCartItems(clientProps),
        getBreadcrumbs: getBreadcrumbs(clientProps),
        getCategory: getCategory(clientProps),
        getCategoryData: getCategoryData(clientProps),
        getFilterInputs: getFilterInputs(clientProps),
        getMegaMenu: getMegaMenu(clientProps),
        getCmsBlocks: getCmsBlocks(clientProps),
        getCmsDynamicBlocks: getCmsDynamicBlocks(clientProps),
        getCmsPage: getCmsPage(clientProps),
        createCompareList: createCompareList(clientProps),
        deleteProductsFromCompareList: deleteProductsFromCompareList(clientProps),
        getCustomerCompareList: getCustomerCompareList(clientProps),
        submitContactForm: submitContactForm(clientProps),
        getCountries: getCountries(clientProps),
        getRegions: getRegions(clientProps),
        getCurrencyData: getCurrencyData(clientProps),
        addNewCustomerAddressToAddressBook: addNewCustomerAddressToAddressBook(clientProps),
        deleteCustomerAddressFromAddressBook: deleteCustomerAddressFromAddressBook(clientProps),
        getCustomerAddressesForAddressBook: getCustomerAddressesForAddressBook(clientProps),
        getCustomerCartAddressesForAddressBook: getCustomerCartAddressesForAddressBook(clientProps),
        updateCustomerAddressInAddressBook: updateCustomerAddressInAddressBook(clientProps),
        getCustomerSubscription: getCustomerSubscription(clientProps),
        setNewsletterSubscription: setNewsletterSubscription(clientProps),
        subscribeToNewsletter: subscribeToNewsletter(clientProps),
        addProductToWishlist: addProductToWishlist(clientProps),
        createWishlist: createWishlist(clientProps),
        getProductsInWishlists: getProductsInWishlists(clientProps),
        getWishlistProducts: getWishlistProducts(clientProps),
        getWishlistProductsForLocalField: getWishlistProductsForLocalField(clientProps),
        getWishlists: getWishlists(clientProps),
        removeProductsFromWishlist: removeProductsFromWishlist(clientProps),
        updateWishlist: updateWishlist(clientProps),
        changeCustomerPassword: changeCustomerPassword(clientProps),
        createAccount: createAccount(clientProps),
        getCustomerInformation: getCustomerInformation(clientProps),
        getCustomerOrders: getCustomerOrders(clientProps),
        getCustomerOrdersForCsr: getCustomerOrdersForCsr(clientProps),
        isUserAuthed: isUserAuthed(clientProps),
        requestPasswordResetEmail: requestPasswordResetEmail(clientProps),
        resetPassword: resetPassword(clientProps),
        setCustomerInformation: setCustomerInformation(clientProps),
        signIn: signIn(clientProps),
        signOut: signOut(clientProps),
        getDeliveryDate: getDeliveryDate(clientProps),
        setDeliveryTime: setDeliveryTime(clientProps),
        setOrderAttributes: setOrderAttributes(clientProps),
        placeOrder: placeOrder(clientProps),
        addConfigurableProductToCart: addConfigurableProductToCart(clientProps),
        addProductToCart: addProductToCart(clientProps),
        addSimpleProductToCart: addSimpleProductToCart(clientProps),
        getAutocompleteResults: getAutocompleteResults(clientProps),
        getAvailableSortMethodsByCategory: getAvailableSortMethodsByCategory(clientProps),
        getAvailableSortMethodsBySearch: getAvailableSortMethodsBySearch(clientProps),
        getImageBySku: getImageBySku(clientProps),
        getParentSkuBySku: getParentSkuBySku(clientProps),
        getProductAggregationsFilteredByCategory: getProductAggregationsFilteredByCategory(clientProps),
        getProductDetailForATCDialogBySku: getProductDetailForATCDialogBySku(clientProps),
        getProductDetailForCmsDynamicBlockByUrlKey: getProductDetailForCmsDynamicBlockByUrlKey(clientProps),
        getProductDetailForConfigurableOptionsBySku: getProductDetailForConfigurableOptionsBySku(clientProps),
        getProductDetailForProductPageByUrlKey: getProductDetailForProductPageByUrlKey(clientProps),
        getProductDetailForQuickOrderBySku: getProductDetailForQuickOrderBySku(clientProps),
        getProductFiltersBySearch: getProductFiltersBySearch(clientProps),
        getProductItemsFilteredByCategory: getProductItemsFilteredByCategory(clientProps),
        getProductsDetailsBySearch: getProductsDetailsBySearch(clientProps),
        getProductsDetailsForQuoteBySearch: getProductsDetailsForQuoteBySearch(clientProps),
        getProductsForPagebuilderByUrlKey: getProductsForPagebuilderByUrlKey(clientProps),
        getProductThumbnailsByUrlKey: getProductThumbnailsByUrlKey(clientProps),
        getSimpleProduct: getSimpleProduct(clientProps),
        updateConfigurableOptions: updateConfigurableOptions(clientProps),
        getReCaptchaV3Config: getReCaptchaV3Config(clientProps),
        addConfigurableProductsToQuote: addConfigurableProductsToQuote(clientProps),
        addQuoteToCart: addQuoteToCart(clientProps),
        addSimpleProductsToQuote: addSimpleProductsToQuote(clientProps),
        cancelQuote: cancelQuote(clientProps),
        deleteCurrentQuote: deleteCurrentQuote(clientProps),
        deleteItemFromQuote: deleteItemFromQuote(clientProps),
        deleteSubmittedQuote: deleteSubmittedQuote(clientProps),
        duplicateQuote: duplicateQuote(clientProps),
        getConfigDetailsForQuote: getConfigDetailsForQuote(clientProps),
        getQuoteById: getQuoteById(clientProps),
        getQuoteList: getQuoteList(clientProps),
        submitCurrentQuote: submitCurrentQuote(clientProps),
        updateQuote: updateQuote(clientProps),
        getRouteData: getRouteData(clientProps),
        resolveURL: resolveURL(clientProps),
        deleteSavedCarts: deleteSavedCarts(clientProps),
        getConfigDetailsForSavedCarts: getConfigDetailsForSavedCarts(clientProps),
        getSavedCarts: getSavedCarts(clientProps),
        restoreSavedCarts: restoreSavedCarts(clientProps),
        saveSavedCarts: saveSavedCarts(clientProps),
        shareSavedCarts: shareSavedCarts(clientProps),
        getStoreConfig: getStoreConfig(clientProps),
        getWebkulPaymentCreditSystemConfig: getWebkulPaymentCreditSystemConfig(clientProps),
        setGuestShipping: setGuestShipping(clientProps),
        setGuestEmailOnCart: setGuestEmailOnCart(clientProps),
        isEmailAvailable: isEmailAvailable(clientProps),
        getPriceSummary: getPriceSummary(clientProps),
        submitCustomerPriceAlert: submitCustomerPriceAlert(clientProps),
        getCustomerAlerts: getCustomerAlerts(clientProps),
        submitGuestPriceAlert: submitGuestPriceAlert(clientProps),
        submitCustomerStockAlert: submitCustomerStockAlert(clientProps),
        submitGuestStockAlert: submitGuestStockAlert(clientProps),
        submitDeleteAlert: submitDeleteAlert(clientProps),
        getConfigAlerts: getConfigAlerts(clientProps),
        getLocale: getLocale(clientProps),
        getStoreLocations: getStoreLocations(clientProps),
        getLocationsCart: getLocationsCart(clientProps),
        getLocationHolidays: getLocationHolidays(clientProps)
    };
};
