import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Menu = () => {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand className="fw-bold text-warning" href="#home">
						Nosrat Nosha
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav d-flex justify-content-end">
						<Nav className="">
							<Nav.Link href="#home">
								<span className="fw-bold">Follow me: </span>
								<span className="text-warning">
									<i
										class="fab fa-facebook-f 
									 p-2"
									></i>
									<i
										class="fab fa-instagram 
									  p-2"
									></i>
									<i
										class="fab fa-youtube 
									  p-2"
									></i>
									<i
										class="fab fa-linkedin  
									 p-2"
									></i>
								</span>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Menu;
