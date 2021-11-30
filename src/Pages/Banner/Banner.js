import Button from "@restart/ui/esm/Button";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
	return (
		<div>
			<div className="banner">
				<div className="row  p-5">
					<div className="col-lg-12 col-sm-12  align-self-end banner-content">
						<div className="small-text">web developer</div>
						<div className="large-text">Nosrat Jahan Nosha</div>
						<a
							href="https://drive.google.com/file/d/1MM79hq9bNAGACwqMSLwFXLXf2PHt6Zyh/view?usp=sharing"
							className="btn btn-outline-secondary rounded-pill btn-resume "
							target="_blank"
						>
							RESUME
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
