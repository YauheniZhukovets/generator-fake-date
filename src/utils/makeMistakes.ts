import random from 'random'
import {faker} from '@faker-js/faker';

const makeMistakes = (value: string, locale: string, count: number) => {
    if (!count) {
        return value
    }
    faker.locale = locale
    const randomChoiceMethod = random.int(1, 3)
    const lenValue = value.length - 1
    const randomIndex = random.int(1, lenValue)
    const randomLetter = faker.random.alpha()
    const methods: any = {
        1: function (value: string) {
            const arr = value.split('')
            const temp = arr[+randomIndex];
            arr[+randomIndex] = arr[+randomIndex - 1];
            arr[+randomIndex - 1] = temp;
            return arr.join('').toString()
        },
        2: function (value: string) {
            const array = value.split('')
            array.splice(+randomIndex - 1, 0, randomLetter)
            return array.join('').toString()
        },
        3: function (value: string) {
            return value.substring(0, +randomIndex - 1) + value.substring(+randomIndex, value.length);
        }
    }
    return methods[`${randomChoiceMethod}`](value)
}

export function makeCountMistake(value: string, count: number, locale: string) {
    let result = value
    for (let i = 0; i <= count; i++) {
        result = makeMistakes(result, locale, count)
    }
    return result
}
