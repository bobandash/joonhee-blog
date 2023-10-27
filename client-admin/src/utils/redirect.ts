
export const redirectHome = () => {
  window.location.href = "/";
}

export const redirect404 = () => {
  window.location.href = "/404";
}

export const logout = async (getSignedInStatus: () => Promise<void>) => {
  window.localStorage.setItem('jwt', '');
  await getSignedInStatus();
  window.location.href = '/';
}

export const redirectCreatePost = () => {
  window.location.href = "/post/create"
}