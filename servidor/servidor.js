const knex = require("knex");
const cors = require("@fastify/cors");
const api = require("fastify")();

api.register(cors);

var db = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "fabian",
  },
});

// devuelve todos
api.get("/products", async function (peticion, respuesta) {
  const products = await db.from("products").select("*");
  return products;
});

// devuelve uno por id
api.get("/products/:id", async function (req, res) {
  const product = await db
    .from("products")
    .where({
      id: req.params.id,
    })
    .first();
  return product;
});

// crear
api.post("/products", async function (req, res) {
  await db.insert(req.body).into("products");
});

api.put("/products/:id", async function (req, res) {
  await db.from("products").where({ id: req.params.id }).update(req.body);
});

api.delete("/products/:id", async function (req, res) {
  await db.from("products").where({ id: req.params.id }).delete();
});

const start = async () => {
  try {
    await api.listen({ port: 3000 });
  } catch (err) {
    api.log.error(err);
    process.exit(1);
  }
};
start();
