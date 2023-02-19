const knex = require("knex");
const cors = require("@fastify/cors");
const api = require("fastify")();

api.register(cors);

const db = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "fabian",
  },
});

// devuelve todos
api.get("/personas", async function (peticion, respuesta) {
  const personas = await db.from("personas").select("*");
  return personas;
});

// devuelve uno por id
api.get("/personas/:id", async function (req, res) {
  const product = await db
    .from("personas")
    .where({
      id: req.params.id,
    })
    .first();
  return product;
});

// crear
api.post("/personas", async function (req, res) {
  await db.insert(req.body).into("personas");
});

api.put("/personas/:id", async function (req, res) {
  await db.from("personas").where({ id: req.params.id }).update(req.body);
});

api.delete("/personas/:id", async function (req, res) {
  await db.from("personas").where({ id: req.params.id }).delete();
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
