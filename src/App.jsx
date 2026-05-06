import { useState } from "react";

const COLORS = {
  bg: "#ffffff",
  surface: "#f8fafc",
  surfaceHover: "#f1f5f9",
  card: "#f1f5f9",
  border: "#e2e8f0",
  primary: "#2563eb",
  primaryLight: "#3b82f6",
  textPrimary: "#0f172a",
  textSecondary: "#475569",
  textMuted: "#94a3b8",
  accent1: "#8b5cf6",
  accent2: "#06b6d4",
  accent3: "#f59e0b",
  accent4: "#ec4899",
  accent5: "#10b981",
  accent6: "#f97316",
  accent7: "#6366f1",
  accent8: "#64748b",
};

const TASKS = [
  {
    id: 1,
    name: "Revisar cuentas sin tocar en los últimos 20 días",
    shortName: "Revisión 20 días",
    time: "9:00 – 9:15 AM",
    duration: "15 min",
    color: "#8b5cf6",
    icon: "🔍",
    objective: "Identificar cuentas que han quedado sin seguimiento por más de 20 días para reactivar la comunicación y evitar pérdida de oportunidades.",
    tips: "Filtra tu CRM por última actividad. Prioriza las cuentas con mayor potencial de cierre.",
  },
  {
    id: 2,
    name: "Actualizar cuadro de cuentas preferenciales",
    shortName: "Cuentas preferenciales",
    time: "9:15 – 9:30 AM",
    duration: "15 min",
    color: "#06b6d4",
    icon: "⭐",
    objective: "Mantener actualizado el pipeline de cuentas clave con información reciente sobre estado, próximos pasos y probabilidad de cierre.",
    tips: "Revisa notas de llamadas recientes y actualiza los campos de estado y fecha de próximo contacto.",
  },
  {
    id: 3,
    name: "Revisar cuentas sin actividad en los últimos 3 días",
    shortName: "Revisión 3 días",
    time: "9:30 – 9:45 AM",
    duration: "15 min",
    color: "#f59e0b",
    icon: "⚡",
    objective: "Asegurar que ninguna cuenta activa se enfríe. Tres días sin contacto puede significar pérdida de momentum en una negociación.",
    tips: "Envía un mensaje rápido o programa una llamada para las cuentas que encuentres sin actividad reciente.",
  },
  {
    id: 4,
    name: "Break / Espacio libre",
    shortName: "Break",
    time: "9:45 – 10:00 AM",
    duration: "15 min",
    color: "#64748b",
    icon: "☕",
    objective: "Espacio de transición entre el bloque de revisión matutina y el trabajo de gestión profunda. Usa este tiempo para prepararte mentalmente.",
    tips: "Estira, toma agua, revisa tu agenda del día y prepara los materiales que necesitarás para la gestión digital.",
  },
  {
    id: 5,
    name: "Gestión de contactos digitales",
    shortName: "Contactos digitales",
    time: "10:00 AM – 12:00 PM",
    duration: "2 horas",
    color: "#ec4899",
    icon: "💬",
    objective: "Trabajar prospectos y contactos a través de canales digitales: email, LinkedIn, WhatsApp y otras plataformas de outreach.",
    tips: "Alterna entre prospección nueva y follow-ups. Personaliza cada mensaje según el contexto del prospecto.",
  },
  {
    id: 6,
    name: "Almuerzo",
    shortName: "Almuerzo",
    time: "12:00 – 1:00 PM",
    duration: "1 hora",
    color: "#f97316",
    icon: "🍽️",
    objective: "Descanso y alimentación. Es importante desconectar del trabajo para volver con energía renovada a la segunda mitad del día.",
    tips: "Evita revisar correos durante el almuerzo. Tu cerebro necesita este descanso para rendir en las llamadas de la tarde.",
  },
  {
    id: 7,
    name: "Llamadas",
    shortName: "Llamadas",
    time: "1:00 – 4:00 PM",
    duration: "3 horas",
    color: "#6366f1",
    icon: "📞",
    objective: "Bloque principal de llamadas: discovery calls, seguimiento, demos y negociaciones. Este es el corazón de la actividad comercial diaria.",
    tips: "Prepara un mini-guión para cada llamada. Toma notas inmediatamente después de cada una para no perder contexto.",
  },
  {
    id: 8,
    name: "Actualización de cuentas",
    shortName: "Actualizar cuentas",
    time: "4:00 – 6:00 PM",
    duration: "2 horas",
    color: "#10b981",
    icon: "📋",
    objective: "Documentar en el CRM toda la actividad del día: resultados de llamadas, avances en negociaciones, cambios de estado y próximos pasos.",
    tips: "No dejes esta tarea para mañana. La información fresca es más precisa y te ahorrará tiempo al día siguiente.",
  },
];

