//Create Sign Each Object
function sign(name, image, sound, description, date) {
  this.name = name;
  this.image = image;
  this.sound = new Audio(sound);
  this.description = description;
  this.date = date;
}

const fire = new sign(
  "fire",
  "img/icons/fire.svg",
  "audio/01fire.mp3",
  "Bright and dazzling. The foundation from which all other things came. Warmth in even the coldest of times. Wild when uncontrolled, but when controlled is one of the strongest forces, with the potential for destruction and creation.",
  "March 21 - April 19"
);

const water = new sign(
  "water",
  "img/icons/water.svg",
  "audio/02water.mp3",
  "Ever flowing and unstoppable. Constantly changing to adapt to whatever environment it finds itself a part of. Fearless and calming, it forms its own path when none other is presented.",
  "April 20 - May 20"
);

const air = new sign(
  "air",
  "img/icons/air.svg",
  "audio/03air.mp3",
  "Soothing and crisp. Carries warth and cool through the world. Swirling it gently bends the world to its will. Gently carving serene sculptures from its environment.",
  "May 21 - June 20"
);
const earth = new sign(
  "earth",
  "img/icons/earth.svg",
  "audio/04earth.mp3",
  "Sturdy and unmoving. Forged from structure and balance it provides ground for everything under the sun. Stubborn at times, but can be slowly molded into breathtaking monuments.",
  "June 21 - July 22"
);
const metal = new sign(
  "metal",
  "img/icons/metal.svg",
  "audio/05metal.mp3",
  "TBD",
  "July 23 - August 22"
);
const lightning = new sign(
  "lightning",
  "img/icons/lightning.svg",
  "audio/06lightning.mp3",
  "Fierce and full of awesome power. Visible for all but a moment, but with untameable strength.",
  "August 23 - September 22"
);
const plasma = new sign(
  "plasma",
  "img/icons/plasma.svg",
  "audio/07plasma.mp3",
  "TBD",
  "September 23 - October 23"
);
const space = new sign(
  "void",
  "img/icons/void.svg",
  "audio/08void.mp3",
  "Endless and mysterious. Much is hidden in the vast expanse, but that only peaks curiosity. The inner depths cause self searching and self reflection of what it is to be ourselves.",
  "October 24 - November 21"
);
const life = new sign(
  "life",
  "img/icons/life.svg",
  "audio/09life.mp3",
  "TBD",
  "November 22 - December 21"
);
const aether = new sign(
  "aether",
  "img/icons/aether.svg",
  "audio/10aether.mp3",
  "The material out of reach to man. Heavenly and alluring it draws all towards it, and at the same time is the source of all things. Through it all things are set in motion and are brought into existence.",
  "December 22 - January 19"
);
const light = new sign(
  "light",
  "img/icons/light.svg",
  "audio/11light.mp3",
  "Illuminating and calming. Both natural and man made it provides a clear view of the world. Allows for clear thought and study.",
  "January 20 - February 18"
);
const darkness = new sign(
  "darkness",
  "img/icons/darkness.svg",
  "audio/12darkness.mp3",
  "TBD",
  "February 19 - March 20"
);

const signList = [
  fire,
  water,
  air,
  earth,
  metal,
  lightning,
  plasma,
  space,
  life,
  aether,
  light,
  darkness
];

const container = document.getElementById("signContainer");

// Builds each sign button
const createSign = sign => {
  const button = document.createElement("button");

  button.id = `${sign.name}`;
  button.classList.add("sign");

  const image = document.createElement("img");
  const paragraph = document.createElement("p");

  image.src = sign.image;
  image.alt = `${sign.name} icon`;
  paragraph.innerHTML = sign.name;

  button.appendChild(image);
  button.appendChild(paragraph);

  return button;
};

// Appends each sign button to their container
const buildSigns = () => {
  signList.forEach(signName => {
    const signButton = createSign(signName);
    container.appendChild(signButton);
  });
};

const body = document.getElementById("body");
const overlayContainer = document.getElementById("overlay");

// Builds each sign info container
const createInfo = sign => {
  const signOverlay = document.createElement("section");
  signOverlay.id = `${sign.name}Info`;
  signOverlay.classList.add("signInfo");
  signOverlay.classList.add("hidden");

  const image = document.createElement("img");
  image.src = sign.image;
  image.alt = `${sign.name} icon`;
  image.classList.add("elementIcon");

  const signName = document.createElement("h2");
  signName.classList.add("signName");
  signName.innerHTML = sign.name;

  const dateRange = document.createElement("h3");
  dateRange.classList.add("dateRange");
  dateRange.innerHTML = sign.date;

  const description = document.createElement("p");
  description.classList.add("overlayDesc");
  description.innerHTML = sign.description;

  const closeBtn = document.createElement("button");
  closeBtn.setAttribute("id", "closeBtn");
  closeBtn.classList.add("overlayClose");
  closeBtn.innerHTML = "CLOSE";

  signOverlay.appendChild(image);
  signOverlay.appendChild(signName);
  signOverlay.appendChild(dateRange);
  signOverlay.appendChild(description);
  signOverlay.appendChild(closeBtn);

  return signOverlay;
};

