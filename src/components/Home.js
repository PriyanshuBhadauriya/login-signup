import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
	<h1>Home Page</h1>
	<br />
	<ul>
		<li>
		
		<Link to="/">Home</Link>
		</li>
		<li>

		<Link to="/signup">Signup</Link>
		</li>
		<li>
	
		<Link to="/login">Login</Link>
		</li>
	</ul>
	</div>
);
};

export default Home;
