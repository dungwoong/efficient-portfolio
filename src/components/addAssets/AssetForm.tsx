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
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { addAsset } from "../../reducers/assetSlice";
import { isAssetValid } from "./isAssetValid";

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
	const existingAssets = useAppSelector((state) => state.assetList.assets);
	const existingAssetNames = existingAssets.map((x) => x.name);
	const dispatch = useAppDispatch();

	const getStockFormData = () => {
		const assetSymbol = document.getElementById(
			"asset-symbol"
		) as HTMLInputElement;
		// TODO actually add the stock to the redux state
		// TODO maybe send a request to https://ca.finance.yahoo.com/quote/TICKER to check if stock exists? But this may not be necessary.

		if (isAssetValid(assetSymbol.value, existingAssetNames)) {
			dispatch(
				addAsset({
					name: assetSymbol.value,
					type: "stock",
					categories: [],
				})
			);

			setFailDialog(<></>);
			setSuccessDialog(
				<AssetFormSuccessDialog>
					<strong>{assetSymbol.value}</strong> added, although it may not exist
          on YFinance
				</AssetFormSuccessDialog>
			);
			assetSymbol.value = "";

			setTimeout(() => {
				setSuccessDialog(<></>);
			}, DIALOG_SHOW_TIME_MS);
		} else {
			setSuccessDialog(<></>);
			setFailDialog(
				<AssetFormFailDialog>
          Could not add asset. Make sure it is available on Yahoo Finance and is
          not a duplicate
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
	const existingAssets = useAppSelector((state) => state.assetList.assets);
	const existingAssetNames = existingAssets.map((x) => x.name);
	const dispatch = useAppDispatch();

	const getCashAssetFormData = () => {
		const assetSymbol = (
      document.getElementById("asset-symbol-cash") as HTMLInputElement);

		const assetRate = (
      document.getElementById("asset-rate-cash") as HTMLInputElement);
		// TODO actually add the stock to the redux state
		// TODO check that the symbol doesn't exist already in the redux state. We need to refactor the success/failure messages
		if (isAssetValid(assetSymbol.value, existingAssetNames) && assetRate.value) {
			setFailDialog(<></>);

			if (isNaN(parseFloat(assetRate.value)) || parseFloat(assetRate.value) > 100 || parseFloat(assetRate.value) < 0) {
				setFailDialog(
					<AssetFormFailDialog>
            Please input a valid number as a rate.
					</AssetFormFailDialog>
				);
			} else {
				dispatch(
					addAsset({
						name: assetSymbol.value,
						type: "cash",
						interestRate: assetRate.value,
						categories: [],
					})
				);
				
				setSuccessDialog(
					<AssetFormSuccessDialog>
						<strong>{assetSymbol.value}</strong> added with {assetRate.value}% annual
            interest rate
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
          Could not add asset. Make sure to fill out all fields and use a unique symbol.
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
				<AssetFormFailDialog>Please fill out the form</AssetFormFailDialog>
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
