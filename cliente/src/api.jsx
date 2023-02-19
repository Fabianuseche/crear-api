const api = "http://localhost:3000/personas";

// devolver personas
export const get_personas = async () => {
  // hace un llamado http usando la funcion fetch a la url que le pasamos
  // fetch es async, entoces ponemos await antes del llamado para esperar
  // y tener la respuesta
  const resp = await fetch(api);

  // para obtener el body de la respuesta en format json (que podamos usar en js)
  // usamos la funcion .json() que esta dentro de la respuesta
  const personas = await resp.json();

  // devolver personas
  return personas;
};

export const crear_persona = async (persona) => {
  await fetch(api, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(persona),
  });
};
