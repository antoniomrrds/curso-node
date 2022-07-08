const app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

test("The aplication must respond on port 3131",()=>{
    return request.get("/")
    .then(res=> expect(res.statusCode).toEqual(200));
})

test("should return red as the user's favorite color",()=>{
    return request.get("/color/Antony").then(res =>{
        expect(res.body.color).toEqual("red");
    })
});