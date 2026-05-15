# Wireframe Mid-Fi — Usability Test Dashboard 2.0

**Pantalla:** Dashboard / Vista Plan Activo  
**Nivel de fidelidad:** Media — espaciado, colores base, tipografía, componentes  
**Herramienta:** HTML/CSS (archivo `midfi.html`)  
**Fecha:** 15/05/2025  
**Estudiante:** [Tu nombre]

---

## Sistema de diseño definido

### Paleta de colores

| Token | Hex | Uso |
|-------|-----|-----|
| `--navy` | `#003366` | Color primario — botones, énfasis, stepper activo |
| `--slate-50` | `#F8FAFC` | Fondo general de la app |
| `--white` | `#FFFFFF` | Superficie de tarjetas y panels |
| `--green-500` | `#22C55E` | KPI de éxito, pasos completados, badges positivos |
| `--amber-500` | `#F59E0B` | Alertas, tiempo, estados intermedios |
| `--red-500` | `#EF4444` | Hallazgos críticos, errores, badges de alerta |
| `--blue-600` | `#2563EB` | Estados "Completado", badges informativos |
| `--slate-700` | `#334155` | Texto principal |
| `--slate-500` | `#64748B` | Texto secundario |
| `--slate-400` | `#94A3B8` | Texto de placeholder y metadata |

### Tipografía

| Uso | Fuente | Tamaño | Peso |
|-----|--------|--------|------|
| Nombre de plan (H1) | IBM Plex Sans | 20px | 800 |
| Valor KPI | IBM Plex Sans | 26px | 700 |
| Label KPI | IBM Plex Sans | 11px | 500 |
| Título de sección | IBM Plex Sans | 12px | 700 |
| Cuerpo general | IBM Plex Sans | 12px | 400 |
| Caption / metadata | IBM Plex Sans | 10px | 400 |
| Etiquetas de stepper | IBM Plex Sans | 10px | 500–700 |

### Espaciado y geometría

- **Grid base:** 8px
- **Padding de tarjetas:** 16px interno
- **Gap entre tarjetas KPI:** 12px
- **Padding horizontal de pantalla:** 24px
- **Border radius tarjetas:** 10px
- **Border radius chips/badges:** 20px
- **Border radius botones:** 8px
- **Altura del header:** 60px
- **Altura del breadcrumb:** 36px

---

## Componentes especificados

### Stepper de progreso (corrige P-01)

- **5 pasos:** Plan → Guion → Observaciones → Hallazgos → Reportes
- **Estado completado:** círculo verde (`#22C55E`) con ✓, label verde
- **Estado activo:** círculo navy (`#003366`), sombra `ring-2`, `scale(1.1)`, label bold navy
- **Estado pendiente:** círculo blanco con borde gris, label gris 
- **Conector:** línea de 2px, verde para segmentos completados, gris para pendientes
- **Ancho máximo:** 600px centrado

### Toast de confirmación (corrige P-02)

- **Posición:** `fixed` bottom-right, `z-index: 9999`
- **Ancho:** máximo 300px
- **Estructura:** ícono ✓ + mensaje + botón cerrar × + barra de progreso inferior
- **Borde izquierdo:** 4px solid `#22C55E` (éxito) o `#EF4444` (error)
- **Auto-dismiss:** 3 segundos con barra de progreso animada
- **Sombra:** `box-shadow: 0 4px 16px rgba(0,0,0,0.1)`
- **Animación entrada:** slide-in desde derecha

### Tarjetas KPI

- **Stripe de color:** barra de 3px en la parte superior con color semántico
- **Ícono:** 32×32px en recuadro de color suave (mismo tono del stripe)
- **Badge de estado:** chip pequeño en esquina superior derecha
- **Número principal:** 26px bold, letra oscura
- **Footer con metadata:** separado por borde superior gris claro

### Breadcrumb (corrige P-04)

- Cada nivel es un link clickeable excepto el nivel activo
- Separador `›` en gris claro
- Nivel activo: texto gris, sin subrayado
- Niveles anteriores: texto navy, hover con fondo azul claro
- Altura fija 36px, nunca colapsa

---

## Anotaciones de diseño

| Problema (Eval. Heurística) | Solución en Mid-Fi |
|-----------------------------|--------------------|
| P-01 — Sin indicador de progreso | Stepper de 5 pasos con estados visuales diferenciados |
| P-02 — Sin feedback al guardar | Toast de confirmación con barra de progreso de 3s |
| P-04 — Breadcrumb no siempre visible | Breadcrumb fijo en barra dedicada, nunca oculto |
| P-06 — Tab activa poco visible | La acción activa en el stepper tiene navy + ring + scale |

---

## Archivo de referencia

Ver: `wireframes/midfi.html`
