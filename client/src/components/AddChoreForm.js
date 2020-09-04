import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_CHORE } from "../utils/mutations";
import { QUERY_ALL_CHORES, QUERY_ME } from "../utils/queries";
import { Container, Form, Button, Grid } from "semantic-ui-react";
// import { saveChoreIds, getChoreIds } from '../utils/localStorage';

export default function AddChoreForm(props) {
  const [choreBody, setBody] = useState("");

  // // create state to hold saved choreId values
  // const [savedChoreIds, setSavedChoreIds] = useState(getChoreIds());

  // // set up useEffect hook to save 'savedChoreIds' to list to localStorage on component unmount
  // useEffect(() => {
  //   return () => saveChoreIds(savedChoreIds);
  // });

  const [addChore] = useMutation(ADD_CHORE, {
    update(cache, { data: { addChore } }) {
      try {
        const { chores } = cache.readQuery({ query: QUERY_ALL_CHORES, variables: { id: addChore.chore._id } });
        cache.writeQuery({
          query: QUERY_ALL_CHORES,
          data: { chores: [addChore, ...chores] },
        });
      } catch (e) {
        console.error(e);
      }

      // append new chore to the end of the array
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, chores: [...me.chores, addChore] } },
      });
      // cache.modify({
      //   fields: {
      //     chores(existingChoreRefs = [], { readField }) {
      //       const newChoreRef = cache.writeFragment({
      //         data: addChore,
      //         fragment: gql`
      //           fragment NewChore on Chore {
      //             choreId
      //             choreBody
      //           }
      //         `
      //       });
      //       return [...existingChoreRefs, newChoreRef];
      //     }
      //   }
      // });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add chore to database
      await addChore({
        variables: { choreBody },
      });

      // const { items } = await response.json();
      // const choreData = items.map((chore) => ({
      //   choreId: chore.id,
      //   choreBody: chore.choreBody
      // }));

      // clear form value
      setBody("");
    } catch (e) {
      console.error(e);
    }

    // console.log("Chore: ", choreBody );
  };

  return (
    <Container>
      <Grid columns={2} textAlign="center">
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
                type="submit"
                variant="success"
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
