import {changeLocale, removeUsers, setUsers} from './userAction';

export type ChangeLocaleType = ReturnType<typeof changeLocale>
export type SetUsersType = ReturnType<typeof setUsers>
export type RemoveUsersType = ReturnType<typeof removeUsers>

export type ActionUserType = ChangeLocaleType | SetUsersType | RemoveUsersType

