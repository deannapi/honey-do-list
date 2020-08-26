//  this page stores the chores list
// need checkboxes and commenting available
import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_CHORE } from "../utils/mutations";
import Auth from "../utils/auth";
import {
  Grid,
  Container,
  Checkbox,
  Comment,
  Form,
  Button,
  Input,
} from "semantic-ui-react";

import AddChore from './AddChore';

export default function Chores(props) {
  return (
    <Container>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <h2>Chores</h2>
          </Grid.Column>
          <Grid.Column>
            <h2>Unassigned Chores</h2>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <ul style={{ listStyle: "none" }}>
              <li>
                <Checkbox label="Chore 1" />
              </li>
              <li>
                <Checkbox label="Chore 2" />
              </li>
              <li>
                <Checkbox label="Chore 3" />
              </li>
              <li>
                <Checkbox label="THESE NEED TO COME FROM JS" />
              </li>
            </ul>
          </Grid.Column>

          <Grid.Column>
            <ul style={{ listStyle: "none" }}>
              <li>
                <Checkbox label="Unassigned Chore 1" />
              </li>
              <li>
                <Checkbox label="Unassigned Chore 2" />
              </li>
              <li>
                <Checkbox label="Unassigned Chore 3" />
              </li>
              <li>
                <Checkbox label="Unassigned THESE NEED TO COME FROM JS" />
              </li>
            </ul>
          </Grid.Column>
        </Grid.Row>

        <Comment>
          <Comment.Content>
            <Comment.Author as="a">Get username</Comment.Author>
            <Comment.Metadata>Time Here</Comment.Metadata>
            <Comment.Text>This is my comment.</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea />
          <Button content="Add Reply" labelPosition="left" />
        </Form>
      </Grid>

      <AddChore />
    </Container>
  );
}