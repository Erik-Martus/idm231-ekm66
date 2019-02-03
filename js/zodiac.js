//Create Sign Each Object
function sign(name, image, sound, description, angle) {
  this.name = name;
  this.image = image;
  this.sound = sound;
  this.description = description;
  this.angle = angle;
};

const fire = new sign(
    'fire',
    '../images/icons/fire.svg',
    '../sounds/fire.mp3',
    'Bright and dazzling. The foundation from which all other things came. Warmth in even the coldest of times. Wild when uncontrolled, but when controlled is one of the strongest forces, with the potential for destruction and creation.',
    270
  );

const water = new sign(
    'water',
    '../images/icons/water.svg',
    '../sounds/water.mp3',
    'Ever flowing and unstoppable. Constantly changing to adapt to whatever environment it finds itself a part of. Fearless and calming, it forms its own path when none other is presented.',
    300
  );

const air = new sign(
    'air',
    '../images/icons/air.svg',
    '../sounds/air.mp3',
    'Soothing and crisp. Carries warth and cool through the world. Swirling it gently bends the world to its will. Gently carving serene sculptures from its environment.',
    330
  );

const earth = new sign(
    'earth',
    '../images/icons/earth.svg',
    '../sounds/earth.mp3',
    'Sturdy and unmoving. Forged from structure and balance it provides ground for everything under the sun. Stubborn at times, but can be slowly molded into breathtaking monuments.',
    0
  );

const metal = new sign(
    'metal',
    '../images/icons/metal.svg',
    '../sounds/metal.mp3',
    'TBD',
    30
  );

const lightning = new sign(
    'lightning',
    '../images/icons/lightning.svg',
    '../sounds/lightning.mp3',
    'Fierce and full of awesome power. Visible for all but a moment, but with untameable strength.',
    60
  );

const plasma = new sign(
    'plasma',
    '../images/icons/plasma.svg',
    '../sounds/plasma.mp3',
    'TBD',
    90
  );

const space = new sign(
    'void',
    '../images/icons/void.svg',
    '../sounds/void.mp3',
    'Endless and mysterious. Much is hidden in the vast expanse, but that only peaks curiosity. The inner depths cause self searching and self reflection of what it is to be ourselves.',
    120
  );

const life = new sign(
    'life',
    '../images/icons/life.svg',
    '../sounds/life.mp3',
    'TBD',
    150
  );

const aether = new sign(
    'aether',
    '../images/icons/aether.svg',
    '../sounds/aether.mp3',
    'The material out of reach to man. Heavenly and alluring it draws all towards it, and at the same time is the source of all things. Through it all things are set in motion and are brought into existence.',
    180
  );

const light = new sign(
    'light',
    '../images/icons/light.svg',
    '../sounds/light.mp3',
    'Illuminating and calming. Both natural and man made it provides a clear view of the world. Allows for clear thought and study.',
    210
  );

const darkness = new sign(
    'darkness',
    '../images/icons/darkness.svg',
    '../sounds/darkness.mp3',
    'TBD',
    240
  );

//Each object successfully created.

const app = document.getElementById('circle-container');

//Gets element but I have no idea how target each object I created.

const createSign = name => {
  const button = document.createElement('a');

  button.id = `deg${sign.angle}`;
  button.classList.add('sign');

  const image = button.appendChild('img');
  const paragraph = button.appendChild('p');

  image.src = sign.image;
  paragraph.innerHTML = name;

  return button;
};

const buildSigns = () => {
  for (const name in sign) {
    console.log(`${sign[name]}`);
  }
  
  sign.forEach(name => {
    const signButton = createSign(name);
    app.appendChild(signButton);
  });
};