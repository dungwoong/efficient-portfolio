import React, { useState } from "react";
import { useAppSelector } from "../../reducers/hooks";
import {
	AssetListDiv,
	AssetListItemDiv,
	AssetButtonsDiv,
	AssetButton,
	CategoriesButtonsDiv,
	CategoryListDiv,
	CategoryDiv,
} from "./AssetListStyles";

type stockProps = {
	name: string;
	categories: string[];
  };

export function AssetList() {
	const assets = useAppSelector((state) => state.assetList.assets);

	return (
		<AssetListDiv>
			{assets.map((asset) => {
				return (
					<AssetListItem
						key={asset.name}
						name={asset.name}
						categories={asset.categories}
					></AssetListItem>
				);
			})}
		</AssetListDiv>
	);
}

function AssetListItem(props: stockProps) {
	const [showCategories, setShowCategories] = useState(false);
	const [showDetails, setShowDetails] = useState(false);

	const categories = useAppSelector((state) => state.assetList.categories);
	return (
		<AssetListItemDiv>
			<div
				onClick={() => {
					setShowDetails(!showDetails);
					setShowCategories(false);
				}}
			>
				<b>{props.name}</b>
				{!showDetails && <> (click to open)</>}
			</div>
			{showDetails && (
				<>
					<hr></hr>
					<AssetButtonsDiv>
						<AssetButton>DELETE</AssetButton>
						<AssetButton onClick={() => setShowCategories(!showCategories)}>
              Add Category
						</AssetButton>
					</AssetButtonsDiv>
					{showCategories && (
						<CategoriesButtonsDiv>
							{categories.map((c) => {
								return (
									<AssetButton onClick={() => setShowCategories(false)} key={c}>
										{c}
									</AssetButton>
								);
							})}
						</CategoriesButtonsDiv>
					)}
					<CategoryListDiv>
						{props.categories.map((c) => {
							return <CategoryDiv key={c}>{c}</CategoryDiv>;
						})}
					</CategoryListDiv>
				</>
			)}
		</AssetListItemDiv>
	);
}
