<?php

declare(strict_types=1);

final class Conexion
{
    private const HOST = 'localhost';
    private const BASE_DATOS = 'ganaderia';
    private const USUARIO = 'root';
    private const CONTRASENA = '';

    private function __construct()
    {
    }

    public static function obtener(): PDO
    {
        $dsn = sprintf(
            'mysql:host=%s;dbname=%s;charset=utf8mb4',
            self::HOST,
            self::BASE_DATOS
        );

        return new PDO(
            $dsn,
            self::USUARIO,
            self::CONTRASENA,
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]
        );
    }
}
