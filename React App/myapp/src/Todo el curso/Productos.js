

function Productos(props) {
  return (
    <div className="Productos">

    <div>
                
    <p>Nombre: {props.nombre}</p>
    <p>Descripción: {props.descripcion}</p>
    <p>Precio: {props.precio}</p>
    <p>SKU: {props.SKU}</p>
    <p>Cantidad Disponible: {props.stock}</p>
</div> 
    
      
    
    </div>
  );
}

export default Productos;