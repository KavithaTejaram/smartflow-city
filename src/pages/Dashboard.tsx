import { useState, useEffect } from "react";
import { Car, Clock, Gauge, Siren, Route, Users } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import TrafficSignal from "@/components/dashboard/TrafficSignal";
import TrafficMap from "@/components/dashboard/TrafficMap";
import CongestionChart from "@/components/dashboard/CongestionChart";
import EcoPanel from "@/components/dashboard/EcoPanel";
import AlertsFeed from "@/components/dashboard/AlertsFeed";

const initialSignals = [
  { name: "Silk Board Jn", status: "red" as const, timer: 45, density: 92, priority: 95 },
  { name: "KR Puram", status: "green" as const, timer: 30, density: 78, priority: 80 },
  { name: "Marathahalli", status: "yellow" as const, timer: 5, density: 65, priority: 70 },
  { name: "Majestic", status: "green" as const, timer: 22, density: 55, priority: 60 },
  { name: "Indiranagar", status: "red" as const, timer: 38, density: 45, priority: 50 },
  { name: "Koramangala", status: "green" as const, timer: 15, density: 40, priority: 45 },
];

const Dashboard = () => {
  const [signals, setSignals] = useState(initialSignals);
  const [vehicleCount, setVehicleCount] = useState(12847);

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
          return {
            ...s,
            timer: newTimer,
            status: newStatus,
            density: Math.max(10, Math.min(100, s.density + (Math.random() - 0.5) * 8)),
          };
        })
      );
      setVehicleCount((v) => v + Math.floor((Math.random() - 0.45) * 50));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <div className="container py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Live Dashboard</h1>
            <p className="text-sm text-muted-foreground font-mono">Real-time traffic monitoring · Bengaluru</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-eco">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-eco opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-eco" />
            </span>
            LIVE
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard title="Active Vehicles" value={vehicleCount.toLocaleString()} change="+2.3% from avg" changeType="negative" icon={Car} />
          <StatCard title="Avg Wait Time" value="42s" change="-15% optimized" changeType="positive" icon={Clock} />
          <StatCard title="Congestion Index" value="7.2" change="High - peak hours" changeType="negative" icon={Gauge} />
          <StatCard title="Emergency Active" value="2" change="Ambulance, Fire" changeType="neutral" icon={Siren} />
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map - takes 2 cols */}
          <div className="lg:col-span-2">
            <TrafficMap />
          </div>

          {/* Alerts */}
          <div>
            <AlertsFeed />
          </div>

          {/* Congestion chart */}
          <div className="lg:col-span-2">
            <CongestionChart />
          </div>

          {/* Eco panel */}
          <div>
            <EcoPanel />
          </div>
        </div>

        {/* Signals */}
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
