// Task 1

// const categories = document.querySelectorAll(".item");
// categories.forEach((category) => {
//   console.log("Категория :", category.firstElementChild.textContent);
//   console.log(
//     "Количкство элементов :",
//     category.lastElementChild.childElementCount
//   );
// });

// Task 2

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// const listIngredients = document.querySelector("#ingredients");

// const elementsForList = ingredients.map((ingredient) => {
//   console.log(ingredient);
//   const liElement = document.createElement("li");
//   liElement.textContent = ingredient;
//   return liElement;
// });
// listIngredients.append(...elementsForList);

// task 3

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const listGallery = document.querySelector("#gallery");
// listGallery.classList.add("flex-list");
// const elementsImage = images.map((image) => {
//   return `<li> <img class="image-element" src="${image.url}" alt="${image.alt}"> </li>`;
// });

// listGallery.insertAdjacentHTML("afterbegin", elementsImage.join(""));

//  Task 4

// const elementValue = document.querySelector("#value");
// const dec = document.querySelector('[data-action="decrement"]');
// const inc = document.querySelector('[data-action="increment"]');
// function counter() {
//   let CounterValue = 0;
//   function increment() {
//     return (CounterValue += 1);
//   }
//   function decrement() {
//     return (CounterValue -= 1);
//   }
//   return { increment, decrement };
// }
// const start = counter();

// dec.addEventListener("click", () => {
//   let result = start.decrement();
//   elementValue.textContent = result;
// });

// inc.addEventListener("click", () => {
//   let result = start.increment();
//   elementValue.textContent = result;
// });

// Task 5

// const inputElem = document.querySelector("#name-input");
// const spanElem = document.querySelector("#name-output");
// inputElem.addEventListener("input", onInputChange);
// function onInputChange(event) {
//   spanElem.textContent = event.currentTarget.value;
//   if (spanElem.textContent === "") {
//     spanElem.textContent = "незнакомец";
//   }
// }

// Task 6

// const inputElement = document.querySelector("#validation-input");
// inputElement.addEventListener("input", onInputLength);
// function onInputLength(value) {
//   const standartLength = Number(value.currentTarget.dataset.length);
//   const currentValue = value.currentTarget.value.length;
//   if (standartLength === currentValue) {
//     inputElement.classList.add("valid");
//     inputElement.classList.remove("invalid");
//     console.log(inputElement);
//   } else if (standartLength !== currentValue) {
//     inputElement.classList.add("invalid");
//     inputElement.classList.remove("valid");
//     console.log(inputElement);
//   }
//   console.log(currentValue);
//   console.log(standartLength);
// }

// Task 7

// const inputElem = document.querySelector("#font-size-control");
// const spanElem = document.querySelector("#text");

// inputElem.addEventListener("input", onInputEvent);
// function onInputEvent(event) {
//   const dinamicSize = event.target.value;
//   spanElem.style.fontSize = `${dinamicSize}px`;
// }

// Task 8
const boxesElem = document.querySelector("#boxes");
const inputElem = document.querySelector("#controls input");
const buttonCreate = document.querySelector("[data-action='render']");
const buttonDelete = document.querySelector("[data-action='destroy']");
console.log(inputElem);
console.log(boxesElem);
console.log(buttonCreate);

buttonCreate.addEventListener("click", (event) => {
  createBoxes(inputElem.value);
});

const createBoxes = (amount) => {
  let result = "";
  let divSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    divSize += 10;
    const color =
      "#" +
      (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
    result += ` <div class="box" style="background-color: ${color}; 
    width: ${divSize}px; height: ${divSize}px;
    "   > </div>`;
  }
  boxesElem.innerHTML = result;
};

buttonDelete.addEventListener("click", (event) => {
  boxesElem.innerHTML = "";
  inputElem.value = "";
});
