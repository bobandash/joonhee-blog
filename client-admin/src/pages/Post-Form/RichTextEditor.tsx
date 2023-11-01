import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
import '../../main/quill.css'
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);

const RichTextEditor = ({handleChange}) => {
  const toolbarOptions = [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ script:  "sub" }, { script:  "super" }],
    ["blockquote"],
    [{ list:  "ordered" }, { list:  "bullet" }],
    [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ];
  
  const module = {
    toolbar: toolbarOptions,
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
    }

  }

  return (
    <ReactQuill 
      theme="snow" 
      modules = {module}
      onChange = {handleChange}
    />
  )
}

export default RichTextEditor;