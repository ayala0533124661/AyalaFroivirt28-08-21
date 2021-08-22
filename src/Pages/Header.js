import React from "react";
import { Navbar, Nav, Container, Button, Col } from "react-bootstrap";
import { useHistory} from "react-router-dom";
import './Header.css'

export default function Header() {
    const history = useHistory();
    return (
        <Navbar  className="bgc">
            <div className="name">Herolo‏ Weather</div>
            <Container>
                <Col className=" col-3 d-flex justify-content-end align-items-center">
                    <Nav className="me-auto">
                        <Navbar.Brand>
                            <Button variant="warning" className="d-flex1"
                                onClick={() => (history.push("/"))}
                            >
                                Home Page
                            </Button>
                        </Navbar.Brand>
                    </Nav>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">

                    <Nav className="me-auto">
                        <Navbar.Brand>
                            <Button variant="warning" className="d-flex2 "
                                onClick={() => (history.push("/favorites"))}
                            >
                                Favorites
                            </Button>
                        </Navbar.Brand>
                    </Nav>
                </Col>
            </Container>
        </Navbar>
    );
}