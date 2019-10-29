"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Project extends Model {
  customer() {
    return this.belongsTo("App/Models/Customer");
  }
  tasks() {
    return this.hasMany("App/Models/Task");
  }
  tags() {
    return this.belongsToMany("App/Models/Tag");
  }
}

module.exports = Project;
