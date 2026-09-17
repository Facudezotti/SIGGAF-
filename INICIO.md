# SIGGAF — Sistema Inteligente de Gestión Ganadera Argentina

Proyecto académico desarrollado para la **Universidad de la Cuenca del Plata**, Facultad de Arquitectura y Tecnología, Sede Formosa, en la materia **Seminario de Integración**.

## Integrantes

- Facundo Dezotti
- Kevin Schneider

## Docente

Dr. Cerquand Cristian Fernando.

## Establecimiento de referencia

La Celina.

## Objetivo de esta etapa

Organizar el proyecto con una arquitectura **MVC (Modelo - Vista - Controlador)** sencilla y preparada para trabajar únicamente con las áreas que actualmente existen en la base de datos `ganaderia`.

## Tecnologías

- PHP 8.2.12.
- MySQL 8 o MariaDB 10.4 o superior.
- XAMPP.
- HTML5.
- CSS3.
- JavaScript 
- PDO para la conexión con la base de datos.


## Estructura del proyecto

```text
SIGGAF/
├── app/
│   ├── Configuracion/
│   ├── Controladores/
│   ├── Modelos/
│   └── Vistas/
│       ├── usuarios/
│       ├── establecimiento/
│       ├── configuracion/
│       ├── potreros/
│       ├── animales/
│       ├── lotes/
│       ├── movimientos/
│       ├── layouts/
│       └── errores/
├── public/
│   ├── index.php
│   └── assets/
│       ├── css/
│       ├── js/
│       └── img/
├── routes/
│   └── web.php
├── database/
│   └── ganaderia.sql
├── .gitignore
└── README.md
```

## Organización MVC

- **Modelos:** representan los datos y permiten trabajar con la base de datos.
- **Vistas:** contienen la interfaz que ve el usuario.
- **Controladores:** reciben las solicitudes y coordinan modelos y vistas.
- **Configuracion:** contiene la conexión a la base de datos.
- **routes:** define las rutas de la aplicación.
- **public:** contiene el punto de entrada y los archivos públicos como CSS, JavaScript e imágenes.
- **database:** contiene el script consolidado de la base `ganaderia`.

## Instalación en XAMPP

1. Colocar la carpeta del proyecto en:

```text
C:\xampp\htdocs\SIGGAF
```

2. Iniciar **Apache** y **MySQL** desde XAMPP.

3. Abrir phpMyAdmin:

```text
http://localhost/phpmyadmin
```

4. Importar:

```text
database/ganaderia.sql
```

> El script actual recrea la base `ganaderia`. No debe ejecutarse sobre una base con datos que deban conservarse sin realizar antes un respaldo.

5. Abrir la aplicación:

```text
http://localhost/SIGGAF/public/
```

## Conexión a la base de datos

La conexión se encuentra centralizada en:

```text
app/Configuracion/Conexion.php
```

La configuración inicial está pensada para XAMPP local:

- Host: `localhost`.
- Base: `ganaderia`.
- Usuario: `root`.
- Contraseña: vacía.

No se incluyen claves, tokens ni secretos.

## Git y GitHub

**Git** permite controlar las versiones del proyecto en cada computadora. **GitHub** almacena el repositorio remoto para que ambos integrantes puedan trabajar sobre el mismo proyecto.

### Antes de comenzar una tarea

```bash
git switch main
git pull
```

Crear una rama para el cambio:

```bash
git switch -c feature/nombre-de-la-tarea
```

### Guardar los cambios

```bash
git add .
git commit -m "feat: describir el cambio realizado"
git push -u origin feature/nombre-de-la-tarea
```

Después se crea un **Pull Request** en GitHub para revisar los cambios antes de incorporarlos a `main`.

### Nombres recomendados para ramas

```text
feature/usuarios
feature/potreros
fix/corregir-validacion
```

### Ejemplos de commits

```text
feat: agregar estructura MVC
feat: agregar gestión de potreros
fix: corregir validación de usuario
docs: actualizar README
```

Evitar mensajes poco descriptivos como `cambios`, `prueba`, `final` o `arreglado`.

## Regla de trabajo

No desarrollar directamente sobre `main`. Cada tarea debe realizarse en una rama y luego integrarse mediante Pull Request.

La base de datos se mantiene en un único archivo:

```text
database/ganaderia.sql
```

## Estado

Proyecto académico en desarrollo.
