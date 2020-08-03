import axios from 'axios';
const tokenAdmin = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdtYmgxQHJvLnJ1IiwidXNlcklkIjoiNWYwN2VlZmI2MzdkYjMwMGVlMjdkMjlmIiwiY29kZXdhcnNJZCI6bnVsbCwiaWF0IjoxNTk2NDYzMDgzLCJleHAiOjE1OTY3MjIyODN9.QX6rJwAraeo0l-fZxN7LdGHKeghGfCBzLmvLYsOsENI';
const email = (Math.random()*10000).toFixed() + '@gmail.com'

describe('REG PAGE', () => {
    before(() => {
        browser.url('/user/register');
    });
    it('should register', () => {
        const submitBtn = $('[type="submit"]');
        email,
        $('#user_login_firstName').setValue('Ashot');
        $('#user_login_lastName').setValue('Grigoryan')
        $('#user_login_email').setValue(email);
        $('[type="password"]').setValue('123456')
        $('#user_login_agreement').click();
        submitBtn.click();
        browser.pause(1000)
        $('.ant-select.ant-select-lg.ant-select-single.ant-select-show-arrow').click();
        $$('.ant-select-item-option-content')[5].click();
        browser.pause(1000)
        $('#user_login_phone').setValue('1233444442');
        submitBtn.click();
    });
    it('API check user login ',async () => {
        const arr = await axios({
            method:'get',
            url:`https://server-stage.pasv.us/user/email/${email}`,
            headers: {
                Authorization : tokenAdmin
            }
        })
            // .then(res => {
            //     return (res)
            // })
            // .catch(err => {
            //     return (err)
            //})
            .then(res => res.data)
            .catch(err => err.response.data)

        console.log(arr)
    });
});