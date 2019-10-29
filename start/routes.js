"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "CustomerController.index");
Route.get("/customer/:id", "CustomerController.show").middleware([
  "findCustomer"
]);
Route.post("/customer", "CustomerController.store");
Route.patch("customer/:id", "CustomerController.update").middleware([
  "findCustomer"
]);
Route.delete("customer/:id", "CustomerController.destroy").middleware([
  "findCustomer"
]);
