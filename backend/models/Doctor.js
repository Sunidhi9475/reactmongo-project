// // Doctor.js
// const mongoose = require('mongoose');

// const doctorSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   qualification: { type: String, required: true },
//   dob: { type: Date, required: true },
//   specialization: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true }
// });

// module.exports = mongoose.model('Doctor', doctorSchema);
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  qualification: String,
  dob: Date,
  specialization: String,
  email: String,
  phone: String
});

const Doctor = mongoose.model('Doctor', doctorSchema, 'details'); // 'details' is the collection name

module.exports = Doctor;
