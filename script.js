document.addEventListener('DOMContentLoaded', function() {
    var inputMonto = document.getElementById('monto');
    var monedaOrigen = document.getElementById('moneda-origen');
    var monedaDestino = document.getElementById('moneda-destino');

    // Eventos que detectan cambios.
    inputMonto.addEventListener('input', actualizarConversion);
    monedaOrigen.addEventListener('change', actualizarConversion);
    monedaDestino.addEventListener('change', actualizarConversion);
});

function actualizarConversion() {
    var monto = document.getElementById('monto').value;
    var monedaOrigen = document.getElementById('moneda-origen').value;
    var monedaDestino = document.getElementById('moneda-destino').value;
    
    // Aquí necesitarías una función que devuelva la tasa de conversión
    // entre las dos monedas seleccionadas. Esto es solo un ejemplo.
    var tasaConversion = obtenerTasaConversion(monedaOrigen, monedaDestino);

    // Calcula el monto con el margen adicional
    var resultado = monto * tasaConversion;
    document.getElementById('resultado').value = resultado.toFixed(2);
}

function obtenerTasaConversion(origen, destino) {
    // Supongamos que esta función devolverá la tasa de cambio correcta.
    // Aquí debes implementar la lógica para obtener la tasa de conversión real.
    // Por ahora, devolveremos un valor ficticio.
    return 1.08; // Valor de ejemplo
}