const PLAYBOOK = {
  name: "Actualizar Playbook del mes",
  time: "6:00 – 7:00 PM",
  duration: "1 hora",
  color: "#a855f7",
  icon: "📖",
  when: "Último jueves de cada mes",
  objective: "Revisión y actualización mensual de tu playbook personal: estrategias que funcionaron, objeciones frecuentes, scripts actualizados y lecciones aprendidas.",
  tips: "Revisa tus métricas del mes, identifica patrones y documenta los ajustes que harás el próximo mes.",
  dates: ["28 de mayo", "25 de junio", "30 de julio"],
};

const INSTALL_STEPS = [
  {
    step: 1,
    title: "Descargar el archivo .ics",
    desc: "Descarga el archivo de calendario que te fue compartido. El archivo se llama agenda-quetzals-centroamerica.ics.",
    icon: "⬇️",
  },
  {
    step: 2,
    title: "Abrir Google Calendar",
    desc: "Ve a calendar.google.com en tu navegador o abre la app de Google Calendar en tu celular.",
    icon: "📅",
  },
  {
    step: 3,
    title: "Ir a Configuración",
    desc: "Haz clic en el ícono de engranaje (⚙️) en la esquina superior derecha y selecciona 'Configuración'.",
    icon: "⚙️",
  },
  {
    step: 4,
    title: "Importar calendario",
    desc: "En el menú lateral izquierdo, selecciona 'Importar y exportar'. Luego haz clic en 'Seleccionar archivo de tu ordenador' y elige el archivo .ics descargado.",
    icon: "📤",
  },
  {
    step: 5,
    title: "Seleccionar calendario destino",
    desc: "Elige en qué calendario quieres importar los eventos (tu calendario principal o uno específico de trabajo).",
    icon: "🎯",
  },
  {
    step: 6,
    title: "Confirmar importación",
    desc: "Haz clic en 'Importar'. Verás un mensaje confirmando cuántos eventos fueron creados. Los eventos recurrentes aparecerán automáticamente de lunes a viernes.",
    icon: "✅",
  },
];

const NAV_ITEMS = [
  { id: "schedule", label: "Agenda", icon: "📅" },
  { id: "details", label: "Objetivos", icon: "🎯" },
  { id: "deals", label: "Deals 21 días", icon: "📊" },
  { id: "install", label: "Instalación", icon: "⚙️" },
];

