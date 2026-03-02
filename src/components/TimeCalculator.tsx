'use client';

import { useState } from 'react';
import { Clock, DollarSign, TrendingUp, RotateCcw } from 'lucide-react';

export default function TimeCalculator() {
    const [tasks, setTasks] = useState('');
    const [minutes, setMinutes] = useState('');
    const [hourlyRate, setHourlyRate] = useState('');
    const [calculated, setCalculated] = useState(false);

    const numTasks = parseFloat(tasks) || 0;
    const numMinutes = parseFloat(minutes) || 0;
    const rate = parseFloat(hourlyRate) || 0;

    const weeklyHoursSaved = (numTasks * numMinutes) / 60;
    const monthlyHoursSaved = weeklyHoursSaved * 4.3;
    const yearlyHoursSaved = weeklyHoursSaved * 52;
    const monthlySaved = rate > 0 ? monthlyHoursSaved * rate : 0;
    const yearlySaved = rate > 0 ? yearlyHoursSaved * rate : 0;

    const handleCalc = (e: React.FormEvent) => {
        e.preventDefault();
        if (numTasks > 0 && numMinutes > 0) setCalculated(true);
    };

    const reset = () => {
        setTasks(''); setMinutes(''); setHourlyRate(''); setCalculated(false);
    };

    return (
        /*
          Layout responsive:
          - xs/sm: columna única (formulario arriba, resultados abajo)
          - md+: dos columnas lado a lado
          
          En móvil portrait esto es crucial: el formulario y los resultados
          se apilan verticalmente para que todo quepa sin overflow.
        */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Formulario */}
            <form onSubmit={handleCalc} className="card p-5 sm:p-6 space-y-5">
                <div>
                    <label htmlFor="calc-tasks" className="block text-sm font-semibold mb-1.5">
                        Tareas repetitivas con IA por semana
                    </label>
                    <input
                        id="calc-tasks"
                        type="number"
                        inputMode="numeric"
                        min="1"
                        max="200"
                        value={tasks}
                        onChange={e => setTasks(e.target.value)}
                        placeholder="Ej: 10"
                        className="calc-input"
                        aria-describedby="tasks-hint"
                    />
                    <p id="tasks-hint" className="text-xs text-[var(--muted)] mt-1">Emails, resúmenes, informes, búsquedas…</p>
                </div>

                <div>
                    <label htmlFor="calc-minutes" className="block text-sm font-semibold mb-1.5">
                        Minutos ahorrados por tarea (media)
                    </label>
                    <input
                        id="calc-minutes"
                        type="number"
                        inputMode="numeric"
                        min="1"
                        max="480"
                        value={minutes}
                        onChange={e => setMinutes(e.target.value)}
                        placeholder="Ej: 20"
                        className="calc-input"
                    />
                </div>

                <div>
                    <label htmlFor="calc-rate" className="block text-sm font-semibold mb-1.5">
                        Tu tarifa/hora (€) — <span className="text-[var(--muted)] font-normal">opcional</span>
                    </label>
                    <input
                        id="calc-rate"
                        type="number"
                        inputMode="decimal"
                        min="0"
                        max="999"
                        value={hourlyRate}
                        onChange={e => setHourlyRate(e.target.value)}
                        placeholder="Ej: 25"
                        className="calc-input"
                    />
                </div>

                {/* Botón full-width en todos los tamaños */}
                <button
                    type="submit"
                    className="btn-primary w-full justify-center min-h-[48px]"
                    aria-label="Calcular mi ahorro con IA"
                >
                    <TrendingUp size={18} /> Calcular mi ahorro
                </button>
            </form>

            {/* Resultados */}
            <div className={`space-y-4 transition-opacity duration-500 ${calculated ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>

                {/* Tiempo ahorrado */}
                <div className="card p-5 border-l-4 border-blue-500">
                    <div className="flex items-center gap-2 mb-1 text-blue-600 dark:text-blue-400">
                        <Clock size={18} />
                        <span className="text-sm font-semibold">Tiempo ahorrado</span>
                    </div>
                    <p className="text-3xl font-extrabold gradient-text">{weeklyHoursSaved.toFixed(1)}h/semana</p>
                    <p className="text-[var(--muted)] text-sm mt-0.5">
                        ≈ {monthlyHoursSaved.toFixed(0)}h/mes · {yearlyHoursSaved.toFixed(0)}h/año
                    </p>
                </div>

                {/* Valor económico — solo si hay tarifa */}
                {rate > 0 && calculated && (
                    <div className="card p-5 border-l-4 border-green-500">
                        <div className="flex items-center gap-2 mb-1 text-green-600 dark:text-green-400">
                            <DollarSign size={18} />
                            <span className="text-sm font-semibold">Valor económico liberado</span>
                        </div>
                        <p className="text-3xl font-extrabold text-green-600 dark:text-green-400">{monthlySaved.toFixed(0)}€/mes</p>
                        <p className="text-[var(--muted)] text-sm mt-0.5">≈ {yearlySaved.toFixed(0)}€/año según tu tarifa</p>
                        <p className="text-xs text-[var(--muted)] mt-2">* Estimación orientativa. El ahorro real depende del tipo de tarea y la calidad del output de IA.</p>
                    </div>
                )}

                {/* ¿Qué podrías hacer? */}
                {calculated && (
                    <div className="card p-4 bg-blue-50/60 dark:bg-blue-900/15 border-blue-100 dark:border-blue-900/40">
                        <p className="text-sm font-semibold mb-2">💡 ¿Qué podrías hacer con ese tiempo?</p>
                        <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside">
                            <li>Dedicar {(weeklyHoursSaved / 2).toFixed(1)}h/semana a formarte en nuevas habilidades</li>
                            <li>Tomar {((weeklyHoursSaved * 52) / 8).toFixed(0)} días de descanso extra al año</li>
                            <li>Gestionar {Math.round(numTasks * 2)} tareas adicionales sin aumentar tu jornada</li>
                        </ul>
                    </div>
                )}

                {/* Botón reset */}
                {calculated && (
                    <button
                        onClick={reset}
                        className="btn-secondary w-full justify-center min-h-[44px] text-sm"
                        aria-label="Calcular de nuevo"
                    >
                        <RotateCcw size={14} /> Calcular de nuevo
                    </button>
                )}

                {/* Estado inicial — placeholder */}
                {!calculated && (
                    <div className="card p-6 text-center text-[var(--muted)]">
                        <TrendingUp size={32} className="mx-auto mb-3 opacity-30" />
                        <p className="text-sm">Rellena el formulario para ver tu potencial de ahorro con IA.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
