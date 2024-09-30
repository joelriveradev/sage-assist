import { deleteRecord, ActionOptions, DeleteShopifyCheckoutLineItemActionContext } from "gadget-server";
import { preventCrossShopDataAccess } from "gadget-server/shopify";

/**
 * @param { DeleteShopifyCheckoutLineItemActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  await preventCrossShopDataAccess(params, record);
  await deleteRecord(record);
};

/**
 * @param { DeleteShopifyCheckoutLineItemActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = { actionType: "delete" };
