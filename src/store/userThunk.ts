import {AxiosError} from 'axios';
import {AppThunk} from '../type/StoreTypes';
import {createUsersDate} from '../utils/createUserDate';
import {setUsers} from './userAction';

export const fetchFakeUsers = (): AppThunk => (dispatch, getState) => {
    const {locale, countUsers, users, seed, countMistake} = getState().user
    const count = !users.length ? 20 : countUsers
    const seedWithLastCountUsers = seed + users.length
    try {
        const result: string[][] = createUsersDate(locale, count, seedWithLastCountUsers, countMistake)
        dispatch(setUsers(result))
    } catch (error) {
        const err = error as AxiosError
        console.error(err.message)
    }
}
