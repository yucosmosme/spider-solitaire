import {useDispatch, useSelector} from "react-redux";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {createLogger} from "redux-logger";
import * as slices from "store/slices";

const storeKey = "reduxState";
const logger = createLogger();

const rootReducer = combineReducers({
  level: slices.levelSlice.reducer,
  image: slices.imageSlice.reducer,
});

const initialState = () => {
  try {
    const serializedState = localStorage.getItem(storeKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState(),
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

store.subscribe(() => {
  const state = store.getState();
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(storeKey, serializedState);
  } catch (error) {
    console.log("Failed to save state to local storage: ", error);
  }
});

export default store;
