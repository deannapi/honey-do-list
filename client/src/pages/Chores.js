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
import { QUERY_COMMENT } from '../utils/queries';
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";

export default function Chores(props) {
  const { id: commentId } = useParams();
  
  const { data } = useQuery(QUERY_COMMENT, {
    variables: { id: commentId }
  });

  const comment = data?.comment || {};

  return (
    <>
      <Container>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <h2>Chores</h2>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Checkbox value={AddChore} />
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
          </Grid.Row>
        </Grid>
      </Container>

      <br></br>
      <AddChore />
      <br></br>
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Comment>
                <Comment.Content>
                  <Comment.Author >By: {comment.username} </Comment.Author>
                  <Comment.Metadata> At: {comment.createdAt}</Comment.Metadata>
                  <Comment.Text>{comment.commendBody}</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>
                      <Form.TextArea />
                      <Button
                        color="teal"
                        size="medium"
                        style={{
                          marginBottom: "4em",
                        }}
                        onClick={ADD_REACTION}
                      >
                        Comment
                      </Button>
                    </Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}
