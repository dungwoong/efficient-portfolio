import React from "react";
import "../App.css";
import styled from "styled-components";
import { SIDEBAR_DARK_GRAY } from "../constants/colors";
import { StockForm } from "./addAssets/AssetForm";

const SideBarDiv = styled.div`
    background-color: ${SIDEBAR_DARK_GRAY};
`;

export default function SideBar() {
	return (
		<SideBarDiv className="sidebar">
			<StockForm></StockForm>	
		</SideBarDiv>
	);
}
