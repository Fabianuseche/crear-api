// useData es un custom hook

import { useEffect, useState } from "react";

// le pasamos una funcion y nos devuelve un estado con el resultado
export function useData(getDataFn, def) {
  // estado con la data
  const [data, setData] = useState(def);

  useEffect(() => {
    async function helper() {
      // ejecutamos la funcion que nos pasen
      const newData = await getDataFn();

      // cambiamos el estado con el resultado
      setData(newData);
    }

    // ejectutar funcion ayuda
    helper();
  }, []);

  // devolvemos el estado
  return data;
}
