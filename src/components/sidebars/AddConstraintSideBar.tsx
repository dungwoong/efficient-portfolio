import React, { useState } from "react";
import { SideBarDiv } from "../sidebarStyles";
import {
	AddConstraintSelect,
	AddConstraintFormDiv,
} from "./AddConstraintSideBarStyles";
import {
	EXP_L2_LOSS,
	EXP_LOSS,
	VAR_LOSS,
} from "../../constants/configConstants";
import { ConstraintList } from "../sidebarLists/ConstraintList";
import { AddConstraintForm } from "../sidebarForms/AddConstraintForm";

export function AddConstraintSideBar() {
	const [currentForm, setCurrentForm] = useState(EXP_L2_LOSS);

	return (
		<SideBarDiv className="sidebar-constraint">
			<AddConstraintFormDiv>
				<AddConstraintSelect
					onChange={(event) => {
						setCurrentForm(event.target.value);
					}}
				>
					<option value={EXP_L2_LOSS}>target expected gain</option>
					<option value={EXP_LOSS}>expected value</option>
					<option value={VAR_LOSS}>variance</option>
				</AddConstraintSelect>
				<AddConstraintForm formType={currentForm}></AddConstraintForm>
			</AddConstraintFormDiv>
			<ConstraintList></ConstraintList>
		</SideBarDiv>
	);
}

