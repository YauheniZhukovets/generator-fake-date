import {changeLocale, changeSeed, removeUsers, setUsers} from './userAction';

export type ChangeLocaleType = ReturnType<typeof changeLocale>
export type SetUsersType = ReturnType<typeof setUsers>
export type RemoveUsersType = ReturnType<typeof removeUsers>
export type ChangeSeedType = ReturnType<typeof changeSeed>

export type ActionUserType = ChangeLocaleType | SetUsersType | RemoveUsersType | ChangeSeedType

