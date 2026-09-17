---
name: AgroIndustrial Precision
colors:
  surface: '#eefdf1'
  surface-dim: '#cfded2'
  surface-bright: '#eefdf1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e8f7eb'
  surface-container: '#e3f2e5'
  surface-container-high: '#ddece0'
  surface-container-highest: '#d7e6da'
  on-surface: '#121e17'
  on-surface-variant: '#424843'
  inverse-surface: '#26332b'
  inverse-on-surface: '#e6f5e8'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#486554'
  primary: '#072417'
  on-primary: '#ffffff'
  primary-container: '#1e3a2b'
  on-primary-container: '#85a490'
  inverse-primary: '#aeceb9'
  secondary: '#196d24'
  on-secondary: '#ffffff'
  secondary-container: '#a2f79c'
  on-secondary-container: '#21732a'
  tertiary: '#2d1c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#483003'
  on-tertiary-container: '#bb9861'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#caead4'
  primary-fixed-dim: '#aeceb9'
  on-primary-fixed: '#042013'
  on-primary-fixed-variant: '#304d3d'
  secondary-fixed: '#a2f79c'
  secondary-fixed-dim: '#87da83'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005313'
  tertiary-fixed: '#ffdeae'
  tertiary-fixed-dim: '#e7c187'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#5c4214'
  background: '#eefdf1'
  on-background: '#121e17'
  surface-variant: '#d7e6da'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets agricultural producers, agronomists, veterinary managers, and field operators working across Argentine livestock establishments. The aesthetic blends industrial operational efficiency with modern technical software: grounded, dependable, utilitarian, yet refined and contemporary.

Key characteristics:
- **Resilience and Clarity**: Built for demanding work environments, from sunlit livestock corrals on mobile viewports to desktop administrative setups running dense record keeping.
- **Organic Industrialism**: Deep pasture greens paired with warm bone-mineral tones evoke fertile Argentine pastures without falling into rustic or outdated visual tropes.
- **Operational Tactility**: Crisp structural dividers, clear state signaling, and generous touch targets eliminate input friction for field personnel while maintaining density for back-office batch processing.

## Colors

The palette directly references the Argentine countryside, prioritizing legibility, eye comfort during long exposure, and distinct functional states.

### Primary and Accent Roles
- **Primary (`#1E3A2B`)**: Deep olive forest green. Used for authoritative structural chrome, active navigation links, core brand markers, and primary high-priority interactive buttons.
- **Secondary (`#3E8E41`)**: Vibrant foliage green. Delivers high-contrast operational focus, confirmation states, callout indicators, and key progressive actions.
- **Tertiary (`#8C6D3B`)**: Sun-cured earth and leather tone. Applied to secondary operational categories, animal lifecycle warnings, and breed or lot groupings.

### Surfaces and Neutrals
- **Background (`#F7F9F6`)**: Warm pasture tint that diminishes glare compared to stark white.
- **Surface (`#FFFFFF`)**: Pure white base for card containers, data grids, and input elements.
- **Surface Variant (`#EDF2EB`)**: Subdued mineral green for table headers, zebra striping, read-only panels, and sidebar drawers.
- **Outline / Border (`#D1DDD3`)**: Low-contrast architectural line work that structures dense enterprise data without visual noise.

### Status Semantic Tokens
- **Activo / Confirmado**: Text `#1B5E20`, Container `#E8F5E9`, Border `#A5D6A7`.
- **Pendiente**: Text `#8D5B00`, Container `#FFF8E1`, Border `#FFE082`.
- **Inactivo / Neutro**: Text `#475569`, Container `#F1F5F9`, Border `#CBD5E1`.
- **Anulado / Crítico**: Text `#991B1B`, Container `#FEF2F2`, Border `#FCA5A5`.

## Typography

Plus Jakarta Sans provides geometric legibility, balanced proportions, and open counters. This ensures immediate character distinction (e.g., distinguishing '0', 'O', '8', and 'B' in bovine ear-tag IDs, carnet numbers, or SENASA RENSPA codes).

Hierarchy rules:
- **Headlines**: Set at weights 600 and 700 to establish an anchor over dense tables and multi-input forms.
- **Body**: Maintained at weight 400 with a minimum of 14px for general desktop reading, and scaled to 16px on mobile interfaces to facilitate single-handed field input.
- **Labels & Tabular Data**: Set at weights 600 or 700 with tabular figure alignments (`tnum`) activated for numerical comparisons such as animal weights, dosage quantities, and dates.

## Layout & Spacing

The layout employs a responsive 12-column grid optimized for MVC-rendered blade/twig templates and administrative dashboards:

