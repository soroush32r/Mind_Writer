import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import EditorJS from './components/EditorJS/EditorJSContainer'
import TextEditor from './components/TipTap/TextEditor'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Blog" element={<EditorJS />}/>
        <Route path="/Notebook" element={<TextEditor />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
