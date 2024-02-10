import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import {
	AssetListDiv,
	AssetListItemDiv,
	AssetButtonsDiv,
	AssetButton,
	CategoriesButtonsDiv,
	CategoryListDiv,
	CategoryDiv,
} from "./listStyles";
import {
	addCategoryToAsset,
	constraintType,
	deleteAsset,
	removeCategoryFromAsset,
} from "../../reducers/assetSlice";

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
					></ConstraintListItem>
				);
			})}
		</AssetListDiv>
	);
}

function ConstraintListItem(props: constraintType) {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<AssetListItemDiv>
			<div
				onClick={() => setShowDetails(!showDetails)}
			>
				<b>{props.name}</b> (x{props.gain})
			</div>

			{showDetails && 
			<>
				<hr></hr>
				<AssetButton>DELETE</AssetButton>
			</>}
		</AssetListItemDiv>
	);
}
