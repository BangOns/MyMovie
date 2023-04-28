import React, { useState } from "react";
import "../../css/signInUp.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    password: "",
    confPass: "",
    email: "",
    number: "",
  });
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (user.password === user.confPass) {
      const NewUser = {
        name: user.name,
        password: user.password,
        email: user.email,
        number: user.number,
        confPass: user.confPass,
      };
      const displayLogin = {
        name: user.name,
        password: user.password,
      };
      let item = getLocaleStorage();
      item.push(NewUser);
      localStorage.setItem("ListUser", JSON.stringify(item));
      localStorage.setItem("LoginUser", JSON.stringify(displayLogin));
      navigate("/");
    } else {
      alert("ada kesalahan pada password!!");
    }
    setUser({
      name: "",
      password: "",
      confPass: "",
      email: "",
      number: "",
    });
  }
  function getLocaleStorage() {
    return localStorage.getItem("ListUser")
      ? JSON.parse(localStorage.getItem("ListUser"))
      : [];
  }
  return (
    <div className="containerSignUp">
      <div className="textSignUp">
        <div className="text1Signup">
          <h2>My Movie</h2>
        </div>
        <div className="text2Signup">
          <p>Sign up to My Movie</p>
        </div>
      </div>
      <div className="KotakRegister">
        <form className="IsiRegister" onSubmit={handleSubmit}>
          <div className="inputUsername">
            <div className="labelName">
              <label>Username</label>
            </div>
            <div className="userInputUsername">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={user.name}
                onChange={(e) => {
                  setUser({
                    ...user,
                    name: e.target.value,
                  });
                }}
                className="inputNameRegister"
              />
            </div>
          </div>
          <div className="inputPassword">
            <div className="labelPassword">
              <label>Password</label>
            </div>
            <div className="userInputPassword">
              <input
                type="password"
                required
                placeholder="****"
                className="inputPasswordRegister"
                value={user.password}
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="inputEmail">
            <div className="labelEmail">
              <label>Email</label>
            </div>
            <div className="userInputEmail">
              <input
                type="email"
                required
                placeholder="Your Email"
                className="inputEmailRegister"
                value={user.email}
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="inputConfirmPassword">
            <div className="labelConfirmPassword">
              <label>Confirm Password</label>
            </div>
            <div className="userInputConfirmPassword">
              <input
                type="password"
                required
                placeholder="****"
                className="inputConfPasswordRegister"
                value={user.confPass}
                onChange={(e) => {
                  setUser({
                    ...user,
                    confPass: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="inputNumber">
            <div className="labelNumber">
              <label>Number</label>
            </div>
            <div className="userInputNumber">
              <input
                required
                type="number"
                placeholder="089..."
                className="inputNumberRegister"
                value={user.number}
                onChange={(e) => {
                  setUser({
                    ...user,
                    number: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="alreadySignIn">
            <div className="buttonAlready">
              <button type="submit" className="buttonSignUp">
                Sign Up
              </button>
            </div>
            <div className="accountReady">
              <p>
                already have a account ?{" "}
                <span className="readySignIn">Sign Up</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
