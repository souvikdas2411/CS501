const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

const supabaseUrl = 'https://jnuwkssgygxbcyqqlwdn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpudXdrc3NneWd4YmN5cXFsd2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMzA4MzksImV4cCI6MjAxMjgwNjgzOX0.E99QKI6eDnRAHAIiac9UMQ8uqA3xFFktHPeOSwg4tjA';
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware to parse JSON request bodies
app.use(express.json());

// Route definitions below
app.get('/users', async (req, res) => {
  try {
    const { data, error } = await supabase.from('users').select('*');

    if (error) {
      throw error;
    }
    res.status(200).json(data);

  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'An error occurred while fetching user data' });
  }
});

app.get('/trips', async (req, res) => {
  try {
    const { data, error } = await supabase.from('trips').select('*');

    if (error) {
      throw error;
    }
    res.json(data);

  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'An error occurred while fetching user data' });
  }
});

app.get('/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      throw error;
    }
    if (data) {
      res.status(200).json(data);
    } else {
      // res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'An error occurred while fetching user data' });
  }
});

app.get('/trip/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    const { data, error } = await supabase
      .from('trips')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      throw error;
    }
    if (data) {
      res.status(200).json(data);
    } else {
      // res.status(404).json({ error: 'Trip not found' });
    }
  } catch (error) {
    console.error('Error fetching trip data:', error);
    res.status(500).json({ error: 'An error occurred while fetching trip data' });
  }
});

app.get('/tripDes/:destination', async (req, res) => {
  try {
    const destination = req.params.destination;

    const { data, error } = await supabase
      .from('trips')
      .select('*')
      .ilike('destination', `%${destination}%`); 

    if (error) {
      throw error;
    }

    if (data) {
      res.status(200).json(data);
    } else {
      // res.status(404).json({ error: 'No trips found for the specified destination' });
    }
  } catch (error) {
    console.error('Error fetching trips:', error);
    res.status(500).json({ error: 'An error occurred while fetching trips' });
  }
});

app.get('/user/:id/travel-buddies', async (req, res) => {
  try {
    const id = req.params.id;

    const { data: userData, error: userError } = await supabase
      .from('trips-users')
      .select('trip_id')
      .eq('user_id',id);

    if (userError) {
      throw userError;
    }

    if (userData && userData.length > 0) {

      console.log(userData);

      // const tripId = userData[0].trip_id;
      const tripId = userData.map(trip => trip.trip_id);

      const { data: buddiesData, error: buddiesError } = await supabase
        .from('trips-users')
        .select('user_id')
        .in('trip_id', tripId);

      if (buddiesError) {
        throw buddiesError;
      }

      if(buddiesData) {
        console.log(buddiesData);
        // Use Set to remove duplicates
        const uniqueUserIds = [...new Set(buddiesData.map(item => item.user_id))];

        // If you need the result as an array of objects with 'user_id' key:
        const uniqueBuddiesData = uniqueUserIds.map(userId => ({ user_id: userId }));

        res.status(200).json(uniqueBuddiesData);
      } else {
        // res.status(404).json({ error: 'No travel buddies found for the specified id'});
      }
 
    } 
  } catch (error) {
    console.error('Error fetching buddies:', error);
    res.status(500).json({ error: 'An error occurred while fetching buddies' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
