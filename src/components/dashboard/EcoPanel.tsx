import { motion } from "framer-motion";
import { Leaf, Fuel, Zap, Wind } from "lucide-react";
import { MONTHLY_TRENDS } from "@/data/trafficData";

const totalEnvImpact = MONTHLY_TRENDS.reduce((s, m) => s + m.envImpact, 0);
const avgEnvImpact = Math.round(totalEnvImpact / MONTHLY_TRENDS.length);

const metrics = [
  { label: "Fuel Saved", value: "1,245 L", icon: Fuel, delta: "Optimized routing" },
  { label: "CO₂ Reduced", value: `${(avgEnvImpact * 0.03).toFixed(1)} tons`, icon: Wind, delta: `Impact index: ${avgEnvImpact}` },
  { label: "EV Priority", value: "Active", icon: Zap, delta: "23 EVs routed" },
  { label: "Idle Reduction", value: "34%", icon: Leaf, delta: "Signal optimization" },
];

const EcoPanel = () => (
  <div className="rounded-xl border border-border bg-card p-5">
    <div className="flex items-center gap-2 mb-4">
      <Leaf className="h-4 w-4 text-eco" />
      <h3 className="text-sm font-semibold text-foreground">Eco-Optimization</h3>
      <span className="ml-auto text-xs font-mono px-2 py-0.5 rounded-full bg-eco/10 text-eco">ACTIVE</span>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-lg bg-muted p-3"
        >
          <m.icon className="h-4 w-4 text-eco mb-2" />
          <p className="text-lg font-bold font-mono text-foreground">{m.value}</p>
          <p className="text-xs text-muted-foreground">{m.label}</p>
          <p className="text-xs font-mono text-eco mt-1">{m.delta}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default EcoPanel;
