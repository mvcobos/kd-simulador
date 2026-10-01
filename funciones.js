function calcularDisponible(ingresos, egresos) {
    let valorDisponible = ingresos - egresos;

    if (valorDisponible < 0) {
        valorDisponible = 0;
    }

    return valorDisponible;
}