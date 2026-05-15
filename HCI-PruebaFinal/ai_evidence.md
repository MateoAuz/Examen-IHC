# Evidencia de Uso de IA — Prueba Práctica HCI/UX

**Herramienta utilizada:** Claude (Anthropic) — claude.ai  
**Modelo:** Claude Sonnet  
**Estudiante:** Mateo Auz  
**Fecha:** 15/05/2025  
**Asignatura:** Interacción Humano Computador  
**Docente:** Ing. José Caiza  

---

## Resumen de uso

La IA fue utilizada como **soporte técnico y de diseño** a lo largo de las 6 fases de la prueba. No generó el trabajo completo, sino que respondió consultas específicas, validó decisiones de diseño, sugirió mejoras puntuales y ayudó a resolver dudas técnicas durante la implementación. Todas las decisiones finales — qué problemas priorizar, qué pantalla rediseñar, qué mejora implementar — fueron tomadas por el estudiante.

---

## Fase 1 — Scrum y Planificación

### Prompt 1.1 — Estructura del Product Backlog

**Prompt enviado:**
> "Estoy haciendo la planificación Scrum para una prueba de HCI. Tengo que crear un Product Backlog para una app de pruebas de usabilidad. ¿Qué estructura debería tener el backlog para que sea coherente con Scrum y también refleje trabajo de diseño UX? ¿Las User Stories de diseño se escriben diferente a las de desarrollo?"

**Respuesta de la IA (resumen):**  
Explicó que las User Stories de diseño siguen el mismo formato "Como [rol], quiero [acción], para [beneficio]" pero el rol suele ser "evaluador", "diseñador UX" o "usuario del sistema evaluado". Recomendó organizar el backlog por épicas (Evaluación, Rediseño, Implementación, Documentación) y agregar criterios de aceptación medibles para cada historia, especialmente en las de diseño donde es fácil dejar criterios vagos.

**Cómo ayudó:**  
Permitió estructurar el backlog con épicas claras y criterios de aceptación concretos. Sin esta orientación, los criterios de aceptación de las historias de diseño habrían quedado ambiguos ("que se vea bien" en lugar de "breadcrumb visible en todas las resoluciones con al menos el ítem activo siempre visible").

---

### Prompt 1.2 — Definición del Sprint Goal

**Prompt enviado:**
> "¿Cómo redacto un Sprint Goal para un sprint de solo 2 horas en el contexto de una prueba práctica? Necesito que sea específico, medible y realista para el tiempo disponible. El objetivo cubre: evaluación heurística, wireframes y una mejora funcional en código React."

**Respuesta de la IA (resumen):**  
Señaló que un Sprint Goal debe expresar el valor que se entrega, no listar tareas. Sugirió la estructura: "Identificar [qué] + proponer [cómo] + entregar [evidencia tangible]". También indicó que para sprints cortos conviene que el Goal sea más acotado que en sprints normales, priorizando la evidencia entregable sobre la exhaustividad.

**Cómo ayudó:**  
El Sprint Goal final quedó enfocado en los tres entregables concretos del sprint en lugar de ser una lista de actividades, lo que lo hace más evaluable y profesional.

---

## Fase 2 — Evaluación Heurística

### Prompt 2.1 — Metodología de evaluación

**Prompt enviado:**
> "Voy a evaluar heurísticamente una app React de gestión de pruebas de usabilidad. Tiene estas vistas: Login, GlobalDashboard, PlanView, ScriptView, ObservationsView, FindingsView, ReportsView. ¿Cuál es el proceso correcto para aplicar las 10 heurísticas de Nielsen a una app de este tipo? ¿Evalúo heurística por heurística o vista por vista?"

**Respuesta de la IA (resumen):**  
Recomendó evaluar **vista por vista** en una primera pasada, anotando todos los problemas encontrados sin clasificarlos todavía, y luego en una segunda pasada clasificar por heurística y severidad. Explicó que evaluar heurística por heurística tiende a generar omisiones porque fuerza el foco en un solo tipo de problema a la vez. También sugirió la escala de severidad de Nielsen (0-4) como referencia para clasificar crítico/moderado/leve.

