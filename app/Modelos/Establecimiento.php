<?php

declare(strict_types=1);

final class Establecimiento
{
    /**
     * Retorna los establecimientos que no fueron eliminados lógicamente.
     *
     * @return array<int, array<string, mixed>>
     */
    public static function listar(): array
    {
        $pdo = Conexion::obtener();

        $sql = <<<SQL
            SELECT
                id_establecimiento,
                nombre,
                descripcion,
                localidad,
                provincia,
                superficie,
                observaciones
            FROM establecimiento
            WHERE eliminado_en IS NULL
            ORDER BY nombre ASC
        SQL;

        $sentencia = $pdo->prepare($sql);
        $sentencia->execute();

        return $sentencia->fetchAll();
    }
}
