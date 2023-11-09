const express = require('express');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Set up AWS DynamoDB configuration
AWS.config.update({
  region: 'your-dynamodb-region', // e.g., 'us-east-1'
  accessKeyId: 'your-access-key-id',
  secretAccessKey: 'your-secret-access-key',
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

// Define a table name
const tableName = 'YourTableName';

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
