<?php

declare(strict_types=1);

final class EstablecimientoController
{
    public function index(): void
    {
        $directorioPublico = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/'));
        $baseUrl = rtrim($directorioPublico, '/');

        try {
            $establecimientos = Establecimiento::listar();
            $titulo = 'Establecimientos';
            $mensajeError = null;
        } catch (PDOException $excepcion) {
            $establecimientos = [];
            $titulo = 'Establecimientos';
            $mensajeError = 'No fue posible conectar con la base de datos. Verificá que MySQL esté iniciado y que la base ganaderia haya sido importada.';
        }

        require dirname(__DIR__) . '/Vistas/establecimiento/listar.php';
    }
}
