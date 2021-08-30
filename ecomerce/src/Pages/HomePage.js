import React, {useState,useEffect} from "react";
import { getAll } from "../Services/productosService";
import Producto from "../Components/Producto";

function HomePage() {

  const [loading,setLoading] = useState(true)
  const [productos,setProductos]= useState([])

  useEffect(
    ()=>{
      async function request(){
        const response = await getAll()
        //console.log("response",response)
        if(response.data.results){
          //setProductos(data.results)
          //setLoading(false)
          setProductos(response.data.results)
          setLoading(false)
        }
      }
      request()
    },
    []

  )
if(loading){
  return(
    <div>
      Loading..
    </div>
  );
}else{

  return(
    <div>
      <h2>Productos: </h2>
      {productos.map(productos=><Producto datos={productos} />)}
    </div>
  )
}

}

export default HomePage;
