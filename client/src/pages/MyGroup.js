import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { CREATE_GROUP } from "../utils/mutations";
import Auth from "../utils/auth";

export default function CreateGroup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [createGroup] = useMutation(CREATE_GROUP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await createGroup({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.createGroup.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="">
      <Link to="/">Home</Link>

      <h2>Create A Group</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="">
          <label htmlFor="groupName">Group Name:</label>
          <input
            placeholder=""
            name="groupName"
            type="text"
            id="groupName"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="groupPassword">Group Password:</label>
          <input
            placeholder=""
            name="groupPassword"
            type="password"
            id="groupPassword"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}