import React from "react";
import "./Mainsection.css";
import myImg from "../../image/my-bg2.png";
import project1 from "../../image/project1.JPG";
import project2 from "../../image/project2.JPG";
import project3 from "../../image/project3.JPG";
import { Link } from "react-router-dom";
import { Nav, ProgressBar } from "react-bootstrap";

const Mainsection = () => {
	const url1 = "https://react-assignment-11.web.app/";
	return (
		<div>
			{/* About me section  */}
			<div className="row container">
				<div className="col-lg-8">
					<img className="my-img" src={myImg} alt="" />
				</div>
				<div className="col-lg-4 about-text">
					<div className="about-title">About Me</div>
					<p className="about-p">
						I'm Nosha, a front-end web developer. I'm an expert in JavaScript,
						React.js, Html5,Css3, Bootstrap and MongoDB. Now I'm ready to work
						as a junior front-end web developer. In the future, I want to be a
						full-stack web developer.
					</p>
				</div>
			</div>

			{/* My Projects  */}
			<div className="">
				<div className="row mx-auto">
					<div className="col-lg-3 p-5 mx-auto projects-title">My Projects</div>
				</div>
				<div className="row container mx-auto">
					{/* project 1 */}
					<div className="col-lg-4">
						<div class="card">
							<img src={project1} class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Dreamy Travels</h5>
								<p class="card-text">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Perspiciatis, temporibus!
								</p>

								<Link to={url1} target="_blank">
									Live site Link
								</Link>
							</div>
						</div>
					</div>
					{/* project 2 */}
					<div className="col-lg-4">
						<div class="card">
							<img src={project2} class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Kids University</h5>
								<p class="card-text">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Perspiciatis, temporibus!
								</p>

								<Link to={url1} target="_blank">
									Live site Link
								</Link>
							</div>
						</div>
					</div>
					{/* project 3 */}
					<div className="col-lg-4">
						<div class="card">
							<img src={project3} class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Dreamy Travels</h5>
								<p class="card-text">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Perspiciatis, temporibus!
								</p>

								<Link to={url1} target="_blank">
									Live site Link
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* My Sills  */}
			<div className="">
				<div className="row mx-auto">
					<div className="col-lg-3 p-5 mx-auto projects-title">My Skills</div>
				</div>
				<div className="row container">
					<div className="col-lg-6"></div>
					<div className="col-lg-6">
						<div>
							<span>HTML5 </span> <span> 90%</span>
							<ProgressBar className="bar1" animated now={90} />
						</div>
						<div>
							<span>CSS3 </span> <span> 90%</span>
							<ProgressBar className="bar1" animated now={90} />
						</div>
						<div>
							<span>JAVASCRIPT </span> <span> 90%</span>
							<ProgressBar className="bar1" animated now={90} />
						</div>
						<div>
							<span>REACT JS</span> <span> 80%</span>
							<ProgressBar className="bar1" animated now={90} />
						</div>
						<div>
							<span>NODE JS</span> <span> 50%</span>
							<ProgressBar className="bar1" animated now={50} />
						</div>
						<div>
							<span>MONGODB</span> <span> 50%</span>
							<ProgressBar className="bar1" animated now={50} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mainsection;
