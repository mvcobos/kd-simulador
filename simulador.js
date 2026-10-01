//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");

    let disponible = calcularDisponible(ingresos, egresos);

    mostratEnSpan("spnDisponible", disponible);
}