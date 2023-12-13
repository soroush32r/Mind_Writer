import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'
import Checklist from '@editorjs/checklist'
import SimpleImage from "@editorjs/simple-image";
import List from "@editorjs/list";
import { useEffect } from 'react';

export default function Editor() {

  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: 'Enter a header',
            levels: [1, 2, 3, 4, 5],
            defaultLevel: 3
          }
        },
  
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
  
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          }
        },
  
        image: SimpleImage
  
      },
      onReady: () => {
        console.log('Editor.js is ready to work!')
     }
    })
  
  } , [])
  
  return (
    <div>
      <div id='editorjs'></div>
    </div>
  )

}
