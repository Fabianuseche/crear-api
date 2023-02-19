import { useEffect } from "react"

const [numero, setNumero] = useState(0)
const [doble, setDoble] = useState(0)

useEffect(()=>{
  setDoble(numero * 2)

  // se ejecuta cada vez que cambie alguno de los estados que le pasemos
},[numero])

useEffect(()=>{

  // se ejecuta solo una vez
},[])

useEffect(()=>{
  
  // se ejecuta cada vez que cambie algun estado
})