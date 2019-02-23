//Create Sign Each Object
function sign(name, image, sound, description) {
  this.name = name;
  this.image = image;
  this.sound = sound;
  this.description = description;
}

const fire = new sign(
  'fire',
  'img/icons/fire.svg',
  'sounds/fire.mp3',
  'Bright and dazzling. The foundation from which all other things came. Warmth in even the coldest of times. Wild when uncontrolled, but when controlled is one of the strongest forces, with the potential for destruction and creation.');
const water = new sign(
  'water',
  'img/icons/water.svg',
  'sounds/water.mp3',
  'Ever flowing and unstoppable. Constantly changing to adapt to whatever environment it finds itself a part of. Fearless and calming, it forms its own path when none other is presented.'
);
const air = new sign(
  'air',
  'img/icons/air.svg',
  'sounds/air.mp3',
  'Soothing and crisp. Carries warth and cool through the world. Swirling it gently bends the world to its will. Gently carving serene sculptures from its environment.'
);
const earth = new sign(
  'earth',
  'img/icons/earth.svg',
  'sounds/earth.mp3',
  'Sturdy and unmoving. Forged from structure and balance it provides ground for everything under the sun. Stubborn at times, but can be slowly molded into breathtaking monuments.'
);
const metal = new sign(
  'metal',
  'img/icons/metal.svg',
  'sounds/metal.mp3',
  'TBD'
);
const lightning = new sign(
  'lightning',
  'img/icons/lightning.svg',
  'sounds/lightning.mp3',
  'Fierce and full of awesome power. Visible for all but a moment, but with untameable strength.'
);
const plasma = new sign(
  'plasma',
  'img/icons/plasma.svg',
  'sounds/plasma.mp3',
  'TBD'
);
const space = new sign(
  'void',
  'img/icons/void.svg',
  'sounds/void.mp3',
  'Endless and mysterious. Much is hidden in the vast expanse, but that only peaks curiosity. The inner depths cause self searching and self reflection of what it is to be ourselves.'
);
const life = new sign(
  'life',
  'img/icons/life.svg',
  'sounds/life.mp3',
  'TBD'
);
const aether = new sign(
  'aether',
  'img/icons/aether.svg',
  'sounds/aether.mp3',
  'The material out of reach to man. Heavenly and alluring it draws all towards it, and at the same time is the source of all things. Through it all things are set in motion and are brought into existence.'
);
const light = new sign(
  'light',
  'img/icons/light.svg',
  'sounds/light.mp3',
  'Illuminating and calming. Both natural and man made it provides a clear view of the world. Allows for clear thought and study.'
);
const darkness = new sign(
  'darkness',
  'img/icons/darkness.svg',
  'sounds/darkness.mp3',
  'TBD'
);

const signList = [fire, water, air, earth, metal, lightning, plasma, space, life, aether, light, darkness];

const container = document.getElementById('signContainer');

const createSign = sign => {
  const button = document.createElement('button');

  button.id = `${sign.name}`;
  button.classList.add('sign');

  const image = document.createElement('img');
  const paragraph = document.createElement('p');

  image.src = sign.image;
  image.alt =`${sign.name} icon`;
  paragraph.innerHTML = sign.name;

  button.appendChild(image);
  button.appendChild(paragraph);

  return button;
};

const buildSigns = () => {
  signList.forEach(signName => {
    const signButton = createSign(signName);
    container.appendChild(signButton);
  });
};

for (const name in sign) {
  console.log(`${sign[name]}`);
}

let myPromise = new Promise ((resolve, reject) => {
  window.onload = () => {
    console.log('Window loaded!');
    buildSigns();
    resolve('Sucess!');
  };
})

myPromise.then((successMessage) => {
  console.log (successMessage);
  // const zodiacSigns = document.getElementById('fire');
  // console.log(zodiacSigns);

  // zodiacSigns.addEventListener('mouseover', function() {
  //   skew.classList.add(`skewFire`);
  //   skew.classList.remove('skewDefault');
  // }, false)

  // zodiacSigns.addEventListener('mouseout', function() {
  //   skew.classList.add('skewDefault');
  //   skew.classList.remove(`skewFire`);
  // }, false)
  const findSigns = document.querySelectorAll('.sign');

  const idArray = []

  for (let i = 0; i < findSigns.length; i++) {
    idArray.push(findSigns[i].id)
  }

  const skew = document.getElementById('skew');

  for (let i = 0; i < idArray.length; i++) {
    const zodiacSigns = document.getElementById(`${idArray[i]}`);
    const colorFill = document.getElementById('colorFill');

    zodiacSigns.addEventListener('mouseover', function() {
      colorFill.classList.add(`${idArray[i]}`);
    })  

    zodiacSigns.addEventListener('mouseout', function() {
      colorFill.classList.remove(`${idArray[i]}`);
    })
  }


}) //End mypromise.then