function calcularDisponible(){
    let ingresos = recuperarTexto("txtIngresos");
    let egresos = recuperarTexto("txt$Egresos");

    let valorDisponible = ingresos - egresos;

    if(valorDisponible < 0){
        valorDisponible = 0;
    }

    return valorDisponible;
}