- **Desktop (≥1200px)**: 12 columns, 32px (`2rem`) outer canvas margins, 20px (`1.25rem`) gutters. Accommodates two-to-three column form layouts and dense horizontal data grids.
- **Tablet (768px - 1199px)**: 8 columns, 24px (`1.5rem`) outer margin, 16px (`1rem`) gutters. Tables convert to horizontally scrollable viewports with pinned identification columns.
- **Mobile (<768px)**: 4 columns, 16px (`1rem`) margins, 12px (`0.75rem`) gutters. Complex multi-column records fold into vertical card sequences designed for one-handed thumb interaction.
- **Rhythm**: All paddings and internal component clearances adhere to an 8px base scale (with 4px for micro-adjustments on compact labels and badges).

## Elevation & Depth

This system avoids heavy drop shadows and decorative blurs in favor of structural clarity:

- **Surface Tiers**: Base application runs on `#F7F9F6`. Elevated cards, sidebars, and data viewports sit on `#FFFFFF` bordered with `#D1DDD3`.
- **Borders over Shadows**: Spatial hierarchy is achieved through crisp 1px borders (`#D1DDD3`) rather than elevation, preserving contrast on anti-glare mobile screens outdoors.
- **Functional Shadows**: Soft, low-diffusion ambient shadows are reserved for floating overlays (modals, dropdown menus, filter trays): `0px 4px 16px -2px rgba(30, 58, 43, 0.08)`.
- **Focus & Interaction**: Hovered or focused interactive targets gain a 1px border shift to `#1E3A2B` accompanied by an external 3px focus ring tinted in secondary green (`rgba(62, 142, 65, 0.25)`).

## Shapes

The design uses a soft architectural corner radius (`roundedness: 1` — 4px base radius):
- **Inputs, Buttons, and Badges**: 4px border radius. Delivers a clean, industrial contour that feels sturdy and aligned to enterprise database structures.
- **Cards and Containers**: 8px (`rounded-lg`) border radius to softly frame discrete functional blocks.
- **Modals and Drawers**: 12px (`rounded-xl`) border radius to gently elevate context shifts.
- **Full Pill Exclusions**: Status badges may utilize a 9999px pill format strictly when conveying atomic metadata status to contrast against rectangular data fields.

## Components

### Buttons
- **Primary**: Background `#1E3A2B`, text `#FFFFFF`, hover `#2C5E43`, active `#162C20`. Minimum height of 40px on desktop and 48px on mobile for gloved or field-hand tap targets.
- **Secondary**: Background transparent, 1.5px border `#1E3A2B`, text `#1E3A2B`, hover background `#EDF2EB`.
- **Progressive / Success**: Background `#3E8E41`, text `#FFFFFF`, hover `#347737`.
- **Destructive**: Background `#FEF2F2`, border 1px `#FCA5A5`, text `#991B1B`, hover background `#FEE2E2`.

### Input Fields & Selects (PHP MVC Form Architecture)
- **Container**: Stacked layout with a persistent, high-contrast label (`#1E3A2B`, `label-md`) above the control.
- **Field Box**: Background `#FFFFFF`, 1px solid `#D1DDD3`, height 42px (desktop) / 48px (mobile), padding horizontal `12px`.
- **Validation**: Error inputs switch to a 1.5px border of `#DC2626` with immediate microcopy below the field in 12px bold.
- **Help Text**: Placed below the input in `#6C7A70` (`body-sm`) to guide precise field entries (e.g., "Formato caravana: AR-0123456").

### Data Grids & Tables
- **Header**: Background `#EDF2EB`, border-bottom 2px `#D1DDD3`, text `#1E3A2B`, uppercase `label-xs`, tracking +0.05em.
- **Row**: Height 48px for normal density, alternating background `#FFFFFF` and `#FBFDFB`. Border-bottom 1px `#D1DDD3`.
- **Interactive Rows**: Hover background `#F0F4EE` with cursor pointer for drill-down master-detail views.

### Status Badges
- **Tokens**: Compact inline component, height 24px, padding 2px 8px, uppercase font weight 700 (`label-sm`).
- **Activo / Confirmado**: `#E8F5E9` background, `#1B5E20` text, 1px `#A5D6A7` border.
- **Inactivo / Anulado**: `#FEF2F2` background, `#991B1B` text, 1px `#FCA5A5` border.
- **Pendiente**: `#FFF8E1` background, `#8D5B00` text, 1px `#FFE082` border.

### Checkboxes & Radio Buttons
- Box dimensions: 20px x 20px on desktop, expanded to a 44px tap zone on mobile.
- Selected state: `#1E3A2B` fill with a sharp white checkmark or center pip. Border `#1E3A2B`.

### Cards & Record Panels
- Background `#FFFFFF`, 1px border `#D1DDD3`, padding 16px or 24px.
- Distinct card header featuring a 1px border-bottom `#EDF2EB` and action slots for bulk operations or record exports.
