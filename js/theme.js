!localStorage.getItem('theme') && localStorage.setItem('theme', 'light')

var switcher = document.getElementById('theme_switcher')
switcher.textContent = localStorage.getItem('theme')

if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark')

function toggleTheme() {
  localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark')
  switcher.textContent = localStorage.getItem('theme')
  document.body.classList.toggle('dark')
}