import { useState } from 'react';
import Grid from './components/Grid'
import Header from './components/header'
import Keyboard from './components/keyboard'
import './styles.css'

function App() {
   
  const [word, setWord] = useState("");
  
  return (
    <div className="flex items-center justify-center">
        <div className='flex flex-col justify-between items-center'>
          <Header/>
          <Grid letter = {word} setBuffer={setWord} />
          <Keyboard setPhrase={setWord}/>
        </div> 
    </div>
  )
}

export default App
