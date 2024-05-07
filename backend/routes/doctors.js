// const express = require('express');
// const router = express.Router();
// const Doctor = require('../models/Doctor');

// // Define route to add a new doctor
// router.post('/', async (req, res) => {
//   try {
//     const newDoctor = new Doctor(req.body);
//     await newDoctor.save();
//     res.status(201).json(newDoctor);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to add doctor" });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// Route to add a new doctor
router.post('/', async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add doctor" });
  }
});

// Route to get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch doctors" });
  }
});

// Route to get a single doctor by ID
router.get('/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.json(doctor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch doctor" });
  }
});

// Route to update a doctor by ID
router.put('/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.json(doctor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update doctor" });
  }
});

// Route to delete a doctor by ID
router.delete('/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.json({ message: "Doctor deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete doctor" });
  }
});

module.exports = router;
