import React, { useState } from "react";
import styled from "styled-components";
import {
	SIDEBAR_DARK_GRAY,
	SIDEBAR_TEXT_COLOR,
	VISUALIZATION_GRAY,
	VISUALIZATION_LIGHTER_GRAY,
} from "../../constants/colors";
import { useAppSelector } from "../../redux_state/hooks";
import { useSelector } from "react-redux";

const AssetListDiv = styled.div`
  background-color: ${SIDEBAR_DARK_GRAY};
  font-size: 18px;
  color: ${SIDEBAR_TEXT_COLOR};
  display: flex;
  flex-direction: column;
  padding: 20px 5px 10px 5px;
  margin: 10px;
`;

const CategoryListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0;
`;

const AssetButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoriesButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const AssetButton = styled.div`
  background-color: ${SIDEBAR_DARK_GRAY};
  border: 1px solid ${SIDEBAR_TEXT_COLOR};
  color: ${SIDEBAR_TEXT_COLOR};
  font-family: inherit;
  padding: 5px 5px;
  margin: 2px 5px;
  border-radius: 5px;

  &:hover {
    background-color: ${VISUALIZATION_GRAY};
  }

  &:active {
    background-color: ${VISUALIZATION_LIGHTER_GRAY};
  }
`;

const CategoryDiv = styled.div`
  background-color: ${VISUALIZATION_LIGHTER_GRAY};
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px;
`;

const AssetListItemDiv = styled.div``;

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

type stockProps = {
  name: string;
  categories: string[];
};

function AssetListItem(props: stockProps) {
	const [showCategories, setShowCategories] = useState(false);

	const categories = useAppSelector((state) => state.assetList.categories);
	return (
		<AssetListItemDiv>
			<b>{props.name}</b>
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
		</AssetListItemDiv>
	);
}
