import React, { useEffect } from "react";
import Prism from "prismjs";

export default function Code({ code, lang, debug = false }) {
  const parsed = () => {
    return typeof code === "string" ? code : String(JSON.stringify(debug ? { code } : code));
  }

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div
      className="code"
      style={{ textAlign: "start", marginTop: "2rem", width: '100%' }}
    >
      <b>Console</b>
      <pre>
        <code className={`language-${lang}`}>{parsed()}</code>
      </pre>
    </div>
  );
}
