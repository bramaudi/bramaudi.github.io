var scrollup = document.getElementById('scrollup')

scrollup.onclick = function () {
  var scroll = setInterval(() => {
    if (window.scrollY > 0) {
      window.scrollTo(0, window.scrollY - 50)
    } else {
      clearInterval(scroll)
    }
  })
}

window.onload = function () {
  if (window.scrollY) {
    scrollup.style.display = 'block'
  } else {
    scrollup.style.display = 'none'
  }
}

window.onscroll = function () {
  if (window.scrollY > 350) {
    scrollup.style.display = 'block'
  } else {
    scrollup.style.display = 'none'
  }
}