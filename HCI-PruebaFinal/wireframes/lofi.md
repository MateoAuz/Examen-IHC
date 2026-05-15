# Wireframe Lo-Fi — Usability Test Dashboard 2.0

**Pantalla seleccionada:** Dashboard / Vista Plan Activo  
**Nivel de fidelidad:** Baja — estructura, jerarquía y flujo  
**Herramienta:** HTML/CSS (archivo `lofi.html`)  
**Fecha:** 15/05/2025  
**Estudiante:** [Tu nombre]

---

## Justificación de selección de pantalla

El **Dashboard** es la pantalla más crítica del sistema por tres razones:

1. Es el **primer punto de contacto** después del login — define la primera impresión del sistema.
2. **Concentra las métricas clave** que el evaluador UX necesita para tomar decisiones.
3. Es el **hub de navegación** hacia todas las demás secciones del flujo.

Los problemas heurísticos P-01 (sin stepper de progreso), P-02 (sin feedback al guardar) y P-06 (tab activa poco visible) impactan directamente esta pantalla, justificando su selección para el rediseño.

---

## Estructura del wireframe Lo-Fi

El archivo `lofi.html` muestra la estructura en formato visual con estética de boceto (bordes punteados, fondo oscuro, sin colores de diseño final). Incluye:

```
HEADER
├── Logo
├── Navegación principal
└── Usuario

BREADCRUMB
└── Proyectos › Nombre del Plan › Dashboard

STEPPER (5 pasos)
└── ①Plan — ②Guion — ③Observaciones — ④Hallazgos — ⑤Reportes

MÉTRICAS PRINCIPALES (4 KPIs en grid)
├── Tasa de Éxito
├── Hallazgos totales
├── Tiempo medio por tarea
└── Score UX

ACCIONES RÁPIDAS (5 botones)
└── Plan | Guion | Obs. | Hallaz. | Rep.

FILA INFERIOR (2 columnas)
├── Gráfico distribución UX (barras horizontales)
└── Lista de planes recientes (con estado y acceso directo)

CTA PRINCIPAL
└── [+ Nuevo Plan de Prueba]
```

---

## Principios de diseño aplicados

| Principio | Aplicación en este wireframe |
|-----------|------------------------------|
| **Gestalt — Proximidad** | Los 4 KPIs agrupados en fila forman una unidad semántica de "métricas de esta sesión". El espacio entre grupos delimita las secciones. |
| **Gestalt — Similitud** | Las 5 tarjetas de acción rápida tienen idéntico tamaño y estructura, por lo que el usuario las percibe como un conjunto funcional. |
| **Jerarquía visual** | El flujo vertical va de mayor a menor importancia: Logo → Navegación → Stepper → KPIs → Acciones → Contenido secundario → CTA. |
| **Arquitectura de información** | Navegación principal horizontal (stepper), métricas en grid, contenido contextual al fondo. Reduce la carga cognitiva. |
| **Heurística H6 — Reconocimiento** | El breadcrumb siempre visible elimina la necesidad de que el usuario recuerde en qué parte del sistema está. |
| **Heurística H1 — Visibilidad** | El stepper numérico comunica constantemente el estado del flujo de trabajo. |

---

## Decisiones de layout

- **4 columnas de KPIs:** Suficiente para mostrar las 4 métricas principales sin scroll.
- **Stepper horizontal:** Refleja el flujo natural de izquierda a derecha del proceso de evaluación UX.
- **2 columnas en la fila inferior:** El gráfico de distribución necesita más espacio que la lista de planes.
- **CTA al final:** El botón "Nuevo Plan" está al final para no interferir con el contenido activo.

---

## Archivo de referencia

Ver: `wireframes/lofi.html`