**Cómo ayudó:**  
Cambió el enfoque de evaluación: en lugar de ir heurística por heurística (que habría sido más mecánico), se evaluó flujo por flujo, lo que permitió detectar problemas de contexto que no serían visibles aislando cada heurística. El problema P-01 (sin indicador de progreso en el flujo) fue detectado precisamente porque se evaluó el flujo completo de creación de un plan.

---

### Prompt 2.2 — Clasificación de severidad

**Prompt enviado:**
> "Encontré estos problemas en la app durante la evaluación. ¿Me puedes ayudar a clasificarlos correctamente como críticos, moderados o leves según los criterios de Nielsen? Los problemas son: [lista de 8 problemas detectados manualmente]. Algunos no sé si son críticos o moderados porque depende del contexto de uso."

**Respuesta de la IA (resumen):**  
Para cada problema explicó los criterios de clasificación: frecuencia con que ocurre, impacto en la tarea del usuario, persistencia (¿bloquea o solo molesta?) y si tiene workaround fácil. Reclasificó 2 problemas que estaban subvalorados: el problema de "sin feedback al guardar" pasó de moderado a crítico porque en apps de registro de datos, no saber si algo se guardó puede generar duplicados o pérdida de información.

**Cómo ayudó:**  
Validó la clasificación propia y fundamentó los cambios con argumentos técnicos de HCI, no solo opiniones. Esto fortaleció la justificación de la evaluación heurística.

---

### Prompt 2.3 — Redacción de problemas heurísticos

**Prompt enviado:**
> "¿Cómo debería redactar un problema heurístico de forma profesional? Tengo esto: 'No hay stepper en el flujo'. Necesito que quede con: nombre del problema, pantalla afectada, heurística violada, descripción del impacto y recomendación. ¿Puedes mostrarme el formato correcto con ese ejemplo?"

**Respuesta de la IA (resumen):**  
Proporcionó la estructura de documentación de problema heurístico usada profesionalmente: ID único, título descriptivo, pantalla, heurística de Nielsen (número + nombre), descripción del problema observado (sin solución), impacto en el usuario (consecuencia), y recomendación de mejora (acción concreta). Mostró el ejemplo con el problema del stepper.

**Cómo ayudó:**  
Estandarizó el formato de todos los problemas en la evaluación heurística, haciéndola más legible, profesional y coherente. Todos los 11 problemas siguieron esta estructura.

---

## Fase 3 — Wireframes

### Prompt 3.1 — Selección de pantalla para rediseño

**Prompt enviado:**
> "Tengo que seleccionar UNA pantalla crítica del sistema para rediseñarla. Las opciones son: Login, Dashboard principal, PlanView (formulario), ObservationsView y FindingsView. ¿Qué criterios debo usar para justificar la selección desde el punto de vista de HCI? No quiero elegir por intuición sino tener argumentos técnicos."

**Respuesta de la IA (resumen):**  
Propuso 4 criterios de selección: (1) cantidad de problemas heurísticos que concentra, (2) frecuencia de uso por sesión, (3) impacto en el flujo completo si tiene fallos, y (4) visibilidad — cuántos usuarios la ven antes de ver otras pantallas. Con esos criterios, el Dashboard resultó la pantalla más crítica al acumular los 3 problemas críticos (P-01, P-02, P-06), ser la vista post-login y ser el hub de navegación.

**Cómo ayudó:**  
La selección del Dashboard quedó respaldada por 4 criterios técnicos de HCI, no por preferencia personal. Esto fortaleció la justificación en el documento de wireframes.

---

### Prompt 3.2 — Aplicación de Gestalt en layout

**Prompt enviado:**
> "Estoy diseñando el layout del Dashboard rediseñado. Quiero aplicar las leyes de Gestalt correctamente pero no solo mencionarlas — quiero que se vean en el diseño. Las secciones que tengo son: KPIs (4 tarjetas), acciones rápidas (5 botones), gráfico de distribución y lista de planes recientes. ¿Cómo aplico Proximidad, Similitud y Continuidad de forma que sean visibles y justificables?"

