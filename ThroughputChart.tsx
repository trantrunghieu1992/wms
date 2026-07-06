"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function ThroughputChart({
  data,
}: {
  data: { month: string; inbound: number; outbound: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} barGap={6} margin={{ top: 4, right: 8, left: -12, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--border))" vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fill: "rgb(var(--muted))", fontSize: 12 }}
          axisLine={{ stroke: "rgb(var(--border))" }}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "rgb(var(--muted))", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            background: "rgb(var(--surface))",
            border: "1px solid rgb(var(--border))",
            borderRadius: 10,
            fontSize: 12,
            color: "rgb(var(--ink))",
          }}
          cursor={{ fill: "rgb(var(--brand))", fillOpacity: 0.06 }}
        />
        <Legend wrapperStyle={{ fontSize: 12, color: "rgb(var(--muted))" }} />
        <Bar dataKey="inbound" name="Inbound units" fill="rgb(var(--brand-light))" radius={[5, 5, 0, 0]} />
        <Bar dataKey="outbound" name="Outbound units" fill="rgb(var(--amber))" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
