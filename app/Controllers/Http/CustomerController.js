"use strict";
const Customer = use("App/Models/Customer");
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with customers
 */
class CustomerController {
  /**
   * Show a list of all customers.
   * GET customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const customers = await Customer.all();

    response.status(200).json({
      message: "Here are your customers",
      data: customers
    });
  }

  /**
   * Render a form to be used for creating a new customer.
   * GET customers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  // async create({ request, response, view }) {}

  /**
   * Create/save a new customer.
   * POST customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { name, description } = request.post();

    // SAVE vs CREATE

    // const customer = new Customer();
    // customer.name = name;
    // customer.description = description;

    // await customer.save();

    const data = {
      name,
      description
    };

    // save and get instance back
    const customer = await Customer.create(data);

    response.status(201).json({
      message: "Successfully created a new customer",
      data: customer
    });
  }

  /**
   * Display a single customer.
   * GET customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params: { id }, request, response }) {
    const customer = request.post().customer;
    response.status(200).json({
      message: "Here is your customer",
      data: customer
    });
  }

  /**
   * Render a form to update an existing customer.
   * GET customers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update customer details.
   * PUT or PATCH customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params: { id }, request, response }) {
    const { name, description, customer } = request.post();

    customer.name = name;
    customer.description = description;

    await customer.save();

    response.status(200).json({
      message: "Successfully updated this customer",
      data: customer
    });
  }

  /**
   * Delete a customer with id.
   * DELETE customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params: { id }, request, response }) {
    const customer = request.post().customer;
    await customer.delete();

    response.status(200).json({
      message: "Successfully deleted this customer",
      id
    });
  }
}

module.exports = CustomerController;
