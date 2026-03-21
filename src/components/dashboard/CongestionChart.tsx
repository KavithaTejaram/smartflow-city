import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "6AM", congestion: 20, predicted: 22 },
  { time: "7AM", congestion: 45, predicted: 48 },
  { time: "8AM", congestion: 85, predicted: 82 },
  { time: "9AM", congestion: 92, predicted: 90 },
  { time: "10AM", congestion: 70, predicted: 72 },
  { time: "11AM", congestion: 55, predicted: 58 },
  { time: "12PM", congestion: 60, predicted: 62 },
  { time: "1PM", congestion: 65, predicted: 60 },
  { time: "2PM", congestion: 58, predicted: 55 },
  { time: "3PM", congestion: 50, predicted: 52 },
  { time: "4PM", congestion: 70, predicted: 75 },
  { time: "5PM", congestion: 88, predicted: 90 },
  { time: "6PM", congestion: 95, predicted: 92 },
  { time: "7PM", congestion: 80, predicted: 78 },
  { time: "8PM", congestion: 55, predicted: 52 },
  { time: "9PM", congestion: 35, predicted: 30 },
];

const CongestionChart = () => (
  <div className="rounded-xl border border-border bg-card p-5">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-semibold text-foreground">Congestion Trends</h3>
      <div className="flex items-center gap-4 text-xs font-mono">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-6 rounded-full bg-primary" /> Actual
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-6 rounded-full bg-accent opacity-50" /> Predicted
        </span>
      </div>
    </div>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorCongestion" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(185,80%,50%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(185,80%,50%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(160,70%,45%)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="hsl(160,70%,45%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,30%,18%)" />
          <XAxis dataKey="time" stroke="hsl(215,15%,55%)" fontSize={10} fontFamily="JetBrains Mono" />
          <YAxis stroke="hsl(215,15%,55%)" fontSize={10} fontFamily="JetBrains Mono" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(220,40%,9%)",
              border: "1px solid hsl(220,30%,18%)",
              borderRadius: "8px",
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              color: "hsl(200,20%,90%)",
            }}
          />
          <Area type="monotone" dataKey="congestion" stroke="hsl(185,80%,50%)" fill="url(#colorCongestion)" strokeWidth={2} />
          <Area type="monotone" dataKey="predicted" stroke="hsl(160,70%,45%)" fill="url(#colorPredicted)" strokeWidth={1.5} strokeDasharray="5 5" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default CongestionChart;
