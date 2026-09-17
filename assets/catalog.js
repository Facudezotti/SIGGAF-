const screens = [
  {
    title: "Inicio y tablero principal",
    description: "Resumen operativo del establecimiento, alertas y accesos frecuentes.",
    category: "desktop",
    href: "inicio_dashboard_principal_siggaf_dise_o_mejorado/code.html",
    image: "inicio_dashboard_principal_siggaf_dise_o_mejorado/screen.png"
  },
  {
    title: "Listado de animales",
    description: "Consulta de hacienda y acceso a la ficha individual de cada animal.",
    category: "desktop",
    href: "animales_listado_y_ficha_de_hacienda/code.html"
  },
  {
    title: "Ficha y registro de animal",
    description: "Identificación, trazabilidad, sanidad y datos productivos del animal.",
    category: "desktop",
    href: "animales_ficha_de_detalle_y_registro_siggaf/code.html",
    image: "animales_ficha_de_detalle_y_registro_siggaf/screen.png"
  },
  {
    title: "Potreros y recursos",
    description: "Vista general de potreros, ocupación, agua y recursos disponibles.",
    category: "desktop",
    href: "potreros_y_recursos_siggaf/code.html"
  },
  {
    title: "Ficha de potrero",
    description: "Detalle de superficie, hacienda, pasturas, aguadas e historial.",
    category: "desktop",
    href: "potreros_ficha_y_recursos_del_potrero_siggaf/code.html",
    image: "potreros_ficha_y_recursos_del_potrero_siggaf/screen.png"
  },
  {
    title: "Lotes y trazabilidad",
    description: "Seguimiento de lotes, movimientos y documentación asociada.",
    category: "desktop",
    href: "lotes_y_movimientos_ficha_y_trazabilidad_siggaf/code.html",
    image: "lotes_y_movimientos_ficha_y_trazabilidad_siggaf/screen.png"
  },
  {
    title: "Movimientos de hacienda",
    description: "Registro simple de traslados, pesajes, ingresos y salidas.",
    category: "desktop",
    href: "movimientos_y_lotes_siggaf_f_cil_campo/code.html",
    image: "movimientos_y_lotes_siggaf_f_cil_campo/screen.png"
  },
  {
    title: "Usuarios y permisos",
    description: "Listado de personas, roles y estado de acceso al sistema.",
    category: "desktop",
    href: "usuarios_y_permisos_siggaf_f_cil_campo/code.html"
  },
  {
    title: "Alta y edición de personal",
    description: "Formulario completo para gestionar personal de campo y permisos.",
    category: "desktop",
    href: "usuarios_y_permisos_alta_y_edici_n_siggaf/code.html",
    featured: true
  },
  {
    title: "Datos del establecimiento",
    description: "Información general, ubicación y datos administrativos del campo.",
    category: "desktop",
    href: "establecimiento_datos_del_campo_siggaf/code.html",
    image: "establecimiento_datos_del_campo_siggaf/screen.png"
  },
  {
    title: "Configuración del sistema",
    description: "Preferencias operativas, sincronización y parámetros del establecimiento.",
    category: "desktop",
    href: "configuraci_n_siggaf_f_cil_campo/code.html",
    image: "configuraci_n_siggaf_f_cil_campo/screen.png"
  },
  {
    title: "Tablero móvil",
    description: "Resumen compacto para consultar la operación desde el teléfono.",
    category: "mobile",
    href: "dashboard_m_vil_siggaf_redise_o_nativo/code.html",
    image: "dashboard_m_vil_siggaf_redise_o_nativo/screen.png"
  },
  {
    title: "Carga en manga",
    description: "Flujo móvil de identificación, pesaje y registro junto a la hacienda.",
    category: "mobile",
    href: "carga_en_manga_siggaf_redise_o_m_vil/code.html",
    image: "carga_en_manga_siggaf_redise_o_m_vil/screen.png"
  },
  {
    title: "Configuración móvil",
    description: "Ajustes esenciales optimizados para pantallas pequeñas y uso en campo.",
    category: "mobile",
    href: "configuraci_n_m_vil_siggaf_redise_o/code.html",
    image: "configuraci_n_m_vil_siggaf_redise_o/screen.png"
  },
  {
    title: "Ayuda móvil",
    description: "Guía rápida de tareas frecuentes y soporte dentro de la aplicación.",
    category: "mobile",
    href: "gu_a_de_uso_f_cil_siggaf/code.html",
    image: "gu_a_de_uso_f_cil_siggaf/screen.png"
  },
  {
    title: "Ingreso al sistema",
    description: "Pantalla de autenticación principal para acceder a SIGGAF.",
    category: "access",
    href: "iniciar_sesi_n_siggaf/code.html"
  },
  {
    title: "Ingreso fácil",
    description: "Variante simplificada de acceso, pensada para el trabajo de campo.",
    category: "access",
    href: "iniciar_sesi_n_siggaf_f_cil_acceso/code.html"
  },
  {
    title: "Guía para computadora",
    description: "Recorrido de las funciones principales para campo y oficina.",
    category: "access",
    href: "gu_a_de_uso_f_cil_para_computadora_siggaf/code.html"
  },
  {
    title: "Guía fácil para gente de campo",
    description: "Instrucciones directas, visuales y orientadas a tareas cotidianas.",
    category: "access",
    href: "gu_a_de_uso_f_cil_para_la_gente_de_campo_siggaf/code.html",
    image: "gu_a_de_uso_f_cil_para_la_gente_de_campo_siggaf/screen.png"
  },
  {
    title: "Identidad de SIGGAF",
    description: "Construcción visual y aplicación principal del logotipo.",
    category: "brand",
    href: "logo_siggaf/code.html",
    image: "logo_siggaf/screen.png"
  }
];

