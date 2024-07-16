// 스토어가 식당이라면 리듀서는 접시다.

import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  //createSlice는 기존에 createReducer와 createAction이 하던 일을 같이 해줌.
  //쉽게 말해 actions를 위한 js파일을 따로 만들 필요가 없음!
  name: "user", //리듀서 이름을 뭘로 할지 정하기
  initialState: { value: initialStateValue }, //들어갈 데이터의 초기값
  reducers: {
    //상태가 변하면 어떻게 실행될지 정하는 부분
    //로그인 버튼을 눌렀을 때 이름, 나이, 이메일이 변하게 하고 싶으니
    //로그인 함수를 만들어준다.
    login: (state, action) => {
      //state: 우리가 잡아 놓은 초기값의 value를 가져오는 역할
      //action: 바꾸고 싶은 데이터를 원하는 곳에 넘겨주는 역할
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;
//login 함수를 action 기능이 작동하도록 다른 데서 쓸 것

export default userSlice.reducer;
