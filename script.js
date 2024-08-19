// script.js

// Función principal que se ejecuta cuando el documento está completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el botón por su ID
    const alertButton = document.getElementById("alertButton");

    // Verifica que el botón exista antes de añadir el evento
    if (alertButton) {
        // Añade un evento de clic al botón
        alertButton.addEventListener("click", handleButtonClick);
    }
});

/**
 * Función que maneja el evento de clic en el botón.
 * Muestra una alerta cuando el botón es clicado.
 */
function handleButtonClick() {
    // Usa la API de confirmación de JavaScript en lugar de solo una alerta
    if (confirm("¿Estás seguro de que quieres hacer clic?")) {
        alert("¡Hola! Has hecho clic en el botón.");
    } else {
        console.log("El usuario canceló la acción.");
    }
}
$(document).ready(function () {
    // Selecciona el botón por su ID usando jQuery
    const $alertButton = $("#alertButton");

    // Verifica que el botón exista antes de añadir el evento
    if ($alertButton.length) {
        // Añade un evento de clic al botón
        $alertButton.on("click", handleButtonClick);
    }
});

/**
 * Función que maneja el evento de clic en el botón.
 * Muestra una alerta cuando el botón es clicado.
 */
function handleButtonClick() {
    // Usa la API de confirmación de JavaScript en lugar de solo una alerta
    if (confirm("¿Estás seguro de que quieres hacer clic?")) {
        alert("¡Hola! Has hecho clic en el botón.");
    } else {
        console.log("El usuario canceló la acción.");
    }
}