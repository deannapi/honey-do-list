import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";
import 'semantic-ui-css/semantic.min.css';
import { Form, Input, Button, Container } from 'semantic-ui-react'

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };


  return (
    <Container text textAlign='center'>
      <h2>Login</h2>
      <Form onSubmit={handleFormSubmit}>
          <Form.Field
            placeholder="youremail@test.com"
            control={Input}
            label="Email"
            id="form-input-control-error-email"
            onChange={handleChange}
            autoComplete="on"
            name="email"
          />
        <Form.Field
            label="Password"
            control={Input}
            id="Password"
            onChange={handleChange}
            autoComplete="on"
            type="password"
            name="password"
          />
        {
          error ? <div>
            <p className="error-text" >The provided credentials are incorrect</p>
          </div> : null
        }
          <Button color='teal' size='big'
            style={{
            marginBottom: '10em'
            }}
            >
            Login
          </Button>
      </Form>
    </Container>
  );
}


export default Login;
