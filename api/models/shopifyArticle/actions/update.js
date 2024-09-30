import { applyParams, save, ActionOptions, UpdateShopifyArticleActionContext } from "gadget-server";
import { preventCrossShopDataAccess } from "gadget-server/shopify";

/**
 * @param { UpdateShopifyArticleActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { UpdateShopifyArticleActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = { actionType: "update" };
