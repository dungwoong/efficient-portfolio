import React, { useState } from "react";
import { SideBarDiv, SideBarHeader } from "../Sidebar";
import {
	AddConstraintInputBox,
	AddConstraintSelect,
	AddConstraintFormDiv,
} from "./AddConstraintSideBarStyles";
import {
	EXP_L2_LOSS,
	EXP_LOSS,
	VAR_LOSS,
} from "../../constants/configConstants";
import { ConstraintList } from "../sidebarLists/ConstraintList";

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

function AddConstraintForm(props: { formType: string }) {

	if (props.formType === EXP_L2_LOSS) {
		return (
			<>
				<SideBarHeader>Target Expected Value</SideBarHeader>
				<AddConstraintInputBox
					autoComplete="off"
					type="text"
					placeholder="Target monthly gain"
					id="target-exp"
				></AddConstraintInputBox>
				<AddConstraintInputBox
					autoComplete="off"
					type="text"
					placeholder="GD Multiplier"
					id="gd-mult"
				></AddConstraintInputBox>
			</>
		);
	} else if (props.formType === EXP_LOSS) {
		return (
			<>
				<SideBarHeader>Higher Expected Value</SideBarHeader>
				<AddConstraintInputBox
					autoComplete="off"
					type="text"
					placeholder="GD Multiplier"
					id="gd-mult"
				></AddConstraintInputBox>
			</>
		);
	} else if (props.formType === VAR_LOSS) {
		return (
			<>
				<SideBarHeader>Lower Variance</SideBarHeader>
				<AddConstraintInputBox
					autoComplete="off"
					type="text"
					placeholder="GD Multiplier"
					id="gd-mult"
				></AddConstraintInputBox>
			</>
		);
	} else {
		return <></>;
	}
}
