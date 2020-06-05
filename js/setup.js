'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия Люпита', 'Вашингтон'];
var surnames = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandom = function (arr) {
  var rand = arr[Math.floor(Math.random() * arr.length)];
  return rand;
};

var renderWizards = function (wizards) {
  for (var i = 0; i < wizards.length; i++) {
    wizards[i] = {
      name: getRandom(names) + getRandom(surnames),
      coatColor: getRandom(coatColors),
      eyesColor: getRandom(eyesColors)
    };

    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    similarListElement.appendChild(wizardElement);
  }
  return wizards;
};

var wizards = [1, 2, 3, 4];

renderWizards(wizards);
