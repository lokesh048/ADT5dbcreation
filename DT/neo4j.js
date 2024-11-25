const neo4j = require('neo4j-driver');
const uri = 'bolt://localhost:7687';
const user = 'neo4j';
const password = 'your_password';

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();

async function run() {
  // Create a Node
  await session.run("CREATE (a:Student {name: 'Alice', age: 22, major: 'Computer Science'})");

  // Retrieve All Nodes
  const result = await session.run("MATCH (s:Student) RETURN s");
  result.records.forEach(record => {
    console.log("Retrieved Node:", record.get('s').properties);
  });

  // Update a Node
  await session.run("MATCH (s:Student {name: 'Alice'}) SET s.major = 'Mathematics'");

  // Delete a Node
  await session.run("MATCH (s:Student {name: 'Alice'}) DELETE s");

  await session.close();
  driver.close();
}

run().catch(console.error);
