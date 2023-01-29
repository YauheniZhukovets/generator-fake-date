import React from 'react';
import {Container, Navbar} from "react-bootstrap";

export const NavBar: React.FC = React.memo(() => {

    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Generator fake date</Navbar.Brand>
                </Container>
            </Navbar>
    )
})