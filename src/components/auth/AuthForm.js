import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {ACCESS_TOKEN} from "../../constants/api-config"

function AuthForm(props) {
  const navigate  = useNavigate();
  
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const isLogin = props.isLogin;
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);

  const switchAuthModeHandler = () => {
    if (isLogin) {
        navigate("/signup", {replace: true});
    } else {
        navigate("/signin", {replace: true});
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

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      //login
      fetch(
        "https://pre-onboarding-selection-task.shop/auth/signin",
        {
          method: "POST",
          body: JSON.stringify({email:enteredEmail,password:enteredPassword}),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        if(response.ok){
            //todo redirect
            //save token
            return response.json()
        }
       /* else{
            //error
            return response.json().then((data) => {
                alert(data.message)
            })
        }*/
      }).then((data)=>{
        localStorage.setItem(ACCESS_TOKEN, data.access_token)
        navigate("/todo", {replace: true});
      });
    } else {
      //sign up
      fetch(
        "https://pre-onboarding-selection-task.shop/auth/signup",
        {
          method: "POST",
          body: JSON.stringify({email:enteredEmail,password:enteredPassword}),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        if(response.ok){
            //login redirect
            //console.log(response.json())
            navigate("/signin", {replace: true});
        }else{
            //error
            return response.json().then((data) => {
                alert(data.message)
            })
        }
        
      });
    }
  };

  return (
    <section>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div>
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
        <div>
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
        <div>
          <button
            data-testid="signup-button"
            onClick={submitHandler}
            disabled={isDisabledBtn}
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
          <button type="button" onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
