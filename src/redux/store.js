// 리덕스는 스토어에 모든 state 상태값을 저장한다.
// 리덕스 안 쓰면 부모 컴포넌트에 있는 변수를 자식 컴포넌트가 못 건듦
// 그래서 아예 스토어라는 다른 곳에 변수를 모두 모아서 원격으로 들고 옴

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";

export default configureStore({
  reducer: {
    user: userReducer, //userSlice.reducer로 export했는데 어떻게 이걸로 불러오지?
  }, //상태관리 할 것들을 저장할 공간
});
