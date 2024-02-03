document.addEventListener('DOMContentLoaded', function() {
    var inputMonto = document.getElementById('monto');
    var monedaOrigen = document.getElementById('moneda-origen');
    var monedaDestino = document.getElementById('moneda-destino');

    // Eventos que detectan cambios.
    inputMonto.addEventListener('input', actualizarConversion);
    monedaOrigen.addEventListener('change', function() {
        actualizarEtiquetas(monedaOrigen.value, monedaDestino.value);
        actualizarConversion();
    });
    monedaDestino.addEventListener('change', function() {
        actualizarEtiquetas(monedaOrigen.value, monedaDestino.value);
        actualizarConversion();
    });
    // Actualiza las etiquetas al cargar la página
    actualizarEtiquetas(monedaOrigen.value, monedaDestino.value);
});

function actualizarConversion() {
    var monto = document.getElementById('monto').value;
    var monedaOrigen = document.getElementById('moneda-origen').value;
    var monedaDestino = document.getElementById('moneda-destino').value;
    
    // Aquí necesitarías una función que devuelva la tasa de conversión
    var tasaConversion = obtenerTasaConversion(monedaOrigen, monedaDestino);

    // Calcula el monto con el margen adicional
    var resultado = monto * tasaConversion;
    document.getElementById('resultado').value = resultado.toFixed(2);
}

function actualizarEtiquetas(origen, destino) {
    document.getElementById('moneda-envio-label').textContent = origen;
    document.getElementById('moneda-recepcion-label').textContent = destino;
    document.getElementById('titulo-moneda-origen').textContent = origen;
    document.getElementById('titulo-moneda-destino').textContent = destino;
}

function obtenerTasaConversion(origen, destino) {
    // Supongamos que esta función devolverá la tasa de cambio correcta.
    return 1.08; // Valor de ejemplo
}
