import { motion } from "framer-motion";

interface TrafficSignalProps {
  name: string;
  status: "red" | "yellow" | "green";
  timer: number;
  density: number;
  priority: number;
}

const TrafficSignal = ({ name, status, timer, density, priority }: TrafficSignalProps) => {
  const colors = {
    red: "bg-signal-red",
    yellow: "bg-signal-yellow",
    green: "bg-signal-green",
  };

  const glows = {
    red: "shadow-[0_0_15px_hsl(0,80%,55%,0.5)]",
    yellow: "shadow-[0_0_15px_hsl(45,95%,55%,0.5)]",
    green: "shadow-[0_0_15px_hsl(140,70%,50%,0.5)]",
  };

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-foreground">{name}</h4>
        <span className="text-xs font-mono text-muted-foreground">P:{priority}</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Signal lights */}
        <div className="flex flex-col gap-1.5 rounded-lg bg-muted p-2">
          {(["red", "yellow", "green"] as const).map((color) => (
            <motion.div
              key={color}
              className={`h-5 w-5 rounded-full ${
                status === color
                  ? `${colors[color]} ${glows[color]}`
                  : "bg-muted-foreground/20"
              }`}
              animate={status === color ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ))}
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Timer</span>
            <span className="font-mono text-foreground">{timer}s</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Density</span>
            <span className="font-mono text-foreground">{density}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${
                density > 80 ? "bg-destructive" : density > 50 ? "bg-warning" : "bg-eco"
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${density}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficSignal;
