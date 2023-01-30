import {faker} from '@faker-js/faker';
import {makeCountMistake} from './makeMistakes';

const createRandomUser = (locale: string, seed: number) => {
    faker.seed(seed)
    faker.locale = locale
    const sex = faker.name.sexType()
    const id = faker.finance.routingNumber()
    const firstName = faker.name.firstName(sex)
    const lastName = faker.name.lastName(sex)
    const middleName = faker.name.middleName(sex)
    const country = faker.address.state()
    const city = faker.address.city()
    const street = faker.address.street()
    const zip = faker.address.zipCode()
    const house = faker.commerce.price(1, 1000, 0)
    const flat = faker.commerce.price(1, 500, 0)
    const phone = faker.phone.number('+#### ### ## ##')

    return [id, firstName, lastName, middleName, country, city, zip, street, house, flat, phone]
}

export const createUsersDate = (locale: string = 'en', countUsers: number, seed: number, countMistake: number) => {
    return Array.from({length: countUsers}).map((el, i) => {
        const user = createRandomUser(locale, seed + i)
        return user.map((el) => makeCountMistake(el, countMistake, locale))
    })
}


