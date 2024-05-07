// // patients.js
// const express = require('express');
// const router = express.Router();
// const Patient = require('../models/Patient');

// router.post('/', async (req, res) => {
//   try {
//     const patient = new Patient(req.body);
//     const newPatient = await patient.save();
//     res.status(201).json(newPatient);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;
// patients.js

const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Create a new patient
router.post('/', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    const newPatient = await patient.save();
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single patient by ID
router.get('/:id', getPatient, (req, res) => {
  res.json(res.patient);
});

// Update a patient
router.put('/:id', getPatient, async (req, res) => {
  try {
    const updatedPatient = await res.patient.set(req.body).save();
    res.json(updatedPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a patient
router.delete('/:id', getPatient, async (req, res) => {
  try {
    await res.patient.remove();
    res.json({ message: 'Patient deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get patient by ID
async function getPatient(req, res, next) {
  try {
    const patient = await Patient.findById(req.params.id);
    if (patient == null) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.patient = patient;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
