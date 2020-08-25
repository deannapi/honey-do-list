import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_CHORE } from "../utils/mutations";
import Auth from "../utils/auth";
import { Form, Input, Button, Container } from "semantic-ui-react";

export default function AddChore(props) {
  const [formState] = useState({
    chore: "",
  });

  const [addChore, { error }] = useMutation(ADD_CHORE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const mutationResponse = await addChore({
      variables: {
        chore: formState.chore,
      },
    });
    const token = mutationResponse.data.addChore.token;
    Auth.login(token);
  };

  return (
    <Container>
      <h2>Add a Chore</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field control={Input} label="Chore" id="chore-input" />
        <Button type="submit" color="teal" size="medium">Add Chore</Button>
      </Form>
      {error && <div>Unable to add new chore.</div>}
    </Container>
  );
}