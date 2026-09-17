# SIGGAF — Sistema Inteligente de Gestión Ganadera Argentina
## Especificación de Arquitectura de Frontend & Plantillas PHP MVC

Este documento organiza y estructura todas las pantallas, vistas y componentes diseñados para **SIGGAF**, listos para su integración en un entorno **PHP Nativo con arquitectura MVC** (Model-View-Controller) y base de datos MySQL/MariaDB.

---

### 1. Estructura de Directorios del Proyecto (PHP MVC)

```text
siggaf/
├── app/
│   ├── config/
│   │   ├── config.php              # Constantes globales, rutas y entorno
│   │   └── database.php            # Conexión PDO MySQL/MariaDB
│   ├── controllers/
│   │   ├── AuthController.php      # Login, Logout y recuperación criolla por preguntas
│   │   ├── DashboardController.php # Inicio / Resumen general del campo
│   │   ├── AnimalController.php    # Listado, Ficha, Caravanas y Pesajes
│   │   ├── PotreroController.php   # Listado, Mensura y Recursos (Aguadas/Molinos/Mangas)
│   │   ├── LoteController.php      # Lotes, Asignación de animales, Apertura/Cierre
│   │   ├── MovimientoController.php# Registro de movimientos, Anulación con trazabilidad
│   │   ├── UsuarioController.php   # Alta/Edición Dueño/Peón, Permisos, Claves
│   │   ├── EstablecimientoController.php # Datos del campo y mensura
│   │   ├── ConfiguracionController.php   # Logo del establecimiento e imagen de fondo
│   │   └── GuiaController.php      # Guía didáctica para peones y gente de campo
│   ├── models/
│   │   ├── Usuario.php
│   │   ├── Establecimiento.php
│   │   ├── Potrero.php
│   │   ├── RecursoPotrero.php
│   │   ├── Animal.php
│   │   ├── CaravanaHistorial.php
│   │   ├── Pesaje.php
│   │   ├── Lote.php
│   │   ├── Movimiento.php
│   │   └── ConfiguracionVisual.php
│   └── views/
│       ├── layouts/
│       │   ├── header.php          # Barra superior, logo, usuario, badge de sincronización local
│       │   ├── footer.php          # Pie de página y scripts base
│       │   ├── nav.php             # Menú principal (Inicio, Usuarios, Establecimiento, Potreros, Animales, Lotes, Movimientos, Configuración, Guía)
│       │   └── alert.php           # Mensajes de confirmación y validaciones
│       ├── auth/
│       │   ├── login.php           # Pantalla de acceso simple con teclado numérico/touch
│       │   └── recuperar.php       # Recuperación autónoma por preguntas criollas (sin email)
│       ├── dashboard/
│       │   └── index.php           # Métricas directas, tarjetas grandes y accesos rápidos
│       ├── animales/
│       │   ├── index.php           # Listado de hacienda con buscador de caravana
│       │   ├── crear.php           # Formulario de alta de animal
│       │   ├── editar.php          # Edición de datos generales
│       │   ├── ver.php             # Ficha de detalle: Historial de caravanas + Tabla de pesajes
│       │   └── pesaje_modal.php    # Registro directo de pesaje en manga
│       ├── potreros/
│       │   ├── index.php           # Listado con estados (En pastoreo, Descanso, Siembra)
│       │   ├── crear.php           # Formulario de potrero (código, nombre, superficie ha, largo, ancho)
│       │   ├── ver.php             # Detalle, densidad de cabezas y recursos asociados
│       │   └── recurso_modal.php   # Asignar/editar bebedero, comedero, molino, manga
│       ├── lotes/
│       │   ├── index.php           # Listado de lotes abiertos y cerrados
│       │   ├── crear.php           # Alta de lote (nombre, fechas, objetivos)
│       │   └── ver.php             # Hacienda activa en lote y rendimiento
│       ├── movimientos/
│       │   ├── index.php           # Historial con estados (Pendiente, Confirmado, Anulado)
│       │   ├── crear.php           # Formulario de traslado/pesaje de lote o animal
│       │   └── anular_modal.php    # Registro obligatorio de motivo de anulación y usuario
│       ├── usuarios/
│       │   ├── index.php           # Nómina de personal (Dueño / Peón)
│       │   ├── crear.php           # Alta con CUIL, domicilio, teléfono, rol y pregunta criolla
│       │   └── permisos.php        # Matriz simplificada de permisos por rol/usuario
│       ├── establecimiento/
│       │   └── index.php           # Datos del predio (nombre, hectáreas, localidad, provincia)
│       ├── configuracion/
│       │   └── index.php           # Carga de logo del dueño e imagen de fondo
│       └── guia/
│           ├── index.php           # Guía interactiva de 4 tareas de campo y modo práctica
│           └── mobile.php          # Versión vertical compacta para celular de manga
├── public/
│   ├── index.php                   # Front Controller (Enrutador)
│   ├── .htaccess                   # Reescritura de URLs limpias
│   ├── css/
│   │   ├── main.css                # Estilos base con tokens AgroIndustrial Precision
│   │   └── responsive.css          # Ajustes móviles para manga y trabajo a caballo
│   ├── js/
│   │   ├── app.js                  # Manejo de modales, alertas y confirmaciones
│   │   └── offline-sync.js         # Persistencia local para trabajo sin internet
│   └── uploads/
│       ├── logo/                   # Logo personalizado del establecimiento
│       └── fondos/                 # Imagen de portada o fondo rural
└── database/
    ├── schema.sql                  # Estructura DDL de tablas y claves foráneas
    └── seeds.sql                   # Datos de prueba iniciales (La Querencia)
```

