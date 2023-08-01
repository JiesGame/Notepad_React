import { useState } from "react";

const MarkdownInput = () => {
  const [area, setArea] = useState("");

  const onChange = (e) => {
    console.log(e.target.value)
    setArea(e.target.value);
  };

  return (
    <>
      <textarea value={area} onChange={onChange} />
      <button onClick={onChange}>Sauvegarder</button>
    </>
  );
};

export default MarkdownInput