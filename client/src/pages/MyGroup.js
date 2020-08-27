import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { CREATE_GROUP } from "../utils/mutations";
import Auth from "../utils/auth";
import { Container, Button, Grid, Form, Input, Label } from 'semantic-ui-react';
import Background from "./cleaning.jpg";

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
    <>
      {/* <Container>
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
      </Container> */}
          <body
            style={{
              background:`url(${Background})`,
              height: "800px",
          }}>
      <Container style={{ marginBottom: "2em"}} text textAlign="center">
        <h2
          style={{
            fontSize: '2em',
            fontWeight: 'bold',
            marginBottom: '1em',
            marginTop: '2em',
            color: "yellow",
            fontFamily: "-moz-initial"
          }}
        >Create A Group</h2>
        <Grid columns={2} text textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Form.Field>
                <Input icon='search' placeholder="Smith Family" type="text" />
                {/* <Label pointing='left'>Type in your group name</Label> */}
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form.Field>
                <Input type="password" placeholder="Group Password" />
                {/* <Label pointing='left'>Group Password</Label> */}
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form.Field>
                <Link to="/joingroup">
                  <Button.Group widths={1}>
                    <Button
                       color="teal"
                       size="huge"
                       style={{
                         marginBottom: "4em",
                         fontFamily: "-moz-initial"
                       }}
                    >Submit</Button>
                  </Button.Group>
                </Link>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      </body>
    </>
  );
}