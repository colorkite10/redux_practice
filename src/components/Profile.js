import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  //useSelector를 이용하면 만든 리듀서에 접근 가능
  //리듀서에 있는 state에 접근할 건데,
  //user라고 이름 지은 리듀서에 있는 state에 접근할 거란 소리

  //user 리듀서에 초기값을 value라고 설정해 놓음.
  //따라서 user에 있는 value를 가져올 것임
  return (
    <div style={{ color: themeColor }}>
      <h1>Profile Page</h1>
      <p> Name : {user.name}</p>
      <p> Age : {user.age}</p>
      <p> Email : {user.email}</p>
    </div>
  );
}

export default Profile;
