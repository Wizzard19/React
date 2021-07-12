function getTipoSeguro(){
    var tipoSeguro = document.getElementById("TipoSeguro").value
    console.log("TipoSeguro", tipoSeguro)

    if (tipoSeguro==1){
        document.getElementById("valorSeguro").innerHTML="$500"
       
    }else if(tipoSeguro==2){
        document.getElementById("valorSeguro").innerHTML="$1000"
    
    }else{
        document.getElementById("valorSeguro").innerHTML="$1500"
    }
    
}
function contactanos(){

var nombre = document.getElementById("nombre_id").value
var apellido = document.getElementById("apellido_id").value
var dni = document.getElementById("dni_id").value
var email = document.getElementById("email_id").value
var telefono = document.getElementById("tel_id").value
console.log(nombre,apellido,dni,email,telefono)}