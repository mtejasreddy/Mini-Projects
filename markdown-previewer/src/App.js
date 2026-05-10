import React, { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");

  return (
    <div>
      <h1>Markdown Previewer</h1>
      <div className="container">
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
