import {ActionUserType} from './userType';
import {UserFakeDate} from '../interface/userInterface';

const initialState = {
    users: [] as UserFakeDate[],
    locale: 'en',
    countUsers: 10,
    seed: 0
}

type InitialStateType = typeof initialState

export const userReducer = (state = initialState, action: ActionUserType): InitialStateType => {
    switch (action.type) {
        case 'USER/CHANGE-LOCALE': {
            return {...state, locale: action.locale}
        }
        case 'USER/SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        case 'USER/REMOVE-USES': {
            return {...state, users: []}
        }
        case 'USER/CHANGE-SEED': {
            return {...state, seed: action.seed}
        }
        default:
            return state
    }
}

