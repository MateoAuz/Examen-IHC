# Wireframe Hi-Fi — Usability Test Dashboard 2.0

**Pantalla:** Dashboard / Vista Plan Activo  
**Nivel de fidelidad:** Alta — diseño final con todos los detalles visuales  
**Herramienta:** HTML/CSS (archivo `hifi.html`)  
**Fecha:** 15/05/2025  
**Estudiante:** Mateo Auz

---

## Descripción del diseño final

El wireframe Hi-Fi representa el diseño final del Dashboard rediseñado, listo para ser implementado como referencia de desarrollo. Incorpora todas las decisiones tomadas en Lo-Fi y Mid-Fi, más los detalles de interacción, estados de hover, animaciones y microinteracciones.

---

## Leyes de Gestalt aplicadas

### 1. Proximidad
Los 4 KPIs están organizados en una fila horizontal continua con 12px de gap entre tarjetas, y 22px de separación respecto a las acciones rápidas. Esta distancia diferenciada comunica visualmente que "estas 4 cosas pertenecen juntas" y "este otro grupo tiene una función diferente", sin necesidad de separadores o líneas explícitas.

### 2. Similitud
Las 5 tarjetas de acción rápida tienen idéntico tamaño (200px altura), border-radius (12px), estructura interna (ícono 38×38 + label + descripción) y comportamiento de hover. El usuario las percibe como un menú de navegación coherente, no como elementos dispersos.

### 3. Figura-fondo
Las tarjetas blancas (`#FFFFFF`) sobre el fondo slate (`#F1F5F9`) crean una jerarquía de profundidad natural. El contenido "flota" sobre el fondo, reduciendo el ruido visual y enfocando la atención en la información, no en la interfaz.

### 4. Continuidad
Las líneas conectoras del stepper (horizontales, con color semántico verde/gris) dirigen el ojo de izquierda a derecha, replicando el flujo mental del evaluador: primero planifica, luego ejecuta, luego analiza, luego reporta.

### 5. Cierre
Las tarjetas KPI tienen una barra de color en la parte superior (3px) que el cerebro percibe como "borde superior del rectángulo", aunque el resto del borde sea muy sutil. Esto crea contenedores claros con mínimo peso visual.

---

## Jerarquía visual implementada

```
NIVEL 1 — ORIENTACIÓN (64px height)
  Header: Logo + Nombre del proyecto + Avatar usuario
  → El usuario sabe QUÉ sistema es y QUIÉN está usando

NIVEL 2 — UBICACIÓN (38px height)
  Breadcrumb: Proyectos › Nombre del Plan › Sección actual
  → El usuario sabe DÓNDE está dentro del sistema

NIVEL 3 — ESTADO DEL FLUJO (60px height)
  Stepper: 5 pasos con estados completado/activo/pendiente
  → El usuario sabe EN QUÉ PASO está y cuánto falta

NIVEL 4 — MÉTRICAS (120px height por tarjeta)
  4 KPIs: Tasa Éxito, Hallazgos, Tiempo, Score UX
  → El usuario ve el ESTADO DE SU TRABAJO de un vistazo

NIVEL 5 — NAVEGACIÓN CONTEXTUAL (80px height)
  5 acciones rápidas con ícono + label + descripción
  → El usuario sabe QUÉ PUEDE HACER desde aquí

NIVEL 6 — DETALLE E HISTORIAL (variable)
  Gráfico distribución + Lista de planes recientes
  → Información SECUNDARIA disponible sin scroll excesivo

NIVEL 7 — ACCIÓN PRIMARIA
  Botón "Nuevo Plan" + Toast de confirmación
  → Acción de CREACIÓN y FEEDBACK de operaciones
```

---

## Prevención de errores (H5)

| Mecanismo | Implementación |
|-----------|----------------|
| Botón guardar deshabilitado | Gris `#CBD5E1` cuando `saveStatus === 'idle'` y no hay cambios |
| Modal de eliminación | Lista los datos que se perderán antes de confirmar |
| Toast de error | Borde rojo, ícono ✗, mensaje descriptivo, duración 5s |
| Stepper bloqueado | Si el plan no tiene nombre, no se puede avanzar al paso 2 |
| Validación inline | Campos con error muestran borde rojo + mensaje bajo el campo |

---

## Diseño emocional (Norman)

### Nivel visceral — Primera impresión
- Hover en tarjetas: `translateY(-2px)` + sombra aumentada — las tarjetas "se levantan" al acercar el cursor
- Colores semánticos inmediatos: el usuario siente si el resultado es bueno (verde) o preocupante (rojo) antes de leer el número
- Stepper con `transform: scale(1.15)` en el paso activo — el paso actual "llama la atención" de forma natural

### Nivel conductual — Uso eficiente
- Toast de confirmación aparece en < 100ms tras guardar — el sistema responde instantáneamente
- Breadcrumb siempre visible — nunca hay desorientación
- Acciones rápidas con descripción debajo del label — el usuario nunca duda sobre qué hace cada botón

### Nivel reflexivo — Satisfacción post-uso
- Score UX con valor numérico y texto ("Mejorable", "Aceptable") + indicador de objetivo (≥80)
- El evaluador siente progreso cada vez que el stepper avanza un paso
- La lista de planes recientes con fecha de actualización da sensación de historial y continuidad del trabajo

---

## Especificación de nuevos componentes

### `FlowProgress.tsx` (implementado en Fase 4)
```
Props:
  activeTab: DashboardTab    // 'plan' | 'script' | 'observations' | 'findings' | 'reports'
  testPlan: TestPlan         // Para detectar si el plan tiene nombre (paso 1 completo)
  tasksCount: number         // > 0 → paso 2 completo
  observationsCount: number  // > 0 → paso 3 completo
  findingsCount: number      // > 0 → paso 4 completo

Estados visuales:
  done    → círculo verde + ✓ + label verde
  active  → círculo navy + número + sombra + scale(1.15) + label navy bold
  pending → círculo blanco/borde gris + número + label gris
```

### `ToastNotification` (mejora futura)
```
Props:
  message: string
  type: 'success' | 'error' | 'warning'
  duration?: number  // default 3000ms

Comportamiento:
  - Aparece en bottom-right con slide-in desde derecha
  - Barra de progreso en la parte inferior
  - Auto-dismiss después de duration ms
  - Botón × para cerrar manualmente
  - No bloquea el contenido de la pantalla
```

### `EmptyState` (mejora futura)
```
Props:
  icon: ReactNode
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void

Uso: ObservationsView y FindingsView cuando la lista está vacía
```

---

## Archivo de referencia

Ver: `wireframes/hifi.html`
