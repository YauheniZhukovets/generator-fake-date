import {faker} from '@faker-js/faker';
import {Place} from '../interface/enum';
import {CityAddress, UserFakeDate} from '../interface/userInterface';

const createBaseAddress = () => {
    return {
        country: faker.address.state(),
        city: faker.address.city(),
        street: faker.address.street(),
        house: faker.commerce.price(1, 1000, 0)
    }
}

const createRandomAddress = (place: Place): CityAddress => {
    if (place === Place.village) {
        return createBaseAddress()
    } else {
        return {
            ...createBaseAddress(),
            zip: faker.address.zipCode(),
            flat: faker.commerce.price(1, 500, 0)
        }
    }
}

const createRandomUser = (locale: string = 'ru', seed: number): UserFakeDate => {
    faker.seed(seed)
    faker.locale = locale
    const sex = faker.name.sexType()
    const firstName = faker.name.firstName(sex)
    const lastName = faker.name.lastName(sex)
    const middleName = faker.name.middleName(sex)
    const place = faker.commerce.price(0, 1, 0)
    return {
        id: faker.finance.routingNumber(),
        firstName,
        lastName,
        middleName,
        address: createRandomAddress(+place),
        phone: faker.phone.number('+#### ### ## ##'),
    }
}


export const createUsersDate = (locale: string = 'en', countUsers: number, seed: number): UserFakeDate[] => {
    const users: UserFakeDate[] = []
    Array.from({length: countUsers}).forEach((el, i) => {
        users.push(createRandomUser(locale, seed + i));
    })
    return users
}