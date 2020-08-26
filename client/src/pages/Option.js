import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { Button, Container, Grid } from 'semantic-ui-react';

export default function Option() {
    const loggedIn = Auth.loggedIn();

    return (
        <Container>
            <h2>Please make a selection.</h2>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Link to="/joingroup">
                            <Button.Group widths="2">
                                <Button
                                     color="teal"
                                     size="huge"
                                     style={{
                                       marginBottom: "10em",
                                     }}
                                >Join a Group</Button>
                            </Button.Group>
                        </Link>
                    </Grid.Column>
                    <Grid.Column>
                        <Link to="/mygroup">
                            <Button.Group widths="2">
                                <Button
                                     color="teal"
                                     size="huge"
                                     style={{
                                       marginBottom: "10em",
                                     }}
                                >Go To My Group</Button>
                            </Button.Group>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
};