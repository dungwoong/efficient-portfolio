import React from "react";
import "../App.css";
import styled from "styled-components";
import { SIDEBAR_DARK_GRAY, SIDEBAR_TEXT_COLOR } from "../constants/colors";
import { StockForm } from "./addAssets/AssetForm";

const SideBarDiv = styled.div`
    background-color: ${SIDEBAR_DARK_GRAY};
`;

export const SideBarHeader = styled.div`
	user-select: none;
	padding: 0 5px 10px 15px;
	font-size: 14px;
	font-weight: bold;
	color: ${SIDEBAR_TEXT_COLOR};
`;

export default function SideBar() {
	return (
		<SideBarDiv className="sidebar">
			<StockForm></StockForm>	
		</SideBarDiv>
	);
}
