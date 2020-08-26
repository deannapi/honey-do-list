import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Auth from '../utils/auth';

import { Container, Button, Grid, Header } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Background from "./cleaning.jpg";

export default function Homepage() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>

        <body
          style={{
          background: `url(${Background})`,
        }}>


        <Container>
          <h2>Please make a selection.</h2>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Link to="/joingroup">
                  <Button.Group widths="2">
                    <Button
                      color="teal"
                      size="huge"
                      style={{
                        marginBottom: "10em",
                      }}
                    >Join a Group</Button>
                  </Button.Group>
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Link to="/mygroup">
                  <Button.Group widths="2">
                    <Button
                      color="teal"
                      size="huge"
                      style={{
                        marginBottom: "10em",
                      }}
                    >Go To My Group</Button>
                  </Button.Group>
                </Link>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <Container text textAlign="center">
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Link to="/" onClick={() => Auth.logout()}>
                  <Button.Group widths="1">
                    <Button
                      color="teal"
                      size="huge"
                      style={{
                        marginBottom: "10em",
                      }}
                    >
                      Logout
                    </Button>
                  </Button.Group>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        </body>
      </>
      );
    } else {
      return (
        <>
            <body
          style={{
          background: `url(${Background})`,
        }}>
             <Container
        as="h1"
        content="Honey Do List"
        style={{
          fontSize: "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "2em",
          textAlign: "center",
        }}
      />
        <Container
          as="h2"
          content="A simple and easy chore management application that allows the user to add chores to their list, comment on chores, and assign/invite others to accept a chore."
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
          }}
        />

          <Container text textAlign="center">
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Link to="/login">
                    <Button.Group widths="2">
                      <Button
                        color="teal"
                        size="huge"
                        style={{
                          marginBottom: "10em",
                        }}
                      >
                        Login
                      </Button>
                    </Button.Group>
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <Link to="/signup">
                    <Button.Group widths="2">
                      <Button
                        color="teal"
                        size="huge"
                        style={{
                          marginBottom: "10em",
                        }}
                      >
                        Signup
                      </Button>
                    </Button.Group>
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          </body>
        </>
      );
    }
  }


  return (
    <>
 
      {showNavigation()}
    </>
  );
}


