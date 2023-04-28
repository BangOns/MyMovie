import React, { useState } from "react";
import "../../css/signInUp.scss";
import { useNavigate } from "react-router";
function SignIn() {
  const [loginUser, setLoginUser] = useState({
    name: "",
    password: "",
  });
  const userOld = localStorage.getItem("ListUser");
  const navigate = useNavigate();
  function getLoginHandler(e) {
    e.preventDefault();
    const findUserName = JSON.parse(userOld).find(
      (myAccount) => loginUser.name === myAccount.name
    );
    const findUserPw = JSON.parse(userOld).find(
      (myAccount) => loginUser.password === myAccount.password
    );
    if (findUserName && findUserPw) {
      const displayLogin = {
        name: loginUser.name,
        password: loginUser.password,
      };
      localStorage.setItem("LoginUser", JSON.stringify(displayLogin));
      navigate("/");
    } else {
      alert("data tidak ada mohon register dahulu");
    }
    setLoginUser({
      name: "",
      password: "",
    });
  }
  return (
    <div className="containerSignIn">
      <div className="textSignIn">
        <div className="text1SignIn">
          <h2>My Movie</h2>
        </div>
        <div className="text2SignIn">
          <p>Sign In to My Movie</p>
        </div>
      </div>
      <div className="KotakSignIn">
        <form className="IsiSignIn" onSubmit={getLoginHandler}>
          <div className="inputEmailSignIn">
            <div className="labelEmailSignIn">
              <label>Username</label>
            </div>
            <div className="userInputEmailSignIn">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="inputNameLogin"
                value={loginUser.name}
                onChange={(e) => {
                  setLoginUser({
                    ...loginUser,
                    name: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="inputPasswordSignIn">
            <div className="labelPasswordSignIn">
              <label>Password</label>
            </div>
            <div className="userInputPasswordSignIn">
              <input
                required
                type="password"
                placeholder="****"
                className="inputPasswordLogin"
                value={loginUser.password}
                onChange={(e) => {
                  setLoginUser({
                    ...loginUser,
                    password: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="alreadySignIn2">
            <div className="buttonAlready2">
              <button type="submit" className="ButtonSignIn">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
