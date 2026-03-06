---
name: sonidos-dopaminicos
description: "Úsame siempre que necesites buscar, crear, implementar o auditar efectos de sonido (SFX) en la aplicación. Esta habilidad te guía para conseguir una experiencia auditiva premium, sutil y altamente dopamínica para el usuario, asegurando que cada evento tenga el feedback sonoro adecuado."
---

# Diseñador de Sonidos Dopamínicos

Esta habilidad define los estándares y procedimientos para implementar feedback auditivo en la aplicación. El objetivo principal es generar una respuesta subconsciente de recompensa (dopamina) en el usuario, mejorando el "*Game Feel*", sin resultar invasivo, repetitivo o molesto.

## 1. Principios del Sonido Dopamínico
Todo efecto de sonido (SFX) en la aplicación debe cumplir con estas reglas de oro:
1. **Sutil y Orgánico**: Evita ruidos estridentes, pitidos digitales puros o volúmenes altos. Usa sonidos redondeados, campanillas suaves (chimes), percusiones de madera, golpes de burbuja (bubbles) o chasquidos orgánicos (snaps, pops).
2. **Progresión Ascendente**: Para acciones positivas (ganar puntos, subir de nivel, tachar una tarea), los tonos deben ir en escala armónica ascendente (ej. intervalos de 3ra, 5ta o acordes mayores) para transmitir "éxito" o "crecimiento".
3. **Corta Duración**: Un sonido de interfaz regular (UI) debe durar menos de 0.3 segundos (300ms). Los eventos excepcionales (como ganar un Gran Logro Legendario o cobrar mucho dinero) pueden durar hasta 2-3 segundos y tener "cola de reverberación".
4. **Espacialidad**: Usa sonidos estéreo y dales un poco de reverberación (reverb) sutil o retardo (delay) para que no suenen secos ni crudos; esto les da un aire "premium".

## 2. Paleta de Sonidos por Evento
Aplica los siguientes perfiles sonoros según el tipo de interacción del usuario:

### A. Interacciones Básicas (Micro-interacciones)
- **Click en botones de Menú/Navegación**: *Pop* suave, un tap o clic de madera muy sutil. Corto, apenas perceptible.
- **Marcar un Checkbox/Tarea diaria completa**: Un *Chime* (campanilla) ascendente, cristalino y mágico (sparkle).
- **Desmarcar Checkbox**: Un tono descendente muy corto, o un *swoosh* seco parecido al pasar una hoja de papel de vuelta.

### B. Eventos de Recompensa (Grandes Inyecciones de Dopamina)
- **Reclamar un Logro / Subir Nivel de Logro**: 
  - *Común / Raro*: Sonido de destello rápido (magic glitter) + campanilla aguda.
  - *Épico / Legendario*: Acorde musical completo ascendente triunfal con sintetizadores cálidos o campanas tubulares, acompañado de una explosión grave de partículas (bass drop/boom sutil).
- **Cobrar Monedas / Canjear RPC**: Sonidillo rítmico similar a monedas cayendo suavemente en una bolsa de cuero.
- **Modo Frenesí / Racha de Combo**: Latidos de corazón acelerándose, o un tono tipo *power-up* sostenido (como cuando Mario carga el giro) y ecos expansivos.

### C. Alertas y Errores (Avisos de Reducción de Tensión)
- **Modo Alerta (A punto de perder racha)**: Tonos graves suaves. Cero sirenas. Un latido (heartbeat thud) preocupante pero elegante, seguido de un eco.
- **Error / Fallo de UI**: Un tono apagado de madera seca, sin reverberación, descendente (*clonk, bop*).

## 3. Implementación Práctica en Código (React)
Sigue estas buenas prácticas al integrar sonido en la base de código del proyecto:
1. **Alojamiento (Assets)**: Guarda los recursos `.mp3` o `.wav` optimizados y con volumen normalizado en la carpeta pública: `public/sounds/`.
2. **Funciones Reutilizables de Reproducción**: Crea funciones utilitarias o usa un hook (ej. `use-sound`) para no instanciar manualmente objetos de Audio cada vez.
3. **Control de Volumen Base**: Los sonidos siempre deben configurarse por defecto al 30-50% del volumen del sistema (`audio.volume = 0.4;`). Permitir que el sonido asuste al usuario es un fallo crítico de diseño.
4. **Botón de Silencio (Mute Toggle)**: Asume siempre un contexto de respeto. Implementa y respeta estados globales de sonido (`isSoundEnabled`). Piensa que los usuarios juegan las recompensas a veces de madrugada con la familia durmiendo.

```javascript
// Ejemplo de un hook seguro para reproducir sonido dopamínico
export const playDopamineReward = () => {
    // Verificar si el usuario silencio la app
    if(localStorage.getItem('hometeam_mute_sounds') === 'true') return;
    
    // Reproducir con volumen suave y controlado
    const audio = new Audio('/sounds/premium_chime_up.mp3');
    audio.volume = 0.35; 
    audio.play().catch(e => console.error("Audio bloqueado por el navegador", e));
};
```

## 4. Guía para Buscar/Generar los Sonidos
Si el usuario te pide crear o buscar los sonidos a añadir, aconséjale usar plataformas libres de regalías (como Pixabay, Freesound.org, Splice) recomendándole buscar con estas **keywords en inglés**:
- **Para tareas exitosas:** `ui success chime`, `magic sparkle notification`, `soft bell ding`, `level up synth`.
- **Para clics en la interfaz:** `soft pop UI`, `wooden click button`, `bubble pop UI`.
- **Para evoluciones legendarias:** `epic orchestral swell`, `magical power up whoosh`, `cinematic impact reward`.

*Como agente, tu tarea es analizar el código y saber en qué clímax exacto o función (ej. dentro de un `setTimeout` con confeti) se debe inyectar la línea del Audio, para sincronizarlo rítmicamente a la percepción visual.*
