import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };

  const deselectUser = () => setUserSelected(null);

  //Modal//

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((isActive) => !isActive);
  };
  return (
    <div className="App">
      <div className="app-btn-container">
      <button type="button" onClick={handleClick}>
        Add a new User
      </button>
      </div>
      
      <div
        className="bg-modal"
        style={{
          display: isActive ? "flex" : "none",
        }}
      >
        <UsersForm
          handleClick={handleClick}
          getUsers={getUsers}
          userSelected={userSelected}
          deselectUser={deselectUser}
        />
      </div>

      <UsersList users={users} selectUser={selectUser} getUsers={getUsers} />
    </div>
  );
}

export default App;
