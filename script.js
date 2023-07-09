// SideNav //
const displaySideNav = () => {
  const nav = document.getElementById('side-nav')
  // add when scroll is greater than 135 viewport height
  this.scrollY >= 135
    ? nav.classList.add('show-nav')
    : nav.classList.remove('show-nav')
}
window.addEventListener('scroll', displaySideNav)
