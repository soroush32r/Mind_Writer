import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import Image from '@tiptap/extension-image'
import { useCallback } from 'react'

const extensions = [
  StarterKit,
  Underline,
  TextStyle,
  FontFamily,
  Image
]

const content = '<p>Hello World!</p>'

const Tiptap = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'border border-gray-400 p-4 min-h-[40rem] max-h-[40rem] overflow-y-auto outline-none prose max-w-none',
      },
      transformPastedText(text) {
        return text.toUpperCase()
      }
    },
    extensions,
    content,
  })

  const handleFont = (e) => {
    editor.chain().focus().setFontFamily(e.target.value).run()
  }

  const addImage = useCallback(() => {
    const url = window.prompt('URL')
    
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  if(!editor) {
    return null;
  }

  return (
    <div className='my-10 mx-20'>
      <section title='Buttons' className='flex items-center flex-wrap gap-x-4 border-b-0 border-gray-400 border p-4'>
        <div>
          <label htmlFor="font" className='pr-2'>Choose font:</label>
          <select name="font" id="font" className='outline-none border border-gray-200' onChange={handleFont}>
            <option value="Comic Sans MS, Comic Sans">Sans</option>
            <option value="Serif">Serif</option>
            <option value="monospace">Mono</option>
            <option value="Inter">Inter</option>
            <option value="">Default</option>
          </select>
        </div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={`font-extrabold px-2 font-mono ${editor.isActive('bold') ? 'bg-gray-200 rounded' : ''}`}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={`font-bold italic px-2 font-mono ${editor.isActive('italic') ? 'bg-gray-200 rounded' : ''}`}
        >
          I
        </button> 
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`underline font-bold px-2 ${editor.isActive('underline') ? 'bg-gray-200 rounded' : ''}`}
        >
          U
        </button>
        <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`px-2 ${editor.isActive('paragraph') ? 'bg-gray-200 rounded' : ''}`}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-2 ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200 rounded' : ''}`}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-2 ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 rounded' : ''}`}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-2 ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200 rounded' : ''}`}
      >
        h3
      </button>
        <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`flex justify-center align-middle ${editor.isActive('bulletList') ? 'bg-gray-200 rounded' : ''}`}
      >
        <span className="material-symbols-outlined">
          format_list_bulleted
        </span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`flex justify-center align-middle ${editor.isActive('orderedList') ? 'bg-gray-200 rounded' : ''}`}
      >
        <span className="material-symbols-outlined">
          format_list_numbered
        </span>
      </button>
      <button onClick={addImage} className='flex justify-center items-center'><span className="material-symbols-outlined">image</span></button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`px-2 ${editor.isActive('codeBlock') ? 'bg-gray-200 rounded' : ''}`}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`px-2 ${editor.isActive('blockquote') ? ' bg-gray-200 rounded' : ''}`}
      >
        blockquote
      </button>
    
      <button
        className='p-1 disabled:text-gray-400'
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        undo
      </button>
      <button
        className='p-1 disabled:text-gray-400'
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        redo
      </button>
      </section>
      <EditorContent editor={editor} />

    </div>
    
  )
}

export default Tiptap