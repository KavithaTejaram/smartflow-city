import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import { motion } from "framer-motion";
import { MONTHLY_TRENDS, AREA_STATS, WEATHER_TRAFFIC, WEATHER_CLASSES, DATASET_INFO } from "@/data/trafficData";
import { Database } from "lucide-react";

const monthlyChart = MONTHLY_TRENDS.map((m) => ({
  month: m.month,
  congestion: Math.round(m.congestion),
  incidents: m.incidents,
}));

const zoneData = AREA_STATS.slice(0, 5).map((a) => ({
  name: a.name,
  value: Math.round(a.congestion),
}));

const COLORS = ["hsl(0,75%,50%)", "hsl(0,60%,40%)", "hsl(38,92%,55%)", "hsl(145,65%,45%)", "hsl(0,0%,50%)"];

const radarData = [
  { metric: "Speed", value: Math.round(AREA_STATS.reduce((s, a) => s + a.avgSpeed, 0) / AREA_STATS.length) },
  { metric: "Safety", value: 85 },
  { metric: "Eco Score", value: 72 },
  { metric: "Efficiency", value: 80 },
  { metric: "Coverage", value: Math.round((DATASET_INFO.roads / 20) * 100) },
  { metric: "Response", value: 88 },
];

const weatherChart = WEATHER_TRAFFIC.map((w) => ({
  condition: w.condition,
  volume: Math.round(w.avgVolume / 1000),
  congestion: Math.round(w.congestion),
}));

const tooltipStyle = {
  backgroundColor: "hsl(0,0%,8%)",
  border: "1px solid hsl(0,0%,15%)",
  borderRadius: "8px",
  fontFamily: "JetBrains Mono",
  fontSize: "11px",
  color: "hsl(0,0%,90%)",
};

const Analytics = () => (
  <div className="min-h-screen pt-16">
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Analytics & Reports</h1>
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <Database className="h-3.5 w-3.5" />
          Based on {DATASET_INFO.trafficRecords.toLocaleString()} traffic + {DATASET_INFO.weatherRecords.toLocaleString()} weather records ({DATASET_INFO.dateRange})
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Monthly congestion & incidents */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Monthly Congestion vs Incidents</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={monthlyChart}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,15%)" />
                <XAxis dataKey="month" stroke="hsl(0,0%,50%)" fontSize={11} fontFamily="JetBrains Mono" />
                <YAxis stroke="hsl(0,0%,50%)" fontSize={11} fontFamily="JetBrains Mono" />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="congestion" fill="hsl(0,75%,50%)" radius={[4, 4, 0, 0]} name="Congestion %" />
                <Bar dataKey="incidents" fill="hsl(0,60%,40%)" radius={[4, 4, 0, 0]} name="Incidents" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Zone distribution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Congestion by Area (Top 5)</h3>
          <div className="h-64 flex items-center">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={zoneData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={3} dataKey="value">
                  {zoneData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            {zoneData.map((z, i) => (
              <span key={z.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                {z.name} ({z.value}%)
              </span>
            ))}
          </div>
        </motion.div>

        {/* System performance radar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">System Performance</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(0,0%,15%)" />
                <PolarAngleAxis dataKey="metric" stroke="hsl(0,0%,50%)" fontSize={10} fontFamily="JetBrains Mono" />
                <Radar dataKey="value" stroke="hsl(0,75%,50%)" fill="hsl(0,75%,50%)" fillOpacity={0.15} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Weather impact */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Weather Impact on Traffic</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={weatherChart} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,15%)" />
                <XAxis type="number" stroke="hsl(0,0%,50%)" fontSize={11} fontFamily="JetBrains Mono" />
                <YAxis dataKey="condition" type="category" stroke="hsl(0,0%,50%)" fontSize={11} fontFamily="JetBrains Mono" width={70} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="congestion" fill="hsl(0,75%,50%)" radius={[0, 4, 4, 0]} name="Congestion %" />
                <Bar dataKey="volume" fill="hsl(145,65%,45%)" radius={[0, 4, 4, 0]} name="Volume (K)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Analytics;
