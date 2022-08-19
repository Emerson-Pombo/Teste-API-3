const faker = require('faker-br');
describe('Creat user', () => { 
    it('Creat user', () => {

        const nameFist = faker.name.firstName();
        const nameLast = faker.name.lastName();
        const name = nameFist + ' ' + nameLast;
        const email = faker.internet.email();
        const password = faker.internet.password();
        cy.request({
            /// crio o user
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: {
                "nome": name,
                "email": email,
                "password": password,
                "administrador": "true"
            }
            // verifico se foi criado
        }).then((response) => {
            expect(response.body.message).to.eq('Cadastro realizado com sucesso');
            expect(response.status).to.eq(201);
        })
    })
 })