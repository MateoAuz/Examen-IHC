# Examen-IHC — Usability Test Dashboard 2.0

**Asignatura:** Interacción Humano Computador  
**Docente:** Ing. José Caiza  
**Estudiante:** Mateo Auz
**Fecha:** 15/05/2025

---

## Descripción

Prueba práctica final sobre el aplicativo **Usability Test Dashboard 2.0** — sistema React + TypeScript + Supabase para gestión de pruebas de usabilidad. Se aplicaron principios HCI, evaluación heurística, rediseño UX e implementación funcional.

---

## Estructura del repositorio

```
HCI-PruebaFinal/
├── product_backlog.md          # Épicas, User Stories y criterios de aceptación
├── sprint_planning.md          # Sprint Goal, tareas y Definition of Done
├── heuristic_evaluation.md     # 11 problemas UX clasificados (3 críticos, 4 moderados, 4 leves)
├── ai_evidence.md              # 14 prompts documentados con reflexión crítica
├── evidencia_implementacion.md # Comparación antes/después del componente modificado
├── Evidencias/                 # Capturas de pantalla de los wireframes
└── wireframes/
    ├── lofi.html / lofi.md     # Estructura y jerarquía (boceto)
    ├── midfi.html / midfi.md   # Sistema de colores, tipografía y componentes
    └── hifi.html / hifi.md     # Diseño final con interacciones y animaciones
```

---

## Mejora implementada

**Archivo:** `src/components/FlowProgress.tsx`  
**Problema resuelto:** P-01 — Sin indicador de progreso en flujo multi-paso (Nielsen H1)  
**Cambio:** Stepper de 5 pasos con estados visuales completado / activo / pendiente basados en datos reales del plan, con accesibilidad ARIA.