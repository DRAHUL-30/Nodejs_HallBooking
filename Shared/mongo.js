const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.URL);

const mongo = {
  db: null,

  rooms: null,
  customers: null,

  async connect() {
    await client.connect();

    this.db = client.db(process.env.Database);

    this.rooms = this.db.collection("rooms");
    this.customers = this.db.collection("customers");
    console.log("database connected");
  },
};

module.exports = mongo;
