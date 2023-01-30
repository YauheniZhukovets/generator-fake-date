import {ActionUserType} from './userType';

const initialState = {
    users: [] as string[][],
    locale: 'en',
    countUsers: 10,
    seed: 0,
    countMistake: 0,
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
        case 'USER/REMOVE-USERS-LIST': {
            return {...state, users: []}
        }
        case 'USER/CHANGE-SEED': {
            return {...state, seed: action.seed}
        }
        case 'USER/CHANGE-COUNT-MISTAKE': {
            return {...state, countMistake: action.countMistake}
        }
        default:
            return state
    }
}

