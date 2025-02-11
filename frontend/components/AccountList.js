import React from "react";

export default function AccountList({ accounts }) {
  return (
    <div>
      <h2>Аккаунты</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.phone} | Посты: {account.posts_count} | Комментарии: {account.comments_count}
          </li>
        ))}
      </ul>
    </div>
  );
}