---

### 2. Mapeo de Pantallas Diseñadas a Archivos de Vista PHP

| Módulo en SIGGAF | Archivo de Vista PHP | Pantalla Diseñada en el Canvas | Dispositivo |
| :--- | :--- | :--- | :--- |
| **Login / Acceso** | `app/views/auth/login.php` | `{{DATA:SCREEN:SCREEN_33}}` | Desktop / Tablet |
| **Dashboard / Inicio** | `app/views/dashboard/index.php` | `{{DATA:SCREEN:SCREEN_10}}` | Desktop |
| **Dashboard Celular** | `app/views/dashboard/index.php` (responsive) | `{{DATA:SCREEN:SCREEN_17}}` | Mobile |
| **Animales (Listado y Ficha)** | `app/views/animales/ver.php` | `{{DATA:SCREEN:SCREEN_9}}` / `{{DATA:SCREEN:SCREEN_31}}` | Desktop |
| **Carga en Manga Móvil** | `app/views/animales/crear.php` (responsive) | `{{DATA:SCREEN:SCREEN_15}}` / `{{DATA:SCREEN:SCREEN_20}}` | Mobile |
| **Potreros y Recursos** | `app/views/potreros/ver.php` | `{{DATA:SCREEN:SCREEN_8}}` / `{{DATA:SCREEN:SCREEN_30}}` | Desktop |
| **Lotes y Trazabilidad** | `app/views/lotes/ver.php` + `movimientos/` | `{{DATA:SCREEN:SCREEN_7}}` / `{{DATA:SCREEN:SCREEN_28}}` | Desktop |
| **Usuarios y Roles** | `app/views/usuarios/crear.php` | `{{DATA:SCREEN:SCREEN_5}}` / `{{DATA:SCREEN:SCREEN_27}}` | Desktop |
| **Establecimiento** | `app/views/establecimiento/index.php`| `{{DATA:SCREEN:SCREEN_26}}` | Desktop |
| **Configuración Visual (Logo)**| `app/views/configuracion/index.php`| `{{DATA:SCREEN:SCREEN_24}}` / `{{DATA:SCREEN:SCREEN_16}}` | Desktop & Mobile |
| **Guía de Uso Didáctica** | `app/views/guia/index.php` | `{{DATA:SCREEN:SCREEN_3}}` / `{{DATA:SCREEN:SCREEN_13}}` | Desktop & Mobile |

---

### 3. Diccionario de Datos para Base de Datos MySQL/MariaDB

#### A. Tabla `usuarios`
- `id` INT AUTO_INCREMENT PRIMARY KEY
- `cuil` VARCHAR(13) NOT NULL UNIQUE
- `nombre` VARCHAR(60) NOT NULL
- `apellido` VARCHAR(60) NOT NULL
- `telefono` VARCHAR(30)
- `email` VARCHAR(100) NULL
- `barrio` VARCHAR(60)
- `calle` VARCHAR(80)
- `numero` VARCHAR(20)
- `localidad` VARCHAR(80)
- `provincia` VARCHAR(60)
- `username` VARCHAR(40) NOT NULL UNIQUE
- `password_hash` VARCHAR(255) NOT NULL
- `estado` ENUM('Activo', 'Inactivo') DEFAULT 'Activo'
- `rol` ENUM('Dueño', 'Peón') NOT NULL
- `pregunta_seguridad` VARCHAR(200) NOT NULL
- `respuesta_seguridad_hash` VARCHAR(255) NOT NULL

#### B. Tabla `establecimiento`
- `id` INT AUTO_INCREMENT PRIMARY KEY
- `nombre` VARCHAR(100) NOT NULL
- `descripcion` TEXT
- `localidad` VARCHAR(80)
- `provincia` VARCHAR(60)
- `superficie_ha` DECIMAL(10,2) NOT NULL
- `observaciones` TEXT

