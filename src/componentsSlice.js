// src/componentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedComponents: [],
};

const componentsSlice = createSlice({
	name: 'components',
	initialState,
	reducers: {
		toggleComponent: (state, action) => {
			const { payload } = action;
			const exists = state.selectedComponents.some(
				(item) => item.text === payload.text
			);
			if (!exists)
				state.selectedComponents.push(payload);
		},
		removeComponent: (state, action) => {
			const { text } = action.payload;
			state.selectedComponents = state.selectedComponents.filter(
				(item) => item.text !== text
			);
		},
	},
});

export const { toggleComponent, removeComponent } = componentsSlice.actions;
export default componentsSlice.reducer;
