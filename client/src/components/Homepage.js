import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Button, Grid, Header } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Background from "./cleaning.jpg";


export default function Homepage() {
  return (
  <body
    style={{
      // backgroundColor: "yellow"
      background: `url(${Background})`,

    }}>
  <Container text textAlign='center'>
    <Header
      as='h1'
      content='Honey Do List'
      style={{
        fontSize: '4em',
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: '2em',
        color: "yellow",
      }}
    />
    <Header
      as='h2'
      content='A simple and easy chore management application that allows the user to add chores to their list, comment on chores, and assign/invite others to accept a chore.'
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
        color: "yellow",
      }}
    />
    <br></br>
    <br></br>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
        <Link to='/login'>
        <Button.Group widths='2'>
          <Button color='teal' size='huge'
            style={{
            marginBottom: '10em'
            }}>
            Login
          </Button>
        </Button.Group>
        </Link>
        </Grid.Column>
        <Grid.Column>
        <Link to='/signup'>
        <Button.Group widths='2'>
          <Button color='teal' size='huge'
            style={{
            marginBottom: '10em'
            }}>
            Signup
          </Button>
        </Button.Group>
        </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
  </body>
)
};