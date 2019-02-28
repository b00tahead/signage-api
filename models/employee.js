// models/employee.js

var mongoose = require('mongoose')

var Schema = mongoose.Schema

var EmployeeSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    image_url: { type: String },
    position: [String],
    office: [String],
    classification: [String],
    research_interests: [String],
    external_affiliations: [String],
    as_affiliations: [String]
  }
)

// Virtual for employee's full name
EmployeeSchema
  .virtual('name')
  .get(function () {
    return this.first_name + ' ' + this.last_name
  })

// Export model
module.exports = mongoose.model('Employee', EmployeeSchema)
