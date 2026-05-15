# Evaluación Heurística — Usability Test Dashboard 2.0

**Evaluador:** [Tu nombre]  
**Fecha:** 15/05/2025  
**Metodología:** 10 Heurísticas de Nielsen  
**Sistema evaluado:** Usability Test Dashboard 2.0 (React + TypeScript + Supabase)

---

## Resumen Ejecutivo

| Severidad | Cantidad |
|-----------|----------|
| 🔴 Crítico | 3 |
| 🟠 Moderado | 4 |
| 🟡 Leve | 4 |
| **Total** | **11** |

---

## Problemas Detectados

### 🔴 CRÍTICOS

---

**P-01 — Sin indicador de progreso en flujo multi-paso**  
- **Pantalla:** PlanView / flujo de creación de plan  
- **Heurística violada:** H1 — Visibilidad del estado del sistema  
- **Descripción:** El sistema no muestra al usuario en qué paso del flujo se encuentra al crear un plan de prueba. El componente `FlowProgress` existe pero no es suficientemente visible ni contextual. El usuario no sabe cuántos pasos faltan.  
- **Impacto:** El usuario abandona el proceso por no saber qué sigue.  
- **Recomendación:** Implementar un stepper numérico visible con pasos etiquetados: 1. Plan → 2. Guion → 3. Observaciones → 4. Hallazgos → 5. Reporte.

---

**P-02 — No existe confirmación visual al guardar datos**  
- **Pantalla:** Todas las vistas con formulario (PlanView, ObservationsView, FindingsView)  
- **Heurística violada:** H1 — Visibilidad del estado del sistema  
- **Descripción:** Cuando el usuario presiona "Guardar", el sistema actualiza los datos en Supabase pero no muestra ninguna notificación de éxito. El estado `saveStatus` existe en `App.tsx` pero el feedback es mínimo y desaparece sin ser notado.  
- **Impacto:** El usuario no sabe si su acción tuvo efecto, generando clicks repetidos y datos duplicados.  
- **Recomendación:** Implementar toast notifications persistentes durante 3 segundos con icono, color y mensaje claro.

---

**P-03 — Formulario de hallazgos sin validación en tiempo real**  
- **Pantalla:** FindingsView  
- **Heurística violada:** H5 — Prevención de errores  
- **Descripción:** El formulario de creación de hallazgos (título, descripción, severidad, recomendación) no valida los campos mientras el usuario escribe. Solo falla al intentar guardar, sin indicar cuál campo está incompleto.  
- **Impacto:** Errores de datos incompletos llegan a la base de datos. Frustración del usuario.  
- **Recomendación:** Agregar validación en tiempo real con mensajes inline por campo usando el componente `FieldWarning.tsx` existente.

---

### 🟠 MODERADOS

---

**P-04 — Breadcrumbs no siempre visibles o claros**  
- **Pantalla:** PlanView y vistas anidadas  
- **Heurística violada:** H6 — Reconocimiento sobre recuerdo  
- **Descripción:** El componente `Breadcrumbs.tsx` existe e está implementado, pero en resoluciones pequeñas se corta o colapsa sin indicación visual. En mobile el contexto de navegación se pierde.  
- **Impacto:** El usuario no sabe dónde está dentro del sistema en dispositivos pequeños.  
- **Recomendación:** Asegurar que breadcrumb siempre muestre mínimo el ítem actual, con responsive design.

---

**P-05 — Modal de eliminación sin descripción de consecuencias**  
- **Pantalla:** GlobalDashboard (borrar plan)  
- **Heurística violada:** H5 — Prevención de errores  
- **Descripción:** El modal de confirmación de eliminación solo dice "¿Eliminar este plan?" sin describir qué datos se perderán (observaciones, hallazgos, tareas asociadas). El botón de confirmación es rojo pero pequeño.  
- **Impacto:** Eliminaciones accidentales de datos importantes.  
- **Recomendación:** Listar en el modal los elementos que serán eliminados y requerir escritura del nombre del plan para confirmar.

---

