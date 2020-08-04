const axios = require ('axios');

module.exports =  async function () {
    const response = await axios({
            method: 'post',
            url: `https://server-stage.pasv.us/user/login`,
            data:{
                email: 'gmbh1@ro.ru',
                password: '123456'
            },
        })
            .then(res => res)
            .catch(err => err);
        expect(response.status).eq(200);
        expect(response.data.token).not.empty;
        process.env.TOKEN_ADMIN = response.data.token
        console.log('tokenAdmin: ' + process.env.TOKEN_ADMIN);
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
};
