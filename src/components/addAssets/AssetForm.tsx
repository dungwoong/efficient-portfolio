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
	const [successDialog, setSuccessDialog] = useState(<></>);
	const [failDialog, setFailDialog] = useState(<></>);

	const getStockFormData = () => {
		const assetSymbol = (document.getElementById("asset-symbol") as HTMLInputElement).value;
		// TODO actually add the stock to the redux state
		// TODO maybe send a request to https://ca.finance.yahoo.com/quote/TICKER to check if stock exists? But this may not be necessary.
		if (assetSymbol) {
			setFailDialog(<></>);
			setSuccessDialog(<AssetFormSuccessDialog><strong>{assetSymbol}</strong> added, although it may not exist on YFinance</AssetFormSuccessDialog>);

			setTimeout(() => {
				setSuccessDialog(<></>);
			}, DIALOG_SHOW_TIME_MS);
		} else {
			setSuccessDialog(<></>);
			setFailDialog(<AssetFormFailDialog>Could not add asset. Make sure it is available on Yahoo Finance.</AssetFormFailDialog>);

			setTimeout(() => {
				setFailDialog(<></>);
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
			{successDialog}
			{failDialog}
		</AssetFormDiv>
	);
}
