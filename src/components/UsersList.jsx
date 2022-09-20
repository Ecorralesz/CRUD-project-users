import axios from "axios";
import React from "react";

const UsersList = ({ users, selectUser, getUsers }) => {
  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };

  return (
    <div>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id} className="card-container">
            <div>
              <div>
              <i class="fa-solid fa-envelope fa-1x"></i> {user.email}
              </div>
              <div>
              <i class="fa-solid fa-lock fa-1x"></i> {user.password}
              </div>
              <div>
              <i class="fa-solid fa-user fa-1x"></i>  {user.first_name} {user.last_name}
              </div>
              <div>
              <i class="fa-solid fa-cake-candles fa-1x"></i> {user.birthday}
              </div>
            </div>
            <div className="card-btn-container">
              <button onClick={() => selectUser(user)}>
                <i class="fa-solid fa-pencil"></i>
              </button>
              <button onClick={() => deleteUser(user.id)}>
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
