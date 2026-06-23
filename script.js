document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");
    
    document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("contacto-form");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío normal del formulario

        // Capturar valores
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validación de campos vacíos
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Validación de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Simulación de envío de datos
        alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");

        // Limpiar el formulario después de enviar
        formulario.reset();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".navbar ul");

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

});
