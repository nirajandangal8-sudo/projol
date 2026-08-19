import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getUserById } from "../api/user.api";

function UserView() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const userData = await getUserById(userId);
        setUser(userData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    if (userId) loadUser();
  }, [userId]);
  return (
    <div>
      <h1>User View</h1>
      {loading ? <div>Loading user data...</div> : null}
      {error ? <div>Error: {error.message}</div> : null}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <p>phone:{user.phone}</p>
          <p> wedsite:{user.website} </p>
        </div>
      )}
    </div>
  );
}

export default UserView;
