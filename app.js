function changeTheme() {
  document.body.classList.toggle("dark-mode")
  document.body.classList.toggle("light-mode")
  let toggle = document.querySelectorAll('.toggle i')
  toggle.forEach(icon => {
    icon.classList.toggle('fa-toggle-on')
    icon.classList.toggle('fa-toggle-off')
  })
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

function doorsOpen(img) {
let folderName = img.src.split('/')
folderName = folderName[folderName.length - 2]
img.src = `./assets/${folderName}/doorsopen.png`
}

function doorsClose(img) {
let folderName = img.src.split('/')
folderName = folderName[folderName.length - 2]
img.src = `./assets/${folderName}/lightsoff.png`
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
function carStart(img) {
  let folderName = img.src.split('/')
folderName = folderName[folderName.length - 2]
 img.src = `./assets/${folderName}/lightson.png`
  carSound.volume = 0.7
  carSound.play()

}


function carStartMob(img) {
  let folderName = img.src.split('/')
folderName = folderName[folderName.length - 2]
  img.src = `./assets/${folderName}/mobilelightson.png`
  carSound.volume = 0.7
  carSound.play()

}
