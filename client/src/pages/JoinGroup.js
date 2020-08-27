import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { JOIN_GROUP } from "../utils/mutations";
import Auth from "../utils/auth";

export default function JoinGroup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [joinGroup] = useMutation(JOIN_GROUP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await joinGroup({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.joinGroup.token;
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
    <div className="container my-1">
      <Link to="/">Home</Link>

      <h2>Join Group</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            autoComplete="on"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="grpPwd">Group Password:</label>
          <input
            placeholder="must be at least 6 characters"
            name="password"
            type="password"
            id="grpPwd"
            onChange={handleChange}
            autoComplete="on"
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
