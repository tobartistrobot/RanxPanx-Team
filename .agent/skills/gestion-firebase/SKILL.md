---
name: gestion-firebase
description: "Úsame siempre que vayas a implementar, editar o solucionar problemas relacionados con el guardado, lectura o actualización de datos en Firestore (Firebase) para el proyecto RanxPanx Team."
---

# Gestión de Firebase y Base de Datos (RanxPanx Team)

Esta habilidad documenta las reglas estrictas de seguridad y patrones de código para interactuar con Firebase / Firestore en la aplicación.

## 1. Conexión Segura (Variables de Entorno)
Nunca expongas las credenciales (`API Key`, `App ID`, etc.) quemándolas directamente en archivos como `App.jsx`.
- Utiliza **Variables de Entorno** de Vite: `import.meta.env.VITE_FIREBASE_API_KEY`.
- Asegúrate de que los valores locales existan en el archivo `.env.local` (este archivo está ignorado en Git).
- Para producción (Vercel), todas estas variables deben estar configuradas en la interfaz de Vercel (Project Settings -> Environment Variables).

## 2. Bloques Try/Catch Obligatorios
Dado el diseño asíncrono de Firebase, **toda operación de escritura** (`addDoc`, `updateDoc`, `setDoc`, `deleteDoc`) DEBE estar envuelta dentro de un bloque `try/catch`. 
- Si Firebase falla (por reglas de seguridad de Firestore, caída de red, etc.), la UI no debe colapsar.
- El error debe ser registrado (e.g., `console.error`) y si aplica, revertir el estado de UI silenciosamente o avisar al usuario (`alert` simple o Toast).

```javascript
/// MAL (Crashea la app invisiblemente si falla):
await addDoc(collection(db, 'rutas'), datos);
cerrarModal();

/// BIEN:
try {
  await addDoc(collection(db, 'rutas'), datos);
} catch(error) {
  console.error("Fallo guardado:", error);
  // (opcional) alert("Error al guardar");
}
// SIEMPRE resetear o cerrar la UI:
cerrarModal();
```

## 3. Autenticación Silenciosa
RanxPanx utiliza `signInAnonymously(auth)`.
- El objeto de usuario `user` puede tardar en cargar y es asíncrono.
- Antes de escribir a Firestore intentando usar `user.uid`, DEBES verificar su existencia de manera segura o usar null safety (`user?.uid || 'anonymous'`).
- Si `user` es nulo estrictamente requerido, suspende la acción de guardado temprano y avisa en consola.

## 4. Referencias Seguras de Documentos
- Las colecciones en este proyecto se organizan bajo `artifacts/<safeAppId>/public/data/...`
- NO modificar la ruta sin revisar `rawAppId` y `safeAppId` primero (definidos arriba en el estado global).
