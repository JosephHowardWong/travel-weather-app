import { makePost, updateUI } from '../src/client/js/app'
// const request = require('supertest')
// const { app } = require('../src/server/server')
// import { dateHandler } from '../src/server/dateHandler'

describe('testing updateUI function to be defined', () => {
    test('ensure updateUI function exists', () => {
        expect(updateUI).toBeDefined();
    })
})


describe('testing makePost function to be defined', () => {
    test('ensure makePost function exists', () => {
        expect(makePost).toBeDefined();
    })
})


// const serverResp = await Client.makePost('http://localhost:8080/getCityInfo', {city, date})


// describe('Post to back end', () => {
//     test('test should return correct results', async done => {
//         const city = 'miavhgjvhjkmi'
//         const date = '2021-03-02'
//         const response = await request(app).post('/getCityInfo', {city, date})
//         // const response = await request(app).post('http://localhost:8080/getCityInfo', {city, date})
//         // const resp1 = await response.json()
//         expect(response.name).toEqual('invalid')
//         done()
//     })
// })