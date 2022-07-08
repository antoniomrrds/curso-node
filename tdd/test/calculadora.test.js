// exemple test

const app = require('../exampleFirst');

describe("Operation basic", () => {
    test("Should return 10 when addding 5 + 5", () => {
        let result = app.sum(5, 5);
        expect(result).toEqual(10);
    })

    test("Should return 10 when multiplying 2 for 5", () => {
        let result = app.mult(2, 5);
        expect(result).toEqual(10);
    })
})

