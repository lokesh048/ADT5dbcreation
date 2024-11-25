const HBase = require('hbase-client');

const client = HBase.create({
  zookeeperHosts: ['localhost:2181'],
  zookeeperRoot: '/hbase'
});

async function run() {
  // Insert Data
  await client.put('students', '1', [
    { column: 'info:name', $: 'Alice' },
    { column: 'info:age', $: '22' },
    { column: 'info:major', $: 'Computer Science' }
  ]);

  // Retrieve Data for a Row
  const result = await client.getRow('students', '1');
  console.log("Row Data:", result);

  // Delete Data
  await client.delete('students', '1', 'info:major');
  
  client.close();
}

run().catch(console.error);
