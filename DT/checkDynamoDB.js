const AWS = require('aws-sdk');

// Configure DynamoDB Local
AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

const dynamodb = new AWS.DynamoDB();

dynamodb.listTables({}, (err, data) => {
  if (err) {
    console.error("Error connecting to DynamoDB Local:", err);
  } else {
    console.log("DynamoDB Local is running. Tables:", data.TableNames);
  }
});
