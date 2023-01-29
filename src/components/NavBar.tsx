import React from 'react';
import {Container, Navbar} from "react-bootstrap";

type NavBarType = {

}

export const NavBar: React.FC<NavBarType> = React.memo(() => {

    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Generator fake date</Navbar.Brand>
                </Container>
            </Navbar>
    )
})