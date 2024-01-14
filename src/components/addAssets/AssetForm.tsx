import React, { useState } from "react";
import {
	AssetFormDiv,
	AssetFormFailDialog,
	AssetFormInputBox,
	AssetFormSubmitButton,
	AssetFormSuccessDialog,
} from "./AssetFormStyles";
import { DIALOG_SHOW_TIME_MS } from "../../constants/assetFormConstants";

export function StockForm() {
	const [successDialogText, setSuccessDialogText] = useState("");
	const [failDialogText, setFailDialogText] = useState("");

	const getStockFormData = () => {
		const assetSymbol = (document.getElementById("asset-symbol") as HTMLInputElement).value;
		if (assetSymbol) {
			setSuccessDialogText(`${assetSymbol} added, although it may not exist on YFinance`);
			// need to actually add the stock here
			// need to account for if assetSymbol is null or empty string

			setTimeout(() => {
				setSuccessDialogText("");
			}, DIALOG_SHOW_TIME_MS);
		} else {
			setFailDialogText("Could not add, check that symbol exists on Yahoo Finance.");

			setTimeout(() => {
				setFailDialogText("");
			}, DIALOG_SHOW_TIME_MS);
		}
	};

	return (
		<AssetFormDiv>
			<AssetFormInputBox autoComplete="off"
				type="text"
				placeholder="Asset Symbol"
				id="asset-symbol"
			></AssetFormInputBox>
			<AssetFormSubmitButton onClick={getStockFormData}>Submit</AssetFormSubmitButton>
			{successDialogText !== "" && <AssetFormSuccessDialog>{successDialogText}</AssetFormSuccessDialog>}
			{failDialogText !== "" && <AssetFormFailDialog>{failDialogText}</AssetFormFailDialog>}
		</AssetFormDiv>
	);
}
