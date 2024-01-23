import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type assetInfo = {
	name: string;
	type: string;
	info?: cashInfo;
	categories: string[];
}

export type userAssetInfo = {
	assets: assetInfo[];
	categories: string[];
}

type cashInfo = {
	symbol: string;
	interestRate: string;
}

const initialState: userAssetInfo = {
	assets: [{
		name: "VSP.TO",
		type: "stock",
		categories: [],
	},],
	categories: [],
};

export const assetSlice = createSlice({
	name: "assetList",
	initialState: initialState,
	reducers: {
		addAsset: (state, action: PayloadAction<assetInfo>) => {
			state.assets.push(action.payload);
		}
	},
});

export const { addAsset } = assetSlice.actions;

export default assetSlice.reducer;