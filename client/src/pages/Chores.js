import React from "react";
import {
  Grid,
  Container,
  Checkbox,
} from "semantic-ui-react";
import AddChore from "./AddChore";
import { QUERY_COMMENTS } from "../utils/queries";
import { useQuery } from "@apollo/react-hooks";
import CommentForm from '../components/CommentForm'; 
import CommentList from '../components/CommentList';

export default function Chores(props) {
  const { data } = useQuery(QUERY_COMMENTS);

  const comments = data?.comments || [];
  console.log(comments);

  return (
    <>
      <body
        style={{
          background: "lightblue",
          height: "700px",
        }}
      >
        <Container>
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column text textAlign="center">
                <h2
                  style={{
                    fontSize: "3em",
                    fontWeight: "bold",
                    marginBottom: 0,
                    marginTop: "2em",
                    color: "yellow",
                    fontFamily: "-moz-initial",
                  }}
                >
                  Chores
                </h2>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column text textAlign="center">
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Checkbox value={AddChore} />
                  </li>
                  <br></br>
                  <li>
                    <Checkbox label="Chore 2" />
                  </li>
                  <br></br>
                  <li>
                    <Checkbox label="Chore 3" />
                  </li>
                </ul>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <br></br>
        <AddChore />
        <br></br>
        <CommentList comments={comments} />
        <CommentForm />
      </body>
    </>
  );
}