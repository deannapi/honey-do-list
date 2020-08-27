import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { JOIN_GROUP } from "../utils/mutations";
import Auth from "../utils/auth";
import { Container, Button, Grid, Form, Input, Label } from "semantic-ui-react";

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
      <body
        style={{
          background: "lightblue",
          height: "700px",
        }}
      >
        <Container style={{ marginBottom: "2em" }} text textAlign="center">
          <h2
            style={{
              fontSize: "2em",
              fontWeight: "bold",
              marginBottom: "1em",
              marginTop: "2em",
              color: "yellow",
              fontFamily: "-moz-initial",
            }}
          >
            Create A Group
          </h2>
          <Grid columns={1} text textAlign="center">
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <Input
                    icon="search"
                    placeholder="Smith Family"
                    type="text"
                    onChange={handleChange}
                  />
                  <Label pointing="left">Type in your desired group name</Label>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <Input type="password" placeholder="Group Password" />
                  <Label pointing='left' type="password">Group Password</Label>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={2} text textAlign="center">
            <Grid.Row>
              <Grid.Column>
                <Form.Field onClick={handleFormSubmit}>
                  <Link to="/joingroup">
                    <Button.Group widths="1">
                      <Button
                        color="teal"
                        size="huge"
                        style={{
                          marginBottom: "4em",
                          fontFamily: "-moz-initial",
                        }}
                      >
                        Submit
                      </Button>
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
