import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/user";

function Login() {
  const dispatch = useDispatch();
  //이걸 쓰면 action을 보낼 수 있다.

  const handleLoginButtonClick = () => {
    dispatch(login({ name: "내 이름", age: 20, email: "email@gmail.com" }));
  };

  const handleLogoutButtonClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={handleLoginButtonClick}>Login</button>
      <button onClick={handleLogoutButtonClick}>Logout</button>
    </div>
  );
}

export default Login;
