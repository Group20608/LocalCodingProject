import { userAdmin } from '../data/UserLoginData';
import LoginPage from '../page/LoginPage';
import ProfilePage from '../page/ProfilePage';
import axios from 'axios';
const tokenAdmin =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdtYmgxQHJvLnJ1IiwidXNlcklkIjoiNWYwN2VlZmI2MzdkYjMwMGVlMjdkMjlmIiwiY29kZXdhcnNJZCI6bnVsbCwiaWF0IjoxNTk2NDYzMDgzLCJleHAiOjE1OTY3MjIyODN9.QX6rJwAraeo0l-fZxN7LdGHKeghGfCBzLmvLYsOsENI';

describe('NEW USER LOGIN', () => {
  before('open page', () => {
    LoginPage.open();
  });
  it('should user login', () => {
    LoginPage.userLogin(userAdmin);
  });

  it('should API user login', async () => {
    const response = await axios({
      method: 'post',
      url: `https://server-stage.pasv.us/user/login`,
      data:{
        email: 'gmbh1@ro.ru',
        password: '123456'
      },
    })
      // const response = await axios.
      //     post(`https://server-stage.pasv.us/user/login`,{
      //     email : 'gmbh1@ro.ru',
      //     password : '123456',
      // })
      .then(res => res)
      .catch(err => err);
    expect(response.status).eq(200);
    console.log(response.data.token);
  });
});
