import { useState } from "react";
import formStyles from "./Form.module.css";
import { getJwt } from "../../utils/jwt";
import { Redirect404 } from "../../utils/redirect";
import RequiredAsterisk from "../../components/RequiredAsterisk";
import RichTextEditor from "./RichTextEditor";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [hasBeenPosted, setHasBeenPosted] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  function changeTitle(e: React.FormEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
    setHasBeenPosted(false);
    setHasErrors(false);
  }

  function changeSummary(e: React.FormEvent<HTMLTextAreaElement>) {
    setSummary(e.currentTarget.value);
    setHasBeenPosted(false);
    setHasErrors(false);
  }

  function changeContent(value: string) {
    setContent(value);
    setHasBeenPosted(false);
    setHasErrors(false);
  }

  async function createPost() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_PORT}/posts/create`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: "Bearer " + getJwt(),
          },
          body: JSON.stringify({
            title,
            summary,
            content,
          }),
        }
      );
      // case invalid inputs
      if (!response.ok) {
        setHasErrors(true);
      } else {
        setHasBeenPosted(true);
      }
    } catch {
      Redirect404();
    }
  }

  return (
    <>
      {hasBeenPosted && (
        <span className="success">
          Your post has been successfully created.
        </span>
      )}
      {hasErrors && (
        <span className="error">
          Please make sure all fields are filled out.
        </span>
      )}
      <form className={formStyles.form} encType="multipart/form-data">
        <label htmlFor="title">
          Title
          <RequiredAsterisk />
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => changeTitle(e)}
        />
        <label htmlFor="summary">
          Summary
          <RequiredAsterisk />
        </label>
        <textarea
          rows={3}
          name="summary"
          value={summary}
          id="summary"
          onChange={(e) => changeSummary(e)}
        ></textarea>
        <label htmlFor="content">
          Content
          <RequiredAsterisk />
        </label>
        <RichTextEditor handleChange={changeContent} />
        <button
          type="submit"
          onClick={async (e) => {
            e.preventDefault();
            await createPost();
          }}
        >
          Create Post
        </button>
      </form>
    </>
  );
};

export default PostForm;
