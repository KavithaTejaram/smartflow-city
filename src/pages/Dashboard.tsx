import { useState, useEffect } from "react";
import { Car, Clock, Gauge, Siren, Route, Database } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import TrafficSignal from "@/components/dashboard/TrafficSignal";
import TrafficMap from "@/components/dashboard/TrafficMap";
import CongestionChart from "@/components/dashboard/CongestionChart";
import EcoPanel from "@/components/dashboard/EcoPanel";
import AlertsFeed from "@/components/dashboard/AlertsFeed";
import { DATASET_INFO, AREA_STATS } from "@/data/trafficData";

const initialSignals = [
  { name: "Sony World Jn", status: "red" as const, timer: 45, density: 94, priority: 95 },
  { name: "Sarjapur Road", status: "green" as const, timer: 30, density: 93, priority: 90 },
  { name: "Trinity Circle", status: "yellow" as const, timer: 5, density: 90, priority: 85 },
  { name: "CMH Road", status: "green" as const, timer: 22, density: 88, priority: 80 },
  { name: "Hebbal Flyover", status: "red" as const, timer: 38, density: 81, priority: 70 },
  { name: "ITPL Main Road", status: "green" as const, timer: 15, density: 71, priority: 60 },
];

const Dashboard = () => {
  const [signals, setSignals] = useState(initialSignals);
  const [vehicleCount, setVehicleCount] = useState(
    Math.round(AREA_STATS.reduce((s, a) => s + a.avgVolume, 0) / AREA_STATS.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSignals((prev) =>
        prev.map((s) => {
          let newTimer = s.timer - 1;
          let newStatus = s.status;
          if (newTimer <= 0) {
            if (s.status === "red") { newStatus = "green"; newTimer = 25 + Math.floor(Math.random() * 20); }
            else if (s.status === "green") { newStatus = "yellow"; newTimer = 5; }
            else { newStatus = "red"; newTimer = 30 + Math.floor(Math.random() * 25); }
          }
          return { ...s, timer: newTimer, status: newStatus, density: Math.max(10, Math.min(100, s.density + (Math.random() - 0.5) * 8)) };
        })
      );
      setVehicleCount((v) => v + Math.floor((Math.random() - 0.45) * 50));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Live Dashboard</h1>
            <p className="text-sm text-muted-foreground font-mono">
              Real-time monitoring · {DATASET_INFO.trafficRecords.toLocaleString()} records · {DATASET_INFO.dateRange}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
              <Database className="h-3 w-3" />
              {DATASET_INFO.areas} areas · {DATASET_INFO.roads} roads
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-eco">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-eco opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-eco" />
              </span>
              LIVE
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard title="Active Vehicles" value={vehicleCount.toLocaleString()} change="Avg across 8 areas" changeType="neutral" icon={Car} />
          <StatCard title="Avg Speed" value="39.5 km/h" change="Dataset avg" changeType="positive" icon={Clock} />
          <StatCard title="Congestion Index" value="80.9" change="Citywide avg" changeType="negative" icon={Gauge} />
          <StatCard title="Incidents (2022)" value="5,451" change="Avg 454/month" changeType="neutral" icon={Siren} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TrafficMap />
          </div>
          <div>
            <AlertsFeed />
          </div>
          <div className="lg:col-span-2">
            <CongestionChart />
          </div>
          <div>
            <EcoPanel />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 mb-4">
            <Route className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Signal Status</h3>
            <span className="text-xs font-mono text-muted-foreground ml-2">{signals.length} active junctions</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {signals.map((s) => (
              <TrafficSignal key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
