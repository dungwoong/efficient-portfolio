import { configureStore } from "@reduxjs/toolkit";
import assetReducer from "./assetSlice";

export const store = configureStore({
	reducer: {
		assetList: assetReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
