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