import {SexType} from '@faker-js/faker';

export interface UserFakeDate {
    id: string;
    firstName: string;
    lastName: string;
    middleName: string;
    sex?: SexType;
    phone: string
    address: CityAddress
}

export interface CityAddress {
    country: string
    city: string
    street: string
    house: string
    zip?: string
    flat?: string
}