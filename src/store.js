// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import componentsReducer from './componentsSlice';

const store = configureStore({
  reducer: {
    components: componentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['components/toggleComponent', 'components/removeComponent'],
        // Ignore these field paths in all actions
        ignoredActionsPaths: ['payload.component'],
        // Ignore these paths in the state
        ignoredPaths: ['components.selectedComponents'],
      },
    }),
});

export default store;
