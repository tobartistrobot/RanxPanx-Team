import React, { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client'; // ¡Esta es la pieza clave que faltaba!
import {
  Play, Square, Calendar as CalendarIcon, BarChart3, Clock,
  Plus, User, CheckCircle2, X, Check, Moon, Sun, Edit2, Trash2, History,
  ChevronRight, ChevronDown, Award, TrendingUp, WifiOff,
  Sparkles, Coffee, Briefcase, Activity, CheckSquare, Pause, ShoppingCart,
  GripVertical, Store, Gift, Flame, Zap, Star, Tag, ShoppingBag, Settings, Shield
} from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, query, deleteDoc, doc, updateDoc, setDoc } from 'firebase/firestore';

// --- CONFIGURACIÓN DE FIREBASE ---
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const rawAppId = 'ranxpanx-team-prod';
const safeAppId = rawAppId.replace(/\//g, '_');

// --- DATOS: FRASES INSPIRACIONALES ---
const DAILY_QUOTES = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "La disciplina es el puente entre tus metas y tus logros.",
  "No cuentes los días, haz que los días cuenten.",
  "Un viaje de mil millas comienza con un solo paso. Lao-Tse.",
  "Lo que haces hoy puede mejorar todas tus mañanas.",
  "La única forma de hacer un gran trabajo es amar lo que haces. Steve Jobs.",
  "No busques el momento perfecto, solo busca el momento y hazlo perfecto.",
  "Cada pequeña tarea completada es una victoria para el equipo.",
  "El esfuerzo organizado es la llave que abre todas las puertas.",
  "Trabajar en equipo divide la tarea y multiplica el éxito.",
  "La constancia vence a lo que la dicha no alcanza.",
  "Hoy es un buen día para avanzar un paso más juntos.",
  "Tus acciones de hoy conforman tu libertad de mañana.",
  "La motivación nos impulsa a comenzar, el hábito nos permite continuar.",
  "Pequeños actos de cuidado mantienen el hogar y el espíritu inquebrantables.",
  "El progreso lento es infinitamente mejor que el estancamiento.",
  "La lealtad no se exige, se cultiva regándola con acciones diarias.",
  "Un compañero de vida no es quien te mira, sino quien mira en tu misma dirección.",
  "No existe desafío demasiado grande si los cimientos de la confianza son sólidos.",
  "El amor se demuestra en los detalles cotidianos tanto como en las grandes promesas.",
  "Ser fuerte no es nunca caer, es ayudarse mutuamente a levantarse una y otra vez.",
  "El respeto es el único pilar sobre el que se puede construir un futuro eterno.",
  "Si la carga pesa demasiado, recuerda que somos dos para sostenerla.",
  "Un hogar no son cuatro paredes, es el refugio que creamos cuando estamos juntos.",
  "La sabiduría no está en no equivocarse, sino en aprender a perdonar y mejorar juntos.",
  "Incluso las tareas más tediosas brillan si el propósito es cuidar de los nuestros.",
  "Siembra sonrisas en tu rutina y recogerás un hogar lleno de luz.",
  "No se rinde quien sabe que detrás del esfuerzo está el bienestar de su tribu.",
  "Un líder no es quien manda, es quien inspira a su equipo sirviendo primero.",
  "Aquel que domina su paciencia es más fuerte que quien conquista una ciudad.",
  "El mejor momento para plantar un árbol fue hace 20 años; el segundo mejor es ahora.",
  "La bondad es el lenguaje que los sordos pueden oír y los ciegos pueden ver.",
  "El trabajo que no se ve es el que sostiene las victorias que todo el mundo aplaude.",
  "Nadie se hizo grande mostrando cómo de pequeños son los demás.",
  "La verdadera libertad nace de dominar nuestros propios impulsos.",
  "Si quieres ir rápido, ve solo. Si quieres llegar lejos, ve acompañado.",
  "El que hace el bien a los demás, a sí mismo se enriquece.",
  "El coraje no siempre ruge. A veces es la voz tranquila que dice: 'mañana lo intentaré de nuevo'.",
  "El amor es el espacio donde dejamos que el otro sea exactamente quien es.",
  "Un espíritu agradecido es el abono perfecto para la felicidad diaria.",
  "No puedes calmar la tormenta, pero puedes ser el ancla para los que amas.",
  "Convierte tus heridas en sabiduría y tus fracasos en gasolina.",
  "Una promesa rota es una herida en la confianza; una mantenida, es cemento armado.",
  "El valor de una persona se mide por cómo trata a quienes no pueden ofrecerle nada.",
  "Quien tiene por qué vivir puede soportar casi cualquier cómo.",
  "Nuestras vidas son los ríos que van a dar a la familia, que es la mar.",
  "El mejor remedio contra el desánimo es el sonido de las risas compartidas en casa.",
  "Sé suave, no dejes que el mundo endurezca tu corazón amable.",
  "La energía que pones en ordenar tu entorno se refleja ordenando tu mente.",
  "Dedica tiempo a afilar el hacha antes de ponerte a talar el bosque.",
  "Lo ordinario se vuelve extraordinario cuando se hace con amor incondicional.",
  "Nada grande se ha conseguido jamás sin entusiasmo y sin equipo.",
  "Tu mayor riqueza no está en la cuenta del banco, sino en quienes se sientan a tu mesa.",
  "La empatía es tratar de sentir el frío del otro antes de exigirle que entre en calor.",
  "Una discusión jamás se gana gritando más alto, sino escuchando más profundo.",
  "La paciencia es amarga en la raíz, pero sus frutos son dulces.",
  "Las cosas más valiosas de este mundo no son cosas, son momentos.",
  "Ser vulnerable con el otro es la mayor muestra de coraje cívico y amoroso.",
  "Es en los momentos de fatiga extrema cuando se demuestra de qué estamos hechos.",
  "Un equipo imbatible es aquel donde nadie teme decir: 'necesito ayuda'.",
  "Brilla tanto que deslumbres a los problemas y guíes a los que te rodean.",
  "Un error es solo una oportunidad de empezar de nuevo, esta vez de forma más inteligente.",
  "Todo aquello que vale la pena requiere tiempo, paciencia y fe recíproca.",
  "Hazlo, y si te da miedo, hazlo con miedo. Pero no te detengas.",
  "Las manos que ayudan siempre son más sagradas que los labios que rezan.",
  "Cuidar del espacio compartido es una carta de amor escrita con acciones.",
  "El amor verdadero no trata de encontrar a alguien perfecto, sino a alguien que acepte tus imperfecciones.",
  "Si no dejas de intentarlo, tarde o temprano te despertarás habiendo ganado.",
  "Las montañas se conquistan piedra a piedra, y la paz del hogar, detalle a detalle.",
  "Tu tiempo es el recurso más valioso que tienes; regálalo solo a quien construya contigo.",
  "No esperes a que llegue la luz; conviértete en ella.",
  "Quien no añade nada a sus conocimientos los disminuye. Aprendamos juntos.",
  "El secreto de la felicidad no es hacer siempre lo que se quiere, sino querer siempre lo que se hace.",
  "Frente a la adversidad, o nos hacemos pequeños, o nos volvemos inmensos juntos.",
  "El sudor del trabajo honesto y por los demás es el perfume de los grandes héroes diarios.",
  "Confiar es el mayor riesgo del mundo, pero no hacerlo asegura la soledad perpetua.",
  "Nada pesa cuando quien lo carga es el amor genuino por los tuyos.",
  "Convierte tu casa en un refugio de paz y nunca querrás estar en ningún otro sitio.",
  "El verdadero progreso se cuaja en días donde nadie mira y solo importa el propósito.",
  "Haz hoy algo de lo que tu 'yo' del mañana esté tremendamente orgulloso.",
  "Cada minuto dedicado al equipo es una semilla que germinará en gratitud eterna.",
  "Si crees que puedes, ya estás a mitad de camino.",
  "La sabiduría suprema radica en distinguir lo urgente de lo que es verdaderamente importante.",
  "Ríe siempre que puedas. Es la medicina más barata y el pegamento más fuerte.",
  "Aquellos que no se rinden mágicamente cambian su suerte.",
  "Escuchar es un acto de amor; hacer sentir escuchado, es un milagro.",
  "Un pacto de lealtad absoluta es un muro irrompible contra la inclemencia de la vida.",
  "La excelencia no es un acto, es un hábito cultivado entre cuatro paredes.",
  "Da sin recordar y recibe sin olvidar.",
  "Para conocer la grandeza de una persona, obsérvala cuando tiene el poder de dañar y elige sanar.",
  "El éxito consiste en ir de fracaso en fracaso sin perder el entusiasmo.",
  "Incluso la noche más oscura no puede apagar la luz de un corazón que ama resolutamente.",
  "A veces, el mayor logro del día es haber mantenido la sonrisa frente a la persona amada.",
  "Las cicatrices compartidas son los tatuajes de las victorias más difíciles de la dupla.",
  "Atrévete a ser el tipo de persona que deja todo un poco mejor de lo que lo encontró.",
  "Perdonar es liberar a un prisionero y descubrir que el prisionero eras tú.",
  "Sé el hombro en el que tu equipo confía cuando el mundo exterior aprieta demasiado.",
  "La vida no te ocurre a ti; la vida responde y reacciona a ti. Actúa con nobleza.",
  "Al final, solo importan tres cosas: cuánto amaste, cuán gentil fuiste y qué tan bien aprendiste a soltar."
];

