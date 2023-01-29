import {AxiosError} from 'axios';
import {AppThunk} from '../type/StoreTypes';
import {createUsersDate} from '../utils/createUserDate';
import {setUsers} from './userAction';

export const fetchFakeUsers = (): AppThunk => (dispatch, getState) => {
    const {locale, countUsers, users, seed} = getState().user
    const count = !users.length ? 20 : countUsers
    const seedWithLastCountUsers = seed + users.length
    try {
        const result = createUsersDate(locale, count, seedWithLastCountUsers)
        dispatch(setUsers(result))
    } catch (error) {
        const err = error as AxiosError
        console.error(err.message)
    }
}
