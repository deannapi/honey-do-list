import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_CHORE } from "../utils/mutations";
import { QUERY_ALL_CHORES, QUERY_ME } from "../utils/queries";
import { Container, Form, Button, Grid } from "semantic-ui-react";

export default function AddChore(props) {
  const [choreBody, setBody] = useState("");
  const [addChore] = useMutation(ADD_CHORE, {
    update(cache, { data: { addChore } }) {
      try {
        const { chores } = cache.readQuery({ query: QUERY_ALL_CHORES });
        cache.writeQuery({
          query: QUERY_ALL_CHORES,
          data: { chores: [addChore, ...chores] },
        });
      } catch (e) {
        console.log(e);
      }

      // append new chore to the end of the array
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, chores: [...me.chores, addChore] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add chore to database
      await addChore({
        variables: { choreBody },
      });

      // clear form value
      setBody("");
    } catch (e) {
      console.log(e);
    }

    // console.log("Chore: ", choreBody );
  };

  return (
    <Container>
      <Grid columns={2} text textAlign="center">
        <Grid.Row>
          <Grid.Column>
            <Form onSubmit={handleFormSubmit}>
              <Form.TextArea
                onChange={(event) => setBody(event.target.value)}
              />
              <Button
                color="teal"
                size="medium"
                style={{
                  marginBottom: "4em",
                  fontFamily: "-moz-initial",
                }}
              >
                Add Chore
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