// --- DATOS: ESTILOS AUTOMÁTICOS DE TAREAS ---
const TASK_STYLES = [
  { icon: Sparkles, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { icon: Coffee, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { icon: Briefcase, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { icon: Activity, color: 'text-red-500', bg: 'bg-red-500/10' },
  { icon: CheckSquare, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { icon: CheckCircle2, color: 'text-pink-500', bg: 'bg-pink-500/10' }
];

const getTaskStyle = (taskName) => {
  if (!taskName) return TASK_STYLES[0];
  let hash = 0;
  for (let i = 0; i < taskName.length; i++) {
    hash = taskName.charCodeAt(i) + ((hash << 5) - hash);
  }
  return TASK_STYLES[Math.abs(hash) % TASK_STYLES.length];
};

// --- COLORES DE USUARIO ---
const USER_COLORS = [
  { id: 'indigo', css: 'text-indigo-500', bg: 'bg-indigo-500', ring: 'ring-indigo-500' },
  { id: 'rose', css: 'text-rose-500', bg: 'bg-rose-500', ring: 'ring-rose-500' },
  { id: 'emerald', css: 'text-emerald-500', bg: 'bg-emerald-500', ring: 'ring-emerald-500' },
  { id: 'amber', css: 'text-amber-500', bg: 'bg-amber-500', ring: 'ring-amber-500' },
  { id: 'cyan', css: 'text-cyan-500', bg: 'bg-cyan-500', ring: 'ring-cyan-500' }
];

// --- UTILIDADES ---
const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
};

const formatTimeDetailed = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m}m ${s}s`;
  return `${m}m ${s}s`;
};

const formatTimeDigital = (seconds) => {
  const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
};

const getLocalYYYYMMDD = (d = new Date()) => {
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - offset).toISOString().split('T')[0];
};

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [user, setUser] = useState(null);
  const [chores, setChores] = useState([]);
  const [groceries, setGroceries] = useState([]);
  const [supermarkets, setSupermarkets] = useState([]);
  const [activeTab, setActiveTab] = useState('timer');
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('hometeam_dark') === 'true');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const [userName, setUserName] = useState(() => localStorage.getItem('hometeam_username') || '');
  const [userColor, setUserColor] = useState(() => localStorage.getItem('hometeam_usercolor') || 'indigo');
  const [showProfileModal, setShowProfileModal] = useState(!localStorage.getItem('hometeam_username'));

  const [activeTask, setActiveTask] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [taskInput, setTaskInput] = useState('');
  const [groceryInput, setGroceryInput] = useState('');
  const [selectedSupermarket, setSelectedSupermarket] = useState('');
  const [showAdminModal, setShowAdminModal] = useState(false);

  const [modalMode, setModalMode] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [manualData, setManualData] = useState({ name: '', hours: 0, minutes: 0, date: getLocalYYYYMMDD() });

  const [toast, setToast] = useState({ msg: '', visible: false, type: 'success' });

  const [expandedUser, setExpandedUser] = useState(null);
  const [radiographyView, setRadiographyView] = useState('day');

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarUserFilter, setCalendarUserFilter] = useState(null);

  // GAMIFICATION SYSTEM STATE
  const [usersData, setUsersData] = useState({});
  const [storeItems, setStoreItems] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [moments, setMoments] = useState([]);
  const [rewardsView, setRewardsView] = useState('store');
  const [showItemModal, setShowItemModal] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', cost: 10, icon: '🎁' });

  // SUPERMARKET CUSTOMIZATION STATE
  const [showSupermarketModal, setShowSupermarketModal] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const initAuth = async () => {
      try {
        await signInAnonymously(auth);
      } catch (error) { console.error("Auth error:", error); }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const choresRef = collection(db, 'artifacts', safeAppId, 'public', 'data', 'chores');
    const unsubscribeChores = onSnapshot(query(choresRef), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      data.sort((a, b) => b.timestamp - a.timestamp);
      setChores(data);
    }, (error) => console.error("Firestore chores error:", error));

    const groceriesRef = collection(db, 'artifacts', safeAppId, 'public', 'data', 'groceries');
    const unsubscribeGroceries = onSnapshot(query(groceriesRef), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Sort first by order property if exists, fallback to timestamp
      data.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
        return a.timestamp - b.timestamp;
      });
      setGroceries(data);
    }, (error) => console.error("Firestore groceries error:", error));

    const supermarketsRef = collection(db, 'artifacts', safeAppId, 'public', 'data', 'supermarkets');
    const unsubscribeSupermarkets = onSnapshot(query(supermarketsRef), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      data.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
        return a.name.localeCompare(b.name);
      });
      setSupermarkets(data);
    }, (error) => console.error("Firestore supermarkets error:", error));

    const usersRef = collection(db, 'artifacts', safeAppId, 'public', 'data', 'users');
    const unsubscribeUsers = onSnapshot(query(usersRef), (snapshot) => {
      const data = {};
      snapshot.docs.forEach(doc => { data[doc.id] = doc.data(); });
      setUsersData(data);
    }, (error) => console.error("Firestore users error:", error));

    const storeRef = collection(db, 'artifacts', safeAppId, 'public', 'data', 'store_items');
    const unsubscribeStore = onSnapshot(query(storeRef), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      data.sort((a, b) => b.timestamp - a.timestamp);
      setStoreItems(data);
    });

    const couponsRef = collection(db, 'artifacts', safeAppId, 'public', 'data', 'coupons');
    const unsubscribeCoupons = onSnapshot(query(couponsRef), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      data.sort((a, b) => b.timestamp - a.timestamp);
      setCoupons(data);
    });

    const momentsRef = collection(db, 'artifacts', safeAppId, 'public', 'data', 'moments');
    const unsubscribeMoments = onSnapshot(query(momentsRef), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      data.sort((a, b) => b.timestamp - a.timestamp);
      setMoments(data);
    });

    return () => {
      unsubscribeChores();
      unsubscribeGroceries();
      unsubscribeSupermarkets();
      unsubscribeUsers();
      unsubscribeStore();
      unsubscribeCoupons();
      unsubscribeMoments();
    };
  }, [user]);

  useEffect(() => {
    localStorage.setItem('hometeam_dark', isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    let interval = null;
    if (activeTask && !activeTask.isPaused) {
      interval = setInterval(() => {
        setElapsed(activeTask.accumulatedTime + Math.floor((Date.now() - activeTask.startTime) / 1000));
      }, 1000);
    } else if (activeTask && activeTask.isPaused) {
      setElapsed(activeTask.accumulatedTime);
    } else {
      setElapsed(0);
    }
    return () => clearInterval(interval);
  }, [activeTask]);

  const suggestions = useMemo(() => {
    const names = chores.map(c => c.taskName);
    return [...new Set(names)].slice(0, 6);
  }, [chores]);

  const grocerySuggestions = useMemo(() => {
    const names = groceries.map(g => g.name);
    return [...new Set(names)].slice(0, 6);
  }, [groceries]);

  const autocompleteResults = useMemo(() => {
    if (!taskInput || activeTask) return [];
    const lowerInput = taskInput.toLowerCase().trim();
    if (!lowerInput) return [];
    const uniqueTasks = [...new Set(chores.map(c => c.taskName))];
    const matches = uniqueTasks.filter(t => t.toLowerCase().includes(lowerInput) && t.toLowerCase() !== lowerInput);
    return matches.slice(0, 5);
  }, [taskInput, activeTask, chores]);

  const hotTasks = useMemo(() => {
    const uniqueTasks = [...new Set(chores.map(c => c.taskName))];
    return uniqueTasks.map(t => {
      const taskChores = chores.filter(c => c.taskName === t);
      return taskChores.sort((a, b) => b.timestamp - a.timestamp)[0];
    }).filter(c => c && c.timestamp < Date.now() - 60000).map(c => {
      const daysSince = (Date.now() - c.timestamp) / (1000 * 3600 * 24);
      return { name: c.taskName, multiplier: Math.pow(1.10, daysSince) };
    }).filter(t => t.multiplier >= 1.01).sort((a, b) => b.multiplier - a.multiplier).slice(0, 3);
  }, [chores]);

  const userTotalToday = useMemo(() => {
    const todayStr = getLocalYYYYMMDD();
    return chores.filter(c => c.userName === userName && c.dateString === todayStr).reduce((s, c) => s + c.durationSeconds, 0);
  }, [chores, userName]);
  const frenzyProgress = Math.min((userTotalToday / 3600) * 100, 100);
  const inFrenzyMode = userTotalToday >= 3600;

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type, visible: true });
    setTimeout(() => setToast({ msg: '', type: 'success', visible: false }), 3000);
  };

  const togglePlayPause = () => {
    if (!userName) { setShowProfileModal(true); return; }
    if (!activeTask) {
      // Iniciar nuevo contador
      setActiveTask({ name: taskInput, startTime: Date.now(), accumulatedTime: 0, isPaused: false });
    } else if (activeTask.isPaused) {
      // Reanudar
      setActiveTask({ ...activeTask, startTime: Date.now(), isPaused: false });
    } else {
      // Pausar
      setActiveTask({ ...activeTask, accumulatedTime: elapsed, isPaused: true });
    }
  };

  const triggerConfetti = async (seconds) => {
    if (seconds < 60) return; // Menos de 1 min: Sin recompensa

    const confetti = (await import('canvas-confetti')).default;
    const minutes = seconds / 60;

    if (minutes >= 600) { // > 10 Horas: Modo Dios (Fuegos Artificiales Intensos)
      const duration = 15 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      const randomInRange = (min, max) => Math.random() * (max - min) + min;
      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);
    } else if (minutes > 60) { // 1 a 10 Horas: Cañón denso
      confetti({ particleCount: Math.min(600, 100 + Math.floor(minutes * 2)), spread: 120, startVelocity: 45, origin: { y: 0.8 }, colors: ['#fffc00', '#ff008d', '#00e5ff', '#ff5100', '#56ff00'] });
    } else if (minutes > 10) { // 10 a 60 Minutos: Buen cañón
      confetti({ particleCount: 150 + Math.floor(minutes), spread: 90, origin: { y: 0.7 }, colors: ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#3b82f6'] });
    } else { // 1 a 10 Minutos: Pop básico escalable
      confetti({ particleCount: 50 + Math.floor(minutes * 5), spread: 60, origin: { y: 0.6 } });
    }
  };

  const playCashSound = () => {
    try {
      const audio = new Audio('https://cdn.freesound.org/previews/332/332629_5065845-lq.mp3');
      audio.volume = 0.5;
      audio.play().catch(e => console.log('Audio play error:', e));
    } catch (e) { }
  };

  const processRPCAndFrenzy = async (taskName, durationSeconds, isManual = false) => {
    if (!userName || durationSeconds < 60) return; // Menos de 1 min no da RPC

    // 1. Calcular Base (1 RPC por cada 15 mins)
    let rpcEarned = durationSeconds / 900;

    // 2. Interés Compuesto
    const taskHistory = chores.filter(c => c.taskName === taskName && c.timestamp < Date.now() - 60000);
    let targetChore = taskHistory.length > 0 ? taskHistory.sort((a, b) => b.timestamp - a.timestamp)[0] : null;

    if (targetChore) {
      const daysSince = (Date.now() - targetChore.timestamp) / (1000 * 3600 * 24);
      rpcEarned = rpcEarned * Math.pow(1.10, daysSince);
    }

    // 3. Revisar Frenesí Diario (>= 3600 segundos agregados hoy)
    const todayStr = getLocalYYYYMMDD();
    const todayChores = chores.filter(c => c.userName === userName && c.dateString === todayStr);
    const totalTodayBeforeThis = todayChores.reduce((sum, c) => sum + c.durationSeconds, 0);

    let inFrenzy = false;
    let justTriggeredFrenzy = false;

    if (totalTodayBeforeThis >= 3600) {
      rpcEarned *= 2.0;
      inFrenzy = true;
    } else if ((totalTodayBeforeThis + durationSeconds) >= 3600) {
      rpcEarned *= 2.0;
      inFrenzy = true;
      justTriggeredFrenzy = true;
      showToast('🔥 ¡MODO FRENESÍ x2 DESATADO HASTA MAÑANA!', 'success');
      import('canvas-confetti').then((confetti) => {
        confetti.default({ particleCount: 300, spread: 160, origin: { y: 0.5 }, colors: ['#ff0000', '#ff5a00', '#ff9a00', '#ffce00', '#ffe808'] });
      });
    }

    rpcEarned = Math.round(rpcEarned * 100) / 100;
    const userData = usersData[userName] || { rpcBalance: 0 };

    // 5. Guardar
    try {
      await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', userName), {
        rpcBalance: (userData.rpcBalance || 0) + rpcEarned
      }, { merge: true });

      playCashSound();
      if (!justTriggeredFrenzy && rpcEarned >= 0.1) {
        showToast(`+${rpcEarned.toFixed(2)} RPC Añadidos ${inFrenzy ? '🔥 x2' : ''}`, 'success');
      }
    } catch (err) {
      console.error("Error updating RPC", err);
    }
  };

  const stopAndSaveTimer = async () => {
    if (!activeTask) return;
    const durationSeconds = elapsed;
    if (durationSeconds > 5) {
      try {
        await processRPCAndFrenzy(activeTask.name || 'Tarea sin nombre', durationSeconds);

        await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'chores'), {
          taskName: activeTask.name || 'Tarea sin nombre',
          durationSeconds,
          timestamp: Date.now(),
          dateString: getLocalYYYYMMDD(),
          userName: userName,
          userColor: userColor,
          userId: user?.uid || 'anonymous'
        });
        showToast('¡Tarea guardada con éxito!', 'success');

        triggerConfetti(durationSeconds);
      } catch (error) {
        console.error("Error saving chore:", error);
        showToast('Error al guardar.', 'error');
      }
    }
    setActiveTask(null);
    setTaskInput('');
  };

  const addGrocery = async (name) => {
    if (!name.trim()) return;
    if (!userName) { setShowProfileModal(true); return; }
    try {
      const highestOrder = Math.max(-1, ...groceries.filter(g => !g.completed).map(g => g.order || 0));
      await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'groceries'), {
        name: name.trim(),
        completed: false,
        timestamp: Date.now(),
        userName: userName,
        userColor: userColor,
        supermarket: selectedSupermarket,
        order: highestOrder + 1
      });
      setGroceryInput('');
    } catch (error) {
      console.error("Error adding grocery:", error);
      showToast('Error al añadir producto', 'error');
    }
  };

  const handleDragEndGroceries = async (result) => {
    if (!result.destination) return;

    const pendingGroceries = groceries.filter(g => !g.completed);
    const items = Array.from(pendingGroceries);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update optimistic UI order immediately to prevent flickers
    const updatedGroceries = groceries.map(g => {
      if (g.completed) return g;
      const newIndex = items.findIndex(item => item.id === g.id);
      return { ...g, order: newIndex };
    }).sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
      return a.timestamp - b.timestamp;
    });
    setGroceries(updatedGroceries);

    // Save batch to firestore
    try {
      items.forEach(async (item, index) => {
        if (item.order !== index) {
          await updateDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'groceries', item.id), {
            order: index
          });
        }
      });
    } catch (error) {
      console.error("Error updating sort order:", error);
    }
  };

  const toggleGrocery = async (id, currentStatus) => {
    try {
      await updateDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'groceries', id), {
        completed: !currentStatus
      });
      if (!currentStatus) {
        import('canvas-confetti').then((confetti) => {
          confetti.default({ particleCount: 30, spread: 40, origin: { y: 0.8 }, colors: ['#10b981', '#ffffff'] });
        });
      }
    } catch (error) {
      console.error("Error toggling grocery:", error);
    }
  };

  const deleteGrocery = async (id) => {
    try {
      await deleteDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'groceries', id));
    } catch (error) {
      console.error("Error deleting grocery:", error);
    }
  };

  const addSupermarket = async () => {
    const name = window.prompt("Nombre del nuevo supermercado o tienda:");
    if (!name || !name.trim()) return;
    try {
      const highestOrder = Math.max(-1, ...supermarkets.map(s => s.order || 0));
      await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'supermarkets'), {
        name: name.trim(),
        order: highestOrder + 1,
        color: 'slate' // Default color
      });
    } catch (error) {
      console.error("Error adding supermarket:", error);
      showToast('Error al crear tienda', 'error');
    }
  };

  const handleDragEndSupermarkets = async (result) => {
    if (!result.destination) return;

    const items = Array.from(supermarkets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Optimistic UI updates
    const updatedSupermarkets = items.map((s, index) => ({ ...s, order: index }));
    setSupermarkets(updatedSupermarkets);

    try {
      updatedSupermarkets.forEach(async (item, index) => {
        if (item.order !== supermarkets.find(s => s.id === item.id)?.order) {
          await updateDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'supermarkets', item.id), {
            order: index
          });
        }
      });
    } catch (error) {
      console.error("Error updating sorted supermarkets:", error);
    }
  };

  const updateSupermarketColor = async (id, newColor) => {
    try {
      await updateDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'supermarkets', id), {
        color: newColor
      });
      // Optimistic update
      setSupermarkets(prev => prev.map(s => s.id === id ? { ...s, color: newColor } : s));
    } catch (error) {
      console.error("Error updating supermarket color:", error);
    }
  };

  const deleteSupermarket = async (e, id) => {
    e.stopPropagation(); // Evitar que seleccione al borrar
    if (window.confirm('¿Seguro que quieres borrar esta etiqueta de supermercado? (No borrará los productos que ya la tengan)')) {
      try {
        await deleteDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'supermarkets', id));
        if (selectedSupermarket === id) setSelectedSupermarket('');
      } catch (error) {
        console.error("Error deleting supermarket:", error);
      }
    }
  };

  const buyItem = async (item) => {
    const userData = usersData[userName];
    if (!userData || userData.rpcBalance < item.costRPC) {
      showToast('No tienes suficientes RPC copiados de energía', 'error');
      return;
    }

    if (!window.confirm(`¿Comprar ${item.name} por ${item.costRPC} RPC?`)) return;

    try {
      await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', userName), {
        rpcBalance: userData.rpcBalance - item.costRPC
      }, { merge: true });

      await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'coupons'), {
        itemName: item.name,
        icon: item.icon,
        owner: userName,
        timestamp: Date.now()
      });

      showToast('¡Compra realizada con éxito!', 'success');
      setRewardsView('inventory');
    } catch (err) {
      console.error(err);
      showToast('Error en la compra', 'error');
    }
  };

  const redeemCoupon = async (coupon) => {
    if (!window.confirm(`¿Seguro que quieres canjear y gastar: ${coupon.itemName}?`)) return;

    try {
      await deleteDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'coupons', coupon.id));

      await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'moments'), {
        itemName: coupon.itemName,
        icon: coupon.icon,
        owner: coupon.owner,
        redeemedAt: Date.now(),
        timestamp: Date.now()
      });

      const confetti = (await import('canvas-confetti')).default;
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 }, colors: ['#fffc00', '#ff008d', '#00e5ff', '#ff5100', '#56ff00'] });
      playCashSound();

      showToast('¡Premio canjeado! Disfruta tu momento.', 'success');
      setRewardsView('history');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveStoreItem = async () => {
    if (!newItem.name || newItem.cost <= 0) return;
    try {
      await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'store_items'), {
        name: newItem.name,
        costRPC: parseFloat(newItem.cost),
        icon: newItem.icon || '🎁',
        createdBy: userName,
        timestamp: Date.now()
      });
      setShowItemModal(false);
      setNewItem({ name: '', cost: 10, icon: '🎁' });
      showToast('Premio añadido a la tienda', 'success');
    } catch (err) {
      console.error(err);
    }
  };

  const handleAdminDeleteStoreItem = async (id) => {
    if (window.confirm('¿Seguro que quieres borrar este premio para TODOS?')) {
      await deleteDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'store_items', id));
      showToast('Premio eliminado de la tienda.', 'success');
    }
  };

  const handleAdminAddUser = async () => {
    const newName = window.prompt("Nombre del nuevo integrante o funcionario:");
    if (!newName) return;
    const rpcStr = window.prompt(`¿Con cuántos RPC iniciales empezará ${newName}?`, "0");
    if (rpcStr === null) return;
    const initialRPC = parseFloat(rpcStr);
    if (isNaN(initialRPC)) {
      showToast('Cantidad inicial inválida.', 'error');
      return;
    }
    try {
      await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', newName), { rpcBalance: initialRPC }, { merge: true });
      showToast(`Cuenta ${newName} actualizada.`, 'success');
    } catch (err) {
      console.error(err);
      showToast('Error de BD', 'error');
    }
  };

  const handleAdminDeleteCoupon = async (id) => {
    if (window.confirm('¿Revocar (borrar) este cupón del inventario de ese usuario?')) {
      await deleteDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'coupons', id));
      showToast('Cupón revocado.', 'success');
    }
  };

  const handleAdminRPC = async (targetUser) => {
    const deltaStr = window.prompt(`¿Cuántos RPC quieres empezar a añadir/quitar a ${targetUser}? (Usa negativo para restar, ej: -15, 50)`);
    if (!deltaStr) return;
    const delta = parseFloat(deltaStr);
    if (isNaN(delta)) {
      showToast('Cantidad inválida.', 'error');
      return;
    }
    const uData = usersData[targetUser] || { rpcBalance: 0 };
    const newVal = Math.max(0, uData.rpcBalance + delta);
    if (window.confirm(`¿Añadir/Quitar ${delta > 0 ? '+' + delta : delta} RPC a ${targetUser}? (Nuevo balance: ${newVal.toFixed(2)})`)) {
      await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', targetUser), { rpcBalance: newVal }, { merge: true });
      showToast('Balance actualizado.', 'success');
    }
  };

  const handleSaveManual = async () => {
    if (!manualData.name || (manualData.hours === 0 && manualData.minutes === 0)) return;
    const totalSeconds = (parseInt(manualData.hours || 0) * 3600) + (parseInt(manualData.minutes || 0) * 60);
    const payload = {
      taskName: manualData.name,
      durationSeconds: totalSeconds,
      dateString: manualData.date,
      timestamp: new Date(manualData.date).getTime(),
      userName: userName,
      userColor: userColor,
      userId: user?.uid || 'anonymous'
    };
    try {
      if (modalMode === 'edit' && editingItem) {
        await updateDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'chores', editingItem.id), payload);
      } else {
        await processRPCAndFrenzy(payload.taskName, payload.durationSeconds, true);
        await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'chores'), payload);
      }
      setModalMode(null);
      setEditingItem(null);
      showToast('¡Registro añadido!', 'success');
    } catch (error) {
      console.error("Error saving manual database entry:", error);
      showToast("Error de conexión.", 'error');
    }
  };

  const deleteChore = async (id) => {
    if (window.confirm('¿Eliminar este registro?')) {
      await deleteDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'chores', id));
    }
  };

  const openEdit = (chore) => {
    setEditingItem(chore);
    setManualData({
      name: chore.taskName,
      hours: Math.floor(chore.durationSeconds / 3600),
      minutes: Math.floor((chore.durationSeconds % 3600) / 60),
      date: chore.dateString
    });
    setModalMode('edit');
  };

  const getChoresForDate = (date) => {
    const dateStr = getLocalYYYYMMDD(date);
    return chores.filter(c => c.dateString === dateStr);
  };

  const selectedDayStats = useMemo(() => {
    const dayChores = getChoresForDate(selectedDate);
    const users = {};
    dayChores.forEach(c => { users[c.userName] = (users[c.userName] || 0) + c.durationSeconds; });
    return { users, total: dayChores.reduce((s, c) => s + c.durationSeconds, 0) };
  }, [chores, selectedDate]);

  const selectedWeekStats = useMemo(() => {
    const d = new Date(selectedDate);
    d.setHours(0, 0, 0, 0);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    const startOfWeek = new Date(d.setDate(diff));
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    const weekChores = chores.filter(c => c.timestamp >= startOfWeek.getTime() && c.timestamp <= endOfWeek.getTime());
    const users = {};
    weekChores.forEach(c => { users[c.userName] = (users[c.userName] || 0) + c.durationSeconds; });
    return { users, total: weekChores.reduce((s, c) => s + c.durationSeconds, 0) };
  }, [chores, selectedDate]);

  const selectedMonthStats = useMemo(() => {
    const monthStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}`;
    const monthChores = chores.filter(c => c.dateString.startsWith(monthStr));
    const users = {};
    monthChores.forEach(c => { users[c.userName] = (users[c.userName] || 0) + c.durationSeconds; });
    return { users, total: monthChores.reduce((s, c) => s + c.durationSeconds, 0) };
  }, [chores, selectedDate]);

  const currentRadiographyStats = radiographyView === 'day' ? selectedDayStats : (radiographyView === 'week' ? selectedWeekStats : selectedMonthStats);

  const getDailyQuote = () => {
    // Calculamos un índice basado en la fecha exacta local para que cambie cada medianoche
    const dateStr = getLocalYYYYMMDD();
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
      hash |= 0; // Convertir a entero de 32bits
    }
    const index = Math.abs(hash) % DAILY_QUOTES.length;
    return DAILY_QUOTES[index];
  };

  const dailyQuote = useMemo(() => getDailyQuote(), [getLocalYYYYMMDD()]);

  const stats = useMemo(() => {
    const currentMonthStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}`;
    const monthly = chores.filter(c => c.dateString.startsWith(currentMonthStr));
    const total = monthly.reduce((sum, c) => sum + c.durationSeconds, 0);
    const byPerson = {};
    monthly.forEach(c => {
      if (!byPerson[c.userName]) byPerson[c.userName] = { total: 0, tasks: {} };
      byPerson[c.userName].total += c.durationSeconds;
      byPerson[c.userName].tasks[c.taskName] = (byPerson[c.userName].tasks[c.taskName] || 0) + c.durationSeconds;
    });
    const personData = Object.entries(byPerson).map(([name, data]) => ({
      name, seconds: data.total, percentage: total ? Math.round((data.total / total) * 100) : 0,
      tasks: Object.entries(data.tasks).map(([task, sec]) => ({ name: task, seconds: sec })).sort((a, b) => b.seconds - a.seconds)
    })).sort((a, b) => b.seconds - a.seconds);
    const globalTasks = {};
    monthly.forEach(c => { globalTasks[c.taskName] = (globalTasks[c.taskName] || 0) + c.durationSeconds; });
    const taskDistribution = Object.entries(globalTasks).map(([name, seconds]) => ({
      name, seconds, percentage: total ? Math.round((seconds / total) * 100) : 0
    })).sort((a, b) => b.seconds - a.seconds).slice(0, 8);
    return { total, personData, taskDistribution };
  }, [chores, currentMonth]);

  const startingDay = (new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay() + 6) % 7;
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

  return (
    <div className={`${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'} min-h-screen font-sans pb-24 transition-colors duration-300 antialiased`}>
      {!isOnline && (
        <div className="bg-red-500 text-white text-[10px] font-bold py-1 text-center sticky top-0 z-50 animate-pulse flex items-center justify-center gap-2">
          <WifiOff size={12} /> MODO SIN CONEXIÓN
        </div>
      )}

      <header className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} px-6 pt-6 pb-4 shadow-sm sticky top-0 z-20 flex justify-between items-center border-b safe-top`}>
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-500/20">
            <Clock className="text-white" size={20} />
          </div>
          <h1 className="text-xl font-bold tracking-tight">RanxPanx Team</h1>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setShowProfileModal(true)} className={`text-xs font-bold px-3 py-1.5 rounded-full border ${isDarkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-50'}`}>
            {userName || 'Identifícate'}
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4">
        {activeTab === 'timer' && (
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4">

            <div className="px-4 py-2 text-center animate-in slide-in-from-top-2 fade-in duration-500 delay-100">
              <p className="text-sm italic font-medium text-slate-500 dark:text-slate-400">"{dailyQuote}"</p>
            </div>

            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-8 rounded-[3rem] shadow-2xl border relative overflow-hidden transition-all duration-500`}>

              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Timer Pro</span>
                <button onClick={() => { setModalMode('manual'); setManualData({ name: '', hours: 0, minutes: 0, date: getLocalYYYYMMDD() }); }} className="text-indigo-500 text-[10px] uppercase font-bold flex items-center gap-1 hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-1.5 rounded-full transition-colors">
                  <Plus size={12} strokeWidth={3} /> Registro manual
                </button>
              </div>

              <div className="relative mb-6 z-30">
                <input type="text" placeholder="¿Qué vas a hacer ahora, genio?" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} disabled={!!activeTask} className={`w-full text-lg font-medium p-5 rounded-2xl border transition-all shadow-inner ${isDarkMode ? 'bg-slate-950 border-slate-800 focus:border-indigo-500' : 'bg-slate-50 border-slate-200 focus:border-indigo-400 focus:bg-white'} focus:outline-none focus:ring-4 focus:ring-indigo-500/10`} />

                {autocompleteResults.length > 0 && !activeTask && (
                  <div className={`absolute top-full left-0 right-0 mt-2 p-2 rounded-2xl border shadow-2xl animate-in slide-in-from-top-2 fade-in duration-200 overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                    {autocompleteResults.map((res, i) => (
                      <button
                        key={res}
                        onClick={() => setTaskInput(res)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${isDarkMode ? 'hover:bg-slate-700 text-slate-300 hover:text-white' : 'hover:bg-slate-50 text-slate-600 hover:text-indigo-600'}`}
                      >
                        {res}
                        <Plus size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {!activeTask && hotTasks.length > 0 && (
                <div className="mb-6 delay-100 animate-in fade-in">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-3 ml-2 flex items-center gap-1.5"><Flame size={12} className="text-orange-500 animate-pulse" /> En busca y captura</p>
                  <div className="flex overflow-x-auto gap-3 pb-3 -mx-4 px-4 no-scrollbar snap-x">
                    {hotTasks.map(t => (
                      <button key={t.name} onClick={() => setTaskInput(t.name)} className={`shrink-0 snap-start text-xs px-4 py-2.5 rounded-2xl border border-orange-200 bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:border-orange-900/50 dark:text-orange-300 font-bold flex flex-col items-start justify-center gap-1 transition-all hover:scale-105 active:scale-95 shadow-sm shadow-orange-500/10`}>
                        {t.name}
                        <span className="text-[10px] bg-orange-200 dark:bg-orange-800 px-1.5 py-0.5 rounded-md text-orange-900 dark:text-orange-100 font-black tracking-tight">x{t.multiplier.toFixed(2)} RPC</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {!activeTask && suggestions.length > 0 && (
                <div className="mb-8 delay-200 animate-in fade-in">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-3 ml-2">Asignaciones Frecuentes</p>
                  <div className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4 no-scrollbar">
                    {suggestions.map(s => <button key={s} onClick={() => setTaskInput(s)} className={`shrink-0 text-[11px] font-bold px-4 py-2 rounded-xl border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300' : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm text-slate-600'}`}>{s}</button>)}
                  </div>
                </div>
              )}

              <div className="flex flex-col items-center mt-2 group">
                <div className={`text-6xl sm:text-7xl font-mono font-black tracking-tighter tabular-nums mb-6 transition-colors duration-500 ${activeTask ? (activeTask.isPaused ? 'text-indigo-400 animate-pulse' : 'text-indigo-600 dark:text-indigo-400 drop-shadow-md') : 'text-slate-300 dark:text-slate-700'}`}>
                  {formatTimeDigital(elapsed)}
                </div>

                <div className="relative flex justify-center items-center h-[140px] w-[140px]">
                  {/* Frenzy Progress Circular SVG */}
                  {(() => {
                    const radius = 64;
                    const stroke = 6;
                    const normalizedRadius = radius - stroke * 2;
                    const circumference = normalizedRadius * 2 * Math.PI;
                    const strokeDashoffset = circumference - (frenzyProgress / 100) * circumference;
                    return (
                      <svg height={radius * 2} width={radius * 2} className="absolute inset-0 m-auto rotate-[-90deg] drop-shadow-lg pointer-events-none">
                        <circle stroke={isDarkMode ? '#1e293b' : '#f1f5f9'} fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} />
                        <circle
                          stroke={inFrenzyMode ? '#f59e0b' : '#fb923c'}
                          fill="transparent"
                          strokeWidth={stroke + 1}
                          strokeDasharray={circumference + ' ' + circumference}
                          style={{ strokeDashoffset, transition: 'stroke-dashoffset 1s ease-in-out' }}
                          strokeLinecap="round"
                          r={normalizedRadius}
                          cx={radius}
                          cy={radius}
                          className={inFrenzyMode ? 'animate-pulse drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]' : ''}
                        />
                      </svg>
                    );
                  })()}

                  <div className="absolute top-[-20px] bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-1.5 z-20">
                    <Zap size={10} className={inFrenzyMode ? 'text-amber-500 animate-bounce' : 'text-slate-400'} />
                    <span className={`text-[9px] font-black tracking-widest uppercase ${inFrenzyMode ? 'text-amber-500' : 'text-slate-500'}`}>{Math.floor(userTotalToday / 60)} / 60 m</span>
                  </div>

                  <button onClick={togglePlayPause} className={`w-[96px] h-[96px] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 relative z-10 ${activeTask && !activeTask.isPaused ? 'bg-amber-500 text-white shadow-[0_0_30px_rgba(245,158,11,0.4)]' : 'bg-indigo-600 text-white shadow-[0_0_30px_rgba(79,70,229,0.4)]'}`}>
                    {activeTask && !activeTask.isPaused ? <Pause size={40} fill="currentColor" /> : <Play size={44} fill="currentColor" className="ml-2" />}
                  </button>
                </div>

                {activeTask && (
                  <div className="w-full mt-8 flex justify-center animate-in slide-in-from-top-4 fade-in">
                    <button onClick={stopAndSaveTimer} className="w-full max-w-[240px] h-14 rounded-2xl flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white text-sm font-bold shadow-xl shadow-red-500/30 transition-all transform active:scale-95 border-2 border-red-400/20">
                      <Square size={16} fill="currentColor" /> FINALIZAR TAREA
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-2">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">Actividad de hoy</h3>
              <div className="space-y-3">
                {chores.filter(c => c.dateString === getLocalYYYYMMDD()).slice(0, 5).map(chore => {
                  const style = getTaskStyle(chore.taskName);
                  const Icon = style.icon;
                  const uColorClass = USER_COLORS.find(c => c.id === chore.userColor)?.css || 'text-slate-500';
                  return (
                    <div key={chore.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-4 rounded-2xl border flex items-center justify-between group relative overflow-hidden`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${style.bg}`}><Icon size={18} className={style.color} /></div>
                        <div>
                          <p className="font-bold text-sm tracking-tight">{chore.taskName}</p>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-1">
                            <span className={`${style.color} font-bold`}>{new Date(chore.timestamp || Date.now()).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
                            • <span className={`font-bold ${uColorClass}`}>{chore.userName}</span> • {formatTimeDetailed(chore.durationSeconds)}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1 opacity-50 hover:opacity-100 transition-opacity">
                        <button onClick={() => openEdit(chore)} className="p-2 text-slate-400 hover:text-indigo-500 active:text-indigo-500"><Edit2 size={16} /></button>
                        <button onClick={() => deleteChore(chore.id)} className="p-2 text-slate-400 hover:text-red-500 active:text-red-500"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
        {activeTab === 'calendar' && (
          <div className="flex flex-col gap-6 animate-in fade-in">
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-5 rounded-3xl border shadow-sm`}>
              <div className="flex justify-between items-center mb-6">
                <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))} className="p-2"> &larr; </button>
                <h2 className="font-bold capitalize">{currentMonth.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</h2>
                <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))} className="p-2"> &rarr; </button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(d => <div key={d} className="text-[10px] font-bold text-slate-500">{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: startingDay }).map((_, i) => <div key={`empty-${i}`} className="aspect-square"></div>)}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const dateObj = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                  const isSelected = selectedDate.toDateString() === dateObj.toDateString();
                  const dateChores = getChoresForDate(dateObj);
                  const hasChores = dateChores.length > 0;

                  return (
                    <button key={`day-${day}`} onClick={() => setSelectedDate(dateObj)} className={`aspect-square flex flex-col items-center justify-center rounded-xl text-sm transition-all ${isSelected ? 'bg-indigo-600 text-white font-bold' : hasChores ? (isDarkMode ? 'bg-slate-800 text-indigo-400' : 'bg-indigo-50 text-indigo-600') : 'hover:bg-slate-100'}`}>
                      {day}
                      {hasChores && !isSelected && <div className="w-1 h-1 bg-indigo-500 rounded-full mt-1"></div>}
                    </button>
                  );
                })}
              </div>

              {/* Filtro de Usuario en Agenda */}
              {Object.keys(currentRadiographyStats.users).length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button onClick={() => setCalendarUserFilter(null)} className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border transition-all ${calendarUserFilter === null ? 'bg-slate-800 text-white border-slate-800 dark:bg-slate-200 dark:text-slate-900' : 'bg-transparent border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700'}`}>
                    Todos
                  </button>
                  {Object.keys(currentRadiographyStats.users).map(userNam => (
                    <button key={userNam} onClick={() => setCalendarUserFilter(userNam)} className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border transition-all ${calendarUserFilter === userNam ? 'bg-indigo-500 text-white border-indigo-500' : 'bg-transparent border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700'}`}>
                      {userNam}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-5 rounded-3xl border shadow-sm`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2"><TrendingUp size={14} /> Radiografía</h3>
                <div className={`flex rounded-lg p-1 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  {['day', 'week', 'month'].map(view => (
                    <button key={view} onClick={() => setRadiographyView(view)} className={`text-[10px] font-bold px-2.5 py-1.5 rounded-md transition-all ${radiographyView === view ? (isDarkMode ? 'bg-slate-700 text-indigo-400' : 'bg-white text-indigo-600 shadow-sm') : 'text-slate-500'}`}>
                      {view === 'day' ? 'Día' : view === 'week' ? 'Semana' : 'Mes'}
                    </button>
                  ))}
                </div>
              </div>
              {currentRadiographyStats.total === 0 ? <p className="text-center text-xs text-slate-400 italic py-3">Sin registros.</p> : (
                <div className="space-y-4">
                  {Object.entries(currentRadiographyStats.users).map(([name, seconds]) => (
                    <div key={name}>
                      <div className="flex justify-between text-xs mb-1 font-bold"><span>{name}</span><span>{formatTimeDetailed(seconds)}</span></div>
                      <div className="h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 transition-all duration-700" style={{ width: `${(seconds / currentRadiographyStats.total) * 100}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-3">
              {getChoresForDate(selectedDate).filter(c => !calendarUserFilter || c.userName === calendarUserFilter).length > 0 ? (
                getChoresForDate(selectedDate).filter(c => !calendarUserFilter || c.userName === calendarUserFilter).map(chore => {
                  const style = getTaskStyle(chore.taskName);
                  const Icon = style.icon;
                  const uColorClass = USER_COLORS.find(c => c.id === chore.userColor)?.css || 'text-slate-500';
                  return (
                    <div key={chore.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-4 rounded-2xl border flex items-center justify-between relative overflow-hidden`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${style.bg}`}><Icon size={14} className={style.color} /></div>
                        <div>
                          <p className="font-bold text-sm">{chore.taskName}</p>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                            <span className={style.color}>{new Date(chore.timestamp || Date.now()).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
                            • <span className={`font-bold ${uColorClass}`}>{chore.userName}</span> • <span className="text-slate-500 font-medium">{formatTimeDetailed(chore.durationSeconds)}</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1 opacity-50 hover:opacity-100 transition-opacity">
                        <button onClick={() => openEdit(chore)} className="p-2 text-slate-400 hover:text-indigo-500"><Edit2 size={16} /></button>
                        <button onClick={() => deleteChore(chore.id)} className="p-2 text-slate-400 hover:text-red-500"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  )
                })
              ) : (
                <p className="text-center text-xs text-slate-400 italic py-3">Sin tareas registradas este día.</p>
              )}
            </div>
          </div>
        )}
        {activeTab === 'groceries' && (
          <div className="flex flex-col gap-6 animate-in fade-in">
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-6 rounded-[2.5rem] shadow-xl border relative overflow-hidden`}>
              <div className="flex gap-2 mb-4">
                <input type="text" placeholder="Añadir a la lista..." value={groceryInput} onChange={(e) => setGroceryInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') addGrocery(groceryInput); }} className={`flex-1 min-w-0 text-lg font-medium p-4 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 focus:border-indigo-500' : 'bg-slate-50 border-slate-200 focus:border-indigo-400'} focus:outline-none focus:ring-4 focus:ring-indigo-500/10`} />
                <button onClick={() => addGrocery(groceryInput)} className="w-16 shrink-0 flex items-center justify-center bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/30">
                  <Plus size={24} />
                </button>
              </div>

              {grocerySuggestions.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-2 ml-1">Frecuentes</p>
                  <div className="flex flex-wrap gap-2">
                    {grocerySuggestions.map(s => <button key={s} onClick={() => addGrocery(s)} className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-white border-slate-200 hover:bg-slate-100'}`}>{s}</button>)}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar -mt-2 mb-2">
              <Store size={14} className="text-slate-400 shrink-0 ml-1" />
              {supermarkets.length === 0 && (
                <span className="text-[10px] text-slate-400 italic">Pulsa Ajustes para empezar</span>
              )}
              {supermarkets.map(s => {
                const colorObj = USER_COLORS.find(c => c.id === s.color);
                const colorClass = colorObj ? (isDarkMode ? `bg-${colorObj.id}-500/20 text-${colorObj.id}-400 border-${colorObj.id}-500/30` : `bg-${colorObj.id}-50 text-${colorObj.id}-600 border-${colorObj.id}-200`) : (isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-white border-slate-200 text-slate-500');
                const isSelected = selectedSupermarket === s.name;

                return (
                  <button key={s.id} onClick={() => setSelectedSupermarket(isSelected ? '' : s.name)} className={`py-1.5 px-3 flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest rounded-xl border whitespace-nowrap transition-all ${isSelected ? 'ring-2 ring-offset-1 ' + (isDarkMode ? 'ring-offset-slate-950 ring-indigo-500 scale-105' : 'ring-offset-slate-50 ring-indigo-400 scale-105') : 'hover:scale-105'} ${colorClass}`}>
                    {s.name}
                  </button>
                )
              })}
              <button onClick={() => setShowSupermarketModal(true)} className={`p-2 flex items-center justify-center rounded-xl border transition-all ${isDarkMode ? 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:text-slate-200' : 'bg-slate-50 border-slate-200/50 text-slate-500 hover:text-slate-700'}`}>
                <Settings size={14} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Pendientes</h3>
                <DragDropContext onDragEnd={handleDragEndGroceries}>
                  <Droppable droppableId="groceries-list">
                    {(provided) => (
                      <div className="space-y-2" {...provided.droppableProps} ref={provided.innerRef}>
                        {groceries.filter(g => !g.completed).length === 0 ? <p className="text-center text-xs text-slate-400 italic py-6">Lista de la compra vacía.</p> : groceries.filter(g => !g.completed).map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                              <div ref={provided.innerRef} {...provided.draggableProps} style={provided.draggableProps.style} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-4 rounded-2xl border flex items-center justify-between group transition-colors`}>
                                <div className="flex items-center gap-4 flex-1 cursor-pointer" onClick={() => toggleGrocery(item.id, item.completed)}>
                                  <button className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${isDarkMode ? 'border-slate-700' : 'border-slate-300'}`}>
                                    <div className="w-0 h-0 transition-all"></div>
                                  </button>
                                  <div className="flex-1 flex flex-col justify-center">
                                    <p className="font-bold text-base leading-tight">{item.name}</p>
                                    {item.supermarket && (() => {
                                      const superData = supermarkets.find(s => s.name === item.supermarket);
                                      const colorObj = superData && superData.color ? USER_COLORS.find(c => c.id === superData.color) : null;
                                      const tagColorClass = colorObj ? (isDarkMode ? `bg-${colorObj.id}-900/40 text-${colorObj.id}-300 border border-${colorObj.id}-800/50` : `bg-${colorObj.id}-100 text-${colorObj.id}-700`) : (isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500');

                                      return (
                                        <span className={`text-[9px] font-bold mt-1 max-w-max uppercase tracking-widest px-1.5 py-0.5 rounded ${tagColorClass}`}>
                                          {item.supermarket}
                                        </span>
                                      );
                                    })()}
                                  </div>
                                </div>
                                <div {...provided.dragHandleProps} className="p-2 text-slate-300 hover:text-slate-500 touch-none">
                                  <GripVertical size={16} />
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>

              {groceries.filter(g => g.completed).length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">En el Carrito</h3>
                  <div className="space-y-2 opacity-60">
                    {groceries.filter(g => g.completed).map(item => (
                      <div key={item.id} className={`${isDarkMode ? 'bg-slate-900/50 border-slate-800/50' : 'bg-slate-50 border-slate-200'} p-4 rounded-2xl border flex items-center justify-between group`}>
                        <div className="flex items-center gap-4 flex-1 cursor-pointer" onClick={() => toggleGrocery(item.id, item.completed)}>
                          <button className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center transition-all">
                            <Check size={16} strokeWidth={3} />
                          </button>
                          <p className="font-bold text-base flex-1 line-through text-slate-400">{item.name}</p>
                        </div>
                        <button onClick={() => deleteGrocery(item.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors ml-2"><Trash2 size={16} /></button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {activeTab === 'rewards' && (
          <div className="flex flex-col gap-6 animate-in fade-in">
            {/* Cabecera de RPC y Frenesí */}
            <div className="bg-gradient-to-br from-amber-400 to-orange-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-orange-500/20 relative overflow-hidden">
              <Gift className="absolute -top-4 -right-4 text-white/10" size={120} />

              <div className="flex justify-between items-start relative z-10 mb-4">
                <div>
                  <p className="text-orange-100 text-xs font-bold uppercase tracking-widest mb-1">Tu Balance RPC</p>
                  <h2 className="text-5xl font-black tracking-tighter flex items-center gap-2">
                    {usersData[userName]?.rpcBalance?.toFixed(2) || '0.00'} <span className="text-2xl text-orange-200">RPC</span>
                  </h2>
                </div>
              </div>

              {/* Leaderboard Horizontal */}
              {Object.keys(usersData).length > 1 && (
                <div className="relative z-10 mt-6 pt-6 border-t border-white/20">
                  <p className="text-[10px] text-white/80 uppercase tracking-widest font-bold mb-3 flex items-center gap-1.5">
                    <TrendingUp size={12} /> Cuentas Familiares
                  </p>
                  <div className="flex overflow-x-auto gap-3 pb-2 -mx-2 px-2 no-scrollbar snap-x">
                    {Object.entries(usersData)
                      .sort(([, a], [, b]) => (b.rpcBalance || 0) - (a.rpcBalance || 0))
                      .map(([name, data]) => {
                        // Intentar encontrar el color en los recientes, sino gris por defecto
                        const recentChore = chores.find(c => c.userName === name);
                        const baseColor = recentChore ? USER_COLORS.find(c => c.id === recentChore.userColor)?.bg : 'bg-slate-400';
                        return (
                          <div key={name} className="shrink-0 snap-start bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3 flex items-center gap-3 min-w-[140px] shadow-sm">
                            <div className={`w-8 h-8 rounded-full ${baseColor} flex items-center justify-center text-white font-bold shadow-inner`}>
                              {name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="text-xs font-bold truncate max-w-[80px] text-white">{name}</p>
                              <p className="text-[10px] font-black text-orange-200">{data.rpcBalance?.toFixed(2) || 0} RPC</p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              {inFrenzyMode ? (
                <div className="mt-4 bg-white/20 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 animate-pulse border border-white/30 shadow-lg shadow-yellow-500/20">
                  <Flame className="text-yellow-300 animate-bounce" size={24} />
                  <div>
                    <p className="text-sm font-bold leading-tight">¡MODO FRENESÍ ACTIVADO!</p>
                    <p className="text-[10px] text-orange-100 uppercase tracking-widest font-bold">x2.0 RPC en cada tarea hasta mañana</p>
                  </div>
                </div>
              ) : (
                <div className="mt-6 w-full max-w-xs">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-100/80">Progreso Frenesí (x2)</span>
                    <span className="text-[10px] font-bold text-white">{Math.floor(userTotalToday / 60)} / 60 min</span>
                  </div>
                  <div className="h-1.5 bg-black/20 rounded-full overflow-hidden flex shadow-inner backdrop-blur-sm">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-300 transition-all duration-1000 relative" style={{ width: `${frenzyProgress}%` }}>
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navegación de sección */}
            <div className={`flex rounded-xl p-1.5 ${isDarkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white shadow-sm border border-slate-100'}`}>
              {[
                { id: 'store', label: 'Tienda', icon: Store },
                { id: 'inventory', label: 'Mis Cupones', icon: Tag },
                { id: 'history', label: 'Momentos', icon: History }
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button key={tab.id} onClick={() => setRewardsView(tab.id)} className={`flex-1 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider py-2.5 rounded-lg transition-all ${rewardsView === tab.id ? 'bg-orange-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                    <Icon size={14} /> {tab.label}
                  </button>
                )
              })}
            </div>

            {rewardsView === 'store' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Catálogo de Premios</h3>
                  <div className="flex gap-2">
                    <button onClick={() => {
                      const pass = window.prompt("Introduce contraseña de Admin:");
                      if (pass === '123456') setShowAdminModal(true);
                      else if (pass !== null) showToast('Contraseña incorrecta', 'error');
                    }} className={`text-xs font-bold px-2 py-1 rounded border flex items-center gap-1 transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800'}`}>
                      <Shield size={12} /> Admin
                    </button>
                    <button onClick={() => setShowItemModal(true)} className="text-orange-500 text-xs font-bold flex items-center gap-1 hover:underline">
                      <Plus size={14} /> Crear Artículo
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {storeItems.map(item => (
                    <div key={item.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-5 rounded-3xl border flex flex-col items-center text-center relative overflow-hidden group`}>
                      <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                      <h4 className="font-bold text-sm leading-tight mb-3">{item.name}</h4>
                      <button onClick={() => buyItem(item)} className="w-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 hover:bg-orange-500 hover:text-white transition-colors">
                        {item.costRPC} RPC
                      </button>
                    </div>
                  ))}
                  {storeItems.length === 0 && (
                    <div className="col-span-2 text-center py-8 text-slate-400 text-xs italic">La tienda está vacía. ¡Añade premios!</div>
                  )}
                </div>
              </div>
            )}

            {rewardsView === 'inventory' && (
              <div className="space-y-3">
                {coupons.filter(c => c.owner === userName).map(coupon => (
                  <div key={coupon.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-5 rounded-3xl border flex items-center justify-between shadow-sm relative overflow-hidden`}>
                    <div className="absolute -left-4 -top-4 text-8xl opacity-5">{coupon.icon}</div>
                    <div className="flex items-center gap-4 relative z-10 w-full">
                      <div className="text-4xl">{coupon.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-base leading-tight mb-1">{coupon.itemName}</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Comprado el {new Date(coupon.timestamp).toLocaleDateString()}</p>
                      </div>
                      <button onClick={() => redeemCoupon(coupon)} className="bg-emerald-500 text-white font-bold py-2 px-4 rounded-xl text-xs shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-colors transform active:scale-95 flex items-center gap-1">
                        <Star size={14} /> Canjear
                      </button>
                    </div>
                  </div>
                ))}
                {coupons.filter(c => c.owner === userName).length === 0 && (
                  <div className="text-center py-8 text-slate-400 text-xs italic">No tienes cupones. ¡Compra algo en la tienda!</div>
                )}
              </div>
            )}

            {rewardsView === 'history' && (
              <div className="space-y-4">
                {moments.map(moment => (
                  <div key={moment.id} className="bg-white dark:bg-slate-900 border-[8px] border-white dark:border-slate-800 shadow-xl rounded-sm transform rotate-1 hover:rotate-0 transition-transform max-w-[280px] mx-auto">
                    <div className="bg-slate-100 dark:bg-slate-800 aspect-square flex items-center justify-center text-8xl border border-slate-200 dark:border-slate-700">
                      {moment.icon}
                    </div>
                    <div className="p-4 text-center">
                      <h4 className="font-bold font-serif text-lg text-slate-800 dark:text-slate-100 mb-1">{moment.itemName}</h4>
                      <p className="text-xs text-slate-500 font-medium font-serif italic">Por {moment.owner} • {new Date(moment.redeemedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
                {moments.length === 0 && (
                  <div className="text-center py-8 text-slate-400 text-xs italic">Aún no hay grandes momentos registrados.</div>
                )}
              </div>
            )}
          </div>
        )}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-gradient-to-br from-indigo-600 to-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden">
              <Award className="absolute -top-4 -right-4 text-white/10" size={120} />

              <p className="text-indigo-100 text-xs font-bold uppercase tracking-widest mb-2">Esfuerzo del Mes (Equipo)</p>
              <h2 className="text-4xl font-bold mb-6">{formatTime(stats.total)}</h2>
              <div className="space-y-5 relative z-10">
                {stats.personData.map((p) => (
                  <div key={p.name} className="cursor-pointer" onClick={() => setExpandedUser(expandedUser === p.name ? null : p.name)}>
                    <div className="flex justify-between text-xs mb-2 font-bold uppercase tracking-tight">
                      <span className="flex items-center gap-1">{p.name} {expandedUser === p.name ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</span>
                      <span>{formatTime(p.seconds)} ({p.percentage}%)</span>
                    </div>
                    <div className="h-2.5 bg-white/20 rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-white transition-all duration-1000 shadow-sm" style={{ width: `${p.percentage}%` }}></div>
                    </div>
                    {expandedUser === p.name && (
                      <div className="mt-4 bg-black/20 rounded-2xl p-4 space-y-3 animate-in slide-in-from-top-2">
                        {p.tasks.map(t => (
                          <div key={t.name} className="flex justify-between text-[10px] items-center uppercase font-bold tracking-tight">
                            <span className="text-white/80 truncate w-32">{t.name}</span>
                            <span className="font-mono">{formatTime(t.seconds)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-6 rounded-3xl border shadow-sm`}>
              <h3 className="text-sm font-bold mb-6 flex items-center gap-2 uppercase tracking-widest"><BarChart3 size={18} className="text-indigo-500" /> Distribución Global</h3>
              <div className="space-y-6">
                {stats.taskDistribution.length === 0 ? <p className="text-center text-xs text-slate-500 italic py-4">Sin datos.</p> : stats.taskDistribution.map(task => (
                  <div key={task.name} className="flex items-center gap-4">
                    <div className="w-24 shrink-0"><p className="text-xs font-bold truncate leading-none mb-1">{task.name}</p><p className="text-[10px] text-slate-500">{formatTime(task.seconds)}</p></div>
                    <div className="flex-1 h-4 bg-slate-100 dark:bg-slate-800 rounded-md overflow-hidden flex">
                      <div className="h-full bg-indigo-500/80 transition-all duration-1000" style={{ width: `${task.percentage}%` }}></div>
                    </div>
                    <span className="w-8 text-right text-[10px] font-bold text-slate-400">{task.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <nav className={`${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200'} backdrop-blur-lg fixed bottom-0 w-full border-t flex justify-around p-3 pb-safe z-30`}>
        {[
          { id: 'timer', icon: Clock, label: 'Registro' },
          { id: 'calendar', icon: CalendarIcon, label: 'Agenda' },
          { id: 'groceries', icon: ShoppingCart, label: 'Compra' },
          { id: 'rewards', icon: Gift, label: 'Premios' },
          { id: 'dashboard', icon: BarChart3, label: 'Equipo' }
        ].map(item => {
          const Icon = item.icon;
          return (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`flex flex-col items-center gap-1 transition-all ${activeTab === item.id ? 'text-indigo-500 scale-110' : 'text-slate-500'}`}>
              <Icon size={22} className={activeTab === item.id ? 'fill-indigo-50/10' : ''} />
              <span className="text-[10px] font-bold uppercase tracking-tight">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* MODALS */}
      {modalMode && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border animate-in slide-in-from-bottom-8 max-h-[90vh] overflow-y-auto pb-safe`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-xl">{modalMode === 'edit' ? 'Editar Registro' : 'Entrada Manual'}</h2>
              <button onClick={() => setModalMode(null)} className="p-2 text-slate-400"><X size={20} /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Tarea</label>
                <input type="text" className={`w-full p-3 rounded-xl border mt-1 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'} focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all`} value={manualData.name} onChange={(e) => setManualData({ ...manualData, name: e.target.value })} />

                {suggestions.length > 0 && (
                  <div className="mt-3">
                    <p className="text-[10px] font-bold text-slate-500 uppercase mb-2 ml-1">Frecuentes</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestions.map(s => <button key={s} onClick={() => setManualData({ ...manualData, name: s })} className={`text-[11px] px-2.5 py-1.5 rounded-lg border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-white border-slate-200 hover:bg-slate-100'}`}>{s}</button>)}
                    </div>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Horas</label><input type="number" className={`w-full p-3 rounded-xl border mt-1 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`} value={manualData.hours} onChange={(e) => setManualData({ ...manualData, hours: e.target.value })} /></div>
                <div><label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Minutos</label><input type="number" className={`w-full p-3 rounded-xl border mt-1 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`} value={manualData.minutes} onChange={(e) => setManualData({ ...manualData, minutes: e.target.value })} /></div>
              </div>
              <div><label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Fecha</label><input type="date" className={`w-full p-3 rounded-xl border mt-1 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`} value={manualData.date} onChange={(e) => setManualData({ ...manualData, date: e.target.value })} /></div>
              <button onClick={handleSaveManual} className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl mt-4 hover:bg-indigo-700 active:scale-95 transition-all">Guardar</button>
            </div>
          </div>
        </div>
      )}

      {showAdminModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} w-full max-w-md rounded-[2rem] p-6 shadow-2xl border animate-in slide-in-from-bottom-8 max-h-[90vh] overflow-y-auto no-scrollbar`}>
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-inherit py-2 z-10">
              <h2 className="font-black text-xl flex items-center gap-2"><Shield size={22} className="text-indigo-500" /> Configuración Admin</h2>
              <button onClick={() => setShowAdminModal(false)} className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><X size={20} /></button>
            </div>

            <div className="space-y-6">
              <section>
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Carteras Locales</h3>
                  <button onClick={handleAdminAddUser} className="text-[10px] font-bold uppercase text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors"><Plus size={10} strokeWidth={3} /> Añadir Cuenta</button>
                </div>
                <div className="space-y-2">
                  {Object.keys(usersData).map(u => (
                    <div key={u} className={`p-3 rounded-xl border flex items-center justify-between ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                      <div>
                        <p className="font-bold text-sm tracking-tight">{u}</p>
                        <p className="text-[10px] text-orange-500 font-bold">{usersData[u].rpcBalance?.toFixed(2) || 0} RPC</p>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => handleAdminRPC(u)} className="px-3 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center justify-center transition-colors hover:bg-indigo-200 dark:hover:bg-indigo-900/50"><Edit2 size={12} className="mr-1" /> Editar RPC</button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">Tienda de Premios</h3>
                <div className="space-y-2">
                  {storeItems.map(item => (
                    <div key={item.id} className={`p-3 rounded-xl border flex items-center justify-between ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <p className="font-bold text-sm leading-tight">{item.name}</p>
                          <p className="text-[10px] font-medium text-slate-500">{item.costRPC} RPC</p>
                        </div>
                      </div>
                      <button onClick={() => handleAdminDeleteStoreItem(item.id)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"><Trash2 size={16} /></button>
                    </div>
                  ))}
                  {storeItems.length === 0 && <p className="text-xs text-slate-500 italic">No hay premios creados.</p>}
                </div>
              </section>

              <section>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">Cupones Activos (Toda la familia)</h3>
                <div className="space-y-2">
                  {coupons.map(coupon => (
                    <div key={coupon.id} className={`p-3 rounded-xl border flex items-center justify-between ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                      <div className="flex items-center gap-3 w-3/4">
                        <span className="text-xl">{coupon.icon}</span>
                        <div className="truncate">
                          <p className="font-bold text-sm tracking-tight truncate">{coupon.itemName}</p>
                          <p className="text-[10px] font-bold text-slate-500">Pertenece a {coupon.owner}</p>
                        </div>
                      </div>
                      <button onClick={() => handleAdminDeleteCoupon(coupon.id)} className="text-[10px] font-bold uppercase text-red-500 px-2 py-1 rounded bg-red-50 dark:bg-red-900/20 hover:bg-red-100 transition-colors">Revocar</button>
                    </div>
                  ))}
                  {coupons.length === 0 && <p className="text-xs text-slate-500 italic">Nadie tiene cupones activos.</p>}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      {showItemModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border animate-in slide-in-from-bottom-8`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-xl flex items-center gap-2"><Plus size={20} className="text-orange-500" /> Añadir a la Tienda</h2>
              <button onClick={() => setShowItemModal(false)} className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><X size={20} /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Nombre del Favor / Premio</label>
                <input type="text" placeholder="Ej: Especial Desayuno" className={`w-full p-4 rounded-2xl border mt-1 text-base font-medium ${isDarkMode ? 'bg-slate-800 border-slate-700 focus:border-orange-500' : 'bg-slate-50 border-slate-200 focus:border-orange-400'} focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all`} value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Coste (RPC)</label>
                  <input type="number" min="1" className={`w-full p-4 rounded-2xl border mt-1 text-base font-bold text-orange-500 ${isDarkMode ? 'bg-slate-800 border-slate-700 focus:border-orange-500' : 'bg-slate-50 border-slate-200 focus:border-orange-400'} focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all`} value={newItem.cost} onChange={(e) => setNewItem({ ...newItem, cost: e.target.value })} />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Emoji / Icono</label>
                  <input type="text" maxLength="2" placeholder="🎁" className={`w-full p-4 rounded-2xl border mt-1 text-center text-2xl ${isDarkMode ? 'bg-slate-800 border-slate-700 focus:border-orange-500' : 'bg-slate-50 border-slate-200 focus:border-orange-400'} focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all`} value={newItem.icon} onChange={(e) => setNewItem({ ...newItem, icon: e.target.value })} />
                </div>
              </div>

              <button onClick={handleSaveStoreItem} className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 rounded-2xl mt-6 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-95 transition-all">
                Publicar en Tienda
              </button>
            </div>
          </div>
        </div>
      )}

      {showSupermarketModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border animate-in slide-in-from-bottom-8 overflow-y-auto max-h-[80vh] no-scrollbar`}>
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-inherit z-20 pb-2 border-b border-slate-100 dark:border-slate-800">
              <h2 className="font-bold text-xl flex items-center gap-2"><Store size={20} className="text-indigo-500" /> Supermercados</h2>
              <button onClick={() => setShowSupermarketModal(false)} className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><X size={20} /></button>
            </div>

            <button onClick={addSupermarket} className="w-full mb-6 border-2 border-dashed border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-500 font-bold py-3 rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors flex items-center justify-center gap-2">
              <Plus size={16} strokeWidth={3} /> Añadir Nueva Tienda
            </button>

            <DragDropContext onDragEnd={handleDragEndSupermarkets}>
              <Droppable droppableId="supermarkets-list">
                {(provided) => (
                  <div className="space-y-3" {...provided.droppableProps} ref={provided.innerRef}>
                    {supermarkets.length === 0 && <p className="text-center text-xs text-slate-400 italic py-4">No hay tiendas.</p>}
                    {supermarkets.map((store, index) => (
                      <Draggable key={store.id} draggableId={store.id} index={index}>
                        {(provided) => {
                          const activeColor = store.color || 'slate';
                          return (
                            <div ref={provided.innerRef} {...provided.draggableProps} className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'} p-3 rounded-2xl border flex flex-col gap-3 group relative`}>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div {...provided.dragHandleProps} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 active:cursor-grabbing cursor-grab touch-none p-1">
                                    <GripVertical size={16} />
                                  </div>
                                  <span className="font-bold text-sm truncate uppercase tracking-widest">{store.name}</span>
                                </div>
                                <button onClick={(e) => deleteSupermarket(e, store.id)} className="p-1.5 text-red-300 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                              </div>

                              <div className="flex items-center justify-between pl-8 pr-1">
                                <p className="text-[10px] font-bold text-slate-400 uppercase">Color:</p>
                                <div className="flex gap-2">
                                  {['slate', ...USER_COLORS.map(c => c.id)].map(c => {
                                    const uiColor = c === 'slate' ? (isDarkMode ? 'bg-slate-600' : 'bg-slate-400') : USER_COLORS.find(uc => uc.id === c)?.bg;
                                    return (
                                      <button
                                        key={c}
                                        onClick={() => updateSupermarketColor(store.id, c)}
                                        className={`w-5 h-5 rounded-full ${uiColor} transition-transform ${activeColor === c ? 'scale-125 ring-2 ring-offset-1 ' + (isDarkMode ? 'ring-offset-slate-800 ring-white' : 'ring-offset-slate-50 ring-slate-400') : 'opacity-50 hover:opacity-100 hover:scale-110'}`}
                                      />
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          );
                        }}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      )}

      {showProfileModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-[60] flex items-center justify-center p-6">
          <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} rounded-[2.5rem] p-8 w-full max-w-sm shadow-2xl`}>
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter">Bienvenid@s</h2>
            <p className={`text-sm mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Sincroniza el RanxPanx Team con tu maravillosa esposa. ¿Quién eres?</p>
            <div className="space-y-4">
              <input type="text" placeholder="Tu nombre..." className={`w-full text-xl font-bold p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`} value={userName} onChange={(e) => setUserName(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && userName) { localStorage.setItem('hometeam_username', userName); localStorage.setItem('hometeam_usercolor', userColor); setShowProfileModal(false); } }} />

              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase mb-2 ml-1">Elige un color visual</p>
                <div className="flex justify-between px-2">
                  {USER_COLORS.map(c => (
                    <button key={c.id} onClick={() => setUserColor(c.id)} className={`w-10 h-10 rounded-full ${c.bg} transition-all ${userColor === c.id ? `ring-4 ring-offset-2 ${c.ring} ${isDarkMode ? 'ring-offset-slate-900' : 'ring-offset-white'} scale-110` : 'opacity-40 hover:opacity-100 scale-90'}`} />
                  ))}
                </div>
              </div>

              <button onClick={() => { if (userName) { localStorage.setItem('hometeam_username', userName); localStorage.setItem('hometeam_usercolor', userColor); setShowProfileModal(false); } }} className={`w-full text-white font-bold py-4 rounded-2xl mt-4 transition-all ${userName ? USER_COLORS.find(c => c.id === userColor)?.bg + ' hover:opacity-90 active:scale-95' : 'bg-slate-300 dark:bg-slate-800 cursor-not-allowed text-slate-400'}`}>
                Entrar al Equipo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST SYSTEM */}
      {toast.visible && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className={`px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 font-bold text-sm ${toast.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
            {toast.type === 'success' ? <CheckCircle2 size={18} /> : <WifiOff size={18} />}
            {toast.msg}
          </div>
        </div>
      )}

      <style>{`
        .safe-top { padding-top: env(safe-area-inset-top); }
        .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
        input, button { -webkit-tap-highlight-color: transparent; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

// --- ARRANQUE DE LA APP (Gira la llave) ---
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
