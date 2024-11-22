// src/componentsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import data from './data.json';
const initialState = {
  selectedComponents: [],
  selectedProjects: [],
  selectedTechs: [],
};

const componentsSlice = createSlice({
	name: 'components',
	initialState,
	reducers: {
		toggleComponent: (state, action) => {
			const { payload } = action;
			if (payload.type === 'projects') {
				const filteredProjects = data.projects.filter(
					(project) =>
						project.techs.includes(payload.text) &&
						!state.selectedProjects.some((item) => item.name === project.name)
				);
				state.selectedProjects.push(...filteredProjects);
				console.log(state.selectedProjects.length);
				state.selectedTechs.push(payload.text);
			}
			else {
				const exists = state.selectedComponents.some(
					(item) => item.text === payload.text
				);
				if (!exists)
					state.selectedComponents.push(payload);
			}
		},
		removeComponent: (state, action) => {
			const { text } = action.payload;
			state.selectedTechs = state.selectedTechs.filter(
				(tech) => tech !== text
			);
			state.selectedProjects = state.selectedProjects.filter(
				(item) => !item.techs.includes(text) || item.techs.filter(
					(tech) => item.techs.includes(tech) && state.selectedTechs.includes(tech)
				).length > 0
			);
			state.selectedComponents = state.selectedComponents.filter(
				(item) => item.text !== text
			);
		},
	},
});

export const { toggleComponent, removeComponent } = componentsSlice.actions;
export default componentsSlice.reducer;
