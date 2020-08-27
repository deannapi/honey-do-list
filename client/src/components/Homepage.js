import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Auth from '../utils/auth';

import { Container, Button, Grid, Header } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Background from "./cleaning1.jpg";

export default function Homepage() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
        <body
          style={{
          background:`url(${Background})`,
          height: "800px",
        }}>
        <Container text textAlign="center">
          <h2
            style={{
              fontSize: '2em',
              fontWeight: 'bold',
              marginBottom: '2em',
              marginTop: '2em',
              color: "yellow",
              fontFamily: "-moz-initial"
            }}
          >Please make a selection.</h2>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Link to="/joingroup">
                  <Button.Group widths="2">
                    <Button
                      color="teal"
                      size="huge"
                      style={{
                        // marginBottom: "10em",
                        fontFamily: "-moz-initial"
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
                        marginBottom: "3em",
                        fontFamily: "-moz-initial"
                      }}
                    >Create a Group</Button>
                  </Button.Group>
                </Link>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container style={{ marginBottom: "2em"}} text textAlign="center">
        <Grid columns={2} text textAlign="center">
            <Grid.Row>
              <Grid.Column>
                <Link to="/" onClick={() => Auth.logout()}>
                  <Button.Group widths="1">
                    <Button
                      color="teal"
                      size="huge"
                      style={{
                        fontFamily: "-moz-initial"
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
          background:`url(${Background})`,
          height: "800px",
        }}>
  <Container text textAlign='center'>
    <Header
      as='h1'
      content='Honey Do List'
      style={{
        fontSize: '4em',
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: '1em',
        color: "yellow",
        fontFamily: "-moz-initial"
      }}
    />
    <Header
      as='h2'
      content='A simple and easy chore management application that allows the user to add chores to their list, comment on chores, and assign/invite others to accept a chore.'
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
        marginBottom: '2em',
        color: "yellow",
        fontFamily: "-moz-initial"
      }}
    />
    </Container>
    <Container text textAlign='center'>
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
                          fontFamily: "-moz-initial"
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
                          fontFamily: "-moz-initial"
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