**Respuesta de la IA (resumen):**  
Para **Proximidad**: recomendó que el gap entre tarjetas KPI (12px) sea menor que el gap entre la sección KPI y la siguiente sección (22px), para que el espacio comunique agrupación sin necesidad de líneas divisorias. Para **Similitud**: que las 5 acciones rápidas tengan exactamente las mismas dimensiones, estructura y hover — cualquier variación rompe la percepción de grupo. Para **Continuidad**: que el stepper use líneas horizontales conectoras coloreadas (verde para completado, gris para pendiente) para guiar el ojo en la dirección del flujo de trabajo.

**Cómo ayudó:**  
Las decisiones de espaciado y color del layout dejaron de ser estéticas y se convirtieron en decisiones justificadas por principios de percepción visual. Cada medida tiene un argumento de Gestalt detrás.

---

### Prompt 3.3 — Wireframe Lo-Fi en HTML

**Prompt enviado:**
> "Necesito hacer un wireframe Lo-Fi del Dashboard en HTML. Tiene que verse como un boceto real — sin colores del diseño final, con bordes tipo sketch, usando solo escala de grises. Debe mostrar la estructura que defino: header, breadcrumb, stepper de 5 pasos, grid de 4 KPIs, acciones rápidas, gráfico de barras, lista de planes y CTA. Al final quiero anotaciones numeradas que expliquen qué principio de diseño aplica en cada sección."

**Respuesta de la IA (resumen):**  
Explicó que para lograr la estética de boceto en HTML se usan: `border: 2px dashed` en lugar de sólidos, fondo oscuro tipo pizarra (`#1a1a1a`), tipografía monospace (`Courier New`) y patrones de rayas para simular las barras del gráfico. Sugirió usar `position: absolute` para los números de anotación y agregarlos como leyenda al final del wireframe.

**Cómo ayudó:**  
Las decisiones de implementación técnica del HTML permitieron que el Lo-Fi tuviera la estética visual correcta — claramente diferente del Mid-Fi y Hi-Fi, lo que hace que los 3 niveles de fidelidad sean distinguibles a primera vista.

---

### Prompt 3.4 — Wireframe Mid-Fi: especificación del sistema de diseño

**Prompt enviado:**
> "Para el Mid-Fi necesito definir un sistema de diseño completo para la app. Tengo los colores base del proyecto: navy #003366, y usa Tailwind. ¿Qué colores semánticos debo agregar para los estados de éxito, error y advertencia? ¿Y qué tipografía recomiendas que sea diferente a Inter para que no se vea genérica pero que sea legible para una app de datos?"

**Respuesta de la IA (resumen):**  
Para colores semánticos sugirió: verde `#22C55E` (Tailwind green-500) para éxito, ámbar `#F59E0B` para advertencia/tiempo, rojo `#EF4444` para error/crítico y azul `#2563EB` para estados informativos completados. Para tipografía recomendó **IBM Plex Sans** (diseñada por IBM específicamente para interfaces de datos) como alternativa a Inter — misma legibilidad pero con personalidad más técnica y característica que no se confunde con diseño genérico.

**Cómo ayudó:**  
El sistema de colores semánticos quedó fundamentado técnicamente. IBM Plex Sans le dio identidad visual al Mid-Fi diferenciándolo de cualquier otro proyecto de la clase que use Inter por defecto.

---

### Prompt 3.5 — Wireframe Hi-Fi: diseño emocional

**Prompt enviado:**
> "Quiero aplicar los 3 niveles de diseño emocional de Donald Norman al Hi-Fi. Tengo el diseño casi terminado. ¿Cómo puedo justificar que mi diseño aplica el nivel visceral, conductual y reflexivo? ¿Qué elementos concretos del dashboard corresponden a cada nivel?"

