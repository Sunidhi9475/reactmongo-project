// Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  appointment: { type: Date, required: true },
  phone: { type: String, required: true },
  disease: { type: String, required: true },
  doctorName: { type: String, required: true },
  address: { type: String, required: true },
  status: { type: String, required: true }
});

module.exports = mongoose.model('Patient', patientSchema);
