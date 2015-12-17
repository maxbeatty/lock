import Mode from '../lock/mode';
import Login from './login';
import ResetPassword from './reset_password';
import SignUp from './sign_up';
import { getActivity, initDatabase } from './index';

export default class DatabaseMode extends Mode {

  constructor() {
    super("database");
  }

  willOpen(model, options) {
    this.setModel(initDatabase(model, options));
  }

  render(lock) {
    const activity = getActivity(lock);
    switch(activity) {
      case "login":
      return new Login();

      case "signUp":
      return new SignUp();

      case "resetPassword":
      return new ResetPassword();

      default: // TODO: show a crashed screen.
      throw new Error("unknown activity");
    }
  }

}