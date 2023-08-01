import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from "./components/NoteDisplay";
import { useEffect, useState } from "react";
import './App.css'
import DisplayAll from './components/DisplayAll';

function App() {
  const [markdownText, setMarkdownText] = useState("");
  const [markdownTitle, setMarkdownTitle] = useState("");

  const textSave = (text, title) => {
    setMarkdownText(text);
    setMarkdownTitle(title);
  };

  useEffect(() => {
    console.log(localStorage.length)
    let data = localStorage;
    console.log(data['note3'])

  }, []
  )

  // useEffect(() => {
  //   let data = JSON.parse(localStorage);
  //   data.map((ddda) => {
  //     console.log(ddda);
  //   })}, []
  // )  


  return (
    <>
      <article className='left-article'>
        <DisplayAll />
      </article>
      <article className='right-article'>
        <div className='position'>
          <section className='mt-10'>
            <NoteDisplay markdownText={markdownText} markdownTitle={markdownTitle} />
          </section>
          <section className='mt-10'>
            <MarkdownInput onSave={textSave} />
          </section>
        </div>
      </article>
    </>
  )
}

export default App;