//Create Sign Each Object
function sign(name, image, sound, description, date) {
  this.name = name;
  this.image = image;
  this.sound = sound;
  this.description = description;
  this.date = date;
}

const fire = new sign(
  'fire',
  'img/icons/fire.svg',
  'sounds/fire.mp3',
  'Bright and dazzling. The foundation from which all other things came. Warmth in even the coldest of times. Wild when uncontrolled, but when controlled is one of the strongest forces, with the potential for destruction and creation.',
  'March 21 - April 19'
);

const water = new sign(
  'water',
  'img/icons/water.svg',
  'sounds/water.mp3',
  'Ever flowing and unstoppable. Constantly changing to adapt to whatever environment it finds itself a part of. Fearless and calming, it forms its own path when none other is presented.',
  'April 20 - May 20'
);

const air = new sign(
  'air',
  'img/icons/air.svg',
  'sounds/air.mp3',
  'Soothing and crisp. Carries warth and cool through the world. Swirling it gently bends the world to its will. Gently carving serene sculptures from its environment.',
  'May 21 - June 20'
);
const earth = new sign(
  'earth',
  'img/icons/earth.svg',
  'sounds/earth.mp3',
  'Sturdy and unmoving. Forged from structure and balance it provides ground for everything under the sun. Stubborn at times, but can be slowly molded into breathtaking monuments.',
  'June 21 - July 22'
);
const metal = new sign(
  'metal',
  'img/icons/metal.svg',
  'sounds/metal.mp3',
  'TBD',
  'July 23 - August 22'
);
const lightning = new sign(
  'lightning',
  'img/icons/lightning.svg',
  'sounds/lightning.mp3',
  'Fierce and full of awesome power. Visible for all but a moment, but with untameable strength.',
  'August 23 - September 22'
);
const plasma = new sign(
  'plasma',
  'img/icons/plasma.svg',
  'sounds/plasma.mp3',
  'TBD',
  'September 23 - October 22'
);
const space = new sign(
  'void',
  'img/icons/void.svg',
  'sounds/void.mp3',
  'Endless and mysterious. Much is hidden in the vast expanse, but that only peaks curiosity. The inner depths cause self searching and self reflection of what it is to be ourselves.',
  'October 23 - November 21'
);
const life = new sign(
  'life',
  'img/icons/life.svg',
  'sounds/life.mp3',
  'TBD',
  'November 22 - December 21'
);
const aether = new sign(
  'aether',
  'img/icons/aether.svg',
  'sounds/aether.mp3',
  'The material out of reach to man. Heavenly and alluring it draws all towards it, and at the same time is the source of all things. Through it all things are set in motion and are brought into existence.',
  'December 22 - January 19'
);
const light = new sign(
  'light',
  'img/icons/light.svg',
  'sounds/light.mp3',
  'Illuminating and calming. Both natural and man made it provides a clear view of the world. Allows for clear thought and study.',
  'January 20 - February 18'
);
const darkness = new sign(
  'darkness',
  'img/icons/darkness.svg',
  'sounds/darkness.mp3',
  'TBD',
  'February 19 - March 20'
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
  image.alt = `${sign.name} icon`;
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

const createInfo = sign => {
  const signOverlay = document.createElement('section');
  signOverlay.id = `${sign.name}Info`;
  signOverlay.classList.add('signInfo');

  const image = document.createElement('img');
  image.src = sign.image;
  image.alt = `${sign.name} icon`;
  image.classList.add('elementIcon');

  const signName = document.createElement('h2');
  signName.classList.add('signName');
  signName.innerHTML = sign.name;

  const dateRange = document.createElement('h3');
  dateRange.classList.add('dateRange');
  dateRange.innerHTML = sign.date;

  const description = document.createElement('p');
  description.classList.add('overlayDesc');
  description.innerHTML = sign.description;

  signOverlay.appendChild(image);
  signOverlay.appendChild(signName);
  signOverlay.appendChild(dateRange);
  signOverlay.appendChild(description);

  // How to return each of these so that they can be targetted and added
  console.log(signOverlay);
}

const buildInfo = () => {
  signList.forEach(signName => {
    const infoOverlay = createInfo(signName);
  })
}

const body = document.getElementById('body');
const overlayContainer = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', function () {
  console.log('click');
  overlayContainer.classList.remove('fadeIn');
  overlayContainer.classList.add('fadeOut');
  console.log(overlayContainer);
  body.classList.remove('noScroll');
  // overlayContainer.hidden = 'true';
  // overlayContainer.setAttribute('aria-hidden', true);
  overlayContainer.addEventListener('animationend', function () {
    body.removeChild(overlayContainer);
  })

})

let myPromise = new Promise((resolve, reject) => {
  window.onload = () => {
    buildSigns();
    buildInfo();
    resolve('Sucess!');
  };
})

myPromise.then((successMessage) => {
  const findSigns = document.querySelectorAll('.sign');

  const idArray = []

  for (let i = 0; i < findSigns.length; i++) {
    idArray.push(findSigns[i].id)
  }

  const skew = document.getElementById('skew');

  for (let i = 0; i < idArray.length; i++) {
    const zodiacSigns = document.getElementById(`${idArray[i]}`);
    const colorFill = document.getElementById('colorFill');

    zodiacSigns.addEventListener('mouseover', function () {
      colorFill.classList.add(`${idArray[i]}`);
      colorFill.classList.add('expand');
    })

    zodiacSigns.addEventListener('mouseout', function () {
      colorFill.classList.remove('expand');
      colorFill.classList.add('remove');


      // get rid of this, use a "timeout" instead (see "extras" examples
      )
    colorFill.addEventListener('animationend', function () {
      colorFill.classList.remove('remove');
      colorFill.classList.remove(`${idArray[i]}`);
    })
  })

zodiacSigns.addEventListener('click', function () {
  const overlay = document.createElement('section');
  overlay.setAttribute('id', 'overlay');
  overlay.classList.add('fadeIn');

  console.log(overlay);
  body.appendChild(overlay);
  body.classList.add('noScroll');
})
  }


}) //End mypromise.then