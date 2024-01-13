import React from "react";
import { StyledDiv } from "../AssetFormStyles";

type AssetFormProps = {
    prop1: string,
}

export function AssetForm({ prop1 }: AssetFormProps) {
	return (
		<StyledDiv>
			<p>
				{prop1}
			</p>
		</StyledDiv>
	);
}