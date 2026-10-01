//AQUI LAS VALIDACIONES DEL FORMULARIO

// Se ejecuta al presionar "Calcular Crédito": valida y solo si todo es correcto llama a calcular()
function validarYCalcular() {
    let ingresosOk = validarCampo("txtIngresos", "lblErrorIngresos", 1, 99999, true);
    let egresosOk = validarCampo("txtEgresos", "lblErrorEgresos", 0, 99999, true);
    let montoOk = validarCampo("txtMonto", "lblErrorMonto", 100, 99999, true);
    let plazoOk = validarCampo("txtPlazo", "lblErrorPlazo", 1, 30, false);
    let tasaOk = validarCampo("txtTasaInteres", "lblErrorTasaInteres", 1, 100, true);

    if (ingresosOk && egresosOk && montoOk && plazoOk && tasaOk) {
        calcular();
    }
}

// Devuelve true si el valor del campo es válido; si no, muestra el error debajo del campo
function validarCampo(idCaja, idError, minimo, maximo, permiteDecimales) {
    let valor = recuperarTexto(idCaja).trim();
    let mensaje = "";

    if (valor == "") {
        mensaje = "Este campo es obligatorio";
    } else if (permiteDecimales && !/^\d+(\.\d{1,2})?$/.test(valor)) {
        mensaje = "Ingrese solo números (máximo 2 decimales)";
    } else if (!permiteDecimales && !/^\d+$/.test(valor)) {
        mensaje = "Ingrese solo números enteros";
    } else if (valor.split(".")[0].length > 5) {
        mensaje = "Máximo 5 dígitos";
    } else {
        let numero = parseFloat(valor);
        if (numero < minimo || numero > maximo) {
            mensaje = "El valor debe estar entre " + minimo + " y " + maximo;
        }
    }

    mostrarEnSpan(idError, mensaje);

    let contenedor = document.getElementById(idCaja).parentElement;
    if (mensaje == "") {
        contenedor.classList.remove("input-wrap--error");
        return true;
    } else {
        contenedor.classList.add("input-wrap--error");
        return false;
    }
}
