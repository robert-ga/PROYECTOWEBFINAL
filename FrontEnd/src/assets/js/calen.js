var dia = new Date();
var anio = dia.getFullYear();
var dia = dia.getDate();
var _mes = dia.getMonth(); //viene con valores de 0 al 11
_mes = _mes + 1; //ahora lo tienes de 1 al 12
if (_mes < 10) //ahora le agregas un 0 para el formato date
{
    var mes = "0" + _mes;
} else {
    var mes = _mes.toString;
}

let dia_minimo = anio + '-' + mes + '-' + dia; // Nueva variable

document.getElementById("diaReserva").setAttribute('min', dia_minimo);