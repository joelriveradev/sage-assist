import type { GadgetSettings } from 'gadget-server'

export const settings: GadgetSettings = {
  type: 'gadget/settings/v1',
  frameworkVersion: 'v1.2.0',
  plugins: {
    connections: {
      shopify: {
        apiVersion: '2024-07',
        enabledModels: [
          'shopifyApp',
          'shopifyArticle',
          'shopifyBillingAddress',
          'shopifyBlog',
          'shopifyCart',
          'shopifyCartLineItem',
          'shopifyCheckout',
          'shopifyCheckoutLineItem',
          'shopifyCollect',
          'shopifyCollection',
          'shopifyDomain',
          'shopifyFile',
          'shopifyPage',
          'shopifyProduct',
          'shopifyProductMedia',
          'shopifyProductOption',
          'shopifyProductVariant',
          'shopifyShippingAddress'
        ],
        type: 'partner',
        scopes: [
          'write_checkouts',
          'read_checkouts',
          'read_orders',
          'read_products',
          'write_products',
          'unauthenticated_read_checkouts',
          'unauthenticated_write_checkouts',
          'unauthenticated_read_content',
          'unauthenticated_read_product_listings',
          'unauthenticated_read_product_tags',
          'unauthenticated_read_customers',
          'read_content',
          'read_files'
        ]
      }
    }
  }
}
