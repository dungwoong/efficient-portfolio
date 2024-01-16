import React, { useState } from "react";
import {
	AssetFormDiv,
	AssetFormFailDialog,
	AssetFormInputBox,
	AssetFormSubmitButton,
	AssetFormSuccessDialog,
	AssetPickerRadioButton,
} from "./AssetFormStyles";
import { DIALOG_SHOW_TIME_MS } from "../../constants/assetFormConstants";
import { SideBarHeader } from "../Sidebar";

export function AssetForm() {
	const [currentForm, setCurrentForm] = useState("stock");

	return (
		<AssetFormDiv>
			<AssetFormDiv className="horizontal">
				<AssetPickerRadioButton
					className={"left" + (currentForm === "stock" ? " selected" : "")}
					onClick={() => setCurrentForm("stock")}
				>
          Stock
				</AssetPickerRadioButton>
				<AssetPickerRadioButton
					className={currentForm === "cash" ? "selected" : ""}
					onClick={() => setCurrentForm("cash")}
				>
          Cash
				</AssetPickerRadioButton>
				<AssetPickerRadioButton
					className={"right" + (currentForm === "category" ? " selected" : "")}
					onClick={() => setCurrentForm("category")}
				>
          Category
				</AssetPickerRadioButton>
			</AssetFormDiv>
			{currentForm === "stock" && <StockForm></StockForm>}
			{currentForm === "cash" && <CashAssetForm></CashAssetForm>}
			{currentForm === "category" && <CategoryForm></CategoryForm>}
		</AssetFormDiv>
	);
}

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
        SUBMIT STOCK ASSET
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
		// TODO check that the symbol doesn't exist already in the redux state. We need to refactor the success/failure messages
		if (assetSymbol && assetRate) {
			setFailDialog(<></>);

			if (isNaN(parseFloat(assetRate)) || parseFloat(assetRate) > 100) {
				setFailDialog(
					<AssetFormFailDialog>
            Please input a valid number as a rate.
					</AssetFormFailDialog>
				);
			} else {
				setSuccessDialog(
					<AssetFormSuccessDialog>
						<strong>{assetSymbol}</strong> added with {assetRate}% annual interest rate
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
			<SideBarHeader>Asset Symbol</SideBarHeader>
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
        SUBMIT CASH ASSET
			</AssetFormSubmitButton>
			{successDialog}
			{failDialog}
		</AssetFormDiv>
	);
}

export function CategoryForm() {
	const [successDialog, setSuccessDialog] = useState(<></>);
	const [failDialog, setFailDialog] = useState(<></>);

	const getCategoryData = () => {
		const categorySymbol = (
      document.getElementById("asset-symbol-category") as HTMLInputElement
		).value;
		if (categorySymbol) {
			setFailDialog(<></>);
			setSuccessDialog(
				<AssetFormSuccessDialog>
					<strong>{categorySymbol}</strong> category added
				</AssetFormSuccessDialog>
			);

			setTimeout(() => {
				setSuccessDialog(<></>);
			}, DIALOG_SHOW_TIME_MS);
		} else {
			setSuccessDialog(<></>);
			setFailDialog(
				<AssetFormFailDialog>
          Please fill out the form
				</AssetFormFailDialog>
			);

			setTimeout(() => {
				setFailDialog(<></>);
			}, DIALOG_SHOW_TIME_MS);
		}
	};

	return (
		<AssetFormDiv>
			<SideBarHeader>Category Name</SideBarHeader>
			<AssetFormInputBox
				autoComplete="off"
				type="text"
				placeholder="Category Name"
				id="asset-symbol-category"
			></AssetFormInputBox>
			<AssetFormSubmitButton onClick={getCategoryData}>
        SUBMIT CATEGORY
			</AssetFormSubmitButton>
			{successDialog}
			{failDialog}
		</AssetFormDiv>
	);
}
