//  this page stores the chores list
// need checkboxes and commenting available
import React from "react";
import { ADD_REACTION } from "../utils/mutations";
import {
  Grid,
  Container,
  Checkbox,
  Comment,
  Form,
  Button,
} from "semantic-ui-react";

import AddChore from "./AddChore";

export default function Chores(props) {
  return (
    <>
    <body
      style={{
        background: "lightblue",
        height: "700px",
      }}>
      <Container>
        <Grid columns={1}>
            <Grid.Column text textAlign="center">
              <h2
                style={{
                  fontSize: '3em',
                  fontWeight: 'bold',
                  marginBottom: 0,
                  marginTop: '2em',
                  color: "yellow",
                  fontFamily: "-moz-initial"
                }}
              >Chores</h2>
            </Grid.Column>
            {/* <Grid.Column text textAlign="center">
              <h2
                style={{
                  fontSize: '2em',
                  fontWeight: 'bold',
                  marginBottom: '1em',
                  marginTop: '2em',
                  color: "teal",
                }}
              >Unassigned Chores</h2>
            </Grid.Column> */}


          <Grid.Row>
            <Grid.Column text textAlign="center">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Checkbox 
                  label="Chore 1" />
                </li>
                <br></br>
                <li>
                  <Checkbox label="Chore 2" />
                </li>
                <br></br>
                <li>
                  <Checkbox label="Chore 3" />
                </li>
                {/* <li>
                  <Checkbox label="THESE NEED TO COME FROM JS" />
                </li> */}
              </ul>
            </Grid.Column>

            {/* <Grid.Column>
              <ul style={{ listStyle: "none" }} text textAlign="left">
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
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </Container>

      <Container>
        <Grid columns={2} text textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Comment>
                <Comment.Content>
                  {/* <Comment.Author as="a">Get username</Comment.Author>
                  <Comment.Metadata>Time Here</Comment.Metadata>
                  <Comment.Text>This is my comment.</Comment.Text> */}
                  <Comment.Actions>
                    <Comment.Action>
                      <Form>
                      <Form.TextArea />
                      <Button
                        color="teal"
                        size="large"
                        style={{
                          marginBottom: "2em",
                          fontFamily: "-moz-initial"
                        }}
                        onClick={ADD_REACTION}
                      >
                        Comment
                      </Button>
                      </Form>
                    </Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <br></br>
      <br></br>
      <AddChore />
      </body>
    </>
  );
}
