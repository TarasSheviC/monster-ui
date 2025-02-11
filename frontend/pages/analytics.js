import { useEffect, useState } from "react";
import AnalyticsChart from "../components/AnalyticsChart";
import { fetchAnalytics } from "../services/api";

export default function Analytics() {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    fetchAnalytics().then((data) => setAnalytics(data.report));
  }, []);

  return (
    <div>
      <h1>Аналитика</h1>
      <AnalyticsChart data={analytics} />
    </div>
  );
}
