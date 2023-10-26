export const redirectHome = () => {
  window.location.href = "/";
}

export const redirect404 = () => {
  window.location.href = "/404";
}

export const logout = () => {
  window.localStorage.setItem('jwt', '');
  window.location.href = '/';
}