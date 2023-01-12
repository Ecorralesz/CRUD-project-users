import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Form } from "react-bootstrap";

const UsersForm = ({ getUsers, userSelected, deselectUser, handleClick }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    }
  }, [userSelected]);

  const submit = (data) => {
    if (userSelected) {
      axios
        .put(
          `https://users-crud.academlo.tech/users/${userSelected.id}/`,
          data
        )
        .then(() => getUsers());
    } else {
      axios
        .post("https://users-crud.academlo.tech/users/", data)
        .then(() => getUsers())
        .catch((error) => console.log(error.response));
    }
    clear();
  };

  const clear = () => {
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    deselectUser();
  };

  return (
    <Form 
    onSubmit={handleSubmit(submit)}
    className=""
    >
      <div className="close heartbeat"
        type="button"
        onClick={handleClick}
      >
      <i class="fa-solid fa-rectangle-xmark"></i>
      </div>

      <Form.Group className="mb-3">
        <Form.Label className="form_label">First Name</Form.Label>
        <Form.Control 
          type="text"
          id="first_name"
          {...register("first_name")}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="form_label">Last Name</Form.Label>
        <Form.Control 
          type="text"
          id="last_name"
          {...register("last_name")}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="form_label">Email</Form.Label>
        <Form.Control 
          type="email"
          id="email"
          {...register("email")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="form_label">Password</Form.Label>
        <Form.Control 
          type="password"
          id="password"
          {...register("password")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="form_label">Date of birth</Form.Label>
        <Form.Control 
          type="date"
          id="birthday"
          {...register("birthday")}
        />
      </Form.Group>


      <div className="btn-form">
      <button>{userSelected ? "Save" : "Create"} </button>
      <button type="button" onClick={clear}>
        Clear
      </button>
      </div>
    </Form>
  );
};

export default UsersForm;
