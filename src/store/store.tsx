import {
    type Action,
    combineReducers,
    configureStore,
    type ThunkAction,
} from "@reduxjs/toolkit";
import adminSlice from "./slices/admin.slice";



const rootReducer = combineReducers({
	admin:adminSlice.reducer
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
