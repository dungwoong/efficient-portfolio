import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type assetInfo = {
	name: string;
	type: string;
	interestRate?: string;
	categories: string[];
}

export type userAssetInfo = {
	assets: assetInfo[];
	categories: string[];
}

const initialState: userAssetInfo = {
	assets: [{
		name: "VSP.TO",
		type: "stock",
		categories: ["test1", "test2", "category 3", "category 4"],
	},],
	categories: ["test1", "test2", "category 3", "category 4"],
};

export const assetSlice = createSlice({
	name: "assetList",
	initialState: initialState,
	reducers: {
		addAsset: (state, action: PayloadAction<assetInfo>) => {
			state.assets.push(action.payload);
		},
		deleteAsset: (state, action: PayloadAction<string>) => {
			for (let i=0; i < state.assets.length; i++) {
				if (state.assets[i].name === action.payload) {
					state.assets.splice(i, 1);
				}
			}
		},
		addCategory: (state, action: PayloadAction<string>) => {
			state.categories.push(action.payload);
		},
	},
});

export const { addAsset, deleteAsset, addCategory } = assetSlice.actions;

export default assetSlice.reducer;