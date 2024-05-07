// // const express = require('express');
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const cors = require('cors');

// const doctorsRouter = require('./routes/doctors');
// const patientsRouter = require('./routes/patients'); // Import patients route

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/hospital', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Error connecting to MongoDB:', err);
// });

// app.use('/api/doctors', doctorsRouter);
// app.use('/api/patients', patientsRouter); // Mount patients route

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const PORT = process.env.PORT || 5000;

// // MongoDB connection
// mongoose.connect('mongodb://127.0.0.1:27017/hospital')
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Define routes

// const doctorsRouter = require('./routes/doctors');
// const patientsRouter = require('./routes/patients');

// app.use('/api/doctors', doctorsRouter);
// app.use('/api/patients', patientsRouter);

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define routes
const doctorsRouter = require('./routes/doctors');
const patientsRouter = require('./routes/patients');

app.use('/api/doctors', doctorsRouter);
app.use('/api/patients', patientsRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

p