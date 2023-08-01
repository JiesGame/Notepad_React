import React from "react";
import PropTypes from "prop-types";

const MarkdownInput = ({ onSave }) => {
  const [area, setArea] = React.useState("");

  const onChange = (e) => {
    setArea(e.target.value);
  };

  const handleSaveClick = () => {
    onSave(area);
  };

  return (
    <>
      <textarea value={area} onChange={onChange} placeholder='Contenu de la note' />
      <button onClick={handleSaveClick}>Sauvegarder</button>
    </>
  );
};

MarkdownInput.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default MarkdownInput;