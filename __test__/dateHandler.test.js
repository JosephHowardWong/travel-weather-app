import { dateHandler } from '../src/server/dateHandler'



describe('testing date parsing functionality', () => {
    test('ensure dateHandler function is defined', () => {
        expect(dateHandler).toBeDefined();
    })
})

describe('testing date parsing functionality', () => {
    test('ensure date dateHandler function is working', () => {
        const {daysAway, today} = dateHandler('2030-01-01')
        expect(daysAway).toBeTruthy();
    })
})

describe('testing date parsing functionality', () => {
    test('ensure date dateHandler function is working', () => {
        const {daysAway, today} = dateHandler('2030-01-01')
        expect(today).toBeTruthy();
    })
})




