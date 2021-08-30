import React, {useState,useEffect} from 'react'
import Producto from '../Components/Producto'
import { getById } from '../Services/productosService'
import {
    useParams,
    Link
}from 'react-router-dom';
function DetallePage(){

    const [loading,setLoading] = useState(true)
    const {id} = useParams()
    console.log(id)
    const [producto,setProducto] = useState({})

useEffect(
    ()=>{
        async function request(){
            const {data} = await getById(id)
            if(data){
                setProducto(data)
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
            Loading detail...
        </div>
    );

}else{
    return(
        <div>
            <Link to="/Home">Back</Link>
            <h3>Articulo : {producto.title}</h3>
            <img src={producto.thumbnail}/>
            <p>Precio : {producto.currency_id}{producto.price}</p>
            <p>Stock: {producto.sold_quantity}</p>
            <p> {producto.pictures.map(picture=><img src={picture.url} />)} </p>
      
      <button>Comprar ahora</button>
        </div>
    )
}



}

export default DetallePage;