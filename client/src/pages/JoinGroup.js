import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { JOIN_GROUP } from "../utils/mutations";
import Auth from "../utils/auth";
import { Container, Button, Grid, Form, Input, Label } from 'semantic-ui-react';

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
    <>
      <Container>
        <Link to="/">
          <Button.Group>
            <Button 
              color="teal"
              size="huge"
              style={{
                marginBottom: "2em",
              }}
            >Home</Button>
          </Button.Group>
        </Link>
      </Container>

      <Container style={{ marginBottom: "2em"}}>
        <h2>Join Group</h2>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Form.Field>
                <Input icon='search' placeholder="Smith Family" type="text" onChange={handleChange} />
                <Label pointing='left'>Type in your desired group name</Label>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form.Field>
                <Input type="password" />
                <Label pointing='left'>Group Password</Label>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form.Field>
                <Link to="/chores">
                  <Button.Group widths={1}>
                    <Button
                       color="teal"
                       size="huge"
                       style={{
                         marginBottom: "4em",
                       }}
                       onClick={handleFormSubmit}
                    >Submit</Button>
                  </Button.Group>
                </Link>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}
