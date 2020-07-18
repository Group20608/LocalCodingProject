import faker from 'faker';
const FirstName = faker.name.firstName();
const LastName = faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password();

const dataRegisterPage = {
    header: 'Create an account',
    FirstName,
    LastName,
    email,
    password,
};
export {dataRegisterPage};