**Respuesta de la IA (resumen):**  
Explicó cada nivel con ejemplos concretos del dashboard: **Visceral** = las animaciones de hover (`translateY(-2px)`) y los colores semánticos inmediatos que generan una respuesta emocional antes de leer el número (ver verde = tranquilidad, ver rojo = alerta). **Conductual** = el toast de confirmación en menos de 100ms y el breadcrumb siempre visible — el usuario nunca se pregunta "¿se guardó?" ni "¿dónde estoy?". **Reflexivo** = el Score UX con objetivo visible (`≥80 — Aceptable`) que da al evaluador un sentido de progreso y motivación para mejorar resultados.

**Cómo ayudó:**  
Los elementos visuales del Hi-Fi dejaron de ser solo "bonitos" y pasaron a tener una justificación teórica desde la psicología del diseño. Esto enriqueció la documentación del `hifi.md` con argumentos de Norman que van más allá del nivel técnico.

---

## Fase 4 — Implementación Funcional

### Prompt 4.1 — Análisis del componente existente

**Prompt enviado:**
> "Tengo este componente FlowProgress.tsx en mi proyecto React. Actualmente recibe estas props: activeTab, testPlan, tasksCount, observationsCount, findingsCount. Quiero rediseñarlo como un stepper visual de 5 pasos. Antes de escribir código, ¿qué lógica necesito para determinar qué pasos están 'completados' vs solo 'visitados'? No quiero que completado signifique solo que el usuario pasó por ese tab."

**Respuesta de la IA (resumen):**  
Distinguió entre "visitado" y "completado" en términos de UX: un paso completado debe tener **datos reales**, no solo haber sido abierto. Propuso la lógica: Plan completado = `testPlan.product` tiene texto; Guion completado = `tasksCount > 0`; Observaciones completadas = `observationsCount > 0`; Hallazgos completados = `findingsCount > 0`; Reportes = nunca se marca completado (es el destino final). Esta lógica usa las props ya disponibles sin necesitar nuevas llamadas a la base de datos.

**Cómo ayudó:**  
Esta distinción conceptual es fundamental en UX — un stepper que marca "completado" solo por visita es engañoso y viola H1 de Nielsen. La implementación final usa esta lógica y resulta más honesta con el estado real del flujo del usuario.

---

### Prompt 4.2 — Duda de accesibilidad en el stepper

**Prompt enviado:**
> "En mi stepper, ¿qué atributos ARIA debo agregar para que sea accesible? Tengo una lista `<ol>` con los pasos. ¿El paso activo necesita algo especial? ¿Y el texto que dice 'Paso 3 de 5: Observaciones', debería tener algún atributo para que los lectores de pantalla lo anuncien cuando cambia de tab?"

**Respuesta de la IA (resumen):**  
Recomendó: `<nav aria-label="Progreso del flujo de prueba">` como contenedor, `<ol>` para la lista de pasos (semántica de orden), `aria-current="step"` en el paso activo, y `aria-live="polite"` en el párrafo de texto descriptivo para que lectores de pantalla lo anuncien automáticamente cuando cambia. También indicó que los íconos decorativos (✓) deben tener `aria-hidden="true"`.

**Cómo ayudó:**  
El componente final incluye accesibilidad real, no solo diseño visual. Esto diferencia una implementación profesional de una superficial y muestra aplicación de estándares WCAG.

---

### Prompt 4.3 — Revisión de compatibilidad con App.tsx

**Prompt enviado:**
> "Antes de modificar FlowProgress.tsx, revisé App.tsx y vi que ya se llama así: `<FlowProgress activeTab={activeTab} testPlan={testPlan} tasksCount={tasks.length} observationsCount={observations.length} findingsCount={findings.length} />`. ¿Necesito modificar App.tsx también o con solo cambiar el componente es suficiente? ¿Hay algún riesgo de que el cambio rompa algo?"

**Respuesta de la IA (resumen):**  
Confirmó que si las props del nuevo componente tienen exactamente los mismos nombres y tipos que las que ya se pasan en `App.tsx`, no es necesario tocar `App.tsx`. Advirtió revisar que el import siga siendo nombrado (`import { FlowProgress }`) ya que el componente usa `export const` y no `export default`, para no generar un error de "undefined component" silencioso.