// Appends each sign info to the overlay container to be called later
const buildInfo = () => {
  signList.forEach(signName => {
    const infoOverlay = createInfo(signName);
    overlayContainer.appendChild(infoOverlay);
  });
};

const closeBtn = document.getElementById("closeBtn");

// Play sound file
const playSound = whichSound => {
  whichSound.play();
};

// Stop sound file
const stopSound = whichSound => {
  whichSound.pause();
  whichSound.currentTime = 0.0;
};

// ensures that window has loaded and that both the sign buttons and their info containers have been run
let myPromise = new Promise((resolve, reject) => {
  window.onload = () => {
    buildSigns();
    buildInfo();
    resolve("Success!");
  };
});

myPromise.then(successMessage => {
  const closeBtn = document.getElementsByClassName("overlayClose");

  // Finds each sign button
  const findSigns = document.querySelectorAll(".sign");

  // Array of each button id to be referenced by event listeners
  const idArray = [];

  // Puts each found sign id inside idArray
  for (let i = 0; i < findSigns.length; i++) {
    idArray.push(findSigns[i].id);
  }

  for (let i = 0; i < idArray.length; i++) {
    const zodiacSigns = document.getElementById(`${idArray[i]}`);
    const colorFill = document.getElementById("colorFill");

    zodiacSigns.addEventListener("mouseenter", function() {
      colorFill.classList.add(`${idArray[i]}`);
      colorFill.classList.add("expand");
    });

    zodiacSigns.addEventListener("mouseleave", function() {
      colorFill.classList.remove("expand");
      colorFill.classList.add("remove");

      window.setTimeout(() => {
        colorFill.classList.remove("remove");
        colorFill.classList.remove(`${idArray[i]}`);
      }, 500);
    });

    zodiacSigns.addEventListener("click", function() {
      overlayContainer.classList.remove("hidden");
      overlayContainer.classList.add("fadeIn");

      const signOverlay = document.getElementById(`${idArray[i]}Info`);
      signOverlay.classList.remove("hidden");

      body.appendChild(overlay);
      body.classList.add("noScroll");

      if (signOverlay.id === "fireInfo") {
        playSound(fire.sound);
      } else if (signOverlay.id === "waterInfo") {
        playSound(water.sound);
      } else if (signOverlay.id === "airInfo") {
        playSound(air.sound);
      } else if (signOverlay.id === "earthInfo") {
        playSound(earth.sound);
      } else if (signOverlay.id === "metalInfo") {
        playSound(metal.sound);
      } else if (signOverlay.id === "lightningInfo") {
        playSound(lightning.sound);
      } else if (signOverlay.id === "plasmaInfo") {
        playSound(plasma.sound);
      } else if (signOverlay.id === "voidInfo") {
        playSound(space.sound);
      } else if (signOverlay.id === "lifeInfo") {
        playSound(life.sound);
      } else if (signOverlay.id === "aetherInfo") {
        playSound(aether.sound);
      } else if (signOverlay.id === "lightInfo") {
        playSound(light.sound);
      } else if (signOverlay.id === "darknessInfo") {
        playSound(darkness.sound);
      }
    });
  }

  for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener("click", function() {
      overlayContainer.classList.remove("fadeIn");
      overlayContainer.classList.add("fadeOut");
      body.classList.remove("noScroll");
      stopSound(water.sound);

      window.setTimeout(() => {
        overlayContainer.classList.add("hidden");
        overlayContainer.classList.remove("fadeOut");
        overlayContainer.setAttribute("hidden", "");
        overlayContainer.setAttribute("aria-hidden", true);

        const instructions = document.getElementById("details");
        instructions.classList.add("hidden");
        const overlays = document.querySelectorAll(".signInfo");

        for (let i = 0; i < overlays.length; i++) {
          overlays[i].classList.add("hidden");
        }

        stopSound(fire.sound);
        stopSound(water.sound);
        stopSound(air.sound);
        stopSound(earth.sound);
        stopSound(metal.sound);
        stopSound(lightning.sound);
        stopSound(plasma.sound);
        stopSound(space.sound);
        stopSound(life.sound);
        stopSound(aether.sound);
        stopSound(light.sound);
        stopSound(darkness.sound);
      }, 500);
    });
  }

  const submitBirthday = event => {
    event.preventDefault();

    const birthdayInput = document.getElementById("birthInput");
    const birthdayValue = birthdayInput.value;

    let whichMonth, whichDayOfMonth;
    let validity;

    if (birthdayValue.includes("/")) {
      const dateArray = birthdayValue.split("/");
      whichMonth = dateArray[0];
      whichDayOfMonth = dateArray[1];
    } else {
      const birthday = new Date(`${birthdayValue}T00:00`);
      whichMonth = birthday.getMonth() + 1;
      whichDayOfMonth = birthday.getDate();
    }

    if (
      (whichMonth == 12 && whichDayOfMonth >= 22) ||
      (whichMonth == 1 && whichDayOfMonth <= 19)
    ) {
      AstroSign = "aether";
    } else if (
      (whichMonth == 11 && whichDayOfMonth >= 22) ||
      (whichMonth == 12 && whichDayOfMonth <= 21)
    ) {
      AstroSign = "life";
    } else if (
      (whichMonth == 10 && whichDayOfMonth >= 24) ||
      (whichMonth == 11 && whichDayOfMonth <= 21)
    ) {
      AstroSign = "space";
    } else if (
      (whichMonth == 9 && whichDayOfMonth >= 23) ||
      (whichMonth == 10 && whichDayOfMonth <= 23)
    ) {
      AstroSign = "plasma";
    } else if (
      (whichMonth == 8 && whichDayOfMonth >= 23) ||
      (whichMonth == 9 && whichDayOfMonth <= 22)
    ) {
      AstroSign = "lightning";
    } else if (
      (whichMonth == 7 && whichDayOfMonth >= 23) ||
      (whichMonth == 8 && whichDayOfMonth <= 22)
    ) {
      AstroSign = "metal";
    } else if (
      (whichMonth == 6 && whichDayOfMonth >= 22) ||
      (whichMonth == 7 && whichDayOfMonth <= 22)
    ) {
      AstroSign = "earth";
    } else if (
      (whichMonth == 5 && whichDayOfMonth >= 21) ||
      (whichMonth == 6 && whichDayOfMonth <= 21)
    ) {
      AstroSign = "air";
    } else if (
      (whichMonth == 4 && whichDayOfMonth >= 20) ||
      (whichMonth == 5 && whichDayOfMonth <= 20)
    ) {
      AstroSign = "water";
    } else if (
      (whichMonth == 3 && whichDayOfMonth >= 21) ||
      (whichMonth == 4 && whichDayOfMonth <= 19)
    ) {
      AstroSign = "fire";
    } else if (
      (whichMonth == 2 && whichDayOfMonth >= 19) ||
      (whichMonth == 3 && whichDayOfMonth <= 20)
    ) {
      AstroSign = "darkness";
    } else if (
      (whichMonth == 1 && whichDayOfMonth >= 20) ||
      (whichMonth == 2 && whichDayOfMonth <= 18)
    ) {
      AstroSign = "life";
    } else {
      validity === false;
      console.log("TCL: submitBirthday -> validity", validity);
    }

    if (validity === false) {
      birthdayInput.classList.add("invalid");
      console.log("TCL: birthdayInput", birthdayInput);
    } else {
      overlayContainer.classList.remove("hidden");
      overlayContainer.classList.add("fadeIn");

      const signOverlay = document.getElementById(`${AstroSign}Info`);
      signOverlay.classList.remove("hidden");

      body.appendChild(overlay);
      body.classList.add("noScroll");

      if (signOverlay.id === "fireInfo") {
        playSound(fire.sound);
      } else if (signOverlay.id === "waterInfo") {
        playSound(water.sound);
      } else if (signOverlay.id === "airInfo") {
        playSound(air.sound);
      } else if (signOverlay.id === "earthInfo") {
        playSound(earth.sound);
      } else if (signOverlay.id === "metalInfo") {
        playSound(metal.sound);
      } else if (signOverlay.id === "lightningInfo") {
        playSound(lightning.sound);
      } else if (signOverlay.id === "plasmaInfo") {
        playSound(plasma.sound);
      } else if (signOverlay.id === "voidInfo") {
        playSound(space.sound);
      } else if (signOverlay.id === "lifeInfo") {
        playSound(life.sound);
      } else if (signOverlay.id === "aetherInfo") {
        playSound(aether.sound);
      } else if (signOverlay.id === "lightInfo") {
        playSound(light.sound);
      } else if (signOverlay.id === "darknessInfo") {
        playSound(darkness.sound);
      }
    }
  };

  birthdayForm.addEventListener("submit", submitBirthday);
}); //End mypromise.then
