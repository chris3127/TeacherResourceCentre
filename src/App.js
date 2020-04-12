import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

import Navbar from "./components/Navbar.component.js"
import DocumentList from "./components/List-Documents.component.js"
import EditDocument from "./components/Edit-Document.component.js"
import CreateDocument from "./components/Create-Document.component.js"
import CreateUser from "./components/Create-User.component.js"

function App() {
	return (
		<Router>
			<div className="container">
				<Navbar />
				<br />
				<Route path="/" exact component={DocumentList} />
				<Route path="/create" component={CreateDocument} />
				<Route path="/edit/:id" component={EditDocument} />
				<Route path="/user" component={CreateUser} />
			</div>
		</Router>

	);
}

export default App;
