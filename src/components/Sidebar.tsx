import React from "react";
import "../App.css";
import styled from "styled-components";
import { SIDEBAR_DARK_GRAY, SIDEBAR_TEXT_COLOR } from "../constants/colors";
import { AssetForm } from "./addAssets/AssetForm";
import { AssetList } from "./assetList/AssetList";

const SideBarDiv = styled.div`
  background-color: ${SIDEBAR_DARK_GRAY};
  overflow-y: scroll;
`;

export const SideBarHeader = styled.div`
  user-select: none;
  padding: 0 5px 10px 15px;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0 10px 0;
  color: ${SIDEBAR_TEXT_COLOR};
`;

export function AddAssetSideBar() {
	return (
		<SideBarDiv className="sidebar-asset">
			<AssetForm></AssetForm>
			<AssetList></AssetList>
		</SideBarDiv>
	);
}

export function AddConstraintSideBar() {
	return <SideBarDiv className="sidebar-constraint"></SideBarDiv>;
}
