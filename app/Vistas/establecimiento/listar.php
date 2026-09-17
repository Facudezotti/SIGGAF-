<?php

declare(strict_types=1);

/** @var string $titulo */
/** @var array<int, array<string, mixed>> $establecimientos */
/** @var string|null $mensajeError */
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($titulo, ENT_QUOTES, 'UTF-8') ?> | SIGGAF</title>
    <link rel="stylesheet" href="<?= htmlspecialchars($baseUrl, ENT_QUOTES, 'UTF-8') ?>/assets/css/app.css">
</head>
<body>
    <header class="encabezado">
        <div class="contenedor">
            <h1>SIGGAF</h1>
            <p>Sistema Inteligente de Gestión Ganadera Argentina</p>
        </div>
    </header>

    <main class="contenedor contenido-principal">
        <section class="tarjeta">
            <h2><?= htmlspecialchars($titulo, ENT_QUOTES, 'UTF-8') ?></h2>
            <p class="texto-secundario">
                Vista inicial para comprobar el flujo MVC y la conexión con la tabla
                <code>establecimiento</code> de la base <code>ganaderia</code>.
            </p>

            <?php if ($mensajeError !== null): ?>
                <div class="mensaje mensaje-error" role="alert">
                    <?= htmlspecialchars($mensajeError, ENT_QUOTES, 'UTF-8') ?>
                </div>
            <?php elseif ($establecimientos === []): ?>
                <div class="mensaje">
                    La conexión funciona, pero todavía no hay establecimientos registrados.
                </div>
            <?php else: ?>
                <div class="tabla-contenedor">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th>Provincia</th>
                                <th>Superficie (ha)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($establecimientos as $establecimiento): ?>
                                <tr>
                                    <td><?= htmlspecialchars((string) $establecimiento['nombre'], ENT_QUOTES, 'UTF-8') ?></td>
                                    <td><?= htmlspecialchars((string) $establecimiento['localidad'], ENT_QUOTES, 'UTF-8') ?></td>
                                    <td><?= htmlspecialchars((string) $establecimiento['provincia'], ENT_QUOTES, 'UTF-8') ?></td>
                                    <td><?= htmlspecialchars((string) $establecimiento['superficie'], ENT_QUOTES, 'UTF-8') ?></td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php endif; ?>
        </section>
    </main>
</body>
</html>
