import {UserFakeDate} from '../interface/userInterface';

export const changeLocale = (locale: string) => {
    return {type: 'USER/CHANGE-LOCALE', locale} as const
}
export const setUsers = (users:UserFakeDate[]) => {
    return {type: 'USER/SET-USERS', users} as const
}
export const removeUsers = () => {
    return {type: 'USER/REMOVE-USES'} as const
}