import React from "react";
import Banner from "../Banner/Banner";

import Mainsection from "../Mainsection/Mainsection";
import Menu from "../Menu/Menu";

const Home = () => {
	return (
		<div>
			<Menu></Menu>
			<Banner></Banner>

			<Mainsection></Mainsection>
		</div>
	);
};

export default Home;
