const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/warmbowlbliss', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Reservation Schema
const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  guests: { type: String, required: true },
  specialRequests: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

// API Routes
app.post('/api/reservations', async (req, res) => {
  try {
    const newReservation = new Reservation({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      date: new Date(req.body.date),
      time: req.body.time,
      guests: req.body.guests,
      specialRequests: req.body.specialRequests
    });

    const savedReservation = await newReservation.save();
    res.status(201).json({
      success: true,
      message: 'Reservation created successfully',
      data: savedReservation
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating reservation',
      error: error.message
    });
  }
});

// Get all reservations (admin feature)
app.get('/api/reservations', async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ date: 1 });
    res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error fetching reservations',
      error: error.message
    });
  }
});

// Serve the main HTML file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});