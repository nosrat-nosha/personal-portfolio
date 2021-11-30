import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Resume from "./Pages/Resume/Resume";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/resume">
						<Resume></Resume>
					</Route>
				</Switch>

				{/* <Route exact path="/"></Route> */}
			</Router>
		</div>
	);
}

export default App;
