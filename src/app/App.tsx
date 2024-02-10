import React from "react";
import "../App.css";
import { AddAssetSideBar } from "../components/Sidebar";
import { AddConstraintSideBar } from "../components/addConstraints/AddConstraintSideBar";

function App() {
	return (
		<div className="App">
			<AddAssetSideBar></AddAssetSideBar>
			<div className="Visualizations"></div>
			<AddConstraintSideBar></AddConstraintSideBar>
		</div>
	);
}

export default App;
