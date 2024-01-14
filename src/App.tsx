import React from "react";
import "./App.css";
import { StockForm } from "./components/addAssets/AssetForm";

function App() {
	return (
		<div className="App">
			<div className="SideBar">
				<StockForm></StockForm>
			</div>
			<div className="Visualizations"></div>
		</div>
	);
}

export default App;
