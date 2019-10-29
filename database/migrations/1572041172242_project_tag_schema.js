"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProjectTagSchema extends Schema {
  up() {
    this.create("project_tag", table => {
      table
        .integer("project_id")
        .unsigned()
        .index("project_id");
      table
        .integer("tag_id")
        .unsigned()
        .index("tag_id");
      table
        .foreign("project_id")
        .references("projects.id")
        .onDelete("cascade");
      table
        .foreign("tag_id")
        .references("tags.id")
        .onDelete("cascade");
    });
  }

  down() {
    this.drop("project_tag");
  }
}

module.exports = ProjectTagSchema;
