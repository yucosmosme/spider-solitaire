import {useDispatch, useSelector} from "react-redux";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {createLogger} from "redux-logger";
import * as slices from "store/slices";

const logger = createLogger();

const rootReducer = combineReducers({
  level: slices.levelSlice.reducer,
  image: slices.imageSlice.reducer,
});

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export default store;
