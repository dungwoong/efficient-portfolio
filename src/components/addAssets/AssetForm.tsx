import React, { useState } from "react";
import {
	AssetFormDiv,
	AssetFormFailDialog,
	AssetFormInputBox,
	AssetFormSubmitButton,
	AssetFormSuccessDialog,
} from "./AssetFormStyles";
import { DIALOG_SHOW_TIME_MS } from "../../constants/assetFormConstants";
import { SideBarHeader } from "../Sidebar";

export function StockForm() {
	const [successDialog, setSuccessDialog] = useState(<></>);
	const [failDialog, setFailDialog] = useState(<></>);

	const getStockFormData = () => {
		const assetSymbol = (
      document.getElementById("asset-symbol") as HTMLInputElement
		).value;
		// TODO actually add the stock to the redux state
		// TODO maybe send a request to https://ca.finance.yahoo.com/quote/TICKER to check if stock exists? But this may not be necessary.
		if (assetSymbol) {
			setFailDialog(<></>);
			setSuccessDialog(
				<AssetFormSuccessDialog>
					<strong>{assetSymbol}</strong> added, although it may not exist on
          YFinance
				</AssetFormSuccessDialog>
			);

			setTimeout(() => {
				setSuccessDialog(<></>);
			}, DIALOG_SHOW_TIME_MS);
		} else {
			setSuccessDialog(<></>);
			setFailDialog(
				<AssetFormFailDialog>
          Could not add asset. Make sure it is available on Yahoo Finance.
				</AssetFormFailDialog>
			);

			setTimeout(() => {
				setFailDialog(<></>);
			}, DIALOG_SHOW_TIME_MS);
		}
	};

	return (
		<AssetFormDiv>
			<SideBarHeader>Ticker(Yahoo Finance)</SideBarHeader>
			<AssetFormInputBox
				autoComplete="off"
				type="text"
				placeholder="Asset Symbol"
				id="asset-symbol"
			></AssetFormInputBox>
			<AssetFormSubmitButton onClick={getStockFormData}>
        SUBMIT
			</AssetFormSubmitButton>
			{successDialog}
			{failDialog}
		</AssetFormDiv>
	);
}

export function CashAssetForm() {
	const [successDialog, setSuccessDialog] = useState(<></>);
	const [failDialog, setFailDialog] = useState(<></>);

	const getCashAssetFormData = () => {
		const assetSymbol = (
      document.getElementById("asset-symbol-cash") as HTMLInputElement
		).value;

		const assetRate = (
			document.getElementById("asset-rate-cash") as HTMLInputElement
		).value;
		// TODO actually add the stock to the redux state
		// TODO maybe send a request to https://ca.finance.yahoo.com/quote/TICKER to check if stock exists? But this may not be necessary.
		if (assetSymbol && assetRate) {
			setFailDialog(<></>);

			if (isNaN(parseFloat(assetRate)) || parseFloat(assetRate) > 100) {
				setFailDialog(<AssetFormFailDialog>Please input a valid number as a rate.</AssetFormFailDialog>);
			} else {
				setSuccessDialog(
					<AssetFormSuccessDialog>
						<strong>{assetSymbol}</strong> added with rate {assetRate}
					</AssetFormSuccessDialog>
				);
			}

			setTimeout(() => {
				setSuccessDialog(<></>);
				setFailDialog(<></>);
			}, DIALOG_SHOW_TIME_MS);
		} else {
			setSuccessDialog(<></>);
			setFailDialog(
				<AssetFormFailDialog>
          Could not add asset. Make sure to fill out all fields.
				</AssetFormFailDialog>
			);

			setTimeout(() => {
				setFailDialog(<></>);
			}, DIALOG_SHOW_TIME_MS);
		}
	};

	return (
		<AssetFormDiv>
			<SideBarHeader>Ticker(Yahoo Finance)</SideBarHeader>
			<AssetFormInputBox
				autoComplete="off"
				type="text"
				placeholder="Asset Symbol"
				id="asset-symbol-cash"
			></AssetFormInputBox>

			<SideBarHeader>Annual Rate(%)</SideBarHeader>
			<AssetFormInputBox
				autoComplete="off"
				type="text"
				placeholder="Annual Rate"
				id="asset-rate-cash"
			></AssetFormInputBox>
			<AssetFormSubmitButton onClick={getCashAssetFormData}>
        SUBMIT
			</AssetFormSubmitButton>
			{successDialog}
			{failDialog}
		</AssetFormDiv>
	);
}
