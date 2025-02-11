import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function AnalyticsChart({ data }) {
  return (
    <div>
      <h2>Аналитика аккаунтов</h2>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="phone" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="posts_count" fill="#8884d8" />
        <Bar dataKey="comments_count" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
