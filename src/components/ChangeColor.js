import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../redux/theme";

function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const handleChangeColorButtonClick = () => {
    dispatch(changeColor(color));
  };

  return (
    <div>
      <input
        placeholder="색상을 영어로 입력해주세요."
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button onClick={handleChangeColorButtonClick}>CHANGE COLOR</button>
    </div>
  );
}

export default ChangeColor;
