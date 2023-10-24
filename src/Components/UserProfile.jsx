import React from 'react';
import { useUserContext } from './UserContext';

function UserProfile() {
  const { user, login, logout } = useUserContext();

  const handleLogin = () => {
    login({ username: 'testUser' });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default UserProfile;
