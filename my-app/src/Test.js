import React from "react";

function Test() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <input
      type="text"
      name="firstName"
      onChange={handleChange}
    />
  );
}

export default Test;
