import AuthPage from '../../pageobjects/authentication.page.js';
import { Credentials } from '../../../helper/credentials.js';

describe('Login application', () => {
    it('should login with valid credentials', async () => {
        await AuthPage.open();
        await AuthPage.login(Credentials.email, Credentials.password);
    });
});


