import React from "react";
import "./Mainsection.css";

import emailjs from "emailjs-com";
import myImg from "../../image/my-bg2.png";
import project1 from "../../image/project1.JPG";
import project5 from "../../image/project5.JPG";
import project4 from "../../image/project4.JPG";

import web from "../../image/web.png";
// import html from "../../image/html.png";
// import css from "../../image/css.png";
// import js from "../../image/js.png";
import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";

const Mainsection = (e) => {
	const url1 = "https://react-assignment-11.web.app/";

	const sendEmail = (e) => {
		e.preventDefault();
		e.target.reset();
		console.log("n");
		emailjs
			.sendForm(
				"gmail",
				"service_fgmrj3m",
				"template_19d6ivy",
				e.target,
				"event_4fa90e2119989b589ea6cae2"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
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
								<h4 class="card-title text-secondary">
									It's a traveling website
								</h4>

								<div className="">
									<h4 class="card-title text-warning">Main Features :</h4>
									<p class="card-text font-monospace">
										• Travelers can add events in their list. <br /> • Travelers
										also can delete any events if they don't like. <br />• There
										is google sign in option.
									</p>
								</div>
								<div className="">
									{" "}
									<h4 class="card-title text-warning">Tools :</h4>
									<h6>
										Visual Studio code, HTML5, CSS3, React.js, Bootstrap,
										Firebase, MongoDB, Heroku
									</h6>
								</div>

								<a
									href="https://react-assignment-11.web.app/"
									className="btn btn-outline-secondary 
									 btn-liveLink "
									target="_blank"
								>
									LIVE LINK
								</a>
								<a
									href="https://github.com/nosrat-nosha/dreamy-travels-server-site"
									className="btn btn-outline-secondary 
									 btn-liveLink ms-1"
									target="_blank"
								>
									SERVER SITE CODE
								</a>
								<a
									href="https://github.com/nosrat-nosha/dreamy-travels-client-site"
									className="btn btn-outline-secondary 
									 btn-liveLink mt-2"
									target="_blank"
								>
									CLIENT SITE CODE
								</a>
							</div>
						</div>
					</div>
					{/* project 2 */}
					<div className="col-lg-4">
						<div class="card">
							<img src={project5} class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Hopewell Hospital</h5>
								<h4 class="card-title text-secondary">
									It's a health care website
								</h4>

								<div className="">
									<h4 class="card-title text-warning">Main Features :</h4>
									<p class="card-text font-monospace">
										• User have to sign up /sign in to see special features{" "}
										<br /> • We have FAQ section where patients can ask any
										questions.
										<br />• We divided our doctors department wise.
									</p>
								</div>
								<div className="">
									{" "}
									<h4 class="card-title text-warning">Tools :</h4>
									<h6>
										Visual Studio code, HTML5, CSS3, React.js, Bootstrap,
										Firebase,Netlify
									</h6>
								</div>

								<a
									href="https://react-assignment-10-f0ce1.web.app/"
									className="btn btn-outline-secondary 
									 btn-liveLink "
									target="_blank"
								>
									LIVE LINK
								</a>
								<a
									href="https://github.com/nosrat-nosha/HealthCare-Website"
									className="btn btn-outline-secondary 
									 btn-liveLink ms-1"
									target="_blank"
								>
									SERVER SITE CODE
								</a>
							</div>
						</div>
					</div>
					{/* project 3 */}
					<div className="col-lg-4">
						<div class="card">
							<img src={project4} class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Dreamy Travels</h5>
								<h4 class="card-title text-secondary">
									It's a hand bag shop website
								</h4>

								<div className="">
									<h4 class="card-title text-warning">Main Features :</h4>
									<p class="card-text font-monospace">
										• Without registration user can't see some features. <br />{" "}
										• We have different admin and user panel. <br />• User can
										place order also see all his/her orders ,also can add
										review.
									</p>
								</div>
								<div className="">
									{" "}
									<h4 class="card-title text-warning">Tools :</h4>
									<h6>
										Visual Studio code, HTML5, CSS3, React.js, Bootstrap,
										Firebase, MongoDB, Heroku
									</h6>
								</div>

								<a
									href="https://react-assignment-12.web.app/"
									className="btn btn-outline-secondary 
									 btn-liveLink "
									target="_blank"
								>
									LIVE LINK
								</a>
								<a
									href="https://github.com/nosrat-nosha/fashionista-server-side"
									className="btn btn-outline-secondary 
									 btn-liveLink ms-1"
									target="_blank"
								>
									SERVER SITE LINK
								</a>
								<a
									href="https://github.com/nosrat-nosha/fashionista-client-site"
									className="btn btn-outline-secondary 
									 btn-liveLink mt-1"
									target="_blank"
								>
									CLIENT SITE LINK
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* My Sills  */}
			<div className="container">
				<div className="row mx-auto">
					<div className="col-lg-3 p-5 mx-auto projects-title">My Skills</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-sm-12">
						<img
							className=" skill-img me-3"
							src={web}
							class="img-thumbnail"
							alt="..."
						/>
					</div>
					<div className="col-lg-6 ">
						<div className="">
							{" "}
							<span>HTML5 </span> <span> 90%</span>
							<ProgressBar className="" animated now={90} />
						</div>
						<div className="mt-4">
							{" "}
							<span>CSS3 </span> <span> 90%</span>
							<ProgressBar className="" animated now={90} />
						</div>
						<div className="mt-4">
							{" "}
							<span>JAVASCRIPT </span> <span> 70%</span>
							<ProgressBar className="" animated now={70} />
						</div>
						<div className="mt-4">
							{" "}
							<span>REACT JS </span> <span> 70%</span>
							<ProgressBar className="" animated now={70} />
						</div>
						<div className="mt-4">
							{" "}
							<span>NODE JS </span> <span> 50%</span>
							<ProgressBar className="" animated now={50} />
						</div>
						<div className="mt-4">
							{" "}
							<span>MONGODB </span> <span> 50%</span>
							<ProgressBar className="" animated now={50} />
						</div>
					</div>
				</div>
			</div>
			{/* My Sills  */}
			<div className="container">
				<div className="row mx-auto">
					<div className="col-lg-3 p-5 mx-auto projects-title">Contact Me</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<form onSubmit={sendEmail}>
							<div className="row pt-5 mx-auto">
								<div className="col-8 form-group mx-auto">
									<input
										type="text"
										className="form-control"
										placeholder="Name"
										name="name"
									/>
								</div>
								<div className="col-8 form-group pt-2 mx-auto">
									<input
										type="email"
										className="form-control"
										placeholder="Email Address"
										name="email"
									/>
								</div>
								<div className="col-8 form-group pt-2 mx-auto">
									<input
										type="text"
										className="form-control"
										placeholder="Subject"
										name="subject"
									/>
								</div>
								<div className="col-8 form-group pt-2 mx-auto">
									<textarea
										className="form-control"
										id=""
										cols="30"
										rows="8"
										placeholder="Your message"
										name="message"
									></textarea>
								</div>
								<div className="col-8 pt-3 mx-auto">
									<input
										type="submit"
										className="btn btn-info"
										value="Send Message"
									></input>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mainsection;
