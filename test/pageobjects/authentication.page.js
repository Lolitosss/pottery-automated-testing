import Page from './page.js';
class AuthPage extends Page {
    get email () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get displayName () {
        return $('#display-name');
    }

    get confirmPassword () {
        return $('#sign-up-confirm-password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async login (email, password) {
        await this.email.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async signUp (username, email, password, confirmPassword) {
        await this.displayName.setValue(username);
        await this.email.setValue(email);
        await this.inputPassword.setValue(password);
        await this.confirmPassword.setValue(confirmPassword);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('auth');
    }
}

export default new AuthPage();
