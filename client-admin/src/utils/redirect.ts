import { useNavigate } from "react-router-dom";

export const Redirect404 = () => {
  const navigate = useNavigate();
  navigate("/404");
};

export const logout = async (getSignedInStatus: () => Promise<void>) => {
  window.localStorage.setItem("jwt", "");
  await getSignedInStatus();
  window.location.href = "/";
};

export const RedirectCreatePost = () => {
  const navigate = useNavigate();
  navigate("/post/create");
};
