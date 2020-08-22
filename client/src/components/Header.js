import PropTypes from 'prop-types';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Button, Grid, Header, Image, Segment, Sticky } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const HomepageHeading = ({ mobile }) => (
  <Container text textAlign='center'>
    <Header
      as='h1'
      content='Honey Do List'
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='A simple and easy chore management application that allows the user to add chores to their list, comment on chores, and assign/invite others to accept a chore.'
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
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
            marginBottom: mobile ? '1.5em' : '10em'
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
            marginBottom: mobile ? '1.5em' : '10em'
            }}>
            Signup
          </Button>
        </Button.Group>
        </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}


export default () => (
    <Segment>
      <Sticky>
      <Menu>
        <Container>
          <Menu.Item as="a" header>
            <h1>Honey Do List</h1>
          </Menu.Item>

          <Menu.Menu position="right">
              <Menu.Item as="a" name="Tasks">
                  <Image src="https://img.icons8.com/cute-clipart/64/000000/task.png"/>
                  <Link to="/chores">Tasks</Link>
              </Menu.Item>
              <Menu.Item as="a" name="Shopping">
                  <Image src="https://img.icons8.com/color/48/000000/shopping-cart-loaded.png"/>
                  <Link to="/">Shopping</Link>
              </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      </Sticky>
      <HomepageHeading />
    </Segment>
)
