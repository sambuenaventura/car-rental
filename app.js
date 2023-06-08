//car-models section

const models = document.querySelectorAll(".item");
const firstButton = document.querySelector(".model-left .item");

const priceText = document.querySelector(".model-price span:nth-child(2)");
const brandText = document.querySelector(
  ".model-grid .grid-col:nth-child(1) span:nth-child(2)"
);
const bodyTypeText = document.querySelector(
  ".model-grid .grid-col:nth-child(2) span:nth-child(2)"
);
const yearText = document.querySelector(
  ".model-grid .grid-col:nth-child(3) span:nth-child(2)"
);
const seatsText = document.querySelector(
  ".model-grid .grid-col:nth-child(4) span:nth-child(2)"
);
const hpText = document.querySelector(
  ".model-grid .grid-col:nth-child(5) span:nth-child(2)"
);
const transmissionText = document.querySelector(
  ".model-grid .grid-col:nth-child(6) span:nth-child(2)"
);
const fuelText = document.querySelector(
  ".model-grid .grid-col:nth-child(7) span:nth-child(2)"
);
const modelImage = document.querySelector(".model-center img");

const modelDetails = {
  "Ford Ranger": {
    price: 3500,
    brand: "Ford",
    bodyType: "Pickup",
    year: "2023",
    seats: "5",
    hp: "180",
    transmission: "MT",
    fuel: "Diesel",
    image: "ford-ranger.png",
  },
  "Honda CR-V": {
    price: 3000,
    brand: "Honda",
    bodyType: "SUV",
    year: "2023",
    seats: "5",
    hp: "190",
    transmission: "CVT",
    fuel: "Gasoline",
    image: "honda-cr-v.png",
  },
  "Mazda 3 Sportback": {
    price: 2700,
    brand: "Mazda",
    bodyType: "Hatchback",
    year: "2023",
    seats: "5",
    hp: "155",
    transmission: "AT",
    fuel: "Gasoline",
    image: "mazda-3-sportback.png",
  },
  "Mitsubishi Mirage G4": {
    price: 2200,
    brand: "Mitsubishi",
    bodyType: "Sedan",
    year: "2023",
    seats: "5",
    hp: "78",
    transmission: "CVT",
    fuel: "Gasoline",
    image: "mitsubishi-mirage-g4.png",
  },
  "Nissan Terra": {
    price: 3200,
    brand: "Nissan",
    bodyType: "SUV",
    year: "2023",
    seats: "7",
    hp: "190",
    transmission: "AT",
    fuel: "Diesel",
    image: "nissan-terra.png",
  },
  "Toyota Raize": {
    price: 2400,
    brand: "Toyota",
    bodyType: "SUV",
    year: "2023",
    seats: "5",
    hp: "98",
    transmission: "CVT",
    fuel: "Gasoline",
    image: "toyota-raize.png",
  },
};

function updateModelDetails(model) {
  const details = modelDetails[model];
  priceText.textContent = details.price;
  brandText.textContent = details.brand;
  bodyTypeText.textContent = details.bodyType;
  yearText.textContent = details.year;
  seatsText.textContent = details.seats;
  hpText.textContent = details.hp;
  transmissionText.textContent = details.transmission;
  fuelText.textContent = details.fuel;
}

function updateModelImage(model) {
  const details = modelDetails[model];
  const imagePath = `./assets/images/${details.image}`;
  modelImage.src = imagePath;
}

function handleClick(event) {
  const clickedButton = event.target;

  models.forEach((button) => {
    if (button === clickedButton) {
      button.classList.add("active-btn");
      button.classList.remove("item");
    } else if (button.classList.contains("active-btn")) {
      button.classList.remove("active-btn");
      button.classList.add("item");
    }
  });

  const activeButton = document.querySelector(".active-btn");
  const model = activeButton.textContent;
  updateModelDetails(model);
  updateModelImage(model);
}

models.forEach((item) => {
  item.addEventListener("click", handleClick);
});

// Set the first button as active initially
firstButton.classList.add("active-btn");
firstButton.classList.remove("item");

// Initial update of model details and image using the first button's text content
updateModelDetails(firstButton.textContent);
updateModelImage(firstButton.textContent);

//faq section

const questions = document.querySelectorAll(".faq-box-question");

questions.forEach((question) => {
  const answer = question.nextElementSibling;

  question.addEventListener("click", function handleClick(event) {
    console.log("User clicked:", question);

    questions.forEach((otherQuestion) => {
      const otherAnswer = otherQuestion.nextElementSibling;

      if (otherQuestion !== question) {
        otherQuestion.classList.remove("question-active");
        otherAnswer.classList.remove("answer-active");
      }
    });

    question.classList.toggle("question-active");
    answer.classList.toggle("answer-active");
  });

  answer.addEventListener("click", function handleAnswerClick(event) {
    if (question.classList.contains("question-active")) {
      question.classList.remove("question-active");
      answer.classList.remove("answer-active");
    } else {
      question.classList.add("question-active");
      answer.classList.add("answer-active");
    }
  });
});
