import { createSlice } from "@reduxjs/toolkit";

export type assetInfo = {
	name: string;
	type: string;
	info: stockInfo | cashInfo;
	categories: string[];
}

export type userAssetInfo = {
	assets: assetInfo[];
	categories: string[];
}

type stockInfo = {
	ticker: string;
}

type cashInfo = {
	symbol: string;
	interestRate: string;
}

const initialState: userAssetInfo = {
	assets: [],
	categories: [],
};

export const assetSlice = createSlice({
	name: "assets",
	initialState: initialState,
	reducers: {},
});

export default assetSlice.reducer;