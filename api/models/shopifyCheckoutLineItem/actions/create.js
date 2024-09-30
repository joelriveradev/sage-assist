import { applyParams, save, ActionOptions, CreateShopifyCheckoutLineItemActionContext } from "gadget-server";
import { preventCrossShopDataAccess } from "gadget-server/shopify";

/**
 * @param { CreateShopifyCheckoutLineItemActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { CreateShopifyCheckoutLineItemActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = { actionType: "create" };
