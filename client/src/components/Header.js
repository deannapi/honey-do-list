import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Image, Segment, Sticky } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
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
  </Segment>
)
};