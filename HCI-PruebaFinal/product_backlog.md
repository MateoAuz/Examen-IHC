# Product Backlog — Usability Test Dashboard 2.0

## Información del Proyecto
- **Producto:** Usability Test Dashboard 2.0
- **Rol:** UX Engineer
- **Sprint:** 1 (duración: 2 horas — prueba práctica)
- **Fecha:** 15/05/2025

---

## Épicas identificadas

| ID | Épica | Descripción |
|----|-------|-------------|
| E1 | Evaluación Heurística | Identificar y documentar problemas UX en el sistema actual |
| E2 | Rediseño UX | Mejorar pantallas críticas aplicando principios HCI |
| E3 | Implementación Funcional | Desarrollar mejora UX real en el código |
| E4 | Documentación | Evidenciar proceso con Scrum, wireframes y IA |

---

## Product Backlog

| ID | Historia de Usuario | Prioridad | Puntos | Épica |
|----|--------------------|-----------| -------|-------|
| US-01 | Como evaluador, quiero identificar problemas heurísticos en Login, Dashboard, Formularios, Navegación y Reportes para priorizar mejoras | Alta | 3 | E1 |
| US-02 | Como usuario, quiero que el Dashboard muestre métricas clave con jerarquía visual clara para tomar decisiones rápidas | Alta | 5 | E2 |
| US-03 | Como usuario, quiero breadcrumbs visibles en todo momento para saber en qué sección me encuentro | Alta | 3 | E3 |
| US-04 | Como usuario, quiero un stepper visual que muestre el progreso al crear un plan de prueba para no perderme en el flujo | Media | 4 | E3 |
| US-05 | Como usuario, quiero validaciones en tiempo real en formularios para prevenir errores antes de enviar | Alta | 3 | E3 |
| US-06 | Como usuario, quiero mensajes de feedback claros (éxito/error) al guardar datos para confirmar que mi acción fue procesada | Alta | 2 | E3 |
| US-07 | Como diseñador UX, quiero wireframes Lo-Fi, Mid-Fi y Hi-Fi del Dashboard rediseñado para guiar la implementación | Media | 4 | E2 |
| US-08 | Como docente, quiero evidencia del uso de IA en el proceso de diseño para evaluar el criterio de aplicación de herramientas | Media | 2 | E4 |

---

## Criterios de Aceptación — US-03 (Breadcrumbs)
- Visible en todas las vistas excepto Login/Register
- Muestra ruta completa: Proyectos > Nombre del Plan > Sección activa
- Enlace funcional en cada nivel
- Diseño consistente con el sistema visual

## Criterios de Aceptación — US-06 (Feedback visual)
- Toast/notificación aparece al guardar correctamente
- Mensaje de error visible si falla la operación
- Desaparece automáticamente después de 3 segundos
- No bloquea el contenido principal