const API = "http://localhost:3000/products";

// elementos
const $name = document.getElementById("name");
const $quantity = document.getElementById("quantity");
const $btn = document.getElementById("btn");
const $lista = document.getElementById("lista");

// product nuevo
const newProduct = {
  name: "",
  quantity: 0,
};

// eventos
$name.addEventListener("input", (e) => {
  newProduct.name = e.target.value;
});
$quantity.addEventListener("input", (e) => {
  newProduct.quantity = parseInt(e.target.value);
});

async function obtenerProductos() {
  const res = await fetch(API);
  const data = await res.json();

  console.log(data);

  $lista.innerHTML = data
    .map((product) => `<p>${product.name}: ${product.quantity}</p>`)
    .join("");
}

// crear product
$btn.addEventListener("click", async () => {
  await fetch(API, {
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  obtenerProductos();
});

document.addEventListener("DOMContentLoaded", obtenerProductos);
