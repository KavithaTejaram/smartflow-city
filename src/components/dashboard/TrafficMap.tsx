import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ROAD_STATS } from "@/data/trafficData";

interface Road {
  id: string;
  x1: number; y1: number; x2: number; y2: number;
  congestion: number;
  name: string;
}

const ROADS: Road[] = [
  { id: "r1", x1: 10, y1: 30, x2: 90, y2: 30, congestion: 90.4, name: "Trinity Circle" },
  { id: "r2", x1: 10, y1: 55, x2: 90, y2: 55, congestion: 67.2, name: "Marathahalli Bridge" },
  { id: "r3", x1: 10, y1: 80, x2: 90, y2: 80, congestion: 94.1, name: "Sony World Jn" },
  { id: "r4", x1: 25, y1: 10, x2: 25, y2: 95, congestion: 79.5, name: "Ballari Road" },
  { id: "r5", x1: 50, y1: 10, x2: 50, y2: 95, congestion: 55.2, name: "Hosur Road" },
  { id: "r6", x1: 75, y1: 10, x2: 75, y2: 95, congestion: 88.2, name: "CMH Road" },
];

const INTERSECTIONS = [
  { x: 25, y: 30, name: "Koramangala" },
  { x: 50, y: 30, name: "Indiranagar" },
  { x: 75, y: 30, name: "M.G. Road" },
  { x: 25, y: 55, name: "Jayanagar" },
  { x: 50, y: 55, name: "Silk Board" },
  { x: 75, y: 55, name: "Whitefield" },
  { x: 25, y: 80, name: "Hebbal" },
  { x: 50, y: 80, name: "E-City" },
  { x: 75, y: 80, name: "Yeshwanthpur" },
];

const getCongestionColor = (c: number) => {
  if (c > 80) return "hsl(var(--destructive))";
  if (c > 60) return "hsl(var(--warning))";
  return "hsl(var(--eco))";
};

const TrafficMap = () => {
  const [roads, setRoads] = useState(ROADS);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoads((prev) =>
        prev.map((r) => ({
          ...r,
          congestion: Math.max(10, Math.min(100, r.congestion + (Math.random() - 0.5) * 10)),
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl border border-border bg-card p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-foreground">Bengaluru Traffic Grid</h3>
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-eco" /> &lt;60%</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-warning" /> 60-80%</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-destructive" /> &gt;80%</span>
        </div>
      </div>
      <div className="relative w-full bg-muted rounded-lg overflow-hidden" style={{ paddingBottom: "70%" }}>
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(0,0%,15%)" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />

          {roads.map((road) => (
            <g key={road.id}>
              <line x1={road.x1} y1={road.y1} x2={road.x2} y2={road.y2} stroke="hsl(0,0%,12%)" strokeWidth="3" strokeLinecap="round" />
              <motion.line
                x1={road.x1} y1={road.y1} x2={road.x2} y2={road.y2}
                stroke={getCongestionColor(road.congestion)}
                strokeWidth="2" strokeLinecap="round"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </g>
          ))}

          {INTERSECTIONS.map((int, i) => (
            <g key={i}>
              <motion.circle
                cx={int.x} cy={int.y} r="2.5" fill="hsl(var(--primary))" opacity="0.8"
                animate={{ r: [2.5, 3, 2.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
              <circle cx={int.x} cy={int.y} r="1.5" fill="hsl(var(--background))" />
              <text x={int.x} y={int.y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="2.5" fontFamily="Inter, sans-serif">
                {int.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default TrafficMap;
