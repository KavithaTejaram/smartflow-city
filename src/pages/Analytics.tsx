import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import { motion } from "framer-motion";

const weeklyData = [
  { day: "Mon", congestion: 72, resolved: 45 },
  { day: "Tue", congestion: 68, resolved: 52 },
  { day: "Wed", congestion: 80, resolved: 48 },
  { day: "Thu", congestion: 75, resolved: 60 },
  { day: "Fri", congestion: 90, resolved: 55 },
  { day: "Sat", congestion: 45, resolved: 30 },
  { day: "Sun", congestion: 35, resolved: 20 },
];

const zoneData = [
  { name: "Whitefield", value: 30 },
  { name: "Koramangala", value: 22 },
  { name: "MG Road", value: 18 },
  { name: "Silk Board", value: 20 },
  { name: "Others", value: 10 },
];

const COLORS = [
  "hsl(185,80%,50%)", "hsl(160,70%,45%)", "hsl(38,92%,55%)", "hsl(0,75%,55%)", "hsl(215,15%,55%)",
];

const radarData = [
  { metric: "Speed", value: 78 },
  { metric: "Safety", value: 85 },
  { metric: "Eco Score", value: 72 },
  { metric: "Efficiency", value: 80 },
  { metric: "Coverage", value: 90 },
  { metric: "Response", value: 88 },
];

const emissionData = [
  { month: "Jan", co2: 420, saved: 120 },
  { month: "Feb", co2: 380, saved: 150 },
  { month: "Mar", co2: 350, saved: 180 },
  { month: "Apr", co2: 320, saved: 200 },
  { month: "May", co2: 300, saved: 230 },
  { month: "Jun", co2: 280, saved: 250 },
];

const tooltipStyle = {
  backgroundColor: "hsl(220,40%,9%)",
  border: "1px solid hsl(220,30%,18%)",
  borderRadius: "8px",
  fontFamily: "JetBrains Mono",
  fontSize: "11px",
  color: "hsl(200,20%,90%)",
};

const Analytics = () => (
  <div className="min-h-screen pt-16">
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Analytics & Reports</h1>
        <p className="text-sm text-muted-foreground">System performance insights and environmental impact</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weekly congestion */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Weekly Congestion vs Resolved</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,30%,18%)" />
                <XAxis dataKey="day" stroke="hsl(215,15%,55%)" fontSize={11} fontFamily="JetBrains Mono" />
                <YAxis stroke="hsl(215,15%,55%)" fontSize={11} fontFamily="JetBrains Mono" />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="congestion" fill="hsl(185,80%,50%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="resolved" fill="hsl(160,70%,45%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Zone distribution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Congestion by Zone</h3>
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
                {z.name}
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
                <PolarGrid stroke="hsl(220,30%,18%)" />
                <PolarAngleAxis dataKey="metric" stroke="hsl(215,15%,55%)" fontSize={10} fontFamily="JetBrains Mono" />
                <Radar dataKey="value" stroke="hsl(185,80%,50%)" fill="hsl(185,80%,50%)" fillOpacity={0.2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Emission savings */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">CO₂ Emissions & Savings (tons)</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <LineChart data={emissionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,30%,18%)" />
                <XAxis dataKey="month" stroke="hsl(215,15%,55%)" fontSize={11} fontFamily="JetBrains Mono" />
                <YAxis stroke="hsl(215,15%,55%)" fontSize={11} fontFamily="JetBrains Mono" />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="co2" stroke="hsl(0,75%,55%)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="saved" stroke="hsl(160,70%,45%)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Analytics;
