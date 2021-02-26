var imgs = document.getElementsByClassName('lazy-image')

function lazyImage(target) {
  var io = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var img = entry.target
        var src = img.getAttribute('data-src')

        img.setAttribute('src', src)
        img.classList.add('fade-in')

        observer.disconnect()
      }
    })
  })

  io.observe(target)
}

for (var img of imgs) {
  lazyImage(img)
}