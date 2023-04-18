import AuthPage from '../../pageobjects/authentication.page.js';
import { Credentials } from '../../../helper/credentials.js';

describe('Sign up application', () => {
    it('should sign up with valid credentials', async () => {
        await AuthPage.open();
        await AuthPage.signUp(Credentials.userName,Credentials.email, Credentials.password);
    });
});
