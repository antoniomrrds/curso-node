const app = require("../src/App");
const supertest = require("supertest");
const request = supertest(app);
const mainUser = { name: "antonio", email: "ppk@gmail.com", password: "123456" };

beforeAll(() => {
    //inserir usuario 
    return request.post("/user")
        .send(mainUser)
        .then(res => { })
        .catch(err => {
            console.log(err);
        });
})


afterAll(() => {
    //inserir usuario 
    return request.delete("/user/" + mainUser.email)
        .then(res => { })
        .catch(err => {
            console.log(err);
        });
})

describe("Cadastro de usuário", () => {
    test("Deve cadastrar um usuário com sucesso", () => {
        let time = Date.now();
        let email = `${time}@gmail.com`;
        let user = { name: "antonio", email, password: "123456" };
        return request.post("/user")
            .send(user)
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.email).toEqual(email)
            }).catch(err => {
                fail(err);
            });
    })


    test("Deve impedir  um usuário se cadastre com os dados vazios", () => {
        let user = { name: "", email: "", password: "" };
        return request.post("/user")
            .send(user)
            .then(res => {
                expect(res.statusCode).toEqual(400);
            }).catch(err => {
                fail(err);
            });
    })


    test("Deve impedir  um usuário se cadastre com os email repetidos ", () => {
        let time = Date.now();
        let email = `${time}@gmail.com`;
        let user = { name: "victor", email, password: "123456" };
        return request.post("/user")
            .send(user)
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.email).toEqual(email)
                return request.post("/user")
                    .send(user)
                    .then(res => {
                        expect(res.statusCode).toEqual(400);
                        expect(res.body.error).toEqual("E-mail já cadastrado");
                    })
                    .catch(err => {
                        fail(err);
                    })


            }).catch(err => {
                fail(err);
            });
    })





})

describe("Autentificacao", () => {

    test("Deve me retornar um token ao logar", () => {

        return request.post("/auth")
            .send({ email: mainUser.email, password: mainUser.password })
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.token).toBeDefined();
            }).catch(err => {
                fail(err);
            })

    })



    test("Deve impedir que um usuário não cadastrado se logue", () => {
        return request.post("/auth")
            .send({ email:"umemailqualquesr@gmail.com", password: "ujjujuj" })
            .then(res => {
                expect(res.statusCode).toEqual(403);
                expect(res.body.errors.email).toEqual("E-mail não cadastrado");
            })
            .catch(err => {
                fail(err);
            })
    })

    test("Deve impedir que um usuário se logue com uma senha errada", () => {
        return request.post("/auth")
            .send({ email: mainUser.email, password: "bolinha" })
            .then(res => {
                expect(res.statusCode).toEqual(403);
                expect(res.body.errors.password).toEqual("Senha incorreta");
            })
            .catch(err => {
                fail(err);
            })
    })

})