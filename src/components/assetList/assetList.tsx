import React from "react";
import styled from "styled-components";
import { SIDEBAR_DARK_GRAY } from "../../constants/colors";
import { useAppSelector } from "../../redux_state/hooks";

const AssetListDiv = styled.div`
    background-color: ${SIDEBAR_DARK_GRAY};
    font-size: 18px;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 20px 5px 10px 5px;
`;

const AssetListItemDiv = styled.div``;


export function AssetList() {
	const assets = useAppSelector(state => state.assetList.assets);

	return (
		<AssetListDiv>
			{assets.map(asset => {
				return <AssetListItem key={asset.name} name={asset.name} categories={asset.categories}></AssetListItem>;
			})}
		</AssetListDiv>
	);
}

type stockProps = {
	name: string;
	categories: string[];
}

function AssetListItem(props: stockProps) {

	return (
		<AssetListItemDiv>
			<p>{props.name}</p>
		</AssetListItemDiv>
	);
}
