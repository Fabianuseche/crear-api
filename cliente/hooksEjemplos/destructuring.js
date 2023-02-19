const user = {
  nombre: "",
  edad: 0,
  altura: 0,
}

const estudiante = {
  nombre: user.nombre,
  edad: user.edad,
  altura: user.altura,
  esEgresado: true
}

const estudiantDest = { 
  ...user,
  esEgresado: true
}

const lista = []

const copyList = [...lista,  1]