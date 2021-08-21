const target = document.getElementById("head-menu");
target.addEventListener('click', () => {
  const target = document.getElementById("head-menu");
  target.classList.toggle('open');
  const nav = document.getElementById("head-drawer");
  nav.classList.toggle('in');
});