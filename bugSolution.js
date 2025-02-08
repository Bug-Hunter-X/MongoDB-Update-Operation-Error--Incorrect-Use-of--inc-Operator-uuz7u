```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb://localhost:27017/";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("myDatabase");
    const collection = db.collection("myCollection");

    // Correct update operation
    const result = await collection.updateOne({"_id": 1}, {"$inc": {"field": 1}});

    console.log(result);
  } finally {
    await client.close();
  }
}

updateDocument();
```