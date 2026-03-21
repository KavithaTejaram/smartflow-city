import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudRain, Car, Music, AlertTriangle, Zap, RotateCcw, Play, Users, Construction } from "lucide-react";

type Scenario = {
  id: string;
  label: string;
  icon: typeof CloudRain;
  desc: string;
  effects: string[];
  color: string;
};

const scenarios: Scenario[] = [
  {
    id: "rain",
    label: "Heavy Rain",
    icon: CloudRain,
    desc: "Simulates monsoon conditions reducing visibility and road grip",
    effects: ["Signal timers +40%", "Speed limits reduced", "Rerouting activated", "Emergency standby"],
    color: "text-primary",
  },
  {
    id: "accident",
    label: "Road Accident",
    icon: AlertTriangle,
    desc: "Major accident blocking 2 lanes on Outer Ring Road",
    effects: ["Lane blocked", "Emergency priority ON", "Alt routes activated", "Congestion spike +60%"],
    color: "text-destructive",
  },
  {
    id: "festival",
    label: "Festival Rush",
    icon: Music,
    desc: "Ganesh Chaturthi procession through central Bengaluru",
    effects: ["Road closures", "Pedestrian zones expanded", "Public transit priority", "EV lanes opened"],
    color: "text-warning",
  },
  {
    id: "tech_park",
    label: "Tech Park Exodus",
    icon: Users,
    desc: "6PM rush from Whitefield tech corridor — 50K+ commuters",
    effects: ["Signal bias eastbound", "Bus priority lanes", "Congestion prediction active", "Green wave enabled"],
    color: "text-eco",
  },
  {
    id: "construction",
    label: "Road Construction",
    icon: Construction,
    desc: "Metro construction blocking Hosur Road for 2km stretch",
    effects: ["Detour routes active", "Speed reduced to 20kmph", "Pedestrian rerouting", "Dust sensors ON"],
    color: "text-warning",
  },
  {
    id: "ev_priority",
    label: "EV Priority Mode",
    icon: Zap,
    desc: "Electric vehicle priority corridors activated citywide",
    effects: ["EV lane signals green", "Charging station routing", "Emission tracking ON", "Fossil delay +10s"],
    color: "text-eco",
  },
];

const Simulation = () => {
  const [active, setActive] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const activeScenario = scenarios.find((s) => s.id === active);

  const runSimulation = () => {
    if (!activeScenario) return;
    setRunning(true);
    setLogs([]);

    const effects = [
      `[INIT] Loading scenario: ${activeScenario.label}`,
      `[SYS] Adjusting 1,247 traffic signals...`,
      ...activeScenario.effects.map((e) => `[ADAPT] ${e}`),
      `[AI] Predictive model recalibrated`,
      `[OK] System adapted in 1.8s`,
      `[MONITOR] Continuous optimization active`,
    ];

    effects.forEach((effect, i) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, effect]);
        if (i === effects.length - 1) setRunning(false);
      }, (i + 1) * 600);
    });
  };

  const reset = () => {
    setActive(null);
    setRunning(false);
    setLogs([]);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground">Traffic Simulation</h1>
          <p className="text-sm text-muted-foreground">Trigger scenarios and watch the system adapt in real-time</p>
        </div>

        {/* Scenario selector */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {scenarios.map((s) => (
            <motion.button
              key={s.id}
              onClick={() => { if (!running) { setActive(s.id); setLogs([]); } }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`text-left rounded-xl border p-5 transition-all ${
                active === s.id
                  ? "border-primary bg-primary/5 glow-primary"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <s.icon className={`h-6 w-6 mb-3 ${s.color}`} />
              <h3 className="text-sm font-semibold text-foreground">{s.label}</h3>
              <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
            </motion.button>
          ))}
        </div>

        {/* Control panel */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Effects + controls */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              {activeScenario ? `Scenario: ${activeScenario.label}` : "Select a scenario"}
            </h3>

            {activeScenario && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {activeScenario.effects.map((effect, i) => (
                    <div key={i} className="rounded-lg bg-muted p-3 text-xs text-foreground font-mono">
                      {effect}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={runSimulation}
                    disabled={running}
                    className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground glow-primary transition-all hover:scale-105 disabled:opacity-50"
                  >
                    <Play className="h-4 w-4" />
                    {running ? "Running..." : "Run Simulation"}
                  </button>
                  <button
                    onClick={reset}
                    className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-secondary-foreground transition-all hover:bg-muted"
                  >
                    <RotateCcw className="h-4 w-4" /> Reset
                  </button>
                </div>
              </div>
            )}

            {!activeScenario && (
              <p className="text-sm text-muted-foreground">Choose a scenario above to see expected system adaptations.</p>
            )}
          </div>

          {/* Terminal log */}
          <div className="rounded-xl border border-border bg-muted p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-destructive/60" />
                <span className="h-3 w-3 rounded-full bg-warning/60" />
                <span className="h-3 w-3 rounded-full bg-eco/60" />
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-2">system.log</span>
            </div>
            <div className="h-64 overflow-y-auto font-mono text-xs space-y-1">
              {logs.length === 0 && (
                <p className="text-muted-foreground">Waiting for simulation...</p>
              )}
              <AnimatePresence>
                {logs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`${
                      log.includes("[OK]") ? "text-eco" :
                      log.includes("[ADAPT]") ? "text-primary" :
                      log.includes("[AI]") ? "text-warning" :
                      "text-foreground"
                    }`}
                  >
                    {log}
                  </motion.div>
                ))}
              </AnimatePresence>
              {running && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="text-primary"
                >
                  █
                </motion.span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
