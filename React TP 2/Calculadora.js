const suma=()=>{
    const valor1 = document.getElementById("val1_id").value 
    const valor2 = document.getElementById("val2_id").value
    console.log(valor1,valor2)
    document.getElementById("resultado").innerHTML=parseInt(valor1)+parseInt(valor2)
    alert("Usted ha realizado una Suma")
}

const resta=()=>{
    const valor1 = document.getElementById("val1_id").value 
    const valor2 = document.getElementById("val2_id").value
    console.log(valor1,valor2)
    document.getElementById("resultado").innerHTML=(valor1)-(valor2)
    alert("Usted ha realizado una Resta")
}

const multiplica=()=>{
    const valor1 = document.getElementById("val1_id").value 
    const valor2 = document.getElementById("val2_id").value
    console.log(valor1,valor2)
    document.getElementById("resultado").innerHTML=(valor1)*(valor2)
    alert("Usted ha realizado una Multiplicación")
}

const dividir=()=>{
    const valor1 = document.getElementById("val1_id").value 
    const valor2 = document.getElementById("val2_id").value
    console.log(valor1,valor2)
        
    if (valor2==0){
        document.getElementById("resultado").innerHTML="Math: ERror"
    }else document.getElementById("resultado").innerHTML=(valor1)/(valor2)
    alert("Usted ha realizado una División")    
}


