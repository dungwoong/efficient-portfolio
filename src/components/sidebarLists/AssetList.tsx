import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import {
	AssetListDiv,
	AssetListItemDiv,
	AssetButtonsDiv,
	SidebarDarkButton,
	CategoriesButtonsDiv,
	CategoryListDiv,
	CategoryDiv,
} from "./listStyles";
import { addCategoryToAsset, deleteAsset, removeCategoryFromAsset } from "../../reducers/assetSlice";

type stockProps = {
  name: string;
  interestRate: string | undefined;
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
						interestRate={asset.interestRate}
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
	const dispatch = useAppDispatch();

	return (
		<AssetListItemDiv>
			<div
				onClick={() => {
					setShowDetails(!showDetails);
					setShowCategories(false);
				}}
			>
				<b>{props.name}</b>
				{props.interestRate && <> ({props.interestRate}%)</>}
				{!showDetails && <> ...</>}
			</div>
			{showDetails && (
				<>
					<hr></hr>
					{props.interestRate && <>Rate: {props.interestRate}%(Annual)</>}
					<AssetButtonsDiv>
						<SidebarDarkButton onClick={() => dispatch(deleteAsset(props.name))}>
              DELETE
						</SidebarDarkButton>
						<SidebarDarkButton onClick={() => setShowCategories(!showCategories)}>
              Add Category
						</SidebarDarkButton>
					</AssetButtonsDiv>
					{showCategories && (
						<CategoriesButtonsDiv>
							{categories.map((c) => {
								return (
									<SidebarDarkButton
										onClick={() => {
											dispatch(addCategoryToAsset({name: props.name, category: c}));
											setShowCategories(false);
										}}
										key={c}
									>
										{c}
									</SidebarDarkButton>
								);
							})}
						</CategoriesButtonsDiv>
					)}
					<CategoryListDiv>
						{props.categories.map((c) => {
							return <CategoryDiv key={c} onClick={() => dispatch(removeCategoryFromAsset({name: props.name, category: c}))}>{c}</CategoryDiv>;
						})}
					</CategoryListDiv>
				</>
			)}
		</AssetListItemDiv>
	);
}
