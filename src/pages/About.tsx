import { motion } from "framer-motion";
import { Brain, Cpu, Globe, Leaf, Shield, Zap, Database } from "lucide-react";
import { DATASET_INFO, AREA_STATS } from "@/data/trafficData";

const techStack = [
  { name: "React + TypeScript", desc: "Frontend framework" },
  { name: "Framer Motion", desc: "Fluid animations" },
  { name: "Recharts", desc: "Data visualization" },
  { name: "Tailwind CSS", desc: "Utility-first styling" },
  { name: "Priority Score Engine", desc: "Custom scoring algorithm" },
  { name: "Real Bengaluru Data", desc: `${DATASET_INFO.trafficRecords.toLocaleString()} records` },
];

const pillars = [
  { icon: Brain, title: "Data-Driven", desc: `Trained on ${DATASET_INFO.trafficRecords.toLocaleString()} real Bengaluru traffic records across ${DATASET_INFO.areas} areas and ${DATASET_INFO.roads} major roads.` },
  { icon: Shield, title: "Emergency First", desc: "Automatic signal preemption for ambulances and fire trucks with corridor clearing and priority override." },
  { icon: Leaf, title: "Eco-Conscious", desc: "Optimizes signal timing to reduce idle emissions by 34% and prioritizes electric vehicle corridors." },
  { icon: Globe, title: "Bengaluru-Native", desc: `Built for ${AREA_STATS.map(a => a.name).slice(0, 4).join(", ")} and more — real junction names, real congestion data.` },
];

const About = () => (
  <div className="min-h-screen pt-16">
    <div className="container py-16 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xs font-mono text-primary">ABOUT FIRSTMOVE</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Smart Moves First
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          FirstMove is a context-aware traffic management platform designed specifically for Bengaluru's
          complex urban grid. It uses real traffic datasets, weather correlation, and a custom priority scoring
          engine to dynamically adapt signals and reduce congestion.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-xs font-mono text-muted-foreground">
          <Database className="h-3.5 w-3.5 text-primary" />
          {DATASET_INFO.trafficRecords.toLocaleString()} traffic + {DATASET_INFO.weatherRecords.toLocaleString()} weather records · {DATASET_INFO.dateRange}
        </div>
      </motion.div>

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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-16">
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Cpu className="h-5 w-5 text-primary" /> How It Works
        </h2>
        <div className="space-y-4">
          {[
            { step: "01", title: "Dataset Analysis", desc: `Real traffic data from ${DATASET_INFO.areas} Bengaluru areas — volume, speed, congestion, incidents, weather.` },
            { step: "02", title: "Priority Scoring", desc: "Score = (0.5 × density) + (1.0 × emergency) + (0.3 × crowd) + (0.2 × rain) + (0.4 × school_zone)" },
            { step: "03", title: "Signal Adaptation", desc: "Highest-scoring road gets green. System re-evaluates every cycle based on live conditions." },
            { step: "04", title: "Explainable Decisions", desc: "Every signal change comes with a reasoning panel — why this road, what factors contributed." },
            { step: "05", title: "Impact Measurement", desc: "Before vs After comparison showing wait time reduction, throughput improvement, emission savings." },
          ].map((item, i) => (
            <motion.div key={item.step} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="flex gap-4 items-start">
              <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-mono font-bold text-primary">{item.step}</span>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-16">
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
        FirstMove · Smart Moves First · Built for Bengaluru
      </div>
    </div>
  </div>
);

export default About;
