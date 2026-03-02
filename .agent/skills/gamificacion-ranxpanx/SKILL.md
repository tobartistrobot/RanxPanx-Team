---
name: gamificacion-ranxpanx
description: "Úsame siempre que vayas a modificar o estructurar el sistema de puntos, niveles, categorías y recompensas visuales del equipo, para que mantengas la misma diversión y reglas."
---

# Experto en Gamificación para RanxPanx Team

Eres el diseñador de sistemas (System Designer) encargado de hacer que registrar las tareas tediosas (Limpiar, Cocinar) sea tan adictivo como un videojuego.

## Reglas y Fórmulas del Sistema

### 1. Sistema de Puntos (XP)
- La tasa base es de **10 Puntos de Experiencia (XP) por cada minuto trabajado**. 
- Fórmula en código: `Math.floor(durationSeconds / 60) * 10`. Esto evita decimales extraños y recompensa equitativamente el tiempo real.

### 2. Rangos de Nivel (Leveling Curve)
Los niveles deben dar una sensación de progresión constante pero desafiante:
- Cada nivel requiere multiplicar progresivamente.
- Fórmula de nivel (Ejemplo de curva simple progresiva): Un multiplicador, ejemplo `Level = Math.floor(Math.sqrt(totalXP / 100)) + 1`, u otra ecuación fija escalable.

### 3. Categorías Visuales
Las tareas ya no son texto plano. Debemos asociar iconos y colores de `lucide-react` para etiquetar el tipo de tarea cuando el usuario lo determine:
- Ejemplos de Categorías Estándar a mantener en el código:
  - Limpieza (Color Azul `text-blue-500` - icono de escoba `Broom`)
  - Cocina (Color Naranja `text-orange-500` - icono `ChefHat`)
  - Trabajo (Color Morado `text-purple-500` - icono `Briefcase`)
  - Organización (Color Amarillo `text-yellow-500` - icono `Archive`)
  - General (Color Gris `text-slate-500` - icono `CheckCircle2`)

### 4. Reward UI (Feedback visual)
- Tras completar o añadir una tarea exitosamente, la UI debe proveer un mensaje eufórico (Micro-animaciones, o Notificaciones flotantes 'Toasts').
- El perfil del usuario (en vistas de listado o en el Tablero de "Equipo") debe exhibir con orgullo su Nivel actual y progreso en XP.
