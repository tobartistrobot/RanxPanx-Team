---
name: debugging-ranxpanx
description: "Úsame siempre que el usuario reporte un bug (error) repentino, un fallo donde un botón no hace nada o la aplicación crashea, para guiar tus pasos analíticos antes de modificar código."
---

# Guía de Debugging (Resolución de Problemas) - RanxPanx Team

Esta habilidad define un flujo estricto e inteligente para cazar bugs y problemas en este proyecto.

## 1. Reproducción del Error en Consola
NUNCA empieces a reescribir código en el editor basándote solo en una suposición o una queja ("esto no funciona").
Tu primera acción DEBE ser intentar ver el error exacto:
- Ejecutar el entorno local (`npm run dev`).
- Utilizar tu subagente de navegador (`browser_subagent`) o consultar logs de terminal para replicar el fallo del usuario.
- **CLAVE:** Captura explícitamente y lee los errores de consola de JavaScript. Los errores invisibles (`TypeError: null is not an object`) son el 90% de los fallos.

## 2. Alinear la Vista de Código (`view_file`/`grep_search`)
Una vez capturado el error real (es la base de datos? es React explotando? es una variable `undefined`?):
1. Usa `grep_search` limitando a `*.jsx` buscando el nombre de la variable crasheada o el texto del botón presionado ("Detener", "Guardar").
2. Abre la vista del archivo exacto (por ejemplo `src/App.jsx`) concentrándote **solo en las líneas de la función problemática** y de sus dependencias inmediatas.

## 3. Comprobar Stack Externo 
Si React funciona bien pero "no guarda" o no hace deploy:
- Revisa las dependencias en `package.json` (¿falta algún paquete npm vital, como un router o paquete de firebase no listado?).
- Si hay errores de permisos de Base de Datos, verifica las claves de entorno (`API_KEY`).
- Comprueba si el problema ocurre debido a la lógica *Mobile-first* (ej. el usuario navega desde un móvil mientras tú pruebas escritorio).

## 4. Proponer (o aplicar) la solución mínima viable
Al reparar un fallo, aplica el parche **más pequeño y directo posible**.
- Evita refactorizar componentes enteros solo para arreglar un click que falta, amenos que el código sea de una calidad insalvable.
- Después de aplicar el parche (`multi_replace_file_content` o `replace_file_content`), **vuelve a utilizar** el `browser_subagent` o `npm run build` para garantizar que la compilación es ahora exitosa y el _bug_ inicial ha desaparecido.
