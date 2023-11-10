//Note to self: Delete the access keys once done.
const express = require('express');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Set up AWS DynamoDB configuration
AWS.config.update({
  region: 'us-east-2', // e.g., 'us-east-1'
  accessKeyId: 'AKIASQ65LCLWK7OXLVVJ',
  secretAccessKey: 'Wp8cX8aXaoA1VXPXr9WSQXqI2a01PanTknmkGByM',
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

// Define a table name
const User = 'users';
const Trip = 'trips'
const Relation = 'relations'

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.post('/createUser', (req, res) => {
  const { id, name, email } = req.body;

  // Create a new user object
  const user = {
    id,
    name,
    email 
  };

  params = {
    TableName: User,
    Item: user,
  };

  // Put the user data into DynamoDB
  dynamodb.put(params, (err, data) => {
    if (err) {
      console.error('Error putting user into DynamoDB:', err);
      res.status(500).json({ error: 'Could not create user' });
    } else {
      console.log('User created successfully');
      res.status(200).json({ message: 'User created successfully' });
    }
  });
});

app.post('/createTrip', (req, res) => {
  const { id, name, dest, start, end } = req.body;

  // Create a new trip object
  const trip = {
    id,
    name,
    dest,
    start,
    end 
  };

  const params = {
    TableName: Trip,
    Item: trip,
  };

  // Put the user trip into DynamoDB
  dynamodb.put(params, (err, data) => {
    if (err) {
      console.error('Error putting trip into DynamoDB:', err);
      res.status(500).json({ error: 'Could not create Trp' });
    } else {
      console.log('Trip created successfully');
      res.status(200).json({ message: 'Trip created successfully' });
    }
  });
});

app.post('/createRelation', (req, res) => {
  const { id, trip_id, user_id } = req.body;

  // Create a new user object
  const relation = {
    id,
    trip_id,
    user_id
  };

  params = {
    TableName: Relation,
    Item: relation,
  };

  // Put the relation data into DynamoDB
  dynamodb.put(params, (err, data) => {
    if (err) {
      console.error('Error putting relation into DynamoDB:', err);
      res.status(500).json({ error: 'Could not create relation' });
    } else {
      console.log('relation created successfully');
      res.status(200).json({ message: 'relation created successfully' });
    }
  });
});

app.get('/users', (req, res) => {
  params = {
    TableName: User,
  };

  // Scan the User table to get all users
  dynamodb.scan(params, (err, data) => {
    if (err) {
      console.error('Error scanning users from DynamoDB:', err);
      res.status(500).json({ error: 'Could not retrieve users' });
    } else {
      console.log('Users retrieved successfully');
      res.status(200).json(data.Items); // Return the array of users
    }
  });
});

app.get('/user/:id', (req, res) => {
  const { id } = req.params;

  const params = {
    TableName: User,
    Key: {
      id: id,
    },
  };

  // Get a specific user by their id
  dynamodb.get(params, (err, data) => {
    if (err) {
      console.error(`Error getting user with id ${id} from DynamoDB:`, err);
      res.status(500).json({ error: 'Could not retrieve user' });
    } else {
      if (data.Item) {
        console.log(`User with id ${id} retrieved successfully`);
        res.status(200).json(data.Item); // Return the user as JSON
      } else {
        console.log(`User with id ${id} not found`);
        res.status(404).json({ message: 'User not found' });
      }
    }
  });
});

app.get('/trips', (req, res) => {
  params = {
    TableName: Trip,
  };

  // Scan the User table to get all trips
  dynamodb.scan(params, (err, data) => {
    if (err) {
      console.error('Error scanning trips from DynamoDB:', err);
      res.status(500).json({ error: 'Could not retrieve trips' });
    } else {
      console.log('Trips retrieved successfully');
      res.status(200).json(data.Items); // Return the array of users
    }
  });
});

app.get('/user/:userId/travel-buddies', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Scan the relations table to find items where user_id contains the specified userId
    const params = {
      TableName: Relation,
      FilterExpression: 'contains(user_id, :userId)',
      ExpressionAttributeValues: {
        ':userId': userId,
      },
    };

    dynamodb.scan(params, (err, data) => {
      if (err) {
      console.error('Error scanning trips from DynamoDB:', err);
      res.status(500).json({ error: 'Could not retrieve trips' });
      } else {
      console.log('Trips retrieved successfully');
      res.status(200).json(data.Items); // Return the array of users
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching travel-buddies' });
  }
});