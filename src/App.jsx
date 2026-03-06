import React, { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import {
  Play, Square, Calendar as CalendarIcon, BarChart3, Clock,
  Plus, User, CheckCircle2, X, Check, Moon, Sun, Edit2, Trash2, History,
  ChevronRight, ChevronDown, Award, TrendingUp, WifiOff,
  Sparkles, Coffee, Briefcase, Activity, CheckSquare, Pause, ShoppingCart,
  GripVertical, Store, Gift, Flame, Zap, Star, Tag, ShoppingBag, Settings, Shield, Swords,
  Target, Crosshair, HeartHandshake
} from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, query, deleteDoc, doc, updateDoc, setDoc, getDocs, writeBatch } from 'firebase/firestore';

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
const DAILY_QUOTES = {
  timer: [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "La disciplina es el puente entre tus metas y tus logros.",
    "No cuentes los días, haz que los días cuenten.",
    "Un viaje de mil millas comienza con un solo paso. Lao-Tse.",
    "Lo que haces hoy puede mejorar todas tus mañanas.",
    "La única forma de hacer un gran trabajo es amar lo que haces. Steve Jobs.",
    "No busques el momento perfecto, solo busca el momento y hazlo perfecto.",
    "El esfuerzo organizado es la llave que abre todas las puertas.",
    "La constancia vence a lo que la dicha no alcanza.",
    "La motivación nos impulsa a comenzar, el hábito nos permite continuar.",
    "Pequeños actos de cuidado mantienen el hogar y el espíritu inquebrantables.",
    "El progreso lento es infinitamente mejor que el estancamiento.",
    "Incluso las tareas más tediosas brillan si el propósito es cuidar de los nuestros.",
    "El mejor momento para plantar un árbol fue hace 20 años; el segundo mejor es ahora.",
    "El trabajo que no se ve es el que sostiene las victorias que todo el mundo aplaude.",
    "La verdadera libertad nace de dominar nuestros propios impulsos.",
    "El coraje no siempre ruge. A veces es la voz tranquila que dice: 'mañana lo intentaré de nuevo'.",
    "Convierte tus heridas en sabiduría y tus fracasos en gasolina.",
    "Quien tiene por qué vivir puede soportar casi cualquier cómo.",
    "Sé suave, no dejes que el mundo endurezca tu corazón amable.",
    "Lo ordinario se vuelve extraordinario cuando se hace con amor incondicional.",
    "La paciencia es amarga en la raíz, pero sus frutos son dulces.",
    "Las cosas más valiosas de este mundo no son cosas, son momentos.",
    "Todo aquello que vale la pena requiere tiempo, paciencia y fe recíproca.",
    "Hazlo, y si te da miedo, hazlo con miedo. Pero no te detengas.",
    "Si no dejas de intentarlo, tarde o temprano te despertarás habiendo ganado.",
    "La sabiduría suprema radica en distinguir lo urgente de lo que es verdaderamente importante.",
    "El éxito consiste en ir de fracaso en fracaso sin perder el entusiasmo."
  ],
  calendar: [
    "Un minuto de planificación ahorra diez de ejecución.",
    "Si no sabes a qué puerto navegas, ningún viento es favorable.",
    "La energía que pones en ordenar tu entorno se refleja ordenando tu mente.",
    "No se trata de tener tiempo, se trata de hacer tiempo.",
    "El orden es la primera ley del cielo y debería ser la primera del hogar.",
    "Quien domina su agenda, domina su destino.",
    "Dedica tiempo a afilar el hacha antes de ponerte a talar el bosque.",
    "Tu tiempo es el recurso más valioso que tienes; regálalo solo a quien construya contigo.",
    "Haz hoy algo de lo que tu 'yo' del mañana esté tremendamente orgulloso.",
    "La clave no está en gastar el tiempo, sino en invertirlo."
  ],
  groceries: [
    "Cuida de los centavos y los euros se cuidarán solos.",
    "El ahorrador no es aquel que guarda mucho, sino el que gasta con inteligencia.",
    "Compra solamente lo necesario; lo superfluo, aunque cueste solo un céntimo, es caro.",
    "La calidad recuerda su valor mucho tiempo después de haber olvidado su precio.",
    "Ahorrar no es solo guardar dinero, es prevenir para construir un futuro mejor.",
    "No ahorres lo que te sobra después de gastar; gasta lo que te sobra después de ahorrar.",
    "Comprar con cabeza hoy es la tranquilidad de mañana.",
    "La verdadera riqueza consiste en saber vivir bien con poco.",
    "Elige calidad sobre cantidad, y durabilidad sobre inmediatez.",
    "Un buen presupuesto es decirle a tu dinero a dónde ir en lugar de preguntarte a dónde fue."
  ],
  rewards: [
    "Celebra tus pequeñas victorias, te darán fuerza para las grandes batallas.",
    "No hay atajo al éxito, pero todo logro merece ser festejado.",
    "Disfrutar del camino es tan vital como alcanzar la meta.",
    "Los logros más hermosos son aquellos que compartimos con los que amamos.",
    "Date permiso para pausar y disfrutar del fruto de tu esfuerzo.",
    "Un espíritu agradecido es el abono perfecto para la felicidad diaria.",
    "Brilla tanto que deslumbres a los problemas y guíes a los que te rodean.",
    "El mejor remedio contra el desánimo es el sonido de las risas compartidas en casa.",
    "Reconocer el esfuerzo ajeno es el mayor premio que puedes otorgar.",
    "A veces, el mayor logro del día es haber mantenido la sonrisa."
  ],
  dashboard: [
    "Cada pequeña tarea completada es una victoria para el equipo.",
    "Trabajar en equipo divide la tarea y multiplica el éxito.",
    "Hoy es un buen día para avanzar un paso más juntos.",
    "La lealtad no se exige, se cultiva regándola con acciones diarias.",
    "Un compañero de vida no es quien te mira, sino quien mira en tu misma dirección.",
    "No existe desafío demasiado grande si los cimientos de la confianza son sólidos.",
    "Ser fuerte no es nunca caer, es ayudarse mutuamente a levantarse una y otra vez.",
    "Si la carga pesa demasiado, recuerda que somos dos para sostenerla.",
    "Un hogar no son cuatro paredes, es el refugio que creamos cuando estamos juntos.",
    "No se rinde quien sabe que detrás del esfuerzo está el bienestar de su tribu.",
    "Un líder no es quien manda, es quien inspira a su equipo sirviendo primero.",
    "Nadie se hizo grande mostrando cómo de pequeños son los demás.",
    "Si quieres ir rápido, ve solo. Si quieres llegar lejos, ve acompañado.",
    "El que hace el bien a los demás, a sí mismo se enriquece.",
    "Una promesa rota es una herida en la confianza; una mantenida, es cemento armado.",
    "Nuestras vidas son los ríos que van a dar a la familia, que es la mar.",
    "Nada grande se ha conseguido jamás sin entusiasmo y sin equipo.",
    "Tu mayor riqueza no está en la cuenta del banco, sino en quienes se sientan a tu mesa.",
    "La empatía es tratar de sentir el frío del otro antes de exigirle que entre en calor.",
    "Ser vulnerable con el otro es la mayor muestra de coraje cívico y amoroso.",
    "Es en los momentos de fatiga extrema cuando se demuestra de qué estamos hechos.",
    "Un equipo imbatible es aquel donde nadie teme decir: 'necesito ayuda'.",
    "Cada minuto dedicado al equipo es una semilla que germinará en gratitud eterna.",
    "Un pacto de lealtad absoluta es un muro irrompible contra la inclemencia de la vida.",
    "Las cicatrices compartidas son los tatuajes de las victorias más difíciles de la dupla.",
    "Sé el hombro en el que tu equipo confía cuando el mundo exterior aprieta demasiado."
  ]
};

