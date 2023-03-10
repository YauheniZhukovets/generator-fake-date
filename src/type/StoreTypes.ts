import {store} from "../store/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionUserType} from "../store/userType";


export type AppAction = ActionUserType
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppAction>