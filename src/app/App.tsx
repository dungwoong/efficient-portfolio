import React from "react";
import "../App.css";
import { AddAssetSideBar } from "../components/sidebars/AddAssetSidebar";
import { AddConstraintSideBar } from "../components/sidebars/AddConstraintSideBar";

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
