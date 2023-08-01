import { useState} from "react";
import PropTypes from "prop-types";

const MarkdownInput = ({ onSave }) => {
  const [area, setArea] = useState("");
  const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0);

  const onChange = (e) => {
    setArea(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  };

  const handleSaveClick = () => {
    onSave(area, title);
    setIndex(index + 1);
    localStorage.setItem(`note${index}`, [title, area, index]);
  };

  return (
    <>
      <input className='input' value={title} onChange={onChangeTitle} placeholder='Titre de la note' />
      <textarea className='area' value={area} onChange={onChange} placeholder='Contenu de la note' />
      <button className='button bg-red' onClick={handleSaveClick}>Sauvegarder</button>
    </>
  );
};

MarkdownInput.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default MarkdownInput;