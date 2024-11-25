const axios = require('axios');
const baseUrl = "http://localhost:8081/stores/students/";

async function run() {
  // Insert Data
  await axios.post(baseUrl, {
    key: "123",
    value: { name: "Alice", age: 22, major: "Computer Science" }
  });

  // Retrieve Data
  const { data } = await axios.get(`${baseUrl}123`);
  console.log("Retrieved Data:", data);

  // Delete Data
  await axios.delete(`${baseUrl}123`);
}

run().catch(console.error);
