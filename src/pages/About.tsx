import { motion } from "framer-motion";
import { Brain, Cpu, Globe, Leaf, Shield, Zap } from "lucide-react";

const techStack = [
  { name: "React + TypeScript", desc: "Frontend framework" },
  { name: "Framer Motion", desc: "Fluid animations" },
  { name: "Recharts", desc: "Data visualization" },
  { name: "Tailwind CSS", desc: "Utility-first styling" },
  { name: "Simulated AI Engine", desc: "Predictive algorithms" },
  { name: "Real-time WebSocket", desc: "Live data streams" },
];

const pillars = [
  { icon: Brain, title: "AI-Driven", desc: "Machine learning models predict congestion 30 minutes ahead using historical patterns, weather, and event data." },
  { icon: Shield, title: "Emergency First", desc: "Automatic signal preemption for ambulances, fire trucks, and police vehicles with corridor clearing." },
  { icon: Leaf, title: "Eco-Conscious", desc: "Optimizes signal timing to reduce idle emissions by 34% and prioritizes electric vehicle corridors." },
  { icon: Globe, title: "Scalable", desc: "Designed for cities like Bengaluru with 10M+ population, adaptable to any urban grid worldwide." },
];

const About = () => (
  <div className="min-h-screen pt-16">
    <div className="container py-16 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xs font-mono text-primary">ABOUT THE PROJECT</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Smart Adaptive Traffic System
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          SATS is a context-aware traffic management platform designed specifically for Bengaluru's
          complex urban grid. It uses AI prediction, real-time sensor data, and eco-optimization to
          dynamically adjust traffic signals, reduce congestion, and prioritize critical movement.
        </p>
      </motion.div>

      {/* Pillars */}
      <div className="grid sm:grid-cols-2 gap-5 mt-12">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <p.icon className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* How it works */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Cpu className="h-5 w-5 text-primary" /> How It Works
        </h2>
        <div className="space-y-4">
          {[
            { step: "01", title: "Data Collection", desc: "Sensors, cameras, and GPS data feed real-time traffic information into the system." },
            { step: "02", title: "AI Processing", desc: "Machine learning models analyze patterns and predict congestion 30 minutes ahead." },
            { step: "03", title: "Priority Scoring", desc: "Each junction gets a dynamic score based on density, emergencies, pedestrians, and environment." },
            { step: "04", title: "Signal Adaptation", desc: "Traffic signals adjust in real-time — green waves, emergency preemption, eco-corridors." },
            { step: "05", title: "Continuous Learning", desc: "The system improves over time by learning from outcomes and feedback loops." },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-mono font-bold text-primary">
                {item.step}
              </span>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech stack */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {techStack.map((t) => (
            <div key={t.name} className="rounded-lg border border-border bg-muted p-4">
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mt-16 text-center text-xs font-mono text-muted-foreground border-t border-border pt-8">
        Built for hackathon demonstration · SATS v1.0
      </div>
    </div>
  </div>
);

export default About;
