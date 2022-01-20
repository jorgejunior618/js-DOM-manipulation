const body = document.getElementsByTagName('body')[0];
const buttom = document.getElementById('buttom');
const modeString = document.getElementsByTagName('span')[0];

function changeClasses () {
  body.classList.toggle('dark-mode');
}

function changeText () {
  const light = 'Light Mode';
  const dark = 'Dark Mode';
  if(modeString.innerText.includes('Dark')) {
    modeString.innerText = light;
    buttom.innerText = dark;
  } else {
    modeString.innerText = dark;
    buttom.innerText = light;
  }
}

buttom.addEventListener('click', () => {
  changeClasses();
  changeText()
})
