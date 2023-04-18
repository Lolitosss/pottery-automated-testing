import AuthPage from '../../pageobjects/authentication.page.js';

describe('Sign up application', () => {
    it('should sign up with valid credentials', async () => {
        await Authpage.open();
        await AuthPage.signUp('User','user@gmail.com', 'User1&', 'User1&');
    });
});
