import React from "react";

function Section({ title, content, buttonText }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <p>{content}</p>
      {buttonText && <button>{buttonText}</button>}
    </section>
  );
}

export default Section;
