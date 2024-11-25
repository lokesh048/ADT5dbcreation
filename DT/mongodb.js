const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";  // MongoDB connection string

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("testDB");
    const students = database.collection("students");

    // Insert Data
    await students.insertOne({ name: "Alice", age: 22, major: "Computer Science" });

    // Retrieve All Documents
    const allStudents = await students.find({}).toArray();
    console.log("All Students:", allStudents);

    // Retrieve Specific Documents
    const specificStudent = await students.find({ age: 22 }).toArray();
    console.log("Specific Student:", specificStudent);

    // Update a Document
    await students.updateOne({ name: "Alice" }, { $set: { major: "Mathematics" } });

    // Delete a Document
    await students.deleteOne({ name: "Alice" });

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
