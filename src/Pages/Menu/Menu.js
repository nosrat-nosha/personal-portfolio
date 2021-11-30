import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Menu = () => {
	return (
		<div>
			<Navbar
				collapseOnSelect
				expand="lg"
				className="text-dark"
				bg=""
				variant=""
			>
				<Container>
					<Navbar.Brand className="text-dark" href="#home">
						Nosrat Nosha
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<Nav.Link className="text-dark" to="/resume">
								Resume
							</Nav.Link>

							<Nav.Link className="text-dark" href="">
								About
							</Nav.Link>
							<Nav.Link
								href="
                            "
								className="text-dark"
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
