import { useEffect, useState } from "react";
import AccountList from "../components/AccountList";
import { fetchAccounts } from "../services/api";

export default function Home() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchAccounts().then((data) => setAccounts(data.accounts));
  }, []);

  return (
    <div>
      <h1>VK Automation Dashboard</h1>
      <AccountList accounts={accounts} />
    </div>
  );
}
