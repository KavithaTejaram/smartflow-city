import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  glowClass?: string;
}

const StatCard = ({ title, value, change, changeType = "neutral", icon: Icon, glowClass = "glow-primary" }: StatCardProps) => {
  const changeColors = {
    positive: "text-eco",
    negative: "text-destructive",
    neutral: "text-muted-foreground",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border border-border bg-card p-5 ${glowClass} transition-shadow hover:shadow-lg`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{title}</p>
          <p className="mt-2 text-3xl font-bold font-mono text-foreground">{value}</p>
          {change && (
            <p className={`mt-1 text-xs font-mono ${changeColors[changeType]}`}>{change}</p>
          )}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
