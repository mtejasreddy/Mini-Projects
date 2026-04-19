import { useState } from "react";

function EventDemo() {
  const [message, setMessage] = useState("Click the Button");

  const handleClick = () => {
    setMessage("Button is clicked!");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{message}</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default EventDemo;
