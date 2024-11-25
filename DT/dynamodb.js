const { DynamoDBClient, PutItemCommand, GetItemCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

async function run() {
  // Insert Data
  await client.send(new PutItemCommand({
    TableName: "Students",
    Item: {
      "StudentID": { S: "123" },
      "Name": { S: "Alice" },
      "Age": { N: "22" },
      "Major": { S: "Computer Science" }
    }
  }));

  // Retrieve a Specific Item
  const { Item } = await client.send(new GetItemCommand({
    TableName: "Students",
    Key: {
      "StudentID": { S: "123" }
    }
  }));
  console.log("Retrieved Item:", Item);

  // Update Item and Delete can be added similarly using SDK v3 commands
}

run().catch(console.error);
