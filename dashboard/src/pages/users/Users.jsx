import "./users.css";

import { useFetch } from "../../hooks/useFetch";

import UserCard from "../../components/userCard/UserCard";
import AddUser from "./components/AddUser";

const Users = () => {
  const [users, err, loading, fetchUsers] = useFetch("/user");

  const renderUsers = () =>
    users.map((user, index) => <UserCard key={index} user={user} />);

  return (
    <div className="page">
      <h1 className="page-hero">Users</h1>

      <AddUser />

      <div className="page-section users-section">
        {users ? (
          renderUsers()
        ) : loading ? (
          <h2>loading</h2>
        ) : (
          <h2>No user found</h2>
        )}
      </div>
    </div>
  );
};

export default Users;
