//Note to self: Delete the access keys once done.
const express = require('express');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid'); // Import the UUID library

const app = express();
app.use(bodyParser.json());

// Set up AWS DynamoDB configuration
AWS.config.update({
  region: 'us-east-2',
  accessKeyId: 'AKIASQ65LCLWKJCEI4IQ',
  secretAccessKey: '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',
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
  const { name, email } = req.body;

  const id = uuidv4();

  // Create a new user object
  const user = {
    id,
    name,
    email,
  };

  const params = {
    TableName: User,
    Item: user,
    ConditionExpression: 'attribute_not_exists(id)', // Check if the 'id' does not already exist
  };

  // Put the user data into DynamoDB with the condition
  dynamodb.put(params, (err, data) => {
    if (err) {
      if (err.code === 'ConditionalCheckFailedException') {
        // The 'id' already exists, return a 409 Conflict response
        console.error(`User with id ${id} already exists.`);
        res.status(409).json({ error: 'User with the same id already exists' });
      } else {
        console.error('Error putting user into DynamoDB:', err);
        res.status(500).json({ error: 'Could not create user' });
      }
    } else {
      console.log('User created successfully');
      res.status(200).json({ message: 'User created successfully' });
    }
  });
});

app.post('/createTrip', (req, res) => {
  const { name, dest } = req.body;

  const id = uuidv4();
  const start = new Date().toISOString();; // Get the current date and time
  const end = new Date(start);
    
  // Add 30 days to the current date
  end.setDate(end.getDate() + 30);
  const endISO = end.toISOString();

  // Create a new trip object
  const trip = {
    id,
    name,
    dest,
    start,
    end: endISO,
  };

  const params = {
    TableName: Trip,
    Item: trip,
    ConditionExpression: 'attribute_not_exists(id)', // Check if the 'id' does not already exist
  };

  // Put the trip data into DynamoDB with the condition
  dynamodb.put(params, (err, data) => {
    if (err) {
      if (err.code === 'ConditionalCheckFailedException') {
        // The 'id' already exists, return a 409 Conflict response
        console.error(`Trip with id ${id} already exists.`);
        res.status(409).json({ error: 'Trip with the same id already exists' });
      } else {
        console.error('Error putting trip into DynamoDB:', err);
        res.status(500).json({ error: 'Could not create Trip' });
      }
    } else {
      console.log('Trip created successfully');
      res.status(200).json({ message: 'Trip created successfully' });
    }
  });
});


app.post('/createRelation', (req, res) => {
  const { trip_id, user_id } = req.body;

  const id = uuidv4();

  // Create a new relation object
  const relation = {
    id,
    trip_id,
    user_id,
  };

  const params = {
    TableName: Relation,
    Item: relation,
    ConditionExpression: 'attribute_not_exists(id)', // Check if the 'id' does not already exist
  };

  // Put the relation data into DynamoDB with the condition
  dynamodb.put(params, (err, data) => {
    if (err) {
      if (err.code === 'ConditionalCheckFailedException') {
        // The 'id' already exists, return a 409 Conflict response
        console.error(`Relation with id ${id} already exists.`);
        res.status(409).json({ error: 'Relation with the same id already exists' });
      } else {
        console.error('Error putting relation into DynamoDB:', err);
        res.status(500).json({ error: 'Could not create relation' });
      }
    } else {
      console.log('Relation created successfully');
      res.status(200).json({ message: 'Relation created successfully' });
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