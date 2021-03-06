import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_COMMENT } from "../utils/mutations";
import { QUERY_COMMENTS, QUERY_ME } from "../utils/queries";
import { Container, Form, Button, Grid } from "semantic-ui-react";

export default function CommentForm(props) {
  const [commentBody, setBody] = useState("");
  // const [userComments, setUserComments] = useState([
    // {
    //   commentBody: '',
    //   createdAt: "",
    //   firstName: '',
    //   id: 1,
    // }
  // ]);

  const [addComment] = useMutation(ADD_COMMENT, {
    update(cache, { data: { addComment } }) {
      try {
        const { comments } = cache.readQuery({ query: QUERY_COMMENTS });
        cache.writeQuery({
          query: QUERY_COMMENTS,
          data: { comments: [addComment, ...comments] },
        });
      } catch (e) {
        console.error(e);
      }

      // append new comment to the end of the array
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, comments: [...me.comments, addComment] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add comment to database
      await addComment({
        variables: { commentBody },
      });

      // clear form value
      setBody("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <Container>
        {/* {userComments && userComments.map((comment) => (
            <div key={comment._id}>
              <p  style={{ fontWeight: "bold", color: "teal" }}>
                {comment.firstName} commented on {comment.createdAt}
              </p>
              <p>"{comment.commentBody}"</p>
              <br></br>
            </div>
          ))} */}

        <Grid columns={2} textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Form
                onSubmit={handleFormSubmit}
                // onSubmit={() => {
                //   setUserComments([
                //     ...userComments,
                //     {
                //       commentBody: `${userComments.commentBody}`,
                //       createdAt: `${userComments.createdAt}`,
                //       firstName: `${userComments.firstName}`,
                //       id: `${userComments._id}`,
                //     }
                //   ])
                // }}
              >
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
                  Comment
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
  );
}
