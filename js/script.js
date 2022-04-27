var elForm = document.querySelector(`.js-order-form`);

var typesOfBread = [`Yupqa`, `Qalin`, `O'rta`];
var typesOfSize = [`25sm`, `30sm`, `35sm`];
var ingredients = [`Pomidor`, `Kurka go'shti`, `Zaytun`, `Tuzlangan bodring`, `Qo'ziqorin`, `Qazi`];
var addls = [`Achchiq`, `Sosiskali`, `Ko'katlar`];

var addIngredients = [];
var pizzaAddls = [];

// Form Inputs
if (elForm) {
  var elSelect = elForm.querySelector(`.js-order-select`);
  var elSizeDiv = elForm.querySelector(`.bread-size`);
  var elIngredientsBox = elForm.querySelector(`.ingredients`);
  var elAddlsBox = elForm.querySelector(`.attechments`);
  var elBreadTypes = elForm.querySelector(`.bread-types`);
  var elSizeTypes = elForm.querySelector(`.size-types`);
  var elOntheBread = elForm.querySelector(`.on-the-bread`);
  var elAttechmentsTypes = elForm.querySelector(`.attechments-types`);
  var finish = elForm.querySelector(`.result`);
}

for (var type of typesOfBread) {
  var elOption = document.createElement(`option`);

  elOption.value = type;
  elOption.textContent = type;
  elSelect.appendChild(elOption);
}

elSelect.addEventListener(`change`, function () {
  elBreadTypes.textContent = elSelect.value;
});

// Pizza Size

for (let size of typesOfSize) {
  var elLabel = document.createElement(`label`);
  var elRadio = document.createElement(`input`);
  var elLabelSpan = document.createElement(`span`);

  elLabelSpan.textContent = size;
  elLabelSpan.classList.add(`circle`);
  elRadio.classList.add(`sr-only`, `radio-input`);
  elRadio.type = "radio";
  elRadio.name = `radio`;

  elLabel.appendChild(elRadio);
  elLabel.appendChild(elLabelSpan);
  elSizeDiv.appendChild(elLabel);

  elRadio.addEventListener(`change`, function () {
    elSizeTypes.textContent = size;
  });
}

var updateOrderIngredients = function () {

  elOntheBread.innerHTML = '';

  for (var addIngredient of addIngredients) {
    var elIngredientItem = document.createElement('li'); // li yasaymiz
    elIngredientItem.textContent = addIngredient;
    elOntheBread.appendChild(elIngredientItem); // li ni ul ga joylab qo'yamiz.
  }
};

for (let ingredient of ingredients) {
  var ingredientsLabel = document.createElement(`label`);
  var ingredientsInput = document.createElement(`input`);
  var ingredientsSpan = document.createElement(`span`);

  ingredientsLabel.classList.add(`label-ingredient`);
  ingredientsLabel.textContent = ingredient;
  ingredientsInput.type = `checkbox`;
  ingredientsInput.name = ingredient;
  ingredientsInput.value = ingredient;
  ingredientsInput.classList.add(`ingredient-checkbox`);
  ingredientsInput.classList.add(`sr-only`);
  ingredientsSpan.classList.add(`ingredient-span`);

  ingredientsLabel.appendChild(ingredientsInput);
  ingredientsLabel.appendChild(ingredientsSpan);

  elIngredientsBox.appendChild(ingredientsLabel);

  ingredientsInput.addEventListener(`click`, function () {

    if (addIngredients.includes(this.name)) {
      var itemIndex = addIngredients.indexOf(this.name);
      addIngredients.splice(itemIndex, 1);
    } else {
      addIngredients.push(this.name);
    }

    updateOrderIngredients();
    console.log(addedIngredients);
  });
}

var updateOrderAddls = function () {

  elAttechmentsTypes.innerHTML = '';

  for (var pizzaAddl of pizzaAddls) {
    var elIngredientItem = document.createElement('li');
    elIngredientItem.textContent = pizzaAddl;
    elAttechmentsTypes.appendChild(elIngredientItem);
  }
};

for (let addl of addls) {
  var addlsLabel = document.createElement(`label`);
  var addlsInput = document.createElement(`input`);
  var addlsSpan = document.createElement(`span`);

  addlsLabel.classList.add(`label-ingredient`);
  addlsLabel.textContent = addl;
  addlsInput.type = `checkbox`;
  addlsInput.name = addl;
  addlsInput.value = addl;
  addlsInput.classList.add(`ingredient-checkbox`);
  addlsInput.classList.add(`sr-only`);
  addlsSpan.classList.add(`ingredient-span`);

  addlsLabel.appendChild(addlsInput);
  addlsLabel.appendChild(addlsSpan);

  elAddlsBox.appendChild(addlsLabel);

  addlsInput.addEventListener(`click`, function () {

    if (pizzaAddls.includes(this.name)) {
      var itemIndex = pizzaAddls.indexOf(this.name);
      pizzaAddls.splice(itemIndex, 1);
    } else {
      pizzaAddls.push(this.name);
    }

    updateOrderAddls();
    console.log(pizzaAddls);
  });
}

elForm.addEventListener(`submit`, function (evt) {
  evt.preventDefault();
  finish.textContent = `Buyurtma qabul qilindi!`;
});