**P-06 — Navegación global no indica sección activa claramente**  
- **Pantalla:** TabNavigation (dentro de un plan)  
- **Heurística violada:** H6 — Reconocimiento sobre recuerdo  
- **Descripción:** Las pestañas de navegación (Plan, Guion, Observaciones, Hallazgos, Reportes) no tienen suficiente contraste visual para distinguir la pestaña activa de las inactivas en el estado actual.  
- **Impacto:** El usuario tiene dificultad para identificar en qué sección está trabajando.  
- **Recomendación:** Aumentar el contraste del indicador activo, agregar fondo diferenciador y bold en el label activo.

---

**P-07 — Sin paginación visible en lista de observaciones**  
- **Pantalla:** ObservationsView  
- **Heurística violada:** H8 — Diseño estético y minimalista  
- **Descripción:** Cuando hay más de 10 observaciones, la lista crece verticalmente sin paginación ni carga progresiva, generando scroll extenso y pérdida de contexto.  
- **Impacto:** Degradación de rendimiento percibido y dificultad para encontrar observaciones específicas.  
- **Recomendación:** Implementar paginación de 10 elementos o lazy loading con scroll virtual.

---

### 🟡 LEVES

---

**P-08 — Placeholder de inputs no desaparece apropiadamente**  
- **Pantalla:** LoginView, formularios generales  
- **Heurística violada:** H4 — Consistencia y estándares  
- **Descripción:** En algunos inputs el placeholder persiste visualmente de manera confusa cuando el usuario interactúa con campos de autocompletado del navegador.  
- **Impacto:** Confusión visual menor.  
- **Recomendación:** Revisar estilos de autofill y estados de focus.

---

**P-09 — Iconos sin texto alternativo en acciones rápidas**  
- **Pantalla:** DashboardView (Quick Actions)  
- **Heurística violada:** H6 — Reconocimiento sobre recuerdo  
- **Descripción:** Los botones de acción rápida del dashboard muestran íconos de Lucide pero en tamaños pequeños, sin tooltip visible por defecto en mobile.  
- **Impacto:** Usuarios nuevos no reconocen la función de cada ícono.  
- **Recomendación:** Mostrar siempre el label debajo del ícono o implementar tooltips accesibles.

---

**P-10 — Mensaje de error de login genérico**  
- **Pantalla:** LoginView  
- **Heurística violada:** H9 — Ayuda a reconocer y recuperarse de errores  
- **Descripción:** El mensaje de error "Las credenciales proporcionadas son incorrectas" es correcto por seguridad pero no ofrece ninguna ayuda para recuperarse (link a reset de contraseña, verificar email).  
- **Impacto:** Usuarios bloqueados sin ruta de recuperación visible.  
- **Recomendación:** Agregar link "¿Olvidaste tu contraseña?" visible debajo del mensaje de error.

---

**P-11 — Sin estado vacío amigable en listas**  
- **Pantalla:** ObservationsView, FindingsView cuando no hay datos  
- **Heurística violada:** H9 — Ayuda a reconocer y recuperarse de errores  
- **Descripción:** Cuando no hay observaciones o hallazgos, la pantalla muestra simplemente una lista vacía sin ilustración, mensaje motivacional ni botón de acción primaria.  
- **Impacto:** Experiencia de onboarding pobre para usuarios nuevos.  
- **Recomendación:** Implementar empty states con ilustración SVG, mensaje explicativo y CTA primario.

---

## Matriz de Priorización

| ID | Problema | Severidad | Esfuerzo | Prioridad |
|----|----------|-----------|---------|-----------|
| P-01 | Sin indicador de progreso | Crítico | Medio | 🔴 Alta |
| P-02 | Sin confirmación al guardar | Crítico | Bajo | 🔴 Alta |
| P-03 | Sin validación en tiempo real | Crítico | Medio | 🔴 Alta |
| P-04 | Breadcrumbs no responsive | Moderado | Bajo | 🟠 Media |
| P-05 | Modal eliminación sin detalles | Moderado | Bajo | 🟠 Media |
| P-06 | Tab activa poco visible | Moderado | Bajo | 🟠 Media |
| P-07 | Sin paginación en listas | Moderado | Alto | 🟡 Baja |
| P-08 | Placeholder autofill | Leve | Bajo | 🟡 Baja |
| P-09 | Iconos sin label en mobile | Leve | Bajo | 🟡 Baja |
| P-10 | Error login sin recuperación | Leve | Bajo | 🟡 Baja |
| P-11 | Sin empty state | Leve | Medio | 🟡 Baja |