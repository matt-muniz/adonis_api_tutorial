"use strict";
const Customer = use("App/Models/Customer");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class FindCustomer {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle(
    {
      request,
      response,
      params: { id }
    },
    next
  ) {
    const customer = await Customer.find(id);

    if (!customer) {
      return response.status(404).json({
        message: "Customer not found",
        id
      });
    }

    request.body.customer = customer;

    // call next to advance the request
    await next();
  }
}

module.exports = FindCustomer;
