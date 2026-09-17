# SIGGAF · Prototipos de interfaz

Repositorio visual del **Sistema Inteligente de Gestión Ganadera Argentina (SIGGAF)**. Reúne prototipos HTML navegables para escritorio y móvil, sus capturas de referencia y la documentación funcional del proyecto.

## Ver el catálogo

La entrada principal es [`index.html`](./index.html), una galería que organiza todas las pantallas por área y permite abrir cada prototipo.

Para verlo localmente:

```bash
python -m http.server 8080
```

Luego abrir `http://localhost:8080` en el navegador. También es posible abrir `index.html` directamente, aunque un servidor local reproduce mejor el comportamiento esperado.

## Pantalla destacada

El flujo de alta y edición de personal se encuentra en:

[`usuarios_y_permisos_alta_y_edici_n_siggaf/code.html`](./usuarios_y_permisos_alta_y_edici_n_siggaf/code.html)

Incluye datos del personal, asignación de rol, estado del usuario, credenciales e interacciones de edición y guardado.

## Organización

```text
.
├── index.html                          # Catálogo navegable
├── assets/                             # Estilos y lógica del catálogo
├── agroindustrial_precision/           # Guía visual / sistema de diseño
├── <nombre_de_pantalla>/
│   ├── code.html                       # Prototipo ejecutable
│   └── screen.png                      # Captura, cuando está disponible
└── estructura_de_exportaci_n_php_mvc_siggaf.md
```

Los nombres originales de las exportaciones se conservan para mantener su trazabilidad. La portada presenta títulos legibles y agrupa los contenidos en:

- Gestión de escritorio
- Operación móvil
- Acceso y ayuda
- Recursos de marca

## Consideraciones técnicas

- Los prototipos son HTML estáticos e independientes.
- Varias pantallas cargan Tailwind CSS, Google Fonts y recursos visuales externos mediante CDN; necesitan conexión a internet para mostrarse exactamente como fueron diseñadas.
- `code.html` es la fuente principal de cada pantalla. Algunas exportaciones no generaron una captura válida, pero el prototipo HTML sigue disponible desde el catálogo.
- La documentación `estructura_de_exportaci_n_php_mvc_siggaf.md` describe una posible evolución hacia una aplicación PHP con arquitectura MVC.