const categoryLabels = {
  desktop: "Gestión de escritorio",
  mobile: "Operación móvil",
  access: "Acceso y ayuda",
  brand: "Marca"
};

const categoryDevice = {
  desktop: "Escritorio",
  mobile: "Móvil",
  access: "Acceso",
  brand: "Recurso"
};

const grid = document.querySelector("#catalog-grid");
const search = document.querySelector("#search");
const emptyState = document.querySelector("#empty-state");
const filters = [...document.querySelectorAll(".filter")];
let activeFilter = "all";

document.querySelector("#screen-count").textContent = screens.length;

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function createCard(screen) {
  const card = document.createElement("article");
  card.className = "card";

  const preview = screen.image
    ? `<a class="card-preview" href="${screen.href}" aria-label="Abrir ${screen.title}">
         <img src="${screen.image}" alt="Vista previa de ${screen.title}" loading="lazy">
         <span class="device-tag">${categoryDevice[screen.category]}</span>
       </a>`
    : `<a class="card-preview is-placeholder" href="${screen.href}" aria-label="Abrir ${screen.title}">
         <span class="placeholder-mark" aria-hidden="true">S</span>
         <span class="device-tag">${categoryDevice[screen.category]}</span>
       </a>`;

  card.innerHTML = `${preview}
    <div class="card-body">
      <p class="card-category">${categoryLabels[screen.category]}${screen.featured ? " · Destacada" : ""}</p>
      <h3>${screen.title}</h3>
      <p class="card-description">${screen.description}</p>
      <a class="card-link" href="${screen.href}">Abrir prototipo</a>
    </div>`;

  return card;
}

function render() {
  const term = normalizeText(search.value.trim());
  const visibleScreens = screens.filter((screen) => {
    const matchesFilter = activeFilter === "all" || screen.category === activeFilter;
    const searchable = normalizeText(`${screen.title} ${screen.description} ${categoryLabels[screen.category]}`);
    return matchesFilter && searchable.includes(term);
  });

  grid.replaceChildren(...visibleScreens.map(createCard));
  emptyState.hidden = visibleScreens.length !== 0;
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  });
});

search.addEventListener("input", render);
render();
