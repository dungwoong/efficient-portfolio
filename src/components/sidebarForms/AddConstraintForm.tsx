import React from "react";
import { SideBarHeader } from "../sidebarStyles";
import { AddConstraintInputBox } from "../sidebars/AddConstraintSideBarStyles";
import {
	EXP_L2_LOSS,
	EXP_LOSS,
	VAR_LOSS
} from "../../constants/configConstants";
import { useAppDispatch } from "../../reducers/hooks";
import { addConstraint } from "../../reducers/assetSlice";
import { SidebarDarkButton } from "../sidebarLists/listStyles";

export function AddConstraintForm(props: { formType: string; }) {
	if (props.formType === EXP_L2_LOSS) {
		return <AddExpL2Form></AddExpL2Form>;
	} else if (props.formType === EXP_LOSS) {
		return <AddExpLossForm></AddExpLossForm>;
	} else if (props.formType === VAR_LOSS) {
		return <AddVarLossForm></AddVarLossForm>;
	} else {
		return <></>;
	}
}
function AddExpL2Form() {
	const dispatch = useAppDispatch();

	function addExpL2() {
		const gain = (document.getElementById("gd-mult") as HTMLInputElement);
		const targetExp = (document.getElementById("target-exp") as HTMLInputElement);

		if (!isNaN(parseFloat(gain.value)) && !isNaN(parseFloat(targetExp.value))) {
			dispatch(addConstraint({
				name: EXP_L2_LOSS,
				gain: parseFloat(gain.value),
				additionalInfo: targetExp.value,
			}));
		}

		gain.value = "";
		targetExp.value = "";
	}

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
			<SidebarDarkButton onClick={addExpL2}>SUBMIT</SidebarDarkButton>
		</>
	);
}
function AddExpLossForm() {
	const dispatch = useAppDispatch();

	function addExpLoss() {
		const gain = (document.getElementById("gd-mult") as HTMLInputElement);

		if (!isNaN(parseFloat(gain.value))) {
			dispatch(addConstraint({
				name: EXP_LOSS,
				gain: parseFloat(gain.value),
			}));
		}
		gain.value = "";
	}

	return (
		<>
			<SideBarHeader>Higher Expected Value</SideBarHeader>
			<AddConstraintInputBox
				autoComplete="off"
				type="text"
				placeholder="GD Multiplier"
				id="gd-mult"
			></AddConstraintInputBox>
			<SidebarDarkButton onClick={addExpLoss}>SUBMIT</SidebarDarkButton>
		</>
	);
}
function AddVarLossForm() {
	const dispatch = useAppDispatch();

	function addVarLoss() {
		const gain = (document.getElementById("gd-mult") as HTMLInputElement);

		if (!isNaN(parseFloat(gain.value))) {
			dispatch(addConstraint({
				name: VAR_LOSS,
				gain: parseFloat(gain.value),
			}));
		}
		gain.value = "";
	}

	return (
		<>
			<SideBarHeader>Lower Variance</SideBarHeader>
			<AddConstraintInputBox
				autoComplete="off"
				type="text"
				placeholder="GD Multiplier"
				id="gd-mult"
			></AddConstraintInputBox>
			<SidebarDarkButton onClick={addVarLoss}>SUBMIT</SidebarDarkButton>
		</>
	);
}