function TimeBlock({ task, expanded, onToggle }) {
  const barWidth = task.duration === "15 min" ? "15%" : task.duration === "1 hora" ? "40%" : task.duration === "2 horas" ? "60%" : task.duration === "3 horas" ? "80%" : "30%";
  return (
    <div
      onClick={onToggle}
      style={{
        background: expanded ? COLORS.surfaceHover : COLORS.surface,
        border: `1px solid ${expanded ? task.color + "55" : COLORS.border}`,
        borderRadius: "12px",
        padding: "16px 20px",
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div style={{
          width: "42px", height: "42px", borderRadius: "10px",
          background: task.color + "18",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "20px", flexShrink: 0,
        }}>
          {task.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: "15px", fontWeight: 600, color: COLORS.textPrimary, marginBottom: "2px" }}>
            {task.name}
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <span style={{ fontSize: "13px", color: task.color, fontWeight: 500 }}>{task.time}</span>
            <span style={{
              fontSize: "11px", color: COLORS.textMuted,
              background: COLORS.card, padding: "2px 8px", borderRadius: "6px",
            }}>
              {task.duration}
            </span>
          </div>
        </div>
        <svg width="18" height="18" viewBox="0 0 18 18" style={{
          transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s", opacity: 0.4,
        }}>
          <path d="M4 7l5 5 5-5" stroke={COLORS.textSecondary} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div style={{
        marginTop: "10px",
        height: "4px",
        background: COLORS.bg,
        borderRadius: "4px",
        overflow: "hidden",
      }}>
        <div style={{
          width: barWidth,
          height: "100%",
          background: `linear-gradient(90deg, ${task.color}, ${task.color}88)`,
          borderRadius: "4px",
          transition: "width 0.4s ease",
        }} />
      </div>

      {expanded && (
        <div style={{
          marginTop: "14px",
          paddingTop: "14px",
          borderTop: `1px solid ${COLORS.border}`,
          animation: "fadeIn 0.2s ease",
        }}>
          <div style={{ marginBottom: "10px" }}>
            <div style={{ fontSize: "11px", fontWeight: 600, color: task.color, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
              Objetivo
            </div>
            <div style={{ fontSize: "13px", color: COLORS.textSecondary, lineHeight: 1.6 }}>
              {task.objective}
            </div>
          </div>
          <div style={{
            background: task.color + "0d",
            border: `1px solid ${task.color}22`,
            borderRadius: "8px",
            padding: "10px 14px",
          }}>
            <div style={{ fontSize: "11px", fontWeight: 600, color: task.color, marginBottom: "3px" }}>💡 Tip</div>
            <div style={{ fontSize: "13px", color: COLORS.textSecondary, lineHeight: 1.5 }}>{task.tips}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function QuetzalsSchedule() {
  const [activeSection, setActiveSection] = useState("schedule");
  const [expandedTask, setExpandedTask] = useState(null);

  const totalMinutes = 9 * 60;
  const startOfDay = 9 * 60;

  const calendarBlocks = [
    { name: "Revisión 20d", start: 0, dur: 15, color: "#8b5cf6" },
    { name: "Ctas. pref.", start: 15, dur: 15, color: "#06b6d4" },
    { name: "Revisión 3d", start: 30, dur: 15, color: "#f59e0b" },
    { name: "Break", start: 45, dur: 15, color: "#64748b" },
    { name: "Contactos digitales", start: 60, dur: 120, color: "#ec4899" },
    { name: "Almuerzo", start: 180, dur: 60, color: "#f97316" },
    { name: "Llamadas", start: 240, dur: 180, color: "#6366f1" },
    { name: "Actualización", start: 420, dur: 120, color: "#10b981" },
  ];

  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <div style={{
      minHeight: "100vh",
      background: COLORS.bg,
      color: COLORS.textPrimary,
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${COLORS.surface}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 3px; }
      `}</style>

      {/* Header */}
      <header style={{
        padding: "20px 24px",
        borderBottom: `1px solid ${COLORS.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        zIndex: 10,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{
            width: "38px", height: "38px", borderRadius: "10px",
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent1})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "18px", fontWeight: 700, color: "#fff",
          }}>
            Q
          </div>
          <div>
            <div style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.01em" }}>
              Quetzals Centroamérica
            </div>
            <div style={{ fontSize: "12px", color: COLORS.textMuted }}>
              Agenda diaria del equipo · Mayo – Julio 2026
            </div>
          </div>
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: "4px",
          background: COLORS.surface,
          borderRadius: "10px",
          padding: "4px",
          border: `1px solid ${COLORS.border}`,
        }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              style={{
                padding: "8px 16px",
                fontSize: "13px",
                fontWeight: activeSection === item.id ? 600 : 400,
                color: activeSection === item.id ? "#ffffff" : COLORS.textMuted,
                background: activeSection === item.id ? COLORS.primary : "transparent",
                border: "1px solid transparent",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              <span style={{ marginRight: "6px" }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </header>

      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "28px 24px" }}>

        {/* ===== SCHEDULE SECTION ===== */}
        {activeSection === "schedule" && (
          <div style={{ animation: "slideUp 0.3s ease" }}>
            <div style={{ marginBottom: "28px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "6px", letterSpacing: "-0.02em" }}>
                Vista del día
              </h2>
              <p style={{ fontSize: "14px", color: COLORS.textSecondary }}>
                Distribución visual de las 9 horas de jornada laboral · Lunes a Viernes
              </p>
            </div>

            {/* Visual Calendar */}
            <div style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "28px",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: COLORS.textMuted, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Línea de tiempo · 9:00 AM – 6:00 PM
              </div>

              {/* Hour markers */}
              <div style={{ position: "relative", marginBottom: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  {hours.map((h) => (
                    <span key={h} style={{
                      fontSize: "11px",
                      color: COLORS.textMuted,
                      fontFamily: "'JetBrains Mono', monospace",
                      width: `${100 / hours.length}%`,
                      textAlign: "left",
                    }}>
                      {h > 12 ? `${h - 12}PM` : h === 12 ? "12PM" : `${h}AM`}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blocks */}
              <div style={{
                position: "relative",
                height: "64px",
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                gap: "2px",
              }}>
                {calendarBlocks.map((block, i) => {
                  const pct = (block.dur / totalMinutes) * 100;
                  return (
                    <div
                      key={i}
                      style={{
                        width: `${pct}%`,
                        height: "100%",
                        background: `linear-gradient(135deg, ${block.color}cc, ${block.color}88)`,
                        borderRadius: i === 0 ? "8px 0 0 8px" : i === calendarBlocks.length - 1 ? "0 8px 8px 0" : "0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        position: "relative",
                      }}
                      title={`${block.name} (${block.dur} min)`}
                    >
                      {pct > 8 && (
                        <span style={{
                          fontSize: pct > 15 ? "11px" : "9px",
                          color: "#fff",
                          fontWeight: 600,
                          textAlign: "center",
                          padding: "0 4px",
                          textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                          lineHeight: 1.2,
                        }}>
                          {block.name}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "16px",
              }}>
                {calendarBlocks.map((block, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{
                      width: "10px", height: "10px", borderRadius: "3px",
                      background: block.color,
                    }} />
                    <span style={{ fontSize: "11px", color: COLORS.textSecondary }}>
                      {block.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Task list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {TASKS.map((task) => (
                <TimeBlock
                  key={task.id}
                  task={task}
                  expanded={expandedTask === task.id}
                  onToggle={() => setExpandedTask(expandedTask === task.id ? null : task.id)}
                />
              ))}

              {/* Playbook special block */}
              <div style={{
                background: `linear-gradient(135deg, ${PLAYBOOK.color}11, ${COLORS.surface})`,
                border: `1px solid ${PLAYBOOK.color}33`,
                borderRadius: "12px",
                padding: "18px 20px",
                marginTop: "8px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "10px",
                    background: PLAYBOOK.color + "22",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "20px",
                  }}>
                    {PLAYBOOK.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "15px", fontWeight: 600 }}>{PLAYBOOK.name}</div>
                    <div style={{ fontSize: "13px", color: PLAYBOOK.color, fontWeight: 500 }}>
                      {PLAYBOOK.when} · {PLAYBOOK.time}
                    </div>
                  </div>
                  <span style={{
                    fontSize: "11px",
                    color: PLAYBOOK.color,
                    background: PLAYBOOK.color + "18",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontWeight: 500,
                  }}>
                    Mensual
                  </span>
                </div>
                <div style={{ fontSize: "13px", color: COLORS.textSecondary, lineHeight: 1.6, marginBottom: "12px" }}>
                  {PLAYBOOK.objective}
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {PLAYBOOK.dates.map((d, i) => (
                    <span key={i} style={{
                      fontSize: "12px",
                      color: COLORS.textSecondary,
                      background: COLORS.card,
                      padding: "4px 12px",
                      borderRadius: "6px",
                      border: `1px solid ${COLORS.border}`,
                    }}>
                      📌 {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== DETAILS SECTION ===== */}
        {activeSection === "details" && (
          <div style={{ animation: "slideUp 0.3s ease" }}>
            <div style={{ marginBottom: "28px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "6px", letterSpacing: "-0.02em" }}>
                Objetivos de cada bloque
              </h2>
              <p style={{ fontSize: "14px", color: COLORS.textSecondary }}>
                Entiende el porqué de cada tarea para aprovechar mejor tu tiempo
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {TASKS.map((task, i) => (
                <div
                  key={task.id}
                  style={{
                    background: COLORS.surface,
                    border: `1px solid ${COLORS.border}`,
                    borderLeft: `4px solid ${task.color}`,
                    borderRadius: "12px",
                    padding: "22px 24px",
                    animation: `slideUp 0.3s ease ${i * 0.04}s both`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <span style={{ fontSize: "22px" }}>{task.icon}</span>
                    <div>
                      <div style={{ fontSize: "16px", fontWeight: 600 }}>{task.name}</div>
                      <div style={{ fontSize: "13px", color: task.color, fontWeight: 500 }}>{task.time} · {task.duration}</div>
                    </div>
                  </div>

                  <div style={{ marginBottom: "14px" }}>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                      Objetivo
                    </div>
                    <div style={{ fontSize: "14px", color: COLORS.textSecondary, lineHeight: 1.7 }}>
                      {task.objective}
                    </div>
                  </div>

                  <div style={{
                    background: task.color + "0a",
                    border: `1px solid ${task.color}1a`,
                    borderRadius: "8px",
                    padding: "12px 16px",
                  }}>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: task.color, marginBottom: "4px" }}>
                      💡 Recomendación
                    </div>
                    <div style={{ fontSize: "13px", color: COLORS.textSecondary, lineHeight: 1.6 }}>
                      {task.tips}
                    </div>
                  </div>
                </div>
              ))}

              {/* Playbook detail */}
              <div style={{
                background: `linear-gradient(135deg, ${PLAYBOOK.color}08, ${COLORS.surface})`,
                border: `1px solid ${PLAYBOOK.color}33`,
                borderLeft: `4px solid ${PLAYBOOK.color}`,
                borderRadius: "12px",
                padding: "22px 24px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "22px" }}>{PLAYBOOK.icon}</span>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: 600 }}>{PLAYBOOK.name}</div>
                    <div style={{ fontSize: "13px", color: PLAYBOOK.color, fontWeight: 500 }}>
                      {PLAYBOOK.when} · {PLAYBOOK.time} · {PLAYBOOK.duration}
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: "14px", color: COLORS.textSecondary, lineHeight: 1.7, marginBottom: "14px" }}>
                  {PLAYBOOK.objective}
                </div>
                <div style={{
                  background: PLAYBOOK.color + "0a",
                  border: `1px solid ${PLAYBOOK.color}1a`,
                  borderRadius: "8px",
                  padding: "12px 16px",
                  marginBottom: "14px",
                }}>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: PLAYBOOK.color, marginBottom: "4px" }}>💡 Recomendación</div>
                  <div style={{ fontSize: "13px", color: COLORS.textSecondary, lineHeight: 1.6 }}>{PLAYBOOK.tips}</div>
                </div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: COLORS.textMuted, marginBottom: "8px" }}>
                  Fechas programadas:
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {PLAYBOOK.dates.map((d, i) => (
                    <span key={i} style={{
                      fontSize: "13px", color: COLORS.textPrimary,
                      background: PLAYBOOK.color + "18",
                      padding: "6px 14px", borderRadius: "8px",
                      fontWeight: 500,
                    }}>
                      📌 {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== DEALS SECTION ===== */}
        {activeSection === "deals" && (
          <div style={{ animation: "slideUp 0.3s ease" }}>
            <div style={{ marginBottom: "28px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "6px", letterSpacing: "-0.02em" }}>
                Visualizar deals con 21 días sin actividad
              </h2>
              <p style={{ fontSize: "14px", color: COLORS.textSecondary }}>
                Sigue estos pasos en HubSpot para identificar deals que necesitan atención urgente
              </p>
            </div>

            {/* Why this matters */}
            <div style={{
              background: "#fef3c7",
              border: "1px solid #fcd34d",
              borderRadius: "12px",
              padding: "16px 20px",
              marginBottom: "24px",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}>
              <span style={{ fontSize: "20px", flexShrink: 0 }}>⚠️</span>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#92400e", marginBottom: "4px" }}>
                  ¿Por qué es importante?
                </div>
                <div style={{ fontSize: "13px", color: "#78350f", lineHeight: 1.6 }}>
                  Un deal sin actividad por más de 21 días tiene alta probabilidad de enfriarse. Este panel te permite identificarlos rápidamente y tomar acción antes de perder la oportunidad.
                </div>
              </div>
            </div>

            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              {[
                {
                  step: 1,
                  title: "Abrir HubSpot",
                  desc: "Inicia sesión en tu cuenta de HubSpot desde tu navegador.",
                  icon: "🟠",
                  detail: null,
                },
                {
                  step: 2,
                  title: "Ir a Paneles / Dashboards",
                  desc: "En el menú principal de HubSpot, navega a la sección de Paneles (Dashboards).",
                  icon: "📊",
                  detail: null,
                },
                {
                  step: 3,
                  title: "Buscar el panel Head of HISPAM BDR",
                  desc: "Busca el panel por nombre o accede directamente desde el enlace.",
                  icon: "🔍",
                  link: {
                    url: "https://app.hubspot.com/reports-dashboard/9327816/view/17289975",
                    label: "Abrir panel directamente",
                  },
                },
                {
                  step: 4,
                  title: "Agregar filtros avanzados",
                  desc: "Dentro del panel, aplica el siguiente filtro para ver únicamente tus deals:",
                  icon: "🔧",
                  filter: {
                    field: "Who got the call",
                    value: "Me",
                  },
                },
                {
                  step: 5,
                  title: "Revisar la información",
                  desc: "Baja en el panel hasta encontrar la sección donde se muestran los deals con 21+ días sin actividad. Revisa cada uno y toma acción.",
                  icon: "👀",
                  detail: null,
                },
              ].map((step, i) => (
                <div
                  key={step.step}
                  style={{
                    background: COLORS.surface,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: "12px",
                    padding: "20px 22px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    animation: `slideUp 0.3s ease ${i * 0.05}s both`,
                  }}
                >
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    background: `linear-gradient(135deg, #f97316 33, #f59e0b33)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "15px", fontWeight: 700, color: "#f97316",
                    flexShrink: 0,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {step.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "15px", fontWeight: 600, marginBottom: "4px" }}>
                      {step.title}
                    </div>
                    <div style={{ fontSize: "13px", color: COLORS.textSecondary, lineHeight: 1.6 }}>
                      {step.desc}
                    </div>

                    {step.link && (
                      <a
                        href={step.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          marginTop: "10px",
                          padding: "8px 16px",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#ffffff",
                          background: "#f97316",
                          borderRadius: "8px",
                          textDecoration: "none",
                          transition: "opacity 0.2s",
                        }}
                      >
                        🔗 {step.link.label}
                      </a>
                    )}

                    {step.filter && (
                      <div style={{
                        marginTop: "10px",
                        background: "#fff7ed",
                        border: "1px solid #fed7aa",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}>
                        <div style={{
                          fontSize: "11px", fontWeight: 600, color: "#9a3412",
                          textTransform: "uppercase", letterSpacing: "0.05em",
                        }}>
                          Filtro:
                        </div>
                        <div style={{
                          display: "flex", alignItems: "center", gap: "8px",
                        }}>
                          <span style={{
                            fontSize: "13px", fontWeight: 500, color: "#7c2d12",
                            background: "#ffedd5",
                            padding: "4px 10px",
                            borderRadius: "6px",
                            fontFamily: "'JetBrains Mono', monospace",
                          }}>
                            {step.filter.field}
                          </span>
                          <span style={{ fontSize: "13px", color: "#9a3412" }}>→</span>
                          <span style={{
                            fontSize: "13px", fontWeight: 600, color: "#7c2d12",
                            background: "#fed7aa",
                            padding: "4px 10px",
                            borderRadius: "6px",
                            fontFamily: "'JetBrains Mono', monospace",
                          }}>
                            {step.filter.value}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Action protocol */}
            <div style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: "12px",
              padding: "20px 24px",
            }}>
              <div style={{ fontSize: "15px", fontWeight: 600, marginBottom: "6px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>🚨</span> Protocolo: Deal con 21+ días sin actividad
              </div>
              <div style={{ fontSize: "13px", color: COLORS.textSecondary, marginBottom: "18px", lineHeight: 1.6 }}>
                Cuando identifiques un deal sin actividad por más de 21 días, sigue estos pasos en orden:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  {
                    step: "1",
                    action: "Crear un chat grupal",
                    desc: "Abre un chat nuevo e incluye a las siguientes personas:",
                    color: "#6366f1",
                    participants: ["AE asignado al deal", "Supervisor del AE", "Lola"],
                  },
                  {
                    step: "2",
                    action: "Informar de la situación",
                    desc: "En el chat, comparte el contexto completo del deal: nombre de la cuenta, último contacto, etapa actual y motivo por el que lleva 21+ días sin movimiento. Ofrece tu ayuda para contactar al lead o para buscar más leads dentro de la misma empresa.",
                    color: "#f59e0b",
                    participants: null,
                  },
                  {
                    step: "3",
                    action: "Documentar todo en el chat",
                    desc: "Asegúrate de que toda la conversación, acuerdos y próximos pasos queden documentados de forma clara en el mismo chat. Esto servirá como registro para seguimiento y rendición de cuentas.",
                    color: "#10b981",
                    participants: null,
                  },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", gap: "16px",
                    padding: "16px 0",
                    borderBottom: i < 2 ? `1px solid ${COLORS.border}` : "none",
                  }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "50%",
                      background: item.color + "18",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "14px", fontWeight: 700, color: item.color,
                      flexShrink: 0,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}>
                      {item.step}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: COLORS.textPrimary, marginBottom: "4px" }}>
                        {item.action}
                      </div>
                      <div style={{ fontSize: "13px", color: COLORS.textSecondary, lineHeight: 1.6 }}>
                        {item.desc}
                      </div>

                      {item.participants && (
                        <div style={{
                          marginTop: "10px",
                          display: "flex",
                          gap: "8px",
                          flexWrap: "wrap",
                        }}>
                          {item.participants.map((p, j) => (
                            <span key={j} style={{
                              fontSize: "12px",
                              fontWeight: 500,
                              color: item.color,
                              background: item.color + "12",
                              border: `1px solid ${item.color}25`,
                              padding: "5px 12px",
                              borderRadius: "20px",
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}>
                              👤 {p}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Example message template */}
            <div style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: "12px",
              padding: "20px 24px",
              marginTop: "12px",
            }}>
              <div style={{ fontSize: "15px", fontWeight: 600, marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>💬</span> Ejemplo de mensaje para el chat
              </div>
              <div style={{
                background: "#f0f4ff",
                border: "1px solid #c7d2fe",
                borderRadius: "10px",
                padding: "16px 18px",
                fontSize: "13px",
                color: "#1e3a5f",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}>
                Hola equipo, les informo que el deal <strong>[Nombre de la cuenta]</strong> lleva 21+ días sin actividad. La última interacción fue el <strong>[fecha]</strong> en etapa <strong>[etapa actual]</strong>.<br /><br />
                Quedo a disposición para ayudar a contactar al lead directamente o para buscar otros contactos dentro de la empresa que puedan reactivar la conversación.<br /><br />
                ¿Cuál es el mejor siguiente paso?
              </div>
            </div>
          </div>
        )}

        {/* ===== INSTALL SECTION ===== */}
        {activeSection === "install" && (
          <div style={{ animation: "slideUp 0.3s ease" }}>
            <div style={{ marginBottom: "28px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "6px", letterSpacing: "-0.02em" }}>
                Cómo instalar el calendario
              </h2>
              <p style={{ fontSize: "14px", color: COLORS.textSecondary }}>
                Sigue estos pasos para importar la agenda en tu Google Calendar
              </p>
            </div>

            {/* Info banner */}
            <div style={{
              background: COLORS.primary + "12",
              border: `1px solid ${COLORS.primary}33`,
              borderRadius: "12px",
              padding: "16px 20px",
              marginBottom: "24px",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}>
              <span style={{ fontSize: "20px", flexShrink: 0 }}>ℹ️</span>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: COLORS.primary, marginBottom: "4px" }}>
                  Antes de comenzar
                </div>
                <div style={{ fontSize: "13px", color: COLORS.textSecondary, lineHeight: 1.6 }}>
                  Asegúrate de tener acceso a Google Calendar con tu cuenta de trabajo. El archivo .ics que importarás creará eventos recurrentes de lunes a viernes, de mayo a julio 2026. Cada evento incluye notificaciones de escritorio y por correo electrónico.
                </div>
              </div>
            </div>

            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              {INSTALL_STEPS.map((step, i) => (
                <div
                  key={step.step}
                  style={{
                    background: COLORS.surface,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: "12px",
                    padding: "20px 22px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    animation: `slideUp 0.3s ease ${i * 0.05}s both`,
                  }}
                >
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    background: `linear-gradient(135deg, ${COLORS.primary}33, ${COLORS.accent1}33)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "15px", fontWeight: 700, color: COLORS.primaryLight,
                    flexShrink: 0,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {step.step}
                  </div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 600, marginBottom: "4px" }}>
                      {step.title}
                    </div>
                    <div style={{ fontSize: "13px", color: COLORS.textSecondary, lineHeight: 1.6 }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Outlook instructions */}
            <div style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: "12px",
              padding: "20px 24px",
              marginBottom: "20px",
            }}>
              <div style={{ fontSize: "15px", fontWeight: 600, marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>📧</span> ¿Usas Outlook?
              </div>
              <div style={{ fontSize: "13px", color: COLORS.textSecondary, lineHeight: 1.7 }}>
                En Outlook de escritorio: ve a Archivo → Abrir y exportar → Importar o exportar → selecciona "Importar un archivo iCalendar (.ics)". En Outlook web: ve a Calendario → Agregar calendario → Cargar desde archivo y selecciona el archivo .ics.
              </div>
            </div>

            {/* Apple Calendar */}
            <div style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: "12px",
              padding: "20px 24px",
            }}>
              <div style={{ fontSize: "15px", fontWeight: 600, marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>🍎</span> ¿Usas Apple Calendar?
              </div>
              <div style={{ fontSize: "13px", color: COLORS.textSecondary, lineHeight: 1.7 }}>
                Simplemente haz doble clic en el archivo .ics descargado. Apple Calendar te preguntará en qué calendario quieres agregar los eventos. Selecciona tu calendario de trabajo y confirma.
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: `1px solid ${COLORS.border}`,
        padding: "20px 24px",
        textAlign: "center",
        marginTop: "40px",
      }}>
        <div style={{ fontSize: "12px", color: COLORS.textMuted }}>
          Quetzals Centroamérica · Agenda diaria del equipo · Mayo – Julio 2026
        </div>
      </footer>
    </div>
  );
}
