# Evidencia de Implementación Funcional — Fase 4

**Componente modificado:** `src/components/FlowProgress.tsx`  
**Fecha:** 15/05/2025  
**Estudiante:** Mateo Auz  
**Problema heurístico resuelto:** P-01 — Sin indicador de progreso en flujo multi-paso

---

## Resumen del cambio

Se rediseñó completamente el componente `FlowProgress.tsx` que existía en el proyecto. El componente original recibía una sola prop (`currentStep: number`) y no tenía lógica para determinar si un paso estaba realmente completado. El nuevo componente recibe las props ya disponibles en `App.tsx` y muestra el estado real del flujo de trabajo del usuario.

---

## Archivo modificado

```
src/
└── components/
    └── FlowProgress.tsx   ← ÚNICO archivo modificado
```

`App.tsx` **no requirió ningún cambio** porque ya llamaba al componente con exactamente las props que necesita el nuevo diseño:

```tsx
// App.tsx — línea existente, sin modificar
<FlowProgress
  activeTab={activeTab}
  testPlan={testPlan}
  tasksCount={tasks.length}
  observationsCount={observations.length}
  findingsCount={findings.length}
/>
```

---

## Comparación: antes vs después

### Versión original — `FlowProgress.tsx` (antes)

```tsx
// Props originales — solo recibía un número
interface FlowProgressProps {
  currentStep: number; // 0-indexed
}

// Lógica original — solo comparaba índices numéricos
const isCompleted = index < currentStep; 
const isActive    = index === currentStep;
const isPending   = index > currentStep;

```

**Problemas de la versión original:**
- Marcaba un paso como "completado" solo por haber sido visitado, no por tener datos reales
- No reflejaba el estado real del trabajo del usuario
- Violaba H1 de Nielsen: el sistema no comunicaba el estado verdadero del sistema

---

### Versión nueva — `FlowProgress.tsx` (después)

```tsx
// Props nuevas — recibe datos reales del plan
interface FlowProgressProps {
  activeTab: DashboardTab;
  testPlan: TestPlan;
  tasksCount: number;
  observationsCount: number;
  findingsCount: number;
}

// Lógica nueva — determina completado por datos reales
const isStepComplete = (stepId, testPlan, tasksCount, observationsCount, findingsCount) => {
  switch (stepId) {
    case 'plan':         return !!(testPlan.product && testPlan.product.trim().length > 0);
    case 'script':       return tasksCount > 0;        // completado si tiene tareas
    case 'observations': return observationsCount > 0; // completado si tiene observaciones
    case 'findings':     return findingsCount > 0;     // completado si tiene hallazgos
    case 'reports':      return false;                 // nunca se marca completado
  }
};

// 3 estados visuales diferenciados
const completed = isStepComplete(...);
const isActive  = step.id === activeTab; 
const isPending = !isActive && !completed; 
```

---

## Cambios visuales implementados

| Elemento | Antes | Después |
|----------|-------|---------|
| Círculo del paso activo | Sin distinción visual clara | Navy + sombra + `scale(1.10)` + ring |
| Paso completado | Mismo color que activo | Verde (`bg-green-500`) + ícono `CheckCircle2` |
| Paso pendiente | Gris básico | Gris con borde `border-slate-200` |
| Línea conectora | Un solo color | Verde si el paso está completado, gris si no |
| Label del paso activo | Texto normal | `font-bold` + color navy |
| Label completado | Sin distinción | Color verde `text-green-600` |
| Indicador textual | Ausente | "Paso X de 5: **Nombre**" con `aria-live` |
| Contenedor | Sin borde ni separación | Borde `border-slate-200`, `rounded-xl`, `shadow-sm` |

---

## Heurísticas de Nielsen aplicadas

### H1 — Visibilidad del estado del sistema
El stepper comunica permanentemente en qué paso del flujo está el usuario (paso activo en navy), qué pasos ya tienen datos completos (verde con ✓) y qué pasos aún no se han trabajado (gris). El usuario no necesita recordar ni adivinar su posición en el flujo.

### H6 — Reconocimiento sobre recuerdo
El usuario reconoce visualmente el estado de su trabajo sin necesidad de navegar a cada sección para verificarlo. La distinción completado/activo/pendiente elimina la carga cognitiva de "¿ya guardé las observaciones?".

### Accesibilidad WCAG aplicada
- `<nav aria-label="Progreso del flujo de prueba">` — región semántica identificada
- `<ol>` — lista ordenada, correcta para pasos secuenciales
- `aria-current="step"` — paso activo identificado para lectores de pantalla
- `aria-live="polite"` — el indicador textual se anuncia automáticamente al cambiar de tab
- `aria-hidden="true"` en líneas conectoras — elementos decorativos excluidos de lectores de pantalla

---

## Por qué solo se modificó este componente

La implementación fue diseñada para ser **no invasiva**: el componente nuevo tiene exactamente la misma interfaz de props que ya esperaba `App.tsx`. Esto significa:

- Cero riesgo de romper otras partes del sistema
- No requiere cambios en la lógica de negocio
- No requiere nuevas llamadas a Supabase
- No modifica el estado global de la app
- Completamente reversible si fuera necesario

---
