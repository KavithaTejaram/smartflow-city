import { AlertTriangle, Construction, Siren, CloudRain, Users } from "lucide-react";
import { WEATHER_TRAFFIC, AREA_STATS } from "@/data/trafficData";

const topArea = AREA_STATS[0];
const rainData = WEATHER_TRAFFIC.find((w) => w.condition === "Rain")!;

const alerts = [
  { icon: Siren, text: `Emergency vehicle detected near ${topArea.name} (Congestion: ${topArea.congestion}%)`, time: "2m ago", type: "destructive" as const },
  { icon: Construction, text: "Road maintenance on Hosur Road — Lane 2 blocked", time: "15m ago", type: "warning" as const },
  { icon: CloudRain, text: `Rain alert: Avg volume rises to ${rainData.avgVolume.toLocaleString()} vehicles`, time: "30m ago", type: "warning" as const },
  { icon: Users, text: `${rainData.pedestrians} avg pedestrians detected across junctions`, time: "45m ago", type: "neutral" as const },
  { icon: AlertTriangle, text: `${AREA_STATS[1].name} congestion at ${AREA_STATS[1].congestion}% — rerouting active`, time: "1h ago", type: "destructive" as const },
];

const typeStyles = {
  destructive: "border-destructive/30 bg-destructive/5",
  warning: "border-warning/30 bg-warning/5",
  neutral: "border-primary/30 bg-primary/5",
};

const iconStyles = {
  destructive: "text-destructive",
  warning: "text-warning",
  neutral: "text-primary",
};

const AlertsFeed = () => (
  <div className="rounded-xl border border-border bg-card p-5">
    <h3 className="text-sm font-semibold text-foreground mb-4">Live Alerts</h3>
    <div className="space-y-2 max-h-72 overflow-y-auto">
      {alerts.map((alert, i) => (
        <div key={i} className={`flex items-start gap-3 p-3 rounded-lg border ${typeStyles[alert.type]}`}>
          <alert.icon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${iconStyles[alert.type]}`} />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-foreground">{alert.text}</p>
            <p className="text-xs font-mono text-muted-foreground mt-1">{alert.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AlertsFeed;
