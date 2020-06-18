'use strict';

var WIZARDS_COUNT = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия Люпита', 'Вашингтон'];
var SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_BTN = 27;
var ENTER_BTN = 13;

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupForm = setup.querySelector('.setup-wizard-form');
var setupUsername = setup.querySelector('.setup-user-name');
var coatColor = setupForm.querySelector('.setup-wizard .wizard-coat');
var eyesColor = setupForm.querySelector('.setup-wizard .wizard-eyes');
var fireballColorWrap = setupForm.querySelector('.setup-fireball-wrap');
var fireballColor = setupForm.querySelector('.setup-fireball');
var setupPlayer = setupForm.querySelector('.setup-player');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomElement = function (arr) {
  var rand = arr[Math.floor(Math.random() * arr.length)];
  return rand;
};

var generateWizards = function (wizardsCount) {
  var result = [];
  for (var i = 0; i < wizardsCount; i++) {
    result.push({
      name: getRandomElement(NAMES) + getRandomElement(SURNAMES),
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYES_COLORS)
    });
  }
  return result;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  similarListElement.appendChild(wizardElement);
};

var renderWizards = function () {
  var wizards = generateWizards(WIZARDS_COUNT);

  for (var i = 0; i < wizards.length; i++) {
    renderWizard(wizards[i]);
  }
};

renderWizards();

var onPopupEscPress = function (evt) {
  if (setupUsername === document.activeElement) {
    evt.preventDefault();
  } else {
    if (evt.keyCode === ESC_BTN) {
      evt.preventDefault();
      closePopup();
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_BTN) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_BTN) {
    closePopup();
  }
});

var onWizardCoatClick = function () {
  coatColor.style.fill
  = setupForm.querySelector('input[name="coat-color"]').value
  = getRandomElement(COAT_COLORS);
};

var onWizardEyesClick = function () {
  eyesColor.style.fill
  = setupForm.querySelector('input[name="eyes-color"]').value
  = getRandomElement(EYES_COLORS);
};

var onFireBallClick = function () {
  fireballColorWrap.style.backgroundColor
  = setupForm.querySelector('input[name="fireball-color"]').value
  = getRandomElement(FIREBALL_COLORS);
};

setupPlayer.addEventListener('click', function (evt) {
  switch (evt.target) {
    case fireballColor:
      onFireBallClick();
      break;
    case coatColor:
      onWizardCoatClick();
      break;
    case eyesColor:
      onWizardEyesClick();
      break;
  }
});

