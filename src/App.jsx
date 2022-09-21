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
    setIsActive((isActive) => !isActive);
  };
  return (
    <div className="App">
      <div className="app-btn-container">
        <button className="wobble-hor-bottom" type="button" onClick={handleClick}>
          Add a new User
        </button>
      </div>
      <div className="blue-ball rotate-scale-up-ver"></div>
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
      <div className="red-ball shadow-pop-tl "></div>

      <UsersList
        handleClick={handleClick}
        users={users}
        selectUser={selectUser}
        getUsers={getUsers}
      />
    </div>
  );
}

export default App;
