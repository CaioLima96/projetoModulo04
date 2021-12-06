const request = require('supertest')
const app = require('../app')

//TESTES //nome,email,senha,cpf,id_address

describe('POST Route', () => {
    it('Criando um usuário para poder testar', async () => {
        const res = await request(app)
            .post('/user')
            .send({
                "id": 1,
                "nome": "Batman",
                "email": "IamBatman@heromail.com",
                "senha": "TananananBatman456",
                "cpf": 14725835711,
                "id_address": "12"
            })
        expect(res.statusCode).toEqual(201)
        //expect(res.body).toHaveProperty('id','nome','email','senha','CPF','id_address')
    })
})

// describe(' Teste método GET', () => {
//     it('should return some portfolios', async () => {
//         const res = await request(app)
//             .get('/')
//         expect(res.statusCode).toEqual(200)
//         expect(res.body).toHaveProperty('result')
//     })
//     it('should return the portfolio with id=1', async () => {
//         const res = await request(app)
//             .get('/portfolio/1')
//         expect(res.statusCode).toEqual(200)
//         expect(res.body).toHaveProperty('result')
//         expect(res.body.result.id).toEqual(1)
//     })
//     it('should return the portfolio with tag=cartoon', async () => {
//         const res = await request(app)
//             .get('/portfolio/tag/Cartoon')
//         expect(res.statusCode).toEqual(200)
//         expect(res.body).toHaveProperty('result')
//         expect(res.body.result.tag).toEqual("cartoon")
//     })
// })

// describe('PUT Route', () => {
//     it('should return error=false after update a portfolio', async () => {
//         try {
//             const res = await request(app)
//                 .put('/portfolio/3')
//                 .send({
//                     "avaliable": false
//                 })
//             expect(res.statusCode).toEqual(200)
//             expect(res.body.error).toEqual(false)
//         } catch (e) {
//             console.log(e.message)
//         }

//     })
// })
// describe('DELETE Route', () => {
//     it('should return error=false after delete a portfolio', async () => {

//         const res = await request(app)
//             .delete('/portfolio/2')
//         expect(res.statusCode).toEqual(200)
//         expect(res.body.error).toEqual(false)

//     })
// })

