function calcularDisponible(ingresos, egresos) {
    let valorDisponible = ingresos - egresos;

    if (valorDisponible < 0) {
        valorDisponible = 0;
    }

    return valorDisponible;
}

function calcularCapacidadPago(montoDisponible){
    let capacidad = montoDisponible / 2;
    return capacidad;
}

function calcularInteresSimple(monto, taza, plazoAnios){
    let interes = plazoAnios * monto * (taza/100);
    return interes;
}