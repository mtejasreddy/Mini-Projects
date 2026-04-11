import { useState, useEffect } from "react";

function EffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("useEffect ran, count is:", count);
  }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default EffectDemo;
