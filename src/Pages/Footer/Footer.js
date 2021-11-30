import React from "react";
import { Alert, Col, Row } from "react-bootstrap";

const Footer = () => {
	return (
		<div>
			<div className="bg-light">
				<hr />
				<div className="container-fluid  py-5">
					<Row>
						<Col lg={5} className="text-dark">
							<div className="">
								<h4>PORTFOLIO</h4>
								<p className="text-muted">Contact Info</p>
								<p className="  ">
									<i class="fas fa-phone-alt text-dark  "></i>
									<p className="">012123-134-13</p>
									<i class="fas fa-map-marker-alt text-dark"></i>
									<p className="">Dhaka,Bangladesh</p>
									<i class="fas fa-envelope text-dark"></i>
									<p className="">nosrat.nosha@gmail.com</p>
								</p>
							</div>
						</Col>

						<Col lg={4}>
							<div className="">
								<h4 className="text-dark">Follow Me</h4>
								<p className="text-muted">Follow me to know more about us</p>
								<hr />

								<p className="  ">
									<i class="fab fa-facebook-f text-dark p-2"></i>

									<i class="fab fa-instagram text-dark  p-2"></i>

									<i class="fab fa-youtube text-dark  p-2"></i>
									<i class="fab fa-linkedin  text-dark p-2"></i>
								</p>
							</div>
						</Col>
						<hr />
						<p className="text-center">
							{" "}
							&copy; 2021 NOSRAT JAHAN NOSHA, All RIGHTS RESERVED
						</p>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Footer;
