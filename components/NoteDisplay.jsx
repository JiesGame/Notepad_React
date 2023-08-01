import PropTypes from "prop-types";
import showdown from "showdown";

const NoteDisplay = ({ markdownText, markdownTitle }) => {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(markdownText);

  return (
    <div>
      <h1>{markdownTitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

NoteDisplay.propTypes = {
  markdownText: PropTypes.string.isRequired,
  markdownTitle: PropTypes.string.isRequired,
};

export default NoteDisplay;