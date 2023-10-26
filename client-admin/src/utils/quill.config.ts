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

export const module = {
  toolbar: toolbarOptions,
}