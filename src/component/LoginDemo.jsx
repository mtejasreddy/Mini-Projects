import { useState } from "react";

function LoginDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      {isLoggedIn ? (
        <h2>Welcome Back, Tejas</h2>
      ) : (
        <h2>Please Log in to continue</h2>
      )}

      <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
    </div>
  );
}
export default LoginDemo;
