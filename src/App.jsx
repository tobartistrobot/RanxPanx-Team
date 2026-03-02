import React, { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client'; // ¡Esta es la pieza clave que faltaba!
import {
  Play, Square, Calendar as CalendarIcon, BarChart3, Clock,
  Plus, User, CheckCircle2, X, Check, Moon, Sun, Edit2, Trash2, History,
  ChevronRight, ChevronDown, Award, TrendingUp, WifiOff,
  Sparkles, Coffee, Briefcase, Activity, CheckSquare, Pause, ShoppingCart
} from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, query, deleteDoc, doc, updateDoc } from 'firebase/firestore';

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
  "Un viaje de mil millas comienza con un solo paso.",
  "Lo que haces hoy puede mejorar todas tus mañanas.",
  "La única forma de hacer un gran trabajo es amar lo que haces.",
  "No busques el momento perfecto, solo busca el momento y hazlo perfecto.",
  "Cada pequeña tarea completada es una victoria para el equipo.",
  "El esfuerzo organizado es la clave de todo logro.",
  "Trabajar en equipo divide la tarea y multiplica el éxito.",
  "La constancia vence a lo que la dicha no alcanza.",
  "Hoy es un buen día para avanzar un paso más.",
  "Tus acciones de hoy conforman tu libertad de mañana.",
  "La motivación nos impulsa a comenzar, el hábito nos permite continuar.",
  "Pequeños actos de cuidado mantienen el hogar y el espíritu fuertes.",
  "El progreso lento es mejor que ningún progreso."
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

  const [modalMode, setModalMode] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [manualData, setManualData] = useState({ name: '', hours: 0, minutes: 0, date: getLocalYYYYMMDD() });

  const [toast, setToast] = useState({ msg: '', visible: false, type: 'success' });

  const [expandedUser, setExpandedUser] = useState(null);
  const [radiographyView, setRadiographyView] = useState('day');

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarUserFilter, setCalendarUserFilter] = useState(null);

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
      data.sort((a, b) => b.timestamp - a.timestamp);
      setGroceries(data);
    }, (error) => console.error("Firestore groceries error:", error));

    return () => {
      unsubscribeChores();
      unsubscribeGroceries();
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

  const stopAndSaveTimer = async () => {
    if (!activeTask) return;
    const durationSeconds = elapsed;
    if (durationSeconds > 5) {
      try {
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
      await addDoc(collection(db, 'artifacts', safeAppId, 'public', 'data', 'groceries'), {
        name: name.trim(),
        completed: false,
        timestamp: Date.now(),
        userName: userName,
        userColor: userColor,
      });
      setGroceryInput('');
    } catch (error) {
      console.error("Error adding grocery:", error);
      showToast('Error al añadir producto', 'error');
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

            {/* Mensaje Inspiracional Diario */}
            <div className="px-4 py-2 text-center animate-in slide-in-from-top-2 fade-in duration-500 delay-100">
              <p className="text-sm italic font-medium text-slate-500 dark:text-slate-400">"{dailyQuote}"</p>
            </div>

            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-6 rounded-[2.5rem] shadow-xl border relative overflow-hidden transition-all duration-500`}>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Sesión en vivo</span>
                <button onClick={() => { setModalMode('manual'); setManualData({ name: '', hours: 0, minutes: 0, date: getLocalYYYYMMDD() }); }} className="text-indigo-500 text-xs font-bold flex items-center gap-1 hover:underline">
                  <Plus size={14} /> Registro manual
                </button>
              </div>
              <input type="text" placeholder="¿Qué vas a hacer?" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} disabled={!!activeTask} className={`w-full text-lg font-medium p-4 rounded-2xl border mb-6 transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 focus:border-indigo-500' : 'bg-slate-50 border-slate-200 focus:border-indigo-400'} focus:outline-none focus:ring-4 focus:ring-indigo-500/10`} />

              {!activeTask && suggestions.length > 0 && (
                <div className="mb-6">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-2 ml-1">Frecuentes</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map(s => <button key={s} onClick={() => setTaskInput(s)} className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-white border-slate-200 hover:bg-slate-100'}`}>{s}</button>)}
                  </div>
                </div>
              )}

              <div className={`text-6xl font-mono font-bold text-center mb-8 tabular-nums tracking-tight ${activeTask ? (activeTask.isPaused ? 'text-indigo-400 animate-pulse' : 'text-indigo-500') : 'text-slate-400 opacity-50'}`}>{formatTimeDigital(elapsed)}</div>
              <div className="flex justify-center gap-6 items-center">
                <button onClick={togglePlayPause} className={`w-24 h-24 rounded-full flex items-center justify-center shadow-xl transition-all transform hover:scale-105 active:scale-95 ${activeTask && !activeTask.isPaused ? 'bg-amber-500 text-white shadow-amber-500/40 ring-8 ring-amber-500/10' : 'bg-indigo-600 text-white shadow-indigo-500/40 ring-8 ring-indigo-500/10'}`}>
                  {activeTask && !activeTask.isPaused ? <Pause size={32} fill="currentColor" /> : <Play size={36} fill="currentColor" className="ml-2" />}
                </button>
                {activeTask && (
                  <button onClick={stopAndSaveTimer} className="w-16 h-16 rounded-full flex items-center justify-center bg-red-500 text-white shadow-xl shadow-red-500/40 ring-4 ring-red-500/10 transition-all transform hover:scale-105 active:scale-95 animate-in slide-in-from-left-4 fade-in">
                    <Square size={20} fill="currentColor" />
                  </button>
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
                <input type="text" placeholder="Añadir a la lista..." value={groceryInput} onChange={(e) => setGroceryInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') addGrocery(groceryInput); }} className={`flex-1 text-lg font-medium p-4 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 focus:border-indigo-500' : 'bg-slate-50 border-slate-200 focus:border-indigo-400'} focus:outline-none focus:ring-4 focus:ring-indigo-500/10`} />
                <button onClick={() => addGrocery(groceryInput)} className="w-16 flex items-center justify-center bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/30">
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

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Pendientes</h3>
                <div className="space-y-2">
                  {groceries.filter(g => !g.completed).length === 0 ? <p className="text-center text-xs text-slate-400 italic py-6">Lista de la compra vacía.</p> : groceries.filter(g => !g.completed).map(item => (
                    <div key={item.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-4 rounded-2xl border flex items-center justify-between group transition-all`}>
                      <div className="flex items-center gap-4 flex-1 cursor-pointer" onClick={() => toggleGrocery(item.id, item.completed)}>
                        <button className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${isDarkMode ? 'border-slate-700' : 'border-slate-300'}`}>
                          <div className="w-0 h-0 transition-all"></div>
                        </button>
                        <p className="font-bold text-base flex-1">{item.name}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white uppercase ml-2 ${USER_COLORS.find(c => c.id === item.userColor)?.bg || 'bg-slate-500'}`}>
                        {item.userName ? item.userName.charAt(0) : '?'}
                      </div>
                    </div>
                  ))}
                </div>
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
