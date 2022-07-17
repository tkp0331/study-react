import React from "react";

export default function Button(): React.ReactElement {
  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    alert("you pushed the button!");
  };

  return (
    <input
      type="button"
      value="ボタン"
      onClick={onClick} // marginTop, marginLeft
      style={{ marginTop: "100px", marginLeft: "300px" }}
    />
  );
}
