import { useEffect, useState } from "react";
import { crear_persona, get_personas } from "./api";
import { useData } from "./hooks/useData";

// App es un componente
function App() {
  // llamamos a customHook
  const personas = useData(get_personas, []);

  const [newPersona, setnewPersona] = useState({
    name: "",
    cedula: null,
  });

  // usamos la funcion map para transformar la lista de personas
  // a una lista de etiquetas html
  const filas = personas.map((persona) => (
    <tr key={persona.id}>
      <td>{persona.name}</td>
      <td>{persona.cedula}</td>
    </tr>
  ));

  return (
    <div className="principal">
      <div className="hola">
        <label htmlFor="nombre">agregar nombre </label>
        <input
          type="text"
          name="nombre"
          onInput={function (evento) {
            const nuevo_valor = evento.target.value;
            setnewPersona({
              ...newPersona,
              name: nuevo_valor,
            });
          }}
        />
        <label htmlFor="cedula">agregar cedula </label>
        <input
          type="number"
          onInput={function (e) {
            const nueva_cedula = +e.target.value;
            setnewPersona({
              ...newPersona,
              cedula: nueva_cedula,
            });
          }}
        />
        <button
          onClick={() => {
            crear_persona(newPersona);
          }}
        >
          agregar
        </button>
      </div>

      <div className="lista">
        <table className="table">
          <tbody>
            <tr>
              <td>nombre</td>
              <td>cedula</td>
            </tr>
            {filas}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
