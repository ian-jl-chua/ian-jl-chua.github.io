// SideNav //
const displaySideNav = () => {
  const nav = document.getElementById('side-nav')

  if (nav) {
    const scrollPosition = window.scrollY
    const viewportHeight = window.innerHeight

    if (scrollPosition >= 135 && viewportHeight >= 135) {
      nav.classList.add('show-nav')
    } else {
      nav.classList.remove('show-nav')
    }
  }
}

window.addEventListener('scroll', displaySideNav)

// Variable Year //
const year = document.getElementById('year')
const thisYear = new Date().getFullYear()

year.setAttribute('datetime', thisYear)
year.textContent = thisYear

