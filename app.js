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
  document.querySelector('.car-toggle').setAttribute('onclick', 'closeSidebar()')
  document.querySelector('body').style.overflowY = 'hidden'
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.transform = 'translateX(100%)'
  document.querySelector('.car-toggle').style.transform = 'translateX(0vw)'
  document.querySelector('.car-toggle').setAttribute('onclick', 'openSidebar()')
    document.querySelector('body').style.overflowY = 'visible'
}

function doorsOpen() {
  document.querySelector('.car img').src = "./assets/rollsroyce/roycedoorsopen.png"
}

function doorsClose() {
  document.querySelector('.car img').src = "./assets/rollsroyce/roycelightsoff.png"
}

function carEnter(hero) {
  hero.querySelector('.header').style.opacity = '1'
  hero.querySelector('.header').style.transition = 'opacity .8s ease-in-out'
  let desktopCar = hero.querySelector('.desktopcar')
  let mobileCar = hero.querySelector('.mobilecar')
  desktopCar.style.animation = 'carEnter 1.2s ease-out forwards'
  mobileCar.style.animation = 'carEnterMobile 1.2s ease-out forwards'
  hero.setAttribute('onmouseover', '')
}
let carSound = new Audio("./assets/rollsroyce/carstart.mp3")
function carStart() {
  document.querySelector('.desktopcar img').src = "./assets/rollsroyce/roycelightson.png"
  document.querySelector('.mobilecar img').src = "./assets/rollsroyce/roycemobilelightson.png"
  carSound.volume = 0.7
  carSound.play()

}