**Cómo ayudó:**  
Evitó un error común al refactorizar componentes: cambiar la firma de las props sin actualizar el lugar donde se usan. La implementación se hizo sin romper ninguna otra parte del sistema.

---

## Fase 5 — Documentación General

### Prompt 5.1 — Formato de documentación de commits

**Prompt enviado:**
> "¿Qué convención de commits es más apropiada para un proyecto académico de HCI que tiene tanto código como documentación de diseño? Vi que existe Conventional Commits pero no sé si aplica para archivos .md de wireframes y evaluaciones."

**Respuesta de la IA (resumen):**  
Recomendó usar Conventional Commits con estos prefijos adaptados al contexto HCI: `feat()` para nuevos componentes funcionales, `docs()` para archivos de documentación (.md), `design()` para wireframes y assets de diseño, `fix()` para correcciones de bugs, `refactor()` para mejoras de código sin cambio funcional. El scope entre paréntesis puede ser `hci`, `ux`, `scrum` según la fase.

**Cómo ayudó:**  
Los 5+ commits del repositorio tienen mensajes descriptivos y estructurados que evidencian claramente qué se hizo en cada fase, facilitando la evaluación del docente al revisar el historial de GitHub.

---

## Resumen de interacciones

| # | Fase | Tipo de consulta | Resultado |
|---|------|-----------------|-----------|
| 1.1 | Scrum | Estructura de backlog UX | Backlog con épicas y criterios medibles |
| 1.2 | Scrum | Redacción de Sprint Goal | Goal orientado a valor, no a tareas |
| 2.1 | Heurística | Metodología de evaluación | Evaluación por flujo, no por heurística |
| 2.2 | Heurística | Clasificación de severidad | 2 problemas reclasificados con argumentos |
| 2.3 | Heurística | Formato de documentación | Estructura profesional estandarizada |
| 3.1 | Wireframes | Selección de pantalla | 4 criterios técnicos de HCI |
| 3.2 | Wireframes | Layout con Gestalt | Espaciado justificado por percepción visual |
| 3.3 | Wireframes | Lo-Fi en HTML | Estética de boceto técnicamente implementada |
| 3.4 | Wireframes | Sistema de diseño Mid-Fi | Colores semánticos + tipografía IBM Plex Sans |
| 3.5 | Wireframes | Diseño emocional Hi-Fi | Niveles visceral/conductual/reflexivo aplicados |
| 4.1 | Implementación | Lógica del stepper | Distinción visitado vs completado |
| 4.2 | Implementación | Accesibilidad ARIA | Atributos WCAG en componente final |
| 4.3 | Implementación | Compatibilidad con App.tsx | Cero cambios necesarios en App.tsx |
| 5.1 | Documentación | Convención de commits | Mensajes estructurados por fase |

---

## Reflexión crítica sobre el uso de IA en el proceso UX

### Lo que la IA hizo bien
- **Respondió consultas puntuales** sin expandirse a temas no solicitados
- **Fundamentó las respuestas** con referencias a principios HCI reales (Nielsen, Gestalt, Norman)
- **Detectó inconsistencias** en la clasificación de severidad que habrían quedado sin justificación
- **Propuso alternativas** (IBM Plex Sans, distinción visitado/completado) que mejoraron la calidad del trabajo

### Lo que la IA no hizo
- No tomó decisiones de diseño por cuenta propia — la pantalla a rediseñar, los problemas a priorizar y la mejora a implementar fueron decisiones del estudiante
- No generó el trabajo completo — cada respuesta fue insumo para una decisión humana
- No reemplazó el análisis del sistema — la evaluación heurística requirió navegar la app y observar los problemas directamente

### Conclusión
El uso de IA como soporte en un proceso UX es análogo a tener acceso a un consultor técnico disponible en cualquier momento. Acelera la validación de decisiones, amplía el conocimiento disponible y mejora la calidad de la documentación, pero no sustituye el criterio del diseñador ni el análisis directo del sistema. La responsabilidad del diseño sigue siendo completamente humana.