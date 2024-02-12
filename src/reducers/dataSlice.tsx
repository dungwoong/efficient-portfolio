import { createSlice } from "@reduxjs/toolkit";

export type stockDataType = {
	expectedValues?: {name: string, value: number}[];
	covarianceMatrix?: {name: string, covariances: {name: string, value: number}[]}[];
	portfolioExp?: number;
	portfolioVar?: number;
}

const initialState: stockDataType = {
	expectedValues: undefined,
	covarianceMatrix: undefined,
	portfolioExp: undefined,
	portfolioVar: undefined,
};

export const dataSlice = createSlice({
	name: "data",
	initialState: initialState,
	reducers: {

	},
});