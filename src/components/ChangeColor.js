import React, { useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button>CHANGE COLOR</button>
    </div>
  );
}

export default ChangeColor;
