import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";

const UsersList = ({ users, selectUser, getUsers, handleClick }) => {
  const deleteUser = (id) => {
    alert("You deleted a user");
    axios
      .delete(`https://users-crud.academlo.tech/users/${id}/`)
      .then(() => getUsers());
  };

  return (
    <div className="container">
      <Table striped bordered hover variant="dark" className="users-list">
        <thead>
          <tr>
            <th>Email</th>
            <th className="hide-phone hide">Password</th>
            <th>First name</th>
            <th className="hide-phone">Last name</th>
            <th className="hide-phone">Date of Birth</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td> {user.email}</td>
              <td className="hide-phone hide">{user.password}</td>
              <td>{user.first_name}</td>
              <td className="hide-phone">{user.last_name}</td>
              <td className="hide-phone">{user.birthday}</td>
              <td>
                {" "}
                <button 
                onClick={() => handleClick(selectUser(user))}
                className="btn-list"
                >
                  <i class="fa-solid fa-pencil"></i>
                </button>
              </td>
              <td>
                {" "}
                <button 
                onClick={() => deleteUser(user.id)}
                className="btn-list"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default UsersList;
