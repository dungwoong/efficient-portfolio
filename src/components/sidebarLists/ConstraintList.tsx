import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import {
	AssetListDiv,
	AssetListItemDiv,
	AssetButton,
} from "./listStyles";
import {
	constraintType,
	removeConstraint,
} from "../../reducers/assetSlice";

type constraintSidebarType = constraintType & { index: number };

export function ConstraintList() {
	const constraints = useAppSelector((state) => state.assetList.constraints);
	return (
		<AssetListDiv>
			{constraints.map((constraint, idx) => {
				return (
					<ConstraintListItem
						key={idx}
						name={constraint.name}
						gain={constraint.gain}
						additionalInfo={constraint.additionalInfo}
						index={idx}
					></ConstraintListItem>
				);
			})}
		</AssetListDiv>
	);
}

function ConstraintListItem(props: constraintSidebarType) {
	const [showDetails, setShowDetails] = useState(false);

	const dispatch = useAppDispatch();
	return (
		<AssetListItemDiv>
			<div onClick={() => setShowDetails(!showDetails)}>
				<b>{props.name}</b> (x{props.gain})
			</div>

			{showDetails && (
				<>
					<hr></hr>
					{props.additionalInfo && <p>{props.additionalInfo}</p>}
					<AssetButton onClick={() => dispatch(removeConstraint(props.index))}>
            DELETE
					</AssetButton>
				</>
			)}
		</AssetListItemDiv>
	);
}
