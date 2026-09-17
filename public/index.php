<?php

declare(strict_types=1);

$raizProyecto = dirname(__DIR__);

spl_autoload_register(
    static function (string $clase) use ($raizProyecto): void {
        $directorios = [
            $raizProyecto . '/app/Configuracion',
            $raizProyecto . '/app/Controladores',
            $raizProyecto . '/app/Modelos',
        ];

        foreach ($directorios as $directorio) {
            $archivo = $directorio . '/' . $clase . '.php';

            if (is_file($archivo)) {
                require_once $archivo;
                return;
            }
        }
    }
);

$directorioPublico = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/'));
$baseUrl = rtrim($directorioPublico, '/');

$rutaSolicitada = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
$rutaSolicitada = is_string($rutaSolicitada) ? $rutaSolicitada : '/';

if ($baseUrl !== '' && $baseUrl !== '/' && str_starts_with($rutaSolicitada, $baseUrl)) {
    $rutaSolicitada = substr($rutaSolicitada, strlen($baseUrl));
}

$rutaSolicitada = '/' . trim($rutaSolicitada, '/');

if ($rutaSolicitada === '//') {
    $rutaSolicitada = '/';
}

$rutas = require $raizProyecto . '/routes/web.php';

if (!array_key_exists($rutaSolicitada, $rutas)) {
    http_response_code(404);
    require $raizProyecto . '/app/Vistas/errores/404.php';
    exit;
}

[$claseControlador, $metodo] = $rutas[$rutaSolicitada];

$controlador = new $claseControlador();
$controlador->$metodo();
