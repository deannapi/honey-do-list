import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import 'semantic-ui-css/semantic.min.css';
import { Form, Input, Button, Container } from 'semantic-ui-react'


export default function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
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
    <Container text textAlign='center'>
      {/* <Link to="/login">← Go to Login</Link> */}

      <h2>Signup</h2>
      <Form onSubmit={handleFormSubmit}>
          <Form.Field
            placeholder="First Name"
            control={Input}
            label="First Name"
            id="form-input-control-first-name"
            onChange={handleChange}
            autoComplete="on"
          />
          <Form.Field
            placeholder="Last Name"
            control={Input}
            label="Last Name"
            id="form-input-control-last-name"
            onChange={handleChange}
            autoComplete="on"
          />
        <Form.Field
            placeholder="Username"
            label="Username"
            control={Input}
            id="Username"
            onChange={handleChange}
            autoComplete="on"
          />
        <Form.Field
            placeholder="youremail@test.com"
            control={Input}
            label="Email"
            id="form-input-control-error-email"
            onChange={handleChange}
            autoComplete="on"
          />
        <Form.Field
            placeholder="must be at least 6 characters"
            label="Password"
            control={Input}
            id="Password"
            onChange={handleChange}
            autoComplete="on"
          />
          <Button color='teal' size='big'
            style={{
            marginBottom: '10em'
            }}>
            Signup
          </Button>
      </Form>
      {error && <div>Sign up failed.</div>}
    </Container>
  );
}
