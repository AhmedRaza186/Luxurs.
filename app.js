function changeTheme() {
      document.body.classList.toggle("dark-mode");
      document.body.classList.toggle("light-mode");
  let toggle = document.querySelector('.toggle i');
  toggle.classList.toggle('fa-toggle-on');
  toggle.classList.toggle('fa-toggle-off');
}
function openSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.transform = 'translateX(0%)'
  document.querySelector('.car-toggle').style.transform = 'translateX(-60vw)'
  document.querySelector('.car-toggle').setAttribute('onclick','closeSidebar()')
}
function closeSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.transform = 'translateX(100%)'
  document.querySelector('.car-toggle').style.transform = 'translateX(0vw)'
  document.querySelector('.car-toggle').setAttribute('onclick','openSidebar()')
}

// function closeSidebar() {
//   const sidebar = document.querySelector('.sidebar')
//   sidebar.style.right = '-100%'
//   const overlay = document.getElementById('overlay')
//   setTimeout(() => overlay.style.display = 'none', 200)
// }