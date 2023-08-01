import Showdown from 'showdown';
const converter = new Showdown.Converter();

const NoteDisplay = (markdownTitle, markdownValue) => {
  return (
    <>
      <h2>{markdownTitle}</h2>
      <p>{converter.makeHtml(markdownValue)}</p>
    </>
  );
};

export default NoteDisplay