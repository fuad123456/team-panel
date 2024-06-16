import {
    type Action,
    combineReducers,
    configureStore,
    type ThunkAction,
} from "@reduxjs/toolkit";
import adminSlice from "./slices/admin.slice";
import popoversSlice from "./slices/popovers.slice.ts";
import burgerSlice from "./slices/burger.slice.ts";



const rootReducer = combineReducers({
	admin:adminSlice.reducer,
    popups:popoversSlice.reducer,
    burger:burgerSlice.reducer
});

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
