const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const app = express();
const port = 3000; 
const mongoURI = '';

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(`MongoDB connection error: ${err}`);
  }
}

connectToDatabase();

// Define the User schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// Define the Trip schema
const tripSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
    unique: false,
  },
  start_date: {
    type: Date,
    required: true,
    unique: false,
  },
  end_date: {
    type: Date,
    required: true,
    unique: false,
  }
});

// Define the Relation schema
const relationSchema = new Schema({
  trip_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip',
    required: true,
  },
  user_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }]
});

// Create the User model
const User = mongoose.model('User', userSchema);
module.exports = User;

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;

const Relation = mongoose.model('Relation', relationSchema);
module.exports = Relation;

async function getUsers() {
  try {
    const users = await User.find({});
    console.log('Users:', users);
  } catch (err) {
    console.error('Error fetching users:', err);
  }
}

async function getTrips() {
  try {
    const trips = await Trip.find({});
    console.log('Trips:', trips);
  } catch (err) {
    console.error('Error fetching Trips:', err);
  }
}

async function getRelations() {
  try {
    const relations = await Relation.find({});
    console.log('Relations:', relations);
  } catch (err) {
    console.error('Error fetching Relations:', err);
  }
}

// getUsers();
// getTrips();
getRelations();

async function createUser() {
  try {
    const newUser = new User({
      name: 'Krishna Das',
      email: 'krishna@oregonstate.edu',
    });

    const savedUser = await newUser.save();
    console.log('User saved successfully:', savedUser);
  } catch (err) {
    console.error('Error saving user:', err);
  }
}

async function createTrip() {
  try {
    const currentDate = new Date(); // Get the current date and time
    const endDate = new Date(currentDate);
    
    // Add 30 days to the current date
    endDate.setDate(endDate.getDate() + 30);

    const newTrip = new Trip({
      name: 'COJ3',
      destination: 'Kolkata',
      start_date: currentDate, // Use the current date
      end_date: endDate, // Use the date 30 days later
    });

    const savedTrip = await newTrip.save();
    console.log('Trip saved successfully:', savedTrip);
  } catch (err) {
    console.error('Error saving Trip:', err);
  }
}

// createUser();
// createTrip();

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});
app.get('/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error fetching user' });
  }
});

app.get('/trips', async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching trips' });
  }
});
app.get('/trip/:tripId', async (req, res) => {
  try {
    const tripId = req.params.tripId;
    const trip = await Trip.findById(tripId);

    if (!trip) {
      res.status(404).json({ error: 'Trip not found' });
    } else {
      res.status(200).json(trip);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error fetching trip' });
  }
});

app.get('/user/:userId/travel-buddies', async (req, res) => {
  try {
    const userId = req.params.userId;
    const relations = await Relation.find({ user_id: userId }).populate(['user_id', 'trip_id']);
    console.log(relations);
    res.status(200).json(relations);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching travel-buddies' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

