// SideNav //
const displaySideNav = () => {
  const nav = document.getElementById('side-nav')
  // add when scroll is greater than 135 viewport height
  this.scrollY >= 135
    ? nav.classList.add('show-nav')
    : nav.classList.remove('show-nav')
}
window.addEventListener('scroll', displaySideNav)

// FROM AN EXAMPLE //
// This MIGHT come in useful but not for what I'm after //
// const displaySideNav = () => {
//   const nav = document.getElementById('side-nav')
//   const anchor = document.getElementById('side-nav-link')
//   const screenWidth = window.innerWidth || document.documentElement.clientWidth

//   if (screenWidth >= 1024) {
//     this.scrollY >= 135
//       ? nav.classList.add('show-nav')
//       : nav.classList.remove('show-nav')
//   } else if (screenWidth >= 768) {
//     this.scrollY >= 130
//       ? (nav.classList.add('show-med-nav'), anchor.classList.add('side-menu-link2'))
//       : (nav.classList.remove('show-med-nav'), anchor.classList.remove('side-menu-link2'))
//   } else {
//     nav.classList.remove('show-nav')
//   }
// }

// window.addEventListener('scroll', displaySideNav)
