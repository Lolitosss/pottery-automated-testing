import AuthPage from '../../pageobjects/authentication.page.js';

describe('Login application', () => {
    it('should login with valid credentials', async () => {
        await AuthPage.open();
        await AuthPage.login('user@gmail.com', 'User1&');
    });
});


