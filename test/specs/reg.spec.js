

describe('REG PAGE', () => {
    before(() => {
        browser.url('/user/register');
    });
    it('should register', () => {
        const submitBtn = $('[type="submit"]');
        const email = (Math.random()*1000).toFixed() + '@gmail.com'
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
});