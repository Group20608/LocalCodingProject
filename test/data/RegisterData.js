import faker from 'faker';
const FirstName = faker.name.firstName();
const LastName = faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password();

const newUser = {
    header: 'Create an account',
    FirstName,
    LastName,
    email,
    password,
    phone:'12334444422',
    headerNameUser:`${FirstName} ${LastName}`,
};

export {newUser};


