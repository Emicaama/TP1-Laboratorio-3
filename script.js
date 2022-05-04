// let datos = [];
btnCalcular = document.getElementById("btnCalcular").addEventListener(("click"), calcular => {  
    comprobarInputs();  
})
function comprobarInputs(){
    nombre = document.getElementById("txtNombre").value;
    apellido = document.getElementById("txtApellido").value;
    monto = parseFloat(document.getElementById("monto").value);
    meses = parseFloat(document.getElementById("meses").value); 
    if (nombre && apellido != "" ){
        if(monto >= 1000){
            if(meses >= 30){calcularInversion()}
            else{alert("Por favor ingrese un numero de meses mayor o igual a 30")}}
        else{alert("Por favor ingrese un monto mayor a $1000")}}
    else {alert("Por favor ingrese nombre y apellido")}
}
function calcularInversion(){
    let porcentaje = 0;
    if(meses >= 30 && meses <= 60){ porcentaje = 40}
    if(meses >= 61 && meses <= 120){ porcentaje = 45}
    if(meses >= 121 && meses <= 360){porcentaje = 50}
    if(meses >360){porcentaje = 65}
    resultado = monto +(monto*(meses/360)*(porcentaje/100));
    alert(resultado)
}

