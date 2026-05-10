import React from "react";
import { marked } from "marked";

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}
    />
  );
}

export default Preview;
