var datos = [];
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
btnCalcular = document.getElementById("btnCalcular").addEventListener(("click"), calcular => {  
    comprobarInputs();  
})
btnVolverCalcular = document.getElementById("btnVolverCalcular").addEventListener(("click"), calcularIntereses => {  
    var listado = document.getElementById("resultados");
    var html = "";
    let porcentaje = 0;
    if(meses >= 30 && meses <= 60){ porcentaje = 40}
    if(meses >= 61 && meses <= 120){ porcentaje = 45}
    if(meses >= 121 && meses <= 360){porcentaje = 50}
    if(meses >360){porcentaje = 65}
    let interes = 0, monto = 0;
    monto = resultado
    interes = (monto*(meses/360)*(porcentaje/100));
    resultado = monto + interes;
    for (let i = 0; i < 4; i++){
        html += "Monto inicial :"+ monto + " Resultado: " + resultado + "<br/>";
        monto = resultado;
        resultado = monto + interes;
        listado.innerHTML = html 
    }
    
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
    var resultados = document.getElementById("resultados");
    var porcentaje = 0;
    if(meses >= 30 && meses <= 60){ porcentaje = 40}
    if(meses >= 61 && meses <= 120){ porcentaje = 45}
    if(meses >= 121 && meses <= 360){porcentaje = 50}
    if(meses >360){porcentaje = 65}
    let interes = 0;
    interes = (monto*(meses/360)*(porcentaje/100));
    resultado = monto +interes;
    resultados.innerHTML = "El total de $ a obtener de "+ nombre+", "+apellido +" es de: " +resultado;
    return(resultado, porcentaje, meses)
}
// function interesesFuturos(){
//     calcularInversion();
//     debugger;
//     let montointeres = monto + interes;
//     alert(monto, monto+interes);
//     alert(montointeres, montointeres+interes) 
// }

