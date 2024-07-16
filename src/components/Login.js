import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";

function Login() {
  const dispatch = useDispatch();
  //이걸 쓰면 action을 보낼 수 있다.

  const onClick = () => {
    dispatch(login({ name: "내 이름", age: 20, email: "email@gmail.com" }));
  };

  return (
    <div>
      <button onClick={onClick}>Login</button>
    </div>
  );
}

export default Login;
