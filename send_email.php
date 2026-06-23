<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    // Tu correo donde recibirás los mensajes
    $destinatario = "302410035@ute.edu.mx";
    $asunto = "Nuevo mensaje de contacto";

    // Cabeceras del correo
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Cuerpo del mensaje
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo Electrónico: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Envío del correo
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "<script>alert('Mensaje enviado correctamente.'); window.location.href='contacto.html';</script>";
    } else {
        echo "<script>alert('Error al enviar el mensaje. Inténtalo de nuevo.'); window.location.href='contacto.html';</script>";
    }
} else {
    echo "<script>alert('Acceso no permitido.'); window.location.href='contacto.html';</script>";
}
?>
