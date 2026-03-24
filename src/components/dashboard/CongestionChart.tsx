import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MONTHLY_TRENDS } from "@/data/trafficData";

const chartData = MONTHLY_TRENDS.map((m) => ({
  month: m.month,
  congestion: Math.round(m.congestion),
  volume: Math.round(m.avgVolume / 1000),
  incidents: m.incidents,
}));

const CongestionChart = () => (
  <div className="rounded-xl border border-border bg-card p-5">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-semibold text-foreground">Monthly Congestion (2022 Dataset)</h3>
      <div className="flex items-center gap-4 text-xs font-mono">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-6 rounded-full bg-primary" /> Congestion %
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-6 rounded-full bg-eco opacity-60" /> Volume (K)
        </span>
      </div>
    </div>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorCong" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(0,75%,50%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(0,75%,50%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorVol" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(145,65%,45%)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="hsl(145,65%,45%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,15%)" />
          <XAxis dataKey="month" stroke="hsl(0,0%,50%)" fontSize={10} fontFamily="JetBrains Mono" />
          <YAxis stroke="hsl(0,0%,50%)" fontSize={10} fontFamily="JetBrains Mono" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(0,0%,8%)",
              border: "1px solid hsl(0,0%,15%)",
              borderRadius: "8px",
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              color: "hsl(0,0%,90%)",
            }}
          />
          <Area type="monotone" dataKey="congestion" stroke="hsl(0,75%,50%)" fill="url(#colorCong)" strokeWidth={2} />
          <Area type="monotone" dataKey="volume" stroke="hsl(145,65%,45%)" fill="url(#colorVol)" strokeWidth={1.5} strokeDasharray="5 5" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default CongestionChart;
