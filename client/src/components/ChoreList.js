import React from "react";
import { Form, Checkbox, List, Container } from "semantic-ui-react";

export default function ChoreList({ chores }) {
  return (
    <>
      <Container>
        {chores &&
          chores.map((chore) => (
            <div key={chore._id}>
              <Form>
                <Form.Field>
                  <List>
                    <List.Item>
                      <List.Content>
                        {/* {chore.choreBody} */}
                        <Checkbox label={chore.choreBody} />
                      </List.Content>
                    </List.Item>
                  </List>
                </Form.Field>
              </Form>
            </div>
          ))}
      </Container>
    </>
  );
}
