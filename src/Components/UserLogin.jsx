import React from 'react';
import { useUserContext } from './UserContext';

function UserProfile() {
  const { user, login, logout } = useUserContext();

  const handleLogin = () => {
    login({ username: "jessjelly" });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <section>
      {user ? (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </section>
  );
}

export default UserProfile;
