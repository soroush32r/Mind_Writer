import PopUp from "./PopUp"
import Editor from "./Editor"
import { useState } from "react"

const EditorJSContainer = () => {
  const [title,setTitle] = useState('Write Your Blog')

  const titleHandler = ({ target }) => {
    setTitle(target.value)
  }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className="mt-10">
        <input onChange={titleHandler} value={title} placeholder="Enter Title" className="text-5xl font-extrabold text-center outline-none"/>
      </div>
      <div className="w-full m-5">
        <div className="flex justify-center items-center">
          <p className="text-center mr-2">Use tab button for creating text and heading. also you can copy an image and use <b>ctrl + v</b> for paste it</p>
          <PopUp />
        </div>
          <Editor />
      </div>
    </div>
  )
}

export default EditorJSContainer