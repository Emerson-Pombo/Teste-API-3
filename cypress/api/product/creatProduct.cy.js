const faker = require('faker-br');
describe('Creat user', () => { 
    beforeEach(() => {
        
    })
    it('Creat user', () => {

        const productName = faker.commerce.productName();
        const price = faker.random.number();
        const productDescription = faker.commerce.productMaterial();
        const quantity = faker.random.number();
        cy.request({
            /// realizo o login
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "teste@email.com",
                "password": "123456"
            }
        }).then((response) => {
            expect(response.body.message).to.eq('Login realizado com sucesso')
            expect(response.body.authorization);
        }).then((response) => {
            cy.request({
                /// crio um produto
                method: 'POST',
                url: `http://localhost:3000/produtos`,
                Authorization: response.body.authorization,
                body: {
                    "nome": productName,
                    "preco": price,
                    "descricao": productDescription,
                    "quantidade": quantity,
                }
            }).then((response) => {
                //verifico se foi criado um produto
                expect(response.body.message).to.eq('Produto criado com sucesso')
                expect(response.status).to.eq(201)
            })
        })
    })
})