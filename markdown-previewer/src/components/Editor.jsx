import React from "react";

function Editor({ markdown, setMarkdown }) {
  return (
    <textarea
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
      placeholder="Type Markdown here..."
      rows="10"
      cols="50"
    />
  );
}

export default Editor;
