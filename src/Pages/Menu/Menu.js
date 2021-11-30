import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Menu = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="" variant="">
				<Container>
					<Navbar.Brand href="#home">Nosrat Nosha</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<Nav.Link to="/resume">Resume</Nav.Link>

							<Nav.Link href="">About</Nav.Link>
							<Nav.Link
								href="
                            "
							>
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Menu;
