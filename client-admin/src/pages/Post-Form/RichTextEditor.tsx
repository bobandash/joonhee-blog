import ReactQuill/* , { Quill } */ from "react-quill";
import 'react-quill/dist/quill.snow.css';
import '../../main/quill.css'
/* import ImageResize from 'quill-image-resize-module-react'; */
import { useMemo } from "react";
import { getJwt } from "../../utils/jwt";
import { useRef } from "react";
import { FC } from "react";
import type QuillType from 'react-quill'

/* Quill.register('modules/imageResize', ImageResize); */

interface RichTextEditorProps {
  handleChange: (value: string) => void,
  value?: string
}

const RichTextEditor:FC<RichTextEditorProps> = ({handleChange, value}) => {
  const QuillRef = useRef<QuillType>(null);
  const module = useMemo(
    () => (
      {
        toolbar: {
          container: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ script:  "sub" }, { script:  "super" }],
            ["blockquote"],
            [{ list:  "ordered" }, { list:  "bullet" }],
            [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
            ["link", "image", "video"],
            ["clean"],
          ],
          handlers: {
            image: async () => {
              const input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');
              input.click();
              input.onchange = async () => { 
                const file = input.files ? input.files[0] : null;
                if(file !== null && QuillRef.current !== null){
                  const editor = QuillRef.current.getEditor()
                  const formData = new FormData();
                  formData.append('image', file);
                  const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/posts/add-image`, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                      'Accept': 'application/json',
                      'authorization': 'Bearer ' + getJwt()
                    },
                    body: formData
                  });
                  const data = await response.json();
                  const imageUrl = data.data.url;
                  const range = editor.getSelection();
                  if(range !== null){
                    editor.insertEmbed(range.index, 'image', `${import.meta.env.VITE_BACKEND_PORT}/${imageUrl}`);
                  }
                }
              }
            },
          }
        },
/*         imageResize: {
          parchment: Quill.import('parchment'),
          modules: ['Resize', 'DisplaySize']
        } */
      }
    ), [])
  
  if(value){
    return(
      <ReactQuill 
        ref = {QuillRef}
        theme="snow" 
        modules = {module}
        onChange = {handleChange}
        value = {value}
      />
    )
  }

  return (
    <ReactQuill 
      ref = {QuillRef}
      theme="snow" 
      modules = {module}
      onChange = {handleChange}
    />
  )
}

export default RichTextEditor;