export const changeLocale = (locale: string) => {
    return {type: 'USER/CHANGE-LOCALE', locale} as const
}
export const setUsers = (users: string[][]) => {
    return {type: 'USER/SET-USERS', users} as const
}
export const changeSeed = (seed: number) => {
    return {type: 'USER/CHANGE-SEED', seed} as const
}
export const changeCountMistake = (countMistake: number) => {
    return {type: 'USER/CHANGE-COUNT-MISTAKE', countMistake} as const
}
export const removeUsers = () => {
    return {type: 'USER/REMOVE-USERS-LIST'} as const
}