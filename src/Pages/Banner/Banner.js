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
						<div className="small-text text-secondary">web developer</div>

						<div className="large-text text-warning">Nosrat Jahan Nosha</div>
						<div className="w-50">
							I'm Nosha, a front-end web developer. I'm an expert in JavaScript,
							React.js, Html5,Css3, Bootstrap and MongoDB. Now I'm ready to work
							as a junior front-end web developer. In the future, I want to be a
							full-stack web developer.
						</div>
						<a
							href="https://drive.google.com/file/d/1MM79hq9bNAGACwqMSLwFXLXf2PHt6Zyh/view?usp=sharing"
							className="btn btn-outline-warning rounded-pill btn-resume mt-3 "
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
