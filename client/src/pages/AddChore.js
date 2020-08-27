import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_CHORE } from "../utils/mutations";
import Auth from "../utils/auth";
import { Form, Input, Button, Container } from "semantic-ui-react";

export default function AddChore(props) {
  const [formState, setFormState] = useState({
    chore: "",
  });

  const [addChore, { error }] = useMutation(ADD_CHORE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const mutationResponse = await addChore({
      variables: {
        choreBody: formState.chore,
      },
    });
    const token = mutationResponse.data.addChore.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container text textAlign="center">
      <h2
        style={{
          fontSize: '2em',
          fontWeight: 'bold',
          marginBottom: '1em',
          marginTop: 0,
          color: "yellow",
        }}
      >Add a Chore</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field 
        control={Input} id="chore-input" 
        name="chore"
        onChange={handleChange}
        />
        <Button type="submit" color="teal" size="medium">Add Chore</Button>
      </Form>
      {error && <div>Unable to add new chore.</div>}
    </Container>
  );
}