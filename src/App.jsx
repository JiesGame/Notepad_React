import MarkdownInput from '../components/MarkdownInput';
import NoteDisplay from "../components/NoteDisplay";
import { useState } from "react";
import './App.css'

function App() {
  const [markdownText, setMarkdownText] = useState("");
  const [markdownTitle, setMarkdownTitle] = useState("");

  const textSave = (text) => {
    setMarkdownText(text);
  };

  const titleSave = (title) => {
    setMarkdownTitle(title.target.value);
  };

  return (
    <>
      <input type="text" value={markdownTitle} onChange={titleSave} placeholder='titre' />
      <MarkdownInput onSave={textSave} />
      <NoteDisplay markdownText={markdownText} markdownTitle={markdownTitle} />
    </>
  )
}

export default App