const MOTIVATIONAL_QUOTES = {
  streak_global: [
    "Un pequeño paso cada día construye el camino a la grandeza.",
    "La constancia vence a la resistencia. Sigue ardiendo.",
    "No es la fuerza, sino la perseverancia lo que hace al maestro.",
    "El fuego más intenso comienza con una pequeña chispa cuidada a diario.",
    "Tu dedicación incesante es el faro que ilumina tu hogar.",
    "Cada día que mantienes la llama, forjas una voluntad de hierro.",
    "La disciplina de hoy es la recompensa de mañana.",
    "Roma no se construyó en un día, pero se ponían ladrillos cada hora.",
    "La grandeza no es un acto, es un hábito inquebrantable.",
    "Eres la prueba viva de que el esfuerzo continuado mueve montañas.",
    "No midas el progreso por el tamaño del paso, sino por no detenerte.",
    "Tu fuego inextinguible inspira a otros a encender su propia llama.",
    "La motivación te hace empezar, el hábito te mantiene en marcha.",
    "El río corta la roca no por su fuerza, sino por su persistencia.",
    "Has convertido la rutina en una obra de arte deslumbrante.",
    "Tus acciones diarias son los cimientos de una fortaleza inexpugnable.",
    "La victoria pertenece al más perseverante.",
    "Eres un huracán de energía que no conoce el reposo.",
    "Las cadenas del hábito son demasiado ligeras hasta que son demasiado pesadas para romperlas.",
    "Tu constancia global desafía los límites de lo posible."
  ],
  streak_specific: [
    "La maestría se encuentra en la repetición consciente.",
    "Dominar una tarea es dominar una parte de ti mismo.",
    "La especialización es el camino hacia la perfección impecable.",
    "Cada vez que repites esta acción, te vuelves más fuerte e imparable.",
    "La gota de agua horada la piedra por su caída constante.",
    "Eres el artesano de tu propia disciplina. Puliendo los detalles.",
    "La excelencia es hacer algo ordinario de manera extraordinariamente consistente.",
    "La dedicación a un solo propósito es el secreto del éxito.",
    "Has convertido una simple tarea en un ritual de poder.",
    "Eres el guardián absoluto de este dominio.",
    "La concentración en un único objetivo divide la resistencia.",
    "La repetición constante es la madre del aprendizaje y la perfección.",
    "Tu lealtad a esta tarea es digna de las más altas leyendas.",
    "La brillantez no es un acto aislado, es la ejecución repetida de fundamentos.",
    "No hay rival para quien domina un arte a través de la constancia.",
    "La semilla regada cada día florece con el color más intenso.",
    "Has domesticado el caos enfocado en una sola meta incansable.",
    "El verdadero poder reside en dominar lo cotidiano.",
    "Tú no haces esta tarea, tú ERES esta tarea.",
    "Tu devoción específica ha moldeado el universo a tu favor."
  ],
  streak_bounty: [
    "Allí donde hay un desafío, tú ves una oportunidad brillante.",
    "Los tesoros más grandes aguardan a los que tienen valor para buscarlos.",
    "Tienes un ojo certero para cazar recompensas donde otros ven problemas.",
    "Tu instinto de cazador de recompensas afila el progreso del equipo.",
    "No hay botín que se escape a tu audacia incansable.",
    "Eres el solucionador de problemas por excelencia. La élite del hogar.",
    "Tu nombre es sinónimo de eficiencia y determinación implacable.",
    "Las recompensas no se otorgan, se conquistan. Y tú eres el conquistador.",
    "Donde otros dudan, tú atacas y te llevas la gloria y el botín.",
    "El instinto de caza se ha despertado y no hay presa que se resista.",
    "Los desafíos difíciles son solo el calentamiento para alguien de tu calibre.",
    "Has vaciado la lista de Se Busca con una precisión letal.",
    "Tu reputación como cazarrecompensas precede tus grandes logros.",
    "La recompensa es grande, pero tu determinación es aún mayor.",
    "Transformas las tareas olvidadas en relucientes trofeos de victoria.",
    "No persigues el premio, devoras el esfuerzo hasta alcanzarlo.",
    "Eres el lobo solitario que vuelve a la manada cargado de victorias.",
    "Has dominado el arte de hacer que lo difícil parezca fácil y rentable.",
    "Ninguna tarea permanece ignorada bajo tu vigilancia extrema.",
    "El gremio de cazarrecompensas corea tu nombre como una leyenda."
  ],
  streak_frenzy: [
    "Cuando entras en la zona, el caos se ordena a tu voluntad.",
    "Tu energía desbordante arrasa con la apatía y construye imperios.",
    "Eres una tormenta de productividad imposible de detener.",
    "El Modo Frenesí no es un estado, es tu firma personal en el campo de batalla.",
    "Velocidad, precisión y determinación. Eres una máquina perfecta.",
    "Has provocado una avalancha de resultados que deja a todos sin aliento.",
    "El reloj no te controla, tú controlas el tiempo comprimiéndolo a tu favor.",
    "La inercia de tus logros empuja al resto del equipo hacia adelante.",
    "Eres la definición misma de fluir en un estado de concentración absoluta.",
    "Tus picos de energía son dignos de estudio. Eres imparable.",
    "Donde había tareas, ahora solo queda el eco de tu velocidad ultrasónica.",
    "Activaste el turbo y el hogar entero respira tu aire revitalizado.",
    "Eres como un rayo: rápido, deslumbrante y cargado de poder puro.",
    "El frenesí es tu hábitat natural, donde devoras el tiempo.",
    "Tu ráfaga de actividad limpia, ordena y purifica el ambiente.",
    "Cuando aceleras, el mundo a tu alrededor parece ir a cámara lenta.",
    "Has trascendido el límite de la velocidad humana ordinaria.",
    "Eres un torbellino de eficiencia que no deja prisioneros.",
    "El fuego del frenesí corre por tus venas alimentando esta avalancha.",
    "Tu capacidad de trabajo intenso es el arma definitiva para cualquier desafío."
  ],
  p2p_gifts: [
    "La generosidad es la única inversión que nunca quiebra.",
    "Tu corazón noble enriquece tanto a quien recibe como a quien da.",
    "Compartir el éxito es la verdadera definición de alma caritativa.",
    "Tus regalos no son solo números, son gestos profundos de aprecio.",
    "La alegría que repartes se multiplica y vuelve a ti con mayor fuerza.",
    "Eres el pilar emocional que sustenta la confianza del equipo.",
    "Dar sin recordar, recibir sin olvidar. Ese es tu lema implícito.",
    "Tus manos abiertas son el símbolo de una abundancia infinita.",
    "Cada regalo es un puente de unión indestructible hacia los tuyos.",
    "La solidaridad que muestras ilumina hasta los días más grises.",
    "No hay mayor poder que el de elevar a los demás contigo.",
    "Tu desapego material demuestra la enorme riqueza de tu espíritu.",
    "Eres la chispa de bondad que enciende cadenas de favores infinitas.",
    "El eco de tu generosidad resuena en las sonrisas de tu familia.",
    "Dar es respirar para tu alma caritativa que no conoce el egoísmo.",
    "El valor de tu regalo palidece ante el valor de tu intención pura.",
    "Has instaurado la ley del amor y la entrega como norma inquebrantiable.",
    "Las verdaderas riquezas se miden por lo mucho que damos a quienes nos rodean.",
    "Tu caridad ha creado una red de seguridad emocional inestimable.",
    "Eres la leyenda viviente de que existe esperanza brillante en el corazón humano."
  ],
  total_hours: [
    "El tiempo invertido en mejorar es tiempo robado a la mortalidad.",
    "Tus horas son ladrillos dorados en la construcción de este templo familiar.",
    "Las grandes obras requieren paciencia, tiempo y un esfuerzo como el tuyo.",
    "Cada hora sumada es un testimonio irrefutable de tu legendario compromiso.",
    "El sudor de tus horas ha cristalizado en una medalla de puro orgullo.",
    "Una leyenda no nace de la suerte, se fabrica hora tras hora en la sombra.",
    "Has sacrificado tu tiempo, el bien más preciado, por el bienestar común.",
    "El valor de tus horas trasciende las agujas frías del simple reloj.",
    "Eres un coloso sosteniendo el cielo del hogar con tus propios hombros.",
    "Las horas pasan, pero el impacto de tu dedicación resonará para siempre.",
    "Tu resistencia es digna de los relatos épicos más grandiosos de la historia.",
    "Cada tic-tac te acerca más al trono de la maestría absoluta.",
    "Diez mil horas hacen al maestro, y tú avanzas a pasos de gigante.",
    "Tu esfuerzo silente y continuo habla con más fuerza que cualquier discurso.",
    "Has entregado fragmentos invaluables de tu vida para embellecer la de los demás.",
    "El respeto del equipo hacia ti se acumula con cada segundo que regalas.",
    "Eres el ancla que da firmeza y seguridad al barco en medio de la tormenta.",
    "Tu contribución es una obra de arte pintada con los hilos invisibles del tiempo.",
    "La eternidad recordará la dedicación silenciosa de un héroe como tú.",
    "Alcanzar el estatus de Leyenda no es el final, es tu consagración eterna."
  ]
};

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
const LiveTaskTimer = ({ liveTask }) => {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    if (liveTask.isPaused) return;
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [liveTask.isPaused]);

  const elapsedSecs = liveTask.accumulatedTime + Math.floor((now - liveTask.startTime) / 1000);
  return <>{formatTimeDigital(elapsedSecs)}</>;
};

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

  // ADMIN EDIT STORE ITEM STATE
  const [editingStoreItem, setEditingStoreItem] = useState(null);

  // P2P SYSTEM STATE
  const [wagers, setWagers] = useState([]);
  const [p2pNotifications, setP2pNotifications] = useState([]);
  const [selectedPeer, setSelectedPeer] = useState(null);
  const [showP2PModal, setShowP2PModal] = useState(false);
  const [p2pMode, setP2pMode] = useState(null); // 'send' or 'wager'
  const [p2pAmount, setP2pAmount] = useState('');
  const [p2pMessage, setP2pMessage] = useState('');
  const [activeGiftModal, setActiveGiftModal] = useState(null);
  const [p2pWagerDesc, setP2pWagerDesc] = useState('');
  const [p2pWagerStoreItem, setP2pWagerStoreItem] = useState('');
  const [p2pWagerDeadline, setP2pWagerDeadline] = useState('');
  const [showActiveWagerModal, setShowActiveWagerModal] = useState(null);
  const [wagerWinner, setWagerWinner] = useState('');
  const [activeAchievementModal, setActiveAchievementModal] = useState(null);

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
      data.sort((a, b) => (a.costRPC || 0) - (b.costRPC || 0) || b.timestamp - a.timestamp);
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
      data.sort((a, b) => (b.timestamp || b.redeemedAt || 0) - (a.timestamp || a.redeemedAt || 0));
      setMoments(data);
    });

    const p2pNotifRef = collection(db, 'artifacts', safeAppId, 'public', 'data', 'p2p_notifications');
    const unsubscribeP2pNotif = onSnapshot(query(p2pNotifRef), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setP2pNotifications(data);
    });

    const wagersRef = collection(db, 'artifacts', safeAppId, 'public', 'data', 'wagers');
    const unsubscribeWagers = onSnapshot(query(wagersRef), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      data.sort((a, b) => b.created_at - a.created_at);
      setWagers(data);
    });

    return () => {
      unsubscribeChores();
      unsubscribeGroceries();
      unsubscribeSupermarkets();
      unsubscribeUsers();
      unsubscribeStore();
      unsubscribeCoupons();
      unsubscribeMoments();
      unsubscribeP2pNotif();
      unsubscribeWagers();
    };
  }, [user]);

  useEffect(() => {
    if (userName && p2pNotifications.length > 0) {
      const unreadMyTransfers = p2pNotifications.filter(n => n.to === userName && !n.read && n.type === 'transfer');
      console.log('p2pNotifications check', { userName, unreadCount: unreadMyTransfers.length, activeGiftModal });
      if (unreadMyTransfers.length > 0 && !activeGiftModal) {
        console.log('Setting activeGiftModal to:', unreadMyTransfers[0]);
        setActiveGiftModal(unreadMyTransfers[0]);
      }
    }
  }, [userName, p2pNotifications, activeGiftModal]);

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
    const validChores = chores.filter(c => !c.isGift);
    const names = validChores.map(c => c.taskName);
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
    const validChores = chores.filter(c => !c.isGift);
    const uniqueTasks = [...new Set(validChores.map(c => c.taskName))];
    const matches = uniqueTasks.filter(t => t.toLowerCase().includes(lowerInput) && t.toLowerCase() !== lowerInput);
    return matches.slice(0, 5);
  }, [taskInput, activeTask, chores]);

  const hotTasks = useMemo(() => {
    const validChores = chores.filter(c => !c.isGift);
    const uniqueTasks = [...new Set(validChores.map(c => c.taskName))];
    return uniqueTasks.map(t => {
      const taskChores = validChores.filter(c => c.taskName === t);
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

  const achievementsState = useMemo(() => {
    if (!userName || !chores.length) return [];
    const claimed = usersData[userName]?.achievements || {};
    const userChores = chores.filter(c => c.userName === userName && !c.isGift);
    const chronoChores = [...userChores].sort((a, b) => a.timestamp - b.timestamp);

    const getStreak = (byDayMap) => {
      let streak = 0;
      let d = new Date();
      const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      d.setDate(d.getDate() - 1);
      const yesterday = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      d.setDate(d.getDate() - 1);
      const dayBeforeYesterday = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

      // Grace period dynamics (1 missed day allowed)
      let current = new Date();
      let isAlertState = false;

      if (!byDayMap[today]) {
        if (!byDayMap[yesterday]) {
          // Si faltó ayer y hoy, la alerta 24h es hoy (en realidad es el último día antes de perderla).
          // Wait, if it allows EXACTLY 1 missed day without breaking.
          // That means if I do it Monday, miss Tuesday, Wednesday is the alert day. If I miss Wednesday, Thursday it resets.
          // Let's count backwards. 
          // If we missed today, let's step back.
          current.setDate(current.getDate() - 1); // start checking from yesterday
          if (byDayMap[yesterday]) {
            // did yesterday, so we are on our first missed day (today). No alert.
          } else if (byDayMap[dayBeforeYesterday]) {
            // missed today, missed yesterday, but did the day before. ALARM! Last day to save it is today implicitly.
            isAlertState = true;
            // But wait, the streak continues counting backwards from the day we did it
            current.setDate(current.getDate() - 1);
          } else {
            // missed 3 days... streak is broken completely. streak = 0.
            return { streak: 0, isAlert: false };
          }
        }
      }

      // Count streak backwards looking for consecutive blocks, allowing 1 hole at most.
      // Wait, standard Duolingo style: if you miss yesterday, you're in the alert today.
      // E.g. did Monday. Tuesday skipped. Wednesday (today) -> Alert!
      // If we did it today, no alert.
      // Let's implement EXACTLY:
      // If today is active -> streak includes today, current goes backwards. No alert.
      // If today is inactive -> check if yesterday active. If yes -> streak includes yesterday backwards, NO alert today (grace).
      // If today inactive AND yesterday inactive -> check if dayBefore active. If yes -> streak includes dayBefore backwards, ALERT today.
      // If none, streak is 0.

      if (byDayMap[today]) {
        isAlertState = false;
        // start counting from today
      } else if (byDayMap[yesterday]) {
        isAlertState = false; // first day skipped, grace period
        current.setDate(current.getDate() - 1); // start from yesterday
      } else if (byDayMap[dayBeforeYesterday]) {
        isAlertState = true; // second day skipped, ALARM
        current.setDate(current.getDate() - 2); // start from daybefore
      } else {
        return { streak: 0, isAlert: false };
      }

      while (true) {
        const ds = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2, '0')}`;
        if (byDayMap[ds]) {
          streak++;
          current.setDate(current.getDate() - 1);
        } else {
          // Let's check if there is a 1-day hole to bridge
          let tempD = new Date(current);
          tempD.setDate(tempD.getDate() - 1);
          const gapDs = `${tempD.getFullYear()}-${String(tempD.getMonth() + 1).padStart(2, '0')}-${String(tempD.getDate()).padStart(2, '0')}`;
          if (byDayMap[gapDs]) {
            // bridged the gap
            current.setDate(current.getDate() - 2); // skip the hole
          } else {
            break;
          }
        }
      }
      return { streak, isAlert: isAlertState };
    };

    // 1. Fuego Inextinguible
    const daysGlobal = {};
    chronoChores.forEach(c => { daysGlobal[c.dateString] = true; });
    const fuego = getStreak(daysGlobal);

    // 2. Constancia
    let constancia = { streak: 0, isAlert: false };
    const tasksByName = {};
    chronoChores.forEach(c => {
      if (!tasksByName[c.taskName]) tasksByName[c.taskName] = {};
      tasksByName[c.taskName][c.dateString] = true;
    });
    for (const tName in tasksByName) {
      const s = getStreak(tasksByName[tName]);
      if (s.streak > constancia.streak) constancia = s;
    }

    // 3. Cazarrecompensas (Multiplier inference)
    const daysBounty = {};
    chronoChores.forEach(c => {
      const ratio = c.durationSeconds > 0 ? c.rpcEarned / (c.durationSeconds / 900) : 0;
      if ((ratio >= 1.05 && ratio <= 1.95) || ratio >= 2.05) daysBounty[c.dateString] = true;
    });
    const caza = getStreak(daysBounty);

    // 4. Avalancha Doméstica (Frenzy >= 3600s/day)
    const durByDay = {};
    chronoChores.forEach(c => {
      durByDay[c.dateString] = (durByDay[c.dateString] || 0) + c.durationSeconds;
    });
    const daysFrenzy = {};
    for (const d in durByDay) { if (durByDay[d] >= 3600) daysFrenzy[d] = true; }
    const avalancha = getStreak(daysFrenzy);

    // 5. Alma Caritativa (P2P Gifts based on distinct weeks)
    const giftsSent = chores.filter(c => c.isGift && c.sender === userName);
    const weeksWithGifts = new Set();
    giftsSent.forEach(c => {
      const d = new Date(c.timestamp);
      // get complete week string e.g. "2023-W45"
      const dCopy = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
      dCopy.setUTCDate(dCopy.getUTCDate() + 4 - (dCopy.getUTCDay() || 7));
      const yearStart = new Date(Date.UTC(dCopy.getUTCFullYear(), 0, 1));
      const weekNo = Math.ceil((((dCopy - yearStart) / 86400000) + 1) / 7);
      weeksWithGifts.add(`${dCopy.getUTCFullYear()}-W${weekNo}`);
    });
    const almaNvl = weeksWithGifts.size;

    // 6. Leyenda del Hogar (10h blocks)
    const totalHours = chronoChores.reduce((sum, c) => sum + c.durationSeconds, 0) / 3600;
    const leyendaNvl = Math.floor(totalHours / 10);

    const calcRewardScale = (streak) => Math.min(0.1 * streak, 1.0);

    return [
      {
        id: 'streak_global', title: 'Fuego Inextinguible', icon: 'Flame', desc: 'Días consecutivos completando al menos 1 tarea.',
        color: 'text-orange-500', shadow: 'shadow-orange-500', bg: 'bg-orange-100', darkBg: 'dark:bg-orange-900/30', border: 'border-orange-500',
        actual: fuego.streak, isAlert: fuego.isAlert,
        claimedAt: claimed.streak_global || 0,
        reward: calcRewardScale(fuego.streak)
      },
      {
        id: 'streak_specific', title: 'Constancia', icon: 'Target', desc: 'Días consecutivos completando exactamente la misma tarea.',
        color: 'text-emerald-500', shadow: 'shadow-emerald-500', bg: 'bg-emerald-100', darkBg: 'dark:bg-emerald-900/30', border: 'border-emerald-500',
        actual: constancia.streak, isAlert: constancia.isAlert,
        claimedAt: claimed.streak_specific || 0,
        reward: calcRewardScale(constancia.streak)
      },
      {
        id: 'streak_bounty', title: 'Cazarrecompensas', icon: 'Crosshair', desc: 'Días consecutivos completando tareas que estaban "En busca y captura".',
        color: 'text-rose-500', shadow: 'shadow-rose-500', bg: 'bg-rose-100', darkBg: 'dark:bg-rose-900/30', border: 'border-rose-500',
        actual: caza.streak, isAlert: caza.isAlert,
        claimedAt: claimed.streak_bounty || 0,
        reward: calcRewardScale(caza.streak)
      },
      {
        id: 'streak_frenzy', title: 'Avalancha Doméstica', icon: 'Zap', desc: 'Días consecutivos activando el "Modo Frenesí" (+60 mins/día).',
        color: 'text-yellow-500', shadow: 'shadow-yellow-500', bg: 'bg-yellow-100', darkBg: 'dark:bg-yellow-900/30', border: 'border-yellow-500',
        actual: avalancha.streak, isAlert: avalancha.isAlert,
        claimedAt: claimed.streak_frenzy || 0,
        reward: calcRewardScale(avalancha.streak)
      },
      {
        id: 'p2p_gifts', title: 'Alma Caritativa', icon: 'HeartHandshake', desc: 'Semanas distintas en las que has enviado al menos un regalo de RPC.',
        color: 'text-pink-500', shadow: 'shadow-pink-500', bg: 'bg-pink-100', darkBg: 'dark:bg-pink-900/30', border: 'border-pink-500',
        actual: almaNvl, isAlert: false,
        claimedAt: claimed.p2p_gifts || 0,
        reward: 2.0
      },
      {
        id: 'total_hours', title: 'Leyenda del Hogar', icon: 'Award', desc: 'Cada 10 horas totales invertidas en hacer de tu hogar un lugar mejor.',
        color: 'text-indigo-500', shadow: 'shadow-indigo-500', bg: 'bg-indigo-100', darkBg: 'dark:bg-indigo-900/30', border: 'border-indigo-500',
        actual: leyendaNvl, rawTotalHours: totalHours, isAlert: false,
        claimedAt: claimed.total_hours || 0,
        reward: 10.0
      }
    ];
  }, [chores, userName, usersData]);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type, visible: true });
    setTimeout(() => setToast({ msg: '', type: 'success', visible: false }), 3000);
  };

  const togglePlayPause = async () => {
    if (!userName) { setShowProfileModal(true); return; }
    let updatedActiveTask = null;
    if (!activeTask) {
      // Iniciar nuevo contador
      updatedActiveTask = { name: taskInput, startTime: Date.now(), accumulatedTime: 0, isPaused: false };
      setActiveTask(updatedActiveTask);
      playTimerStartSound();
    } else if (activeTask.isPaused) {
      // Reanudar
      updatedActiveTask = { ...activeTask, startTime: Date.now(), isPaused: false };
      setActiveTask(updatedActiveTask);
      playTimerStartSound();
    } else {
      // Pausar
      updatedActiveTask = { ...activeTask, accumulatedTime: elapsed, isPaused: true };
      setActiveTask(updatedActiveTask);
      playTimerPauseSound();
    }

    // SYNC a Firestore para mostrar en tiempo real a los demás
    try {
      if (updatedActiveTask) {
        await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', userName), {
          activeTimer: updatedActiveTask
        }, { merge: true });
      }
    } catch (err) {
      console.error("Error sincronizando temporizador activo", err);
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

  const playTimerStartSound = () => {
    try {
      if (localStorage.getItem('hometeam_mute_sounds') === 'true') return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      // Ascending "chime" or "pop"
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch (e) { }
  };

  const playTimerPauseSound = () => {
    try {
      if (localStorage.getItem('hometeam_mute_sounds') === 'true') return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      // Descending "bop" or "swoosh"
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) { }
  };

  const playTaskCompleteSound = () => {
    try {
      if (localStorage.getItem('hometeam_mute_sounds') === 'true') return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const playTone = (freq, startTime, duration, vol) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);

        gain.gain.setValueAtTime(0, ctx.currentTime + startTime);
        gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + startTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + startTime);
        osc.stop(ctx.currentTime + startTime + duration);
      };

      // Triumphant ascending major arpeggio (C5, E5, G5, C6)
      playTone(523.25, 0.00, 0.15, 0.15); // C5
      playTone(659.25, 0.10, 0.15, 0.15); // E5
      playTone(783.99, 0.20, 0.15, 0.15); // G5
      playTone(1046.50, 0.30, 0.40, 0.25); // C6 (longer and slightly louder)

    } catch (e) { }
  };

  const playGroceryCheckSound = () => {
    try {
      if (localStorage.getItem('hometeam_mute_sounds') === 'true') return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Alegría A: Coin Collect (Doble salto de nota brillante B5 -> E6)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(987.77, ctx.currentTime);
      osc.frequency.setValueAtTime(1318.51, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      // Ataque primera nota
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.1, ctx.currentTime + 0.08);

      // Ataque segunda nota
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.09);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch (e) { }
  };

  const playGroceryUncheckSound = () => {
    try {
      if (localStorage.getItem('hometeam_mute_sounds') === 'true') return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Viento/Soplo simulando papel al desmarcar
      const bufferSize = ctx.sampleRate * 0.15;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.15);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } catch (e) { }
  };

  const playFrenzySound = () => {
    try {
      if (localStorage.getItem('hometeam_mute_sounds') === 'true') return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const dur = 1.5;

      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(150, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + dur - 0.2);

      gain1.gain.setValueAtTime(0, ctx.currentTime);
      gain1.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.5);
      gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + dur);

      osc1.connect(gain1);
      gain1.connect(ctx.destination);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(800, ctx.currentTime + dur - 0.3);
      osc2.frequency.linearRampToValueAtTime(1600, ctx.currentTime + dur);

      gain2.gain.setValueAtTime(0, ctx.currentTime + dur - 0.3);
      gain2.gain.linearRampToValueAtTime(0.3, ctx.currentTime + dur - 0.1);
      gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + dur + 0.5);

      // Simple pseudo-echo for the flash
      const delay = ctx.createDelay();
      delay.delayTime.value = 0.2;
      const feedback = ctx.createGain();
      feedback.gain.value = 0.3;
      delay.connect(feedback);
      feedback.connect(delay);

      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      gain2.connect(delay);
      delay.connect(ctx.destination);

      osc1.start(); osc1.stop(ctx.currentTime + dur);
      osc2.start(ctx.currentTime + dur - 0.3); osc2.stop(ctx.currentTime + dur + 0.5);
    } catch (e) { }
  };

  const playFireSound = () => {
    try {
      if (localStorage.getItem('hometeam_mute_sounds') === 'true') return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // 1. Chispa (Ruido Blanco con HighPass)
      const bufferSize = ctx.sampleRate * 0.2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(500, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(5000, ctx.currentTime + 0.1);

      const gainNoise = ctx.createGain();
      gainNoise.gain.setValueAtTime(0, ctx.currentTime);
      gainNoise.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.05);
      gainNoise.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

      noise.connect(filter);
      filter.connect(gainNoise);
      gainNoise.connect(ctx.destination);
      noise.start();

      // 2. Destello (Level Up Chime)
      const osc = ctx.createOscillator();
      const gainOsc = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, ctx.currentTime + 0.05); // Entra un pelín tarde
      osc.frequency.exponentialRampToValueAtTime(2400, ctx.currentTime + 0.15);

      gainOsc.gain.setValueAtTime(0, ctx.currentTime + 0.05);
      gainOsc.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.08);
      gainOsc.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

      // Reverb delay
      const delay = ctx.createDelay();
      delay.delayTime.value = 0.1;
      const feedback = ctx.createGain();
      feedback.gain.value = 0.25;
      delay.connect(feedback);
      feedback.connect(delay);

      osc.connect(gainOsc);
      gainOsc.connect(ctx.destination);
      gainOsc.connect(delay);
      delay.connect(ctx.destination);

      osc.start(ctx.currentTime + 0.05);
      osc.stop(ctx.currentTime + 0.4);
    } catch (e) { }
  };

  const playConstancySound = () => {
    try {
      if (localStorage.getItem('hometeam_mute_sounds') === 'true') return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const delay = ctx.createDelay();
      delay.delayTime.value = 0.4;
      const feedback = ctx.createGain();
      feedback.gain.value = 0.3;
      delay.connect(feedback);
      feedback.connect(delay);

      // 1. Dron grave constante (Foco)
      const oscDrone = ctx.createOscillator();
      const gainDrone = ctx.createGain();
      oscDrone.type = 'sine';
      oscDrone.frequency.setValueAtTime(130.81 * 2, ctx.currentTime); // C3

      gainDrone.gain.setValueAtTime(0, ctx.currentTime);
      gainDrone.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.4);
      gainDrone.gain.setValueAtTime(0.3, ctx.currentTime + 1.0);
      gainDrone.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 2.0);

      oscDrone.connect(gainDrone);
      gainDrone.connect(ctx.destination);

      // 2. Armónico suave y menos estridente
      const oscHigh = ctx.createOscillator();
      const gainHigh = ctx.createGain();
      oscHigh.type = 'triangle'; // Onda más suave, sin picos
      oscHigh.frequency.setValueAtTime(392.00 * 2, ctx.currentTime + 0.2); // Bajada una octava (G4) para no pitar fuerte

      gainHigh.gain.setValueAtTime(0, ctx.currentTime + 0.2);
      gainHigh.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.4); // Mitad de volumen
      gainHigh.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.8);

      oscHigh.connect(gainHigh);
      gainHigh.connect(ctx.destination);
      gainHigh.connect(delay); delay.connect(ctx.destination);

      oscDrone.start(ctx.currentTime); oscDrone.stop(ctx.currentTime + 2.0);
      oscDrone.start(ctx.currentTime); oscDrone.stop(ctx.currentTime + 2.0);
      oscHigh.start(ctx.currentTime + 0.2); oscHigh.stop(ctx.currentTime + 1.8);
    } catch (e) { }
  };

  const playBountySound = () => {
    try {
      if (localStorage.getItem('hometeam_mute_sounds') === 'true') return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const delay = ctx.createDelay();
      delay.delayTime.value = 0.15;
      const feedback = ctx.createGain();
      feedback.gain.value = 0.25;
      delay.connect(feedback);
      feedback.connect(delay);

      const playClack = (time) => {
        const bufferSize = ctx.sampleRate * 0.05;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(3000, ctx.currentTime + time);
        filter.frequency.exponentialRampToValueAtTime(8000, ctx.currentTime + time + 0.05);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0, ctx.currentTime + time);
        gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + time + 0.005);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + time + 0.05);

        noise.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
        noise.start(ctx.currentTime + time);
      };

      playClack(0.0);
      playClack(0.12);

      const oscEnd = ctx.createOscillator();
      const gainEnd = ctx.createGain();
      oscEnd.type = 'triangle';
      oscEnd.frequency.setValueAtTime(880.00, ctx.currentTime + 0.25); // A5

      gainEnd.gain.setValueAtTime(0, ctx.currentTime + 0.25);
      gainEnd.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.26);
      gainEnd.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);

      oscEnd.connect(gainEnd);
      gainEnd.connect(ctx.destination);
      gainEnd.connect(delay); delay.connect(ctx.destination);

      oscEnd.start(ctx.currentTime + 0.25);
      oscEnd.stop(ctx.currentTime + 0.8);
    } catch (e) { }
  };

  const playAvalancheSound = () => {
    try {
      if (localStorage.getItem('hometeam_mute_sounds') === 'true') return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const delay = ctx.createDelay();
      delay.delayTime.value = 0.2;
      const feedback = ctx.createGain();
      feedback.gain.value = 0.4;
      delay.connect(feedback);
      feedback.connect(delay);

      const oscMotor = ctx.createOscillator();
      const gainMotor = ctx.createGain();
      oscMotor.type = 'sawtooth';

      oscMotor.frequency.setValueAtTime(100, ctx.currentTime);
      oscMotor.frequency.exponentialRampToValueAtTime(3000, ctx.currentTime + 0.2);

      gainMotor.gain.setValueAtTime(0, ctx.currentTime);
      gainMotor.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.1);
      gainMotor.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);

      const motorFilter = ctx.createBiquadFilter();
      motorFilter.type = 'lowpass';
      motorFilter.frequency.setValueAtTime(200, ctx.currentTime);
      motorFilter.frequency.exponentialRampToValueAtTime(5000, ctx.currentTime + 0.2);

      oscMotor.connect(motorFilter);
      motorFilter.connect(gainMotor);
      gainMotor.connect(ctx.destination);

      oscMotor.start();
      oscMotor.stop(ctx.currentTime + 0.25);

      const bufferSize = ctx.sampleRate * 0.3;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

      const noiseZap = ctx.createBufferSource();
      noiseZap.buffer = buffer;

      const zapFilter = ctx.createBiquadFilter();
      zapFilter.type = 'bandpass';
      zapFilter.Q.value = 8;
      zapFilter.frequency.setValueAtTime(8000, ctx.currentTime + 0.2);
      zapFilter.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.3);

      const gainZap = ctx.createGain();
      gainZap.gain.setValueAtTime(0, ctx.currentTime + 0.2);
      gainZap.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 0.21);
      gainZap.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

      noiseZap.connect(zapFilter);
      zapFilter.connect(gainZap);
      gainZap.connect(ctx.destination);
      gainZap.connect(delay); delay.connect(ctx.destination);

      noiseZap.start(ctx.currentTime + 0.2);
    } catch (e) { }
  };

  const playCharitySound = () => {
    try {
      if (localStorage.getItem('hometeam_mute_sounds') === 'true') return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const delay = ctx.createDelay();
      delay.delayTime.value = 0.15;
      const feedback = ctx.createGain();
      feedback.gain.value = 0.4;
      delay.connect(feedback);
      feedback.connect(delay);

      const notes = [1046.50, 880.00, 783.99, 659.25, 523.25, 440.00];
      const dropDuration = 0.08;

      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + index * dropDuration);

        const time = ctx.currentTime + index * dropDuration;

        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.2, time + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);
        gain.connect(delay); delay.connect(ctx.destination);

        osc.start(time);
        osc.stop(time + 0.35);
      });
    } catch (e) { }
  };

  const processRPCAndFrenzy = async (taskName, durationSeconds, isManual = false, targetUser = userName) => {
    if (!targetUser || durationSeconds < 60) return 0; // Menos de 1 min no da RPC

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
    const todayChores = chores.filter(c => c.userName === targetUser && c.dateString === todayStr);
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
      // Only show confetti / toast if current user is the target user
      if (targetUser === userName) {
        showToast('🔥 ¡MODO FRENESÍ x2 DESATADO HASTA MAÑANA!', 'success');
        playFrenzySound();
        import('canvas-confetti').then((confetti) => {
          confetti.default({ particleCount: 300, spread: 160, origin: { y: 0.5 }, colors: ['#ff0000', '#ff5a00', '#ff9a00', '#ffce00', '#ffe808'] });
        });
      }
    }

    rpcEarned = Math.round(rpcEarned * 100) / 100;
    const userData = usersData[targetUser] || { rpcBalance: 0 };

    // 5. Guardar
    try {
      await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', targetUser), {
        rpcBalance: (userData.rpcBalance || 0) + rpcEarned
      }, { merge: true });

      if (targetUser === userName) {
        playCashSound();
        if (!justTriggeredFrenzy && rpcEarned >= 0.1) {
          showToast(`+${rpcEarned.toFixed(2)} RPC Añadidos ${inFrenzy ? '🔥 x2' : ''}`, 'success');
        }
      } else {
        showToast(`+${rpcEarned.toFixed(2)} RPC para ${targetUser}`, 'success');
      }
    } catch (err) {
      console.error("Error updating RPC", err);
    }

    return rpcEarned;
  };

  const stopAndSaveTimer = async () => {
    if (!activeTask) return;
    const durationSeconds = elapsed;
    if (durationSeconds > 5) {
      try {
        const earned = await processRPCAndFrenzy(activeTask.name || 'Tarea sin nombre', durationSeconds);

        await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'chores'), {
          taskName: activeTask.name || 'Tarea sin nombre',
          durationSeconds,
          timestamp: Date.now(),
          dateString: getLocalYYYYMMDD(),
          userName: userName,
          userColor: userColor,
          userId: user?.uid || 'anonymous',
          rpcEarned: earned || 0
        });
        showToast('¡Tarea guardada con éxito!', 'success');
        playTaskCompleteSound();
        triggerConfetti(durationSeconds);
      } catch (error) {
        console.error("Error saving chore:", error);
        showToast('Error al guardar.', 'error');
      }
    }
    setActiveTask(null);
    setTaskInput('');
    // Al detener la tarea, limpiamos el status de Firebase
    try {
      await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', userName), {
        activeTimer: null
      }, { merge: true });
    } catch (err) {
      console.error("Error limpiando temporizador activo", err);
    }
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
        playGroceryCheckSound();
        import('canvas-confetti').then((confetti) => {
          confetti.default({ particleCount: 30, spread: 40, origin: { y: 0.8 }, colors: ['#10b981', '#ffffff'] });
        });
      } else {
        playGroceryUncheckSound();
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

  const handleUpdateStoreItem = async () => {
    if (!editingStoreItem || !editingStoreItem.name.trim() || editingStoreItem.cost < 1) return;
    try {
      await updateDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'store_items', editingStoreItem.id), {
        name: editingStoreItem.name.trim(),
        costRPC: Number(editingStoreItem.cost),
        icon: editingStoreItem.icon || '🎁'
      });
      setEditingStoreItem(null);
      showToast('Premio actualizado', 'success');
    } catch (error) {
      console.error("Error updating store item:", error);
      showToast('Error al actualizar', 'error');
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
      setShowP2PModal(true);
    }
  };

  const claimAchievement = async (ack) => {
    if (!userName || !ack || ack.actual <= ack.claimedAt) return;

    // We are passing directly the object from achievementsState
    const newTier = ack.claimedAt + 1;
    let earned = ack.reward;
    if (ack.id === 'total_hours') earned = 10.0;
    if (ack.id === 'p2p_gifts') earned = 2.0;

    try {
      const myBalance = usersData[userName]?.rpcBalance || 0;
      await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', userName), {
        rpcBalance: myBalance + earned,
        achievements: { [`${ack.id}`]: newTier }
      }, { merge: true });

      const quoteList = MOTIVATIONAL_QUOTES[ack.id] || MOTIVATIONAL_QUOTES['streak_global'];
      const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

      await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'moments'), {
        icon: '🏆',
        itemName: `¡${ack.title} Nivel ${newTier}! (+${earned.toFixed(1)} RPC)`,
        owner: userName,
        redeemedAt: Date.now(),
        timestamp: Date.now(), // Sort fix
        badgeProps: { color: ack.color, bg: ack.bg, darkBg: ack.darkBg, border: ack.border, shadow: ack.shadow, icon: ack.icon, tier: newTier, quote: randomQuote }
      });

      setActiveAchievementModal(null);
      if (ack.id === 'streak_global') {
        playFireSound();
      } else if (ack.id === 'streak_specific') {
        playConstancySound();
      } else if (ack.id === 'streak_bounty') {
        playBountySound();
      } else if (ack.id === 'streak_frenzy') {
        playAvalancheSound();
      } else if (ack.id === 'p2p_gifts') {
        playCharitySound();
      } else {
        playCashSound();
      }
      showToast(`¡Logro reclamado! +${earned.toFixed(1)} RPC`, 'success');
      import('canvas-confetti').then((confetti) => {
        confetti.default({ particleCount: 400, spread: 180, origin: { y: 0.5 }, colors: ['#f59e0b', '#fbbf24', '#fcd34d', '#ffffff'], zIndex: 1200 });
      });
    } catch (err) {
      console.error("Error claiming achievement:", err);
      showToast('Error al reclamar el logro', 'error');
    }
  };

  const handleSendRPC = async (e) => {
    e.preventDefault();
    const amount = parseFloat(p2pAmount);
    if (!amount || amount <= 0) {
      showToast('Cantidad inválida', 'error');
      return;
    }
    const myBalance = usersData[userName]?.rpcBalance || 0;
    if (amount > myBalance) {
      showToast('Fondos insuficientes', 'error');
      return;
    }

    try {
      await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', userName), { rpcBalance: myBalance - amount }, { merge: true });
      const peerBalance = usersData[selectedPeer]?.rpcBalance || 0;
      await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', selectedPeer), { rpcBalance: peerBalance + amount }, { merge: true });

      await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'p2p_notifications'), {
        type: 'transfer',
        from: userName,
        to: selectedPeer,
        amount: amount,
        message: p2pMessage.trim() || null,
        read: false,
        timestamp: Date.now()
      });

      // Log in history as a chore for the receiver
      await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'chores'), {
        taskName: `🎁 Regalo: ${p2pMessage.trim() || 'RPC'}`,
        durationSeconds: 1, // Just to have a non-zero value, doesn't impact base unless it replaces a real chore
        timestamp: Date.now(),
        dateString: getLocalYYYYMMDD(),
        userName: selectedPeer,
        userColor: USER_COLORS[0].id, // fallback
        userId: user?.uid || 'anonymous',
        rpcEarned: amount,
        isGift: true,
        sender: userName
      });

      // Log in moments for the receiver
      await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'moments'), {
        icon: '🎁',
        itemName: `${amount} RPC de ${userName}${p2pMessage.trim() ? ` - "${p2pMessage.trim()}"` : ''}`,
        owner: selectedPeer,
        redeemedAt: Date.now()
      });

      showToast(`¡Has enviado ${amount} RPC a ${selectedPeer}!`, 'success');
      setShowP2PModal(false);
      setP2pAmount('');
      setP2pMessage('');
    } catch (err) {
      console.error(err);
      showToast('Error en la transferencia', 'error');
    }
  };

  const handleProposeWager = async (e) => {
    e.preventDefault();
    if (!p2pWagerDesc.trim()) {
      showToast('Escribe una descripción', 'error');
      return;
    }

    const amount = parseFloat(p2pAmount) || 0;
    const myBalance = usersData[userName]?.rpcBalance || 0;
    if (amount > myBalance) {
      showToast('No tienes esos fondos para apostar', 'error');
      return;
    }

    try {
      await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'wagers'), {
        proposer: userName,
        receiver: selectedPeer,
        description: p2pWagerDesc.trim(),
        amountRPC: amount,
        storeItemId: p2pWagerStoreItem || null,
        deadline: p2pWagerDeadline || null,
        status: 'pending',
        created_at: Date.now()
      });
      showToast('Propuesta enviada. Esperando a la otra parte.', 'success');
      setShowP2PModal(false);
      setP2pWagerDesc('');
      setP2pAmount('');
      setP2pWagerStoreItem('');
      setP2pWagerDeadline('');
    } catch (err) {
      console.error(err);
      showToast('Error al proponer la apuesta', 'error');
    }
  };

  const handleResolveWager = async (wager, winner) => {
    try {
      if (winner !== 'Empate') {
        const loser = winner === wager.proposer ? wager.receiver : wager.proposer;

        if (wager.amountRPC > 0) {
          const winnerBalance = usersData[winner]?.rpcBalance || 0;
          const loserBalance = usersData[loser]?.rpcBalance || 0;
          await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', loser), { rpcBalance: Math.max(0, loserBalance - wager.amountRPC) }, { merge: true });
          await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', winner), { rpcBalance: winnerBalance + wager.amountRPC }, { merge: true });
        }

        if (wager.storeItemId) {
          const item = storeItems.find(i => i.id === wager.storeItemId);
          if (item) {
            const loserBalance = usersData[loser]?.rpcBalance || 0;
            await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', loser), { rpcBalance: Math.max(0, loserBalance - item.costRPC) }, { merge: true });
            await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'coupons'), {
              itemId: item.id,
              itemName: item.name,
              icon: item.icon,
              owner: winner,
              timestamp: Date.now()
            });
          }
        }
      }

      await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'wagers', wager.id), { status: 'completed', winner, winner_timestamp: Date.now() }, { merge: true });
      showToast('Apuesta finalizada. ¡El resultado es definitivo!', 'success');
      setShowActiveWagerModal(null);
    } catch (err) {
      console.error(err);
      showToast('Error al resolver la apuesta', 'error');
    }
  };

  const handleRespondWager = async (wagerId, accept) => {
    try {
      if (accept) {
        await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'wagers', wagerId), { status: 'accepted' }, { merge: true });
        showToast('¡Apuesta aceptada! Que comience el juego.', 'success');
      } else {
        await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'wagers', wagerId), { status: 'declined' }, { merge: true });
        showToast('Apuesta rechazada.', 'success');
      }
    } catch (err) {
      console.error(err);
      showToast('Error de conexión', 'error');
    }
  };

  const handleSaveManual = async () => {
    if (!manualData.name || (manualData.hours === 0 && manualData.minutes === 0)) return;
    const totalSeconds = (parseInt(manualData.hours || 0) * 3600) + (parseInt(manualData.minutes || 0) * 60);

    // Usa el autor seleccionado en manualData o el usuario actual como resguardo
    const authorName = manualData.author || userName;
    const authorUserConfig = Object.values(USER_COLORS).find(c => c.id === usersData[authorName]?.color) || USER_COLORS[0];
    const authorColor = authorUserConfig.id;

    const payload = {
      taskName: manualData.name,
      durationSeconds: totalSeconds,
      dateString: manualData.date,
      timestamp: new Date(manualData.date).getTime(),
      userName: authorName,
      userColor: authorColor,
      userId: user?.uid || 'anonymous' // Para multicuenta, valdría con el de auth u omitirlo
    };

    try {
      if (modalMode === 'edit' && editingItem) {
        await updateDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'chores', editingItem.id), payload);

        // BULK RENAME LOGIC
        if (editingItem.taskName !== payload.taskName) {
          if (window.confirm(`Has cambiado el nombre a "${payload.taskName}". ¿Deseas actualizar el nombre en TODOS los registros de "${editingItem.taskName}"?`)) {
            const q = query(collection(db, 'artifacts', safeAppId, 'public', 'data', 'chores'));
            // Since we don't have an index for taskName, fetch all and filter client side
            showToast('Actualizando historial...', 'info');
            const snapshot = await getDocs(q);
            const batch = writeBatch(db);
            let updatedCount = 0;
            snapshot.forEach(docSnap => {
              const data = docSnap.data();
              if (data.taskName === editingItem.taskName && docSnap.id !== editingItem.id) {
                batch.update(docSnap.ref, { taskName: payload.taskName });
                updatedCount++;
              }
            });
            if (updatedCount > 0) {
              await batch.commit();
              showToast(`Renombrados ${updatedCount} registros históricos.`, 'success');
            }
          }
        }
      } else {
        const earned = await processRPCAndFrenzy(payload.taskName, payload.durationSeconds, true, authorName);
        payload.rpcEarned = earned || 0;
        await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'chores'), payload);
      }
      setModalMode(null);
      setEditingItem(null);
      showToast('¡Registro guardado!', 'success');
    } catch (error) {
      console.error("Error saving manual database entry:", error);
      showToast("Error de conexión.", 'error');
    }
  };

  const deleteChore = async (id) => {
    if (window.confirm('¿Eliminar este registro?')) {
      const chore = chores.find(c => c.id === id);
      if (chore) {
        let deductedRPC = 0;
        if (chore.rpcEarned !== undefined) {
          deductedRPC = chore.rpcEarned;
        } else {
          // Fallback legacy calculation
          deductedRPC = Math.round((chore.durationSeconds / 900) * 100) / 100;
        }

        if (deductedRPC > 0) {
          const authorBalance = usersData[chore.userName]?.rpcBalance || 0;
          await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', chore.userName), {
            rpcBalance: Math.max(0, authorBalance - deductedRPC)
          }, { merge: true });

          // Revert gift to original sender
          if (chore.isGift && chore.sender) {
            const senderBalance = usersData[chore.sender]?.rpcBalance || 0;
            await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'users', chore.sender), {
              rpcBalance: senderBalance + deductedRPC
            }, { merge: true });
            if (userName === chore.userName) {
              showToast(`-${deductedRPC.toFixed(2)} RPC devueltos a ${chore.sender}`, 'info');
            } else {
              showToast(`-${deductedRPC.toFixed(2)} RPC deducidos de ${chore.userName} y devueltos a ${chore.sender}`, 'info');
            }
          } else {
            showToast(`-${deductedRPC.toFixed(2)} RPC deducidos de ${chore.userName}`, 'info');
          }
        }
      }

      await deleteDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'chores', id));
      setModalMode(null);
    }
  };

  const openEdit = (chore) => {
    setEditingItem(chore);
    setManualData({
      name: chore.taskName,
      hours: Math.floor(chore.durationSeconds / 3600),
      minutes: Math.floor((chore.durationSeconds % 3600) / 60),
      date: chore.dateString,
      author: chore.userName
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
    const usersTasks = {};
    dayChores.forEach(c => {
      users[c.userName] = (users[c.userName] || 0) + c.durationSeconds;
      if (!usersTasks[c.userName]) usersTasks[c.userName] = {};
      usersTasks[c.userName][c.taskName] = (usersTasks[c.userName][c.taskName] || 0) + c.durationSeconds;
    });
    return { users, usersTasks, total: dayChores.reduce((s, c) => s + c.durationSeconds, 0) };
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
    const usersTasks = {};
    weekChores.forEach(c => {
      users[c.userName] = (users[c.userName] || 0) + c.durationSeconds;
      if (!usersTasks[c.userName]) usersTasks[c.userName] = {};
      usersTasks[c.userName][c.taskName] = (usersTasks[c.userName][c.taskName] || 0) + c.durationSeconds;
    });
    return { users, usersTasks, total: weekChores.reduce((s, c) => s + c.durationSeconds, 0) };
  }, [chores, selectedDate]);

  const selectedMonthStats = useMemo(() => {
    const monthStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}`;
    const monthChores = chores.filter(c => c.dateString.startsWith(monthStr));
    const users = {};
    const usersTasks = {};
    monthChores.forEach(c => {
      users[c.userName] = (users[c.userName] || 0) + c.durationSeconds;
      if (!usersTasks[c.userName]) usersTasks[c.userName] = {};
      usersTasks[c.userName][c.taskName] = (usersTasks[c.userName][c.taskName] || 0) + c.durationSeconds;
    });
    return { users, usersTasks, total: monthChores.reduce((s, c) => s + c.durationSeconds, 0) };
  }, [chores, selectedDate]);

  const currentRadiographyStats = radiographyView === 'day' ? selectedDayStats : (radiographyView === 'week' ? selectedWeekStats : selectedMonthStats);

  const getDailyQuote = (tabId) => {
    const quotesArray = DAILY_QUOTES[tabId] || DAILY_QUOTES['timer'];
    const dateStr = getLocalYYYYMMDD();
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
      hash |= 0;
    }
    const index = Math.abs(hash) % quotesArray.length;
    return quotesArray[index];
  };

  const dailyQuote = useMemo(() => getDailyQuote(activeTab), [getLocalYYYYMMDD(), activeTab]);

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
      <style>{`
        @keyframes soft-glow {
          0%, 100% { opacity: 1; transform: scale(1.15); box-shadow: 0 0 15px rgba(251, 146, 60, 0.4); }
          50% { opacity: 0.9; transform: scale(1.12); box-shadow: 0 0 5px rgba(251, 146, 60, 0.1); }
        }
        .animate-soft-glow {
          animation: soft-glow 3s ease-in-out infinite;
        }
      `}</style>
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
        <div className="px-4 py-2 text-center animate-in slide-in-from-top-2 fade-in duration-500 delay-100 mb-2">
          <p className="text-sm italic font-medium text-slate-500 dark:text-slate-400">"{dailyQuote}"</p>
        </div>

        {activeTab === 'timer' && (
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4">

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
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-3 ml-2 flex items-center gap-1.5"><Sparkles size={12} className="text-emerald-500 animate-pulse" /> En busca y captura</p>
                  <div className="flex overflow-x-auto gap-3 pb-3 -mx-4 px-4 no-scrollbar snap-x">
                    {hotTasks.map(t => (
                      <button key={t.name} onClick={() => setTaskInput(t.name)} className={`relative overflow-hidden shrink-0 snap-start text-xs px-4 py-2.5 rounded-2xl border font-bold flex flex-col items-start justify-center gap-1 transition-all hover:scale-105 active:scale-95 shadow-sm ${isDarkMode ? 'bg-gradient-to-br from-emerald-950/40 to-teal-900/40 border-emerald-800/50 text-emerald-300 shadow-emerald-900/20' : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 text-emerald-800 shadow-emerald-500/10'}`}>
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
                        <span className="relative z-10">{t.name}</span>
                        <span className={`relative flex items-center gap-1 z-10 text-[10px] px-1.5 py-0.5 rounded-md font-black tracking-tight ${inFrenzyMode ? 'bg-amber-500 text-white shadow-md drop-shadow-[0_0_8px_rgba(245,158,11,0.6)] animate-pulse' : isDarkMode ? 'bg-emerald-800 text-emerald-100 shadow-inner' : 'bg-emerald-200 text-emerald-900 shadow-sm'}`}>
                          x{(t.multiplier * (inFrenzyMode ? 2 : 1)).toFixed(2)} RPC {inFrenzyMode && <Flame size={10} strokeWidth={3} />}
                        </span>
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
              {/* --- EN DIRECTO --- */}
              {Object.keys(usersData)
                .filter(u => u !== userName && usersData[u]?.activeTimer && !usersData[u].activeTimer.isPaused)
                .map(u => {
                  const liveTask = usersData[u].activeTimer;
                  const uColorConfig = USER_COLORS.find(c => c.id === usersData[u]?.color) || USER_COLORS[0];
                  return (
                    <div key={`live-${u}`} className="mb-4 animate-in fade-in slide-in-from-bottom-2">
                      <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2 px-2 flex items-center gap-1.5 animate-pulse">
                        <Flame size={12} strokeWidth={3} /> En directo
                      </h3>
                      <div className={`relative overflow-hidden p-4 rounded-2xl border flex items-center justify-between ${isDarkMode ? 'bg-slate-900 border-red-500/20' : 'bg-red-50/50 border-red-100'} shadow-sm`}>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent pointer-events-none"></div>

                        <div className="flex items-center gap-3 relative z-10 w-full overflow-hidden">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-xs shrink-0 drop-shadow-md ${uColorConfig.bg} ring-2 ring-red-500/30 ring-offset-2 ${isDarkMode ? 'ring-offset-slate-900' : 'ring-offset-white'}`}>
                            {u.substring(0, 2).toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-bold text-sm tracking-tight truncate flex justify-between items-center pr-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                              <span>{liveTask.name || 'Tarea sin nombre'}</span>
                              <span className="text-red-500 font-mono text-xs tabular-nums drop-shadow-sm ml-2">
                                <LiveTaskTimer liveTask={liveTask} />
                              </span>
                            </p>
                            <p className="text-[10px] uppercase font-bold text-slate-500 flex items-center gap-1 opacity-80 mt-0.5">
                              {u} <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping ml-1"></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">Actividad de hoy</h3>
              <div className="space-y-3">
                {chores.filter(c => c.dateString === getLocalYYYYMMDD()).slice(0, 5).map(chore => {
                  const style = getTaskStyle(chore.taskName);
                  const Icon = style.icon;
                  const uColorClass = USER_COLORS.find(c => c.id === chore.userColor)?.css || 'text-slate-500';
                  return (
                    <div key={chore.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-4 rounded-2xl border flex items-center justify-between group relative overflow-hidden`}>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="font-bold text-sm tracking-tight">{chore.taskName}</p>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-1">
                            <span className="text-slate-500 font-bold">{new Date(chore.timestamp || Date.now()).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
                            • <span className={`font-bold ${uColorClass}`}>{chore.userName}</span> • {formatTimeDetailed(chore.durationSeconds)}
                            {chore.rpcEarned > 0 && (
                              <> • <span className="font-bold text-slate-600 dark:text-slate-400"><span className="text-orange-500/80 dark:text-orange-400/80">+</span>{chore.rpcEarned.toFixed(2)} RPC</span></>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1 opacity-50 hover:opacity-100 transition-opacity">
                        <button onClick={() => openEdit(chore)} className="p-2 text-slate-400 hover:text-indigo-500 active:text-indigo-500"><Edit2 size={16} /></button>
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
                    <div key={name} className="group">
                      <div
                        className="cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 p-1 -mx-1 rounded transition-colors"
                        onClick={() => setExpandedUser(expandedUser === name ? null : name)}
                      >
                        <div className="flex justify-between text-xs mb-1 font-bold">
                          <span className="flex items-center gap-1">
                            {name}
                            <span className="text-[10px] text-slate-400 font-normal transition-transform duration-200" style={{ transform: expandedUser === name ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                          </span>
                          <span>{formatTimeDetailed(seconds)}</span>
                        </div>
                        <div className="h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 transition-all duration-700" style={{ width: `${(seconds / currentRadiographyStats.total) * 100}%` }}></div>
                        </div>
                      </div>

                      {expandedUser === name && currentRadiographyStats.usersTasks?.[name] && (
                        <div className="mt-3 space-y-2 pl-2 border-l-2 border-slate-100 dark:border-slate-800 animate-in slide-in-from-top-2 fade-in duration-200">
                          {Object.entries(currentRadiographyStats.usersTasks[name])
                            .sort(([, aSec], [, bSec]) => bSec - aSec)
                            .map(([taskName, taskSec]) => {
                              return (
                                <div key={taskName} className="flex justify-between items-center text-[10px]">
                                  <div className="flex items-center gap-1.5 min-w-0 pr-2">
                                    <span className="text-slate-600 dark:text-slate-400 font-medium truncate">{taskName}</span>
                                  </div>
                                  <span className="font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">{formatTimeDetailed(taskSec)}</span>
                                </div>
                              );
                            })}
                        </div>
                      )}
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
                        <div>
                          <p className="font-bold text-sm">{chore.taskName}</p>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                            <span className="text-slate-500">{new Date(chore.timestamp || Date.now()).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
                            • <span className={`font-bold ${uColorClass}`}>{chore.userName}</span> • <span className="text-slate-500 font-medium">{formatTimeDetailed(chore.durationSeconds)}</span>
                            {chore.rpcEarned > 0 && (
                              <> • <span className="font-bold text-slate-600 dark:text-slate-400"><span className="text-orange-500/80 dark:text-orange-400/80">+</span>{chore.rpcEarned.toFixed(2)} RPC</span></>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1 opacity-50 hover:opacity-100 transition-opacity">
                        <button onClick={() => openEdit(chore)} className="p-2 text-slate-400 hover:text-indigo-500"><Edit2 size={16} /></button>
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
                    {(provided) => {
                      const pendingItems = groceries.filter(g => !g.completed && (!selectedSupermarket || g.supermarket === selectedSupermarket));
                      return (
                        <div className="space-y-2" {...provided.droppableProps} ref={provided.innerRef}>
                          {pendingItems.length === 0 ? <p className="text-center text-xs text-slate-400 italic py-6">Lista de la compra vacía.</p> : pendingItems.map((item, index) => (
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
                      )
                    }}
                  </Droppable>
                </DragDropContext>
              </div>

              {groceries.filter(g => g.completed && (!selectedSupermarket || g.supermarket === selectedSupermarket)).length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">En el Carrito</h3>
                  <div className="space-y-2 opacity-60">
                    {groceries.filter(g => g.completed && (!selectedSupermarket || g.supermarket === selectedSupermarket)).map(item => (
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
                          <div
                            key={name}
                            onClick={() => {
                              if (name !== userName) {
                                setSelectedPeer(name);
                                setP2pMode(null);
                                setShowP2PModal(true);
                              }
                            }}
                            className={`shrink-0 snap-start bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3 flex items-center gap-3 min-w-[140px] shadow-sm ${name !== userName ? 'cursor-pointer hover:bg-white/20 transition-colors' : ''}`}
                          >
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

            {/* CARRUSEL INFINITO DE LOGROS (Google Maps Style) */}
            <div className="mt-2">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2 mb-3 flex items-center gap-2">
                <Target size={14} /> Mis Logros
              </h3>
              <div className="flex overflow-x-auto gap-4 pb-4 pt-4 -mx-2 px-2 no-scrollbar snap-x">
                {achievementsState.map((ack) => {
                  const isReady = ack.actual > ack.claimedAt;
                  const currentTier = ack.claimedAt; // Lo que ya tiene asegurado
                  let nextGoal = currentTier + 1;
                  if (ack.id === 'total_hours' && ack.actual === 0 && ack.claimedAt === 0) nextGoal = 1;

                  // Calcular progresión visual
                  let progressPercent = 0;
                  if (ack.id === 'total_hours') {
                    if (isReady) {
                      progressPercent = 100; // Keep it full until claimed
                    } else {
                      // Modulo 10 to get hours towards next milestone
                      progressPercent = ((ack.rawTotalHours % 10) / 10) * 100;
                    }
                  } else if (ack.id === 'streak_global' || ack.id === 'streak_specific' || ack.id === 'streak_bounty' || ack.id === 'streak_frenzy' || ack.id === 'p2p_gifts') {
                    progressPercent = (ack.actual / nextGoal) * 100;
                  }
                  if (progressPercent > 100) progressPercent = 100;

                  // Icon Component
                  let IconCmp = Award;
                  if (ack.icon === 'Flame') IconCmp = Flame;
                  if (ack.icon === 'Target') IconCmp = Target;
                  if (ack.icon === 'Crosshair') IconCmp = Crosshair;
                  if (ack.icon === 'Zap') IconCmp = Zap;
                  if (ack.icon === 'HeartHandshake') IconCmp = HeartHandshake;

                  const dashArray = `${progressPercent}, 100`;

                  return (
                    <div
                      key={ack.id}
                      onClick={() => setActiveAchievementModal(ack)}
                      className="shrink-0 snap-start flex flex-col items-center gap-2 cursor-pointer group"
                    >
                      <div className={`relative w-[72px] h-[72px] rounded-full flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm border ${ack.isAlert && !isReady ? 'ring-2 ring-red-500/80 shadow-red-500/20' : ''} ${ack.border} transition-all duration-300 ${isReady ? `scale-[1.15] ${ack.shadow} shadow-lg ring-4 ring-offset-2 ring-orange-400/50 dark:ring-offset-slate-950 animate-soft-glow` : 'hover:scale-105'}`}>

                        {/* SVGs para el anillo de progreso estilo Google Maps */}
                        <svg viewBox="0 0 36 36" className="absolute inset-0 w-full h-full -rotate-90">
                          <circle strokeDasharray="100, 100" className="text-slate-100 dark:text-slate-800 stroke-current" strokeWidth="2.5" fill="none" r="16" cx="18" cy="18" />
                          <circle
                            strokeDasharray={dashArray}
                            className={`${ack.color} stroke-current transition-all duration-1000 ease-out`}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                            r="16" cx="18" cy="18"
                          />
                        </svg>

                        <div className={`w-11 h-11 rounded-full flex items-center justify-center relative z-10 ${isReady ? ack.bg : 'bg-slate-100 dark:bg-slate-800'} ${isReady ? ack.darkBg : ''}`}>
                          <IconCmp size={20} className={`${isReady ? ack.color : 'text-slate-400'} ${isReady ? 'animate-soft-glow' : ''}`} />
                        </div>

                        {/* Alarma muy sutil si está a punto de perder la racha */}
                        {ack.isAlert && !isReady && (
                          <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-slate-950 animate-pulse z-20 shadow-sm shadow-red-500/50"></div>
                        )}
                      </div>
                      <div className="text-center w-24">
                        <p className={`text-[9px] font-bold uppercase truncate ${isReady ? ack.color : 'text-slate-500'}`}>{ack.title}</p>
                        <p className="text-[10px] font-black text-slate-400">Nvl. {currentTier}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
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
                {/* Wagers Area */}
                {wagers.filter(w => w.status === 'pending' && w.receiver === userName).length > 0 && (
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-3xl p-4 shadow-sm mb-4">
                    <h3 className="text-xs font-bold text-indigo-800 dark:text-indigo-300 uppercase tracking-widest mb-3 flex items-center gap-2"><Flame size={14} /> Retos Pendientes</h3>
                    <div className="space-y-3">
                      {wagers.filter(w => w.status === 'pending' && w.receiver === userName).map(w => (
                        <div key={w.id} className="bg-white dark:bg-slate-800 rounded-2xl p-4 flex flex-col gap-3 shadow-sm border border-indigo-100 dark:border-indigo-900">
                          <p className="font-bold text-sm">¡{w.proposer} te ha retado!</p>
                          <p className="text-xs italic text-slate-500">{w.description}</p>
                          {w.deadline && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">⏳ Límite: {new Date(w.deadline).toLocaleDateString()} {new Date(w.deadline).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>}
                          <div className="flex gap-2 font-bold text-xs mt-1">
                            {w.amountRPC > 0 && <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-md">{w.amountRPC} RPC</span>}
                            {w.storeItemId && <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-md">Premio de Tienda</span>}
                          </div>
                          <div className="flex gap-2 mt-2">
                            <button onClick={() => handleRespondWager(w.id, true)} className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl text-xs flex justify-center items-center gap-1 transition-colors"><CheckCircle2 size={14} /> Aceptar</button>
                            <button onClick={() => handleRespondWager(w.id, false)} className="flex-1 bg-slate-100 hover:bg-red-100 text-slate-500 hover:text-red-500 dark:bg-slate-700 py-2 rounded-xl text-xs transition-colors">Rechazar</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {wagers.filter(w => w.status === 'accepted' && (w.proposer === userName || w.receiver === userName)).length > 0 && (
                  <div className="mb-6 mb-4">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-1 flex items-center gap-2"><Swords size={14} /> Apuestas Activas</h3>
                    <div className="flex overflow-x-auto gap-4 pb-2 -mx-2 px-2 no-scrollbar snap-x">
                      {wagers.filter(w => w.status === 'accepted' && (w.proposer === userName || w.receiver === userName)).map(w => (
                        <div key={w.id} onClick={() => setShowActiveWagerModal(w)} className="shrink-0 snap-start bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-5 w-64 shadow-lg cursor-pointer transform hover:scale-[1.02] active:scale-95 transition-all relative overflow-hidden group">
                          <div className="absolute -right-4 -bottom-4 text-white/10 text-8xl rotate-12 group-hover:rotate-0 transition-transform"><Swords /></div>
                          <div className="relative z-10 text-white">
                            <div className="flex justify-between items-start mb-2">
                              <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">En Juego</span>
                              {w.amountRPC > 0 && <span className="font-black text-orange-300">{w.amountRPC} RPC</span>}
                            </div>
                            <p className="font-bold text-sm leading-tight mb-3 line-clamp-2">{w.description}</p>
                            {w.deadline && <p className="text-[10px] text-red-200 font-bold uppercase tracking-wider mb-2">⏳ Límite: {new Date(w.deadline).toLocaleDateString()} {new Date(w.deadline).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>}
                            <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                              <span className="truncate max-w-[80px] text-emerald-300 font-bold">{w.proposer}</span> vs <span className="truncate max-w-[80px] text-blue-300 font-bold">{w.receiver}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center px-1 mt-6">
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
                {moments.map(moment => {
                  let IconCmp = Award;
                  if (moment.badgeProps?.icon === 'Flame') IconCmp = Flame;
                  if (moment.badgeProps?.icon === 'Target') IconCmp = Target;
                  if (moment.badgeProps?.icon === 'Crosshair') IconCmp = Crosshair;
                  if (moment.badgeProps?.icon === 'Zap') IconCmp = Zap;
                  if (moment.badgeProps?.icon === 'HeartHandshake') IconCmp = HeartHandshake;

                  return (
                    <div key={moment.id} className="bg-white dark:bg-slate-900 border-[8px] border-white dark:border-slate-800 shadow-xl rounded-sm transition-transform hover:-translate-y-1 hover:shadow-2xl max-w-[280px] mx-auto">
                      <div className={`aspect-square flex items-center justify-center text-8xl border border-slate-200 dark:border-slate-700 relative overflow-hidden ${moment.badgeProps ? moment.badgeProps.bg + ' ' + (moment.badgeProps.darkBg || '') : 'bg-slate-100 dark:bg-slate-800'}`}>
                        {moment.badgeProps ? (() => {
                          const tier = moment.badgeProps.tier || 1;
                          const isUncommon = tier >= 5;
                          const isRare = tier >= 10;
                          const isEpic = tier >= 20;
                          const isLegendary = tier >= 50;

                          const baseSize = isLegendary ? 'w-48 h-48' : isEpic ? 'w-44 h-44' : isRare ? 'w-40 h-40' : isUncommon ? 'w-36 h-36' : 'w-32 h-32';
                          const iconSize = isLegendary ? 72 : isEpic ? 64 : isRare ? 56 : isUncommon ? 48 : 40;
                          const centerSize = isLegendary ? 'w-32 h-32' : isEpic ? 'w-28 h-28' : isRare ? 'w-24 h-24' : 'w-20 h-20';

                          return (
                            <div className={`relative ${baseSize} flex items-center justify-center transition-all duration-500 hover:scale-105`}>
                              {isEpic && <div className={`absolute inset-0 rounded-full ${moment.badgeProps.bg} animate-pulse blur-2xl opacity-60 z-0`}></div>}
                              {isLegendary && <div className={`absolute -inset-4 rounded-full ${moment.badgeProps.bg} animate-ping opacity-30 blur-xl z-0`}></div>}

                              {isUncommon && (
                                <svg viewBox="0 0 50 50" className={`absolute inset-0 w-full h-full -rotate-90 opacity-50 z-10 ${isEpic ? 'animate-[spin_4s_linear_infinite]' : isRare ? 'animate-[spin_8s_linear_infinite]' : ''}`}>
                                  <circle strokeDasharray={isEpic ? "5, 5" : "15, 10"} className={`${moment.badgeProps.color} stroke-current`} strokeWidth={isEpic ? "3" : "1"} fill="none" r="23" cx="25" cy="25" />
                                </svg>
                              )}

                              {isRare && (
                                <svg viewBox="0 0 50 50" className={`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] -rotate-90 opacity-60 z-10 ${isLegendary ? 'animate-[spin_3s_linear_infinite_reverse]' : 'animate-[spin_6s_linear_infinite_reverse]'}`}>
                                  <circle strokeDasharray="2, 8" className={`${moment.badgeProps.color} stroke-current`} strokeWidth={isLegendary ? "4" : "2"} fill="none" r="23" cx="25" cy="25" />
                                </svg>
                              )}

                              <svg viewBox="0 0 36 36" className={`absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] -rotate-90 z-10 ${isRare ? 'opacity-40' : 'opacity-20'}`}>
                                <circle strokeDasharray="100, 100" className={`${moment.badgeProps.color} stroke-current`} strokeWidth="4" fill="none" r="16" cx="18" cy="18" />
                              </svg>
                              <svg viewBox="0 0 36 36" className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] -rotate-90 z-10">
                                <circle strokeDasharray="100, 100" className={`${moment.badgeProps.color} stroke-current`} strokeWidth="1" fill="none" r="16" cx="18" cy="18" />
                              </svg>

                              <div className={`${centerSize} rounded-full flex items-center justify-center relative z-20 bg-white/60 dark:bg-black/60 backdrop-blur-md border-[3px] ${moment.badgeProps.border} ${isEpic ? 'shadow-[0_0_40px_rgba(255,255,255,0.5)] dark:shadow-[0_0_40px_rgba(0,0,0,0.8)]' : isRare ? 'shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'shadow-xl'} transition-all duration-500`}>
                                <IconCmp size={iconSize} className={`${moment.badgeProps.color} ${isLegendary ? 'drop-shadow-[0_0_15px_currentColor] animate-soft-glow' : ''}`} />
                              </div>
                            </div>
                          );
                        })() : (
                          moment.icon
                        )}
                      </div>
                      <div className="p-4 text-center mt-2">
                        <h4 className="font-bold font-serif text-sm text-slate-800 dark:text-slate-100 mb-1 leading-tight">{moment.itemName}</h4>
                        <p className="text-[10px] text-slate-400 font-medium font-serif italic mb-3">Por {moment.owner} • {new Date(moment.timestamp || moment.redeemedAt).toLocaleDateString()}</p>
                        {moment.badgeProps?.quote && (
                          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 transition-all">
                            <p className="text-xs italic text-slate-500 dark:text-slate-400 font-serif leading-relaxed px-2">"{moment.badgeProps.quote}"</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
                {moments.length === 0 && (
                  <div className="text-center py-8 text-slate-400 text-xs italic">Aún no hay grandes momentos registrados.</div>
                )}
              </div>
            )}
          </div>
        )
        }
        {
          activeTab === 'dashboard' && (
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
          )
        }
      </main >

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
      {
        modalMode && (
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Realizado por:</label>
                    <select className={`w-full p-3 rounded-xl border mt-1 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'} focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all`} value={manualData.author || userName} onChange={(e) => setManualData({ ...manualData, author: e.target.value })}>
                      {Object.keys(usersData).map(u => <option key={u} value={u}>{u}</option>)}
                    </select>
                  </div>
                  <div><label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Fecha</label><input type="date" className={`w-full p-3 rounded-xl border mt-1 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`} value={manualData.date} onChange={(e) => setManualData({ ...manualData, date: e.target.value })} /></div>
                </div>
                <div className="flex gap-2 w-full mt-4">
                  {modalMode === 'edit' && editingItem && (
                    <button onClick={() => deleteChore(editingItem.id)} className="w-16 bg-red-100 text-red-600 rounded-2xl flex justify-center items-center hover:bg-red-200 active:scale-95 transition-all shrink-0">
                      <Trash2 size={20} />
                    </button>
                  )}
                  <button onClick={handleSaveManual} className="flex-1 bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 active:scale-95 transition-all">Guardar</button>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {
        showAdminModal && (
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
                      <div key={item.id} className={`p-3 rounded-xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                        {editingStoreItem?.id === item.id ? (
                          <div className="space-y-3 animate-in fade-in zoom-in-95 duration-200">
                            <div className="flex gap-2">
                              <input type="text" maxLength="2" className={`w-12 text-center rounded-lg border ${isDarkMode ? 'bg-slate-900 border-slate-600' : 'bg-white border-slate-300'} px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500`} value={editingStoreItem.icon} onChange={(e) => setEditingStoreItem({ ...editingStoreItem, icon: e.target.value })} />
                              <input type="text" className={`flex-1 min-w-0 rounded-lg border ${isDarkMode ? 'bg-slate-900 border-slate-600' : 'bg-white border-slate-300'} px-3 py-1.5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500`} value={editingStoreItem.name} onChange={(e) => setEditingStoreItem({ ...editingStoreItem, name: e.target.value })} />
                            </div>
                            <div className="flex items-center gap-2">
                              <input type="number" min="1" className={`w-20 rounded-lg border ${isDarkMode ? 'bg-slate-900 border-slate-600 text-orange-400' : 'bg-white border-slate-300 text-orange-600'} px-2 py-1.5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500`} value={editingStoreItem.cost} onChange={(e) => setEditingStoreItem({ ...editingStoreItem, cost: e.target.value })} />
                              <span className="text-[10px] uppercase font-bold text-slate-400 mr-auto">RPC</span>

                              <button onClick={() => setEditingStoreItem(null)} className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition">Cancelar</button>
                              <button onClick={handleUpdateStoreItem} className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-500 hover:bg-indigo-600 transition shadow-sm">Guardar</button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between">
                            {editingStoreItem?.id === item.id ? (
                              <div className="flex-1 space-y-3 animate-in fade-in zoom-in-95 duration-200">
                                <div className="flex gap-2">
                                  <input type="text" maxLength="2" className={`w-12 text-center rounded-lg border ${isDarkMode ? 'bg-slate-900 border-slate-600' : 'bg-white border-slate-300'} px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500`} value={editingStoreItem.icon} onChange={(e) => setEditingStoreItem({ ...editingStoreItem, icon: e.target.value })} />
                                  <input type="text" className={`flex-1 min-w-0 rounded-lg border ${isDarkMode ? 'bg-slate-900 border-slate-600' : 'bg-white border-slate-300'} px-3 py-1.5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500`} value={editingStoreItem.name} onChange={(e) => setEditingStoreItem({ ...editingStoreItem, name: e.target.value })} />
                                </div>
                                <div className="flex items-center gap-2">
                                  <input type="number" min="1" className={`w-20 rounded-lg border ${isDarkMode ? 'bg-slate-900 border-slate-600 text-orange-400' : 'bg-white border-slate-300 text-orange-600'} px-2 py-1.5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500`} value={editingStoreItem.cost} onChange={(e) => setEditingStoreItem({ ...editingStoreItem, cost: e.target.value })} />
                                  <span className="text-[10px] uppercase font-bold text-slate-400 mr-auto">RPC</span>

                                  <button onClick={() => setEditingStoreItem(null)} className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition">Cancelar</button>
                                  <button onClick={handleUpdateStoreItem} className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-500 hover:bg-indigo-600 transition shadow-sm">Guardar</button>
                                </div>
                              </div>
                            ) : (
                              <>
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{item.icon}</span>
                                  <div>
                                    <p className="font-bold text-sm leading-tight">{item.name}</p>
                                    <p className="text-[10px] font-medium text-slate-500">{item.costRPC} RPC</p>
                                  </div>
                                </div>
                                <div className="flex gap-1">
                                  <button onClick={() => setEditingStoreItem({ id: item.id, name: item.name, cost: item.costRPC, icon: item.icon })} className="p-2 text-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"><Edit2 size={16} /></button>
                                  <button onClick={() => handleAdminDeleteStoreItem(item.id)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"><Trash2 size={16} /></button>
                                </div>
                              </>
                            )}
                          </div>
                        )}
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
        )
      }

      {
        showItemModal && (
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
        )
      }

      {
        showSupermarketModal && (
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
        )
      }

      {
        showP2PModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border animate-in slide-in-from-bottom-8`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-xl flex items-center gap-2">Interactuar con {selectedPeer}</h2>
                <button onClick={() => { setShowP2PModal(false); setP2pMode(null); }} className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><X size={20} /></button>
              </div>

              {!p2pMode ? (
                <div className="space-y-4">
                  <button onClick={() => setP2pMode('send')} className="w-full p-4 rounded-2xl border-2 border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-bold transition-colors flex items-center justify-center gap-2 text-lg">
                    💸 Enviar RPC
                  </button>
                  <button onClick={() => setP2pMode('wager')} className="w-full p-4 rounded-2xl border-2 border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold transition-colors flex items-center justify-center gap-2 text-lg">
                    🤝 Proponer Apuesta
                  </button>
                </div>
              ) : p2pMode === 'send' ? (
                <form onSubmit={handleSendRPC} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Cantidad de RPC a enviar</label>
                    <input type="number" min="0.5" step="0.5" autoFocus className={`w-full p-4 rounded-2xl border mt-1 text-2xl text-center font-black text-orange-500 ${isDarkMode ? 'bg-slate-800 border-slate-700 focus:border-orange-500' : 'bg-slate-50 border-slate-200 focus:border-orange-400'} focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all`} value={p2pAmount} onChange={e => setP2pAmount(e.target.value)} />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Mensaje (Opcional)</label>
                    <input type="text" placeholder="Ej: Por ayudarme hoy..." className={`w-full p-3 rounded-2xl border mt-1 font-medium ${isDarkMode ? 'bg-slate-800 border-slate-700 focus:border-orange-500' : 'bg-slate-50 border-slate-200 focus:border-orange-400'} focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all`} value={p2pMessage} onChange={e => setP2pMessage(e.target.value)} />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all text-lg mt-2">
                    Enviar RPC
                  </button>
                  <button type="button" onClick={() => setP2pMode(null)} className="w-full py-2 text-xs text-slate-400 font-bold uppercase tracking-widest hover:text-slate-600">Volver</button>
                </form>
              ) : (
                <form onSubmit={handleProposeWager} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Condición de la apuesta</label>
                    <input type="text" placeholder="Ej: Quién saca la basura un mes..." className={`w-full p-4 rounded-2xl border mt-1 text-base font-medium ${isDarkMode ? 'bg-slate-800 border-slate-700 focus:border-indigo-500' : 'bg-slate-50 border-slate-200 focus:border-indigo-400'} focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all`} value={p2pWagerDesc} onChange={e => setP2pWagerDesc(e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">RPC en juego</label>
                      <input type="number" min="0" placeholder="0" className={`w-full p-3 rounded-2xl border mt-1 text-lg font-bold text-center ${isDarkMode ? 'bg-slate-800 border-slate-700 focus:border-indigo-500' : 'bg-slate-50 border-slate-200 focus:border-indigo-400'}`} value={p2pAmount} onChange={e => setP2pAmount(e.target.value)} />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">O Artículo de Tienda</label>
                      <select className={`w-full p-3 rounded-2xl border mt-1 text-xs font-medium ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-800'}`} value={p2pWagerStoreItem} onChange={e => setP2pWagerStoreItem(e.target.value)}>
                        <option value="">Ninguno</option>
                        {storeItems.map(i => <option key={i.id} value={i.id}>{i.icon} {i.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Fecha Límite (Opcional)</label>
                    <input type="datetime-local" className={`w-full p-3 rounded-2xl border mt-1 text-sm font-medium ${isDarkMode ? 'bg-slate-800 border-slate-700 focus:border-indigo-500' : 'bg-slate-50 border-slate-200 focus:border-indigo-400'} focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all`} value={p2pWagerDeadline} onChange={e => setP2pWagerDeadline(e.target.value)} />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-500/30 hover:scale-[1.02] active:scale-95 transition-all text-lg mt-2">
                    Lanzar Apuesta
                  </button>
                  <button type="button" onClick={() => setP2pMode(null)} className="w-full py-2 text-xs text-slate-400 font-bold uppercase tracking-widest hover:text-slate-600">Volver</button>
                </form>
              )}
            </div>
          </div>
        )
      }

      {
        showActiveWagerModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} w-full max-w-sm rounded-[2rem] p-6 shadow-2xl border animate-in slide-in-from-bottom-8`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-xl flex items-center gap-2">Resolver Apuesta</h2>
                <button onClick={() => setShowActiveWagerModal(null)} className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><X size={20} /></button>
              </div>

              <div className="text-center mb-6">
                <p className="text-2xl font-black mb-2">{showActiveWagerModal.description}</p>
                {showActiveWagerModal.amountRPC > 0 && <p className="text-orange-500 font-bold">{showActiveWagerModal.amountRPC} RPC en juego</p>}
                {showActiveWagerModal.storeItemId && storeItems.find(i => i.id === showActiveWagerModal.storeItemId) && (
                  <p className="text-indigo-500 font-bold">Premio: {storeItems.find(i => i.id === showActiveWagerModal.storeItemId).icon} {storeItems.find(i => i.id === showActiveWagerModal.storeItemId).name}</p>
                )}
                {showActiveWagerModal.deadline && (
                  <p className="text-red-500 font-bold mt-2 text-sm uppercase tracking-widest">
                    ⏳ Límite: {new Date(showActiveWagerModal.deadline).toLocaleDateString()} {new Date(showActiveWagerModal.deadline).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                )}
              </div>

              <div>
                <p className="text-xs font-bold text-slate-500 uppercase text-center mb-4">¿Quién ha ganado?</p>
                <div className="space-y-3">
                  <button onClick={() => handleResolveWager(showActiveWagerModal, showActiveWagerModal.proposer)} className="w-full py-4 rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold hover:bg-emerald-500/20 transition-all text-lg">
                    🏆 {showActiveWagerModal.proposer}
                  </button>
                  <button onClick={() => handleResolveWager(showActiveWagerModal, showActiveWagerModal.receiver)} className="w-full py-4 rounded-2xl border-2 border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-500/20 transition-all text-lg">
                    🏆 {showActiveWagerModal.receiver}
                  </button>
                  <button onClick={() => handleResolveWager(showActiveWagerModal, 'Empate')} className="w-full py-3 rounded-2xl border-2 border-slate-500/30 bg-slate-500/10 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-500/20 transition-all">
                    🤝 Empate / Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {
        showProfileModal && (
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
        )
      }

      {/* MODAL REGALO RECIBIDO */}
      {
        activeGiftModal && document.body && createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300 pointer-events-auto" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} w-full max-w-sm rounded-[2rem] p-8 shadow-2xl border animate-in zoom-in-95 duration-300 relative overflow-hidden text-center mx-auto`}>
              {/* Fondo de brillo */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-amber-500/20 to-transparent pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/40 mb-6 animate-bounce">
                  <Gift size={40} className="text-white" />
                </div>

                <h2 className="text-2xl font-black mb-2">¡Un Regalo!</h2>
                <p className={`text-sm mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span className="font-bold text-amber-500">{activeGiftModal.from}</span> te ha enviado algo especial.
                </p>

                <div className={`p-6 rounded-2xl mb-6 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-orange-50 border-orange-100'} border`}>
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 mb-2">
                    {activeGiftModal.amount} <span className="text-2xl tracking-tighter">RPC</span>
                  </div>
                  {activeGiftModal.message && (
                    <div className="mt-4 pt-4 border-t border-orange-200/20">
                      <p className={`text-sm italic font-medium ${isDarkMode ? 'text-slate-300' : 'text-orange-900'}`}>"{activeGiftModal.message}"</p>
                    </div>
                  )}
                </div>

                <button
                  onClick={async () => {
                    try {
                      await setDoc(doc(db, 'artifacts', safeAppId, 'public', 'data', 'p2p_notifications', activeGiftModal.id), { read: true }, { merge: true });
                      setActiveGiftModal(null);
                      playCharitySound();
                      import('canvas-confetti').then((confetti) => {
                        confetti.default({ particleCount: 200, spread: 120, origin: { y: 0.6 }, colors: ['#fbbf24', '#f59e0b', '#d97706'], zIndex: 1000 });
                      });
                    } catch (err) {
                      console.error("Error accepting gift:", err);
                      setActiveGiftModal(null);
                    }
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all text-xl uppercase tracking-widest pointer-events-auto"
                >
                  Aceptar Regalo
                </button>
              </div>
            </div>
          </div>,
          document.body
        )
      }

      {/* MODAL INSIGNIA (ACHIEVEMENT) */}
      {
        activeAchievementModal && document.body && createPortal(
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300 pointer-events-auto" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} w-full max-w-sm rounded-[2rem] p-8 shadow-2xl border animate-in zoom-in-95 duration-300 relative overflow-hidden text-center mx-auto`}>

              <button onClick={() => setActiveAchievementModal(null)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full hover:bg-slate-200 transition-colors z-20">
                <X size={16} strokeWidth={3} />
              </button>

              {/* Brillo de fondo estético */}
              <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none ${activeAchievementModal.bg}`}></div>

              <div className="relative z-10">
                {(() => {
                  const isReady = activeAchievementModal.actual > activeAchievementModal.claimedAt;
                  const currentTier = activeAchievementModal.claimedAt;
                  let nextGoal = currentTier + 1;
                  if (activeAchievementModal.id === 'total_hours' && activeAchievementModal.actual === 0 && currentTier === 0) nextGoal = 1;

                  let progressPercent = (activeAchievementModal.actual / nextGoal) * 100;
                  if (progressPercent > 100) progressPercent = 100;

                  let IconCmp = Award;
                  if (activeAchievementModal.icon === 'Flame') IconCmp = Flame;
                  if (activeAchievementModal.icon === 'Target') IconCmp = Target;
                  if (activeAchievementModal.icon === 'Crosshair') IconCmp = Crosshair;
                  if (activeAchievementModal.icon === 'Zap') IconCmp = Zap;
                  if (activeAchievementModal.icon === 'HeartHandshake') IconCmp = HeartHandshake;

                  return (
                    <>
                      <div className="w-24 h-24 mx-auto mb-6 relative">
                        <svg viewBox="0 0 36 36" className="absolute inset-0 w-full h-full -rotate-90">
                          <circle strokeDasharray="100, 100" className="text-slate-100 dark:text-slate-800 stroke-current" strokeWidth="2.5" fill="none" r="16" cx="18" cy="18" />
                          <circle strokeDasharray={`${progressPercent}, 100`} className={`${activeAchievementModal.color} stroke-current`} strokeWidth="2.5" strokeLinecap="round" fill="none" r="16" cx="18" cy="18" />
                        </svg>
                        <div className={`absolute inset-2 rounded-full flex items-center justify-center ${activeAchievementModal.bg} ${activeAchievementModal.darkBg}`}>
                          <IconCmp size={32} className={`${activeAchievementModal.color} ${isReady ? 'animate-bounce' : ''}`} />
                        </div>
                      </div>

                      <h2 className={`text-2xl font-black mb-1 uppercase tracking-tight ${activeAchievementModal.color}`}>{activeAchievementModal.title}</h2>
                      <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">Nivel {currentTier} {isReady ? '→ ' + nextGoal : ''}</p>

                      <p className={`text-sm mb-6 pb-6 border-b font-medium italic ${isDarkMode ? 'text-slate-300 border-slate-800' : 'text-slate-600 border-slate-100'}`}>
                        "{activeAchievementModal.desc}"
                      </p>

                      <div className="space-y-2 mb-6 text-left bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1">
                          <span className="text-slate-500">Progreso actual</span>
                          <span className={activeAchievementModal.color}>{Math.floor(activeAchievementModal.actual)} / {nextGoal}</span>
                        </div>
                        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
                          <div className={`h-full ${activeAchievementModal.color.replace('text-', 'bg-')} transition-all duration-1000`} style={{ width: `${progressPercent}%` }}></div>
                        </div>
                      </div>

                      {isReady ? (
                        <button
                          onClick={() => claimAchievement(activeAchievementModal)}
                          className={`w-full text-white font-black py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-lg uppercase tracking-widest ${activeAchievementModal.color.replace('text-', 'bg-')} ${activeAchievementModal.shadow}`}
                        >
                          Reclamar +{activeAchievementModal.id === 'total_hours' ? '10.0' : activeAchievementModal.id === 'p2p_gifts' ? '2.0' : activeAchievementModal.reward.toFixed(1)} RPC
                        </button>
                      ) : (
                        <button
                          disabled
                          className="w-full bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold py-4 rounded-2xl text-sm uppercase tracking-widest cursor-not-allowed border dark:border-slate-700"
                        >
                          Sigue esforzándote
                        </button>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>,
          document.body
        )
      }

      {/* TOAST SYSTEM */}
      {
        toast.visible && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-top-4 duration-300">
            <div className={`px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 font-bold text-sm ${toast.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
              {toast.type === 'success' ? <CheckCircle2 size={18} /> : <WifiOff size={18} />}
              {toast.msg}
            </div>
          </div>
        )
      }

      <style>{`
        .safe-top { padding-top: env(safe-area-inset-top); }
        .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
        input, button { -webkit-tap-highlight-color: transparent; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div >
  );
}

// --- ARRANQUE DE LA APP (Gira la llave) ---
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