#### C. Tabla `configuracion_visual`
- `id` INT AUTO_INCREMENT PRIMARY KEY
- `logo_url` VARCHAR(255)
- `imagen_fondo_url` VARCHAR(255)
- `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

#### D. Tabla `potreros`
- `id` INT AUTO_INCREMENT PRIMARY KEY
- `codigo` VARCHAR(20) NOT NULL UNIQUE
- `nombre` VARCHAR(80) NOT NULL
- `superficie_ha` DECIMAL(8,2) NOT NULL
- `descripcion` TEXT
- `largo_m` DECIMAL(8,2)
- `ancho_m` DECIMAL(8,2)

#### E. Tabla `recursos_potrero`
- `id` INT AUTO_INCREMENT PRIMARY KEY
- `potrero_id` INT NOT NULL, FOREIGN KEY (`potrero_id`) REFERENCES `potreros`(`id`) ON DELETE CASCADE
- `tipo_recurso` ENUM('Bebedero', 'Comedero', 'Molino', 'Manga') NOT NULL
- `descripcion` VARCHAR(150) NOT NULL
- `disponible` TINYINT(1) DEFAULT 1
- `observacion` TEXT

#### F. Tabla `animales`
- `id` INT AUTO_INCREMENT PRIMARY KEY
- `nombre` VARCHAR(60)
- `sexo` ENUM('macho', 'hembra') NOT NULL
- `fecha_nacimiento` DATE
- `categoria` ENUM('Ternero', 'Ternera', 'Vaquillona', 'Vaca', 'Novillo', 'Toro') NOT NULL
- `estado` ENUM('Activo', 'Vendido', 'Baja', 'Trasladado') DEFAULT 'Activo'
- `madre` VARCHAR(60) NULL
- `padre` VARCHAR(60) NULL
- `observaciones` TEXT

#### G. Tabla `historial_caravanas`
- `id` INT AUTO_INCREMENT PRIMARY KEY
- `animal_id` INT NOT NULL, FOREIGN KEY (`animal_id`) REFERENCES `animales`(`id`)
- `codigo_caravana` VARCHAR(40) NOT NULL
- `fecha_desde` DATE NOT NULL
- `fecha_hasta` DATE NULL
- `motivo_cambio` VARCHAR(200)

#### H. Tabla `pesajes`
- `id` INT AUTO_INCREMENT PRIMARY KEY
- `animal_id` INT NOT NULL, FOREIGN KEY (`animal_id`) REFERENCES `animales`(`id`)
- `fecha_pesaje` DATE NOT NULL
- `peso_kg` DECIMAL(6,2) NOT NULL
- `observaciones` TEXT

#### I. Tabla `lotes`
- `id` INT AUTO_INCREMENT PRIMARY KEY
- `nombre` VARCHAR(80) NOT NULL
- `descripcion` TEXT
- `fecha_creacion` DATE NOT NULL
- `fecha_cierre` DATE NULL
- `estado` ENUM('abierto', 'cerrado') DEFAULT 'abierto'

#### J. Tabla `animal_lote`
- `id` INT AUTO_INCREMENT PRIMARY KEY
- `animal_id` INT NOT NULL, FOREIGN KEY (`animal_id`) REFERENCES `animales`(`id`)
- `lote_id` INT NOT NULL, FOREIGN KEY (`lote_id`) REFERENCES `lotes`(`id`)
- `fecha_desde` DATE NOT NULL
- `fecha_hasta` DATE NULL

#### K. Tabla `movimientos`
- `id` INT AUTO_INCREMENT PRIMARY KEY
- `fecha_movimiento` DATETIME NOT NULL
- `tipo_movimiento` VARCHAR(60) NOT NULL
- `estado` ENUM('Pendiente', 'Confirmado', 'Anulado') DEFAULT 'Confirmado'
- `usuario_id` INT NOT NULL, FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`)
- `observaciones` TEXT
- `fecha_anulacion` DATETIME NULL
- `usuario_anulo_id` INT NULL, FOREIGN KEY (`usuario_anulo_id`) REFERENCES `usuarios`(`id`)
- `motivo_anulacion` TEXT NULL

#### L. Tabla `movimiento_animales`
- `id` INT AUTO_INCREMENT PRIMARY KEY
- `movimiento_id` INT NOT NULL, FOREIGN KEY (`movimiento_id`) REFERENCES `movimientos`(`id`)
- `animal_id` INT NOT NULL, FOREIGN KEY (`animal_id`) REFERENCES `animales`(`id`)

---

### 4. Reglas Críticas del Sistema Aplicadas al Frontend

1. **Autonomía Total (Sin soporte técnico ni mesa de ayuda):** Cero botones, enlaces o textos que remitan a técnicos externos. Todo se autogestiona en el establecimiento.
2. **Roles Exclusivos:** Únicamente **Dueño** y **Peón**. Sin veterinarios, compradores ni administradores.
3. **Recuperación por Pregunta Criolla:** Se omite todo flujo de recuperación por correo electrónico. Se valida directamente en pantalla mediante la pregunta y respuesta de seguridad local.
4. **Respaldo y Sincronización Local:** Todas las vistas contemplan el guardado en la red interna del casco o tablet, sin requerir internet satelital continuo para operar en la manga.
5. **Lenguaje y Ergonomía:** Tipografía de alto contraste (Plus Jakarta Sans), paleta agro-industrial descansada para la vista (#1e3a2b) y botones amplios aptos para dedos enguantados en balanza.
