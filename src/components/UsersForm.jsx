import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {
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
          `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
          data
        )
        .then(() => getUsers());
    } else {
      axios
        .post("https://users-crud1.herokuapp.com/users/", data)
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
    <form onSubmit={handleSubmit(submit)}>
      <div className="name-container">
      <i class="fa-solid fa-user fa-2x"></i>
        <div className="input-container">
          <label htmlFor="first_name">  </label>
          <input
            placeholder=" First Name"
            type="text"
            id="first_name"
            {...register("first_name")}
          />
        </div>
        <div className="input-container">
          <label htmlFor="last_name"> </label>
          <input
            placeholder="Last Name"
            place
            type="text"
            id="last_name"
            {...register("last_name")}
          />
        </div>
      </div>

      <div className="name-container-others">
      <i class="fa-solid fa-envelope fa-2x"></i>
      <div className="input-container">
        <label htmlFor="email"> </label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      </div>

      <div className="name-container-others">
      <i class="fa-solid fa-lock fa-2x"></i>
      <div className="input-container">
        <label htmlFor="password"> </label>
        <input
          placeholder="Password"
          type="password"
          id="password"
          {...register("password")}
        />
      </div>
      </div>

      <div className="name-container-others">
      <i class="fa-solid fa-cake-candles fa-2x"></i>
      <div className="input-container">
        <label htmlFor="birthday"></label>
        <input type="date" id="birthday" {...register("birthday")} />
      </div>
      </div>

      <div className="btn-content">
      <button>Upload</button>
      <button type="button" onClick={clear}>
        Clear
      </button>
      </div>
    </form>
  );
};

export default UsersForm;
