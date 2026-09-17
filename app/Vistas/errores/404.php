<?php

declare(strict_types=1);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página no encontrada | SIGGAF</title>
    <link rel="stylesheet" href="<?= htmlspecialchars($baseUrl, ENT_QUOTES, 'UTF-8') ?>/assets/css/app.css">
</head>
<body>
    <main class="contenedor contenido-principal">
        <section class="tarjeta">
            <h1>Error 404</h1>
            <p>La página solicitada no existe.</p>
            <a class="boton" href="<?= htmlspecialchars($baseUrl, ENT_QUOTES, 'UTF-8') ?>/">Volver al inicio</a>
        </section>
    </main>
</body>
</html>
