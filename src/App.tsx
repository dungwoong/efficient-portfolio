import React from "react";
import "./App.css";
import { AddAssetSideBar, AddConstraintSideBar } from "./components/Sidebar";

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
