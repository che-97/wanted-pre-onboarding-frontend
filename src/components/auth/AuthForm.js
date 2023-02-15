import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../services/ApiService";

import classes from './AuthForm.module.css';

function AuthForm(props) {
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const isLogin = props.isLogin;
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);

  const switchAuthModeHandler = () => {
    if (isLogin) {
      navigate("/signup", { replace: true });
    } else {
      navigate("/signin", { replace: true });
    }
  };

  const enteredInputHandler = (event) => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredEmail.indexOf("@") > 0 && enteredPassword.length > 7) {
      setIsDisabledBtn(false);
    } else {
      setIsDisabledBtn(true);
    }
  };

  const signinHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    signin({ email: enteredEmail, password: enteredPassword });
  };

  const signupHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    signup({ email: enteredEmail, password: enteredPassword });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            data-testid="email-input"
            type="email"
            id="email"
            onChange={enteredInputHandler}
            required
            ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            data-testid="password-input"
            type="password"
            id="password"
            onChange={enteredInputHandler}
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {isLogin ? (
            <button
              data-testid="signin-button"
              onClick={signinHandler}
              disabled={isDisabledBtn}
            >
              Login
            </button>
          ) : (
            <button
              data-testid="signup-button"
              onClick={signupHandler}
              disabled={isDisabledBtn}
            >
              Create Account
            </button>
          )}
          <button className={classes.toggle} type="button" onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
