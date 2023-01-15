import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, InputGroup } from "react-bootstrap";


function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
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
        <Button 
        type="button" 
        onClick={handleClick} 
        variant="primary" 
        size="lg"
        >
          Add a new User
        </Button>
      </div>

      <div className="container">
      <InputGroup 
      className="mb-3">
        <InputGroup.Text>
          Username
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          type="text"
          placeholder="Type here..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        </InputGroup>
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
      <UsersList
        handleClick={handleClick}
        users={users}
        selectUser={selectUser}
        getUsers={getUsers}
        nameInput={nameInput}
      />
    </div>
  );
}

export default App;
