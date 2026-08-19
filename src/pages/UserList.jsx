import { useState, useEffect } from "react";
import { getAllUsers } from "../api/user.api";
import Card from "../components/Card";
import { useNavigate } from "react-router";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);
  return (
    <div className="users-page">
      <h1>Users Page</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <Card key={user.id} {...user} />
              <button
                onClick={() => {
                  navigate(`/user/${user.id}`);
                }}
              >
                View User
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;
