---
name: desarrollo-frontend
description: "Úsame siempre que vayas a escribir, editar o refactorizar código de la interfaz de usuario en el proyecto RanxPanx Team. Contiene directrices sobre el uso de React, Tailwind CSS y la gestión de estado."
---

# Guía de Desarrollo Frontend (RanxPanx Team)

Esta habilidad documenta los estándares de interfaz de usuario, diseño y desarrollo frontend para el proyecto RanxPanx Team.

## 1. Stack Tecnológico de UI
- **Framework:** React 18
- **Estilos:** Tailwind CSS (versión 3.x)
- **Iconografía:** `lucide-react`
- **Empaquetador/Build Tool:** Vite

## 2. Directrices de Estilo (Tailwind)
Todo el diseño se basa exclusivamente en clases de utilidad de Tailwind. Sigue estos estándares rigurosamente:

### Colores
- **Principal:** Variantes de `indigo` (ej. `bg-indigo-600` para botones primarios, `text-indigo-500` para textos destacados).
- **Fondos y superficies (Modo Claro):** `bg-slate-50` para el fondo principal, `bg-white` para tarjetas.
- **Superficies (Modo Oscuro):** `bg-slate-950` para fondo principal, `bg-slate-900` para tarjetas.
- **Bordes:** `border-slate-200` (claro) / `border-slate-800` (oscuro).
- **Textos Secundarios:** `text-slate-500` (claro) / `text-slate-400` (oscuro).

### Sombras y Bordes
- Usa `shadow-sm`, `shadow-xl`, o `shadow-2xl` para dar profundidad. Evita diseños completamente planos a menos que sea intencional.
- Usa grandes radios de borde para tarjetas modales (`rounded-2xl`, `rounded-3xl` o incluso `rounded-[2.5rem]`).

### Animaciones e Interacción
- Utiliza la clase `transition-all` en botones y elementos interactivos para suavizar estados de hover.
- Efectos al presionar: `active:scale-95` para proporcionar feedback táctil.
- Efectos al pasar ratón: `hover:scale-105` (con precaución), `hover:bg-slate-100` o variaciones en opacidad.

## 3. Soporte Modo Oscuro (Dark Mode)
- El modo oscuro se controla añadiendo la clase dinámicamente o leyendo un estado `isDarkMode`.
- SIEMPRE que añadas texto, fondos o bordes, debes incluir la variante oscura de Tailwind si cambia.
  * Ejemplo: `className={\`\${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-100 text-slate-800'} p-4 rounded-xl border\`}`.

## 4. Patrones de React
1. **Un solo archivo (o limitados):** Trata de definir sub-componentes si el archivo `App.jsx` crece demasiado, pero respeta la arquitectura monolítica actual si es predominante, separando lógicas visuales para que sea legible.
2. **Hooks:** Utiliza la memoria inteligente. Emplea `useMemo` para cálculos pesados o derivación de estado (estadísticas de calendario, etc.).
3. **Estado Global Simple:** Actualmente la app maneja el estado localmente y pasa promesas.

## 5. Accesibilidad y Responsividad
- Asegúrate de usar `-webkit-tap-highlight-color: transparent` si es necesario, y las clases `pb-safe` o `safe-top` para pantallas móviles. Todo el diseño es _mobile-first_ (`max-w-md mx-auto` es el contenedor actual).
