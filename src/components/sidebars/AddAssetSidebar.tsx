import React from "react";
import "../../App.css";
import { AssetForm } from "../sidebarForms/AddAssetForm";
import { AssetList } from "../sidebarLists/AssetList";
import { SidebarDarkButton } from "../sidebarLists/listStyles";
import { SideBarDiv } from "../sidebarStyles";

export function AddAssetSideBar() {
	return (
		<SideBarDiv className="sidebar-asset">
			<br></br>
			<SidebarDarkButton>RUN GD</SidebarDarkButton>
			<AssetForm></AssetForm>
			<AssetList></AssetList>
		</SideBarDiv>
	);
}


