import React, { useEffect, useState } from "react";
const UserList = ({ users }: { users: Array<string> }) => {
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 1500);
    return () => clearTimeout(1500);
  }, []);

  return (
    <ul>
      {showTitle && <h1>사용자 목록</h1>}
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
};

export default UserList;
