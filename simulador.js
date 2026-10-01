//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");
    let disponible = calcularDisponible(ingresos, egresos);

    mostrarEnSpan("spnDisponible", disponible);
    
    let capacidad = calcularCapacidadPago(disponible);
    mostrarEnSpan("spnCapacidadPago", capacidad);

    let monto = recuperarFloat("txtMonto");
    let plazo = recuperarFloat("txtPlazo");
    let taza = recuperarFloat("txtTasaInteres");
    let interes = calcularInteresSimple(monto, taza, plazo);

    mostrarEnSpan("spnInteresPagar", interes);

    let total = calcularTotalPagar(monto, interes);
    mostrarEnSpan("spnTotalPrestamo", total);

    let cuota = calcularCuotaMensual(total, plazo);
    mostrarEnSpan("spnCuotaMensual", cuota);

    let aprobado = aprobarCredito(capacidad, cuota);
    if(aprobado == true){
        mostrarEnSpan("spnEstadoCredito", "CREDITO APROBADO");
    }else{
         mostrarEnSpan("spnEstadoCredito", "CREDITO RECHAZADO");
    }
}