const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const loadMealsButton = document.getElementById('load-meals');
const mealsList = document.getElementById('list');
const formElement = document.querySelector('#form form');

const foodInput = document.getElementById('food');
const timeInput = document.getElementById('time');
const caloriesInput = document.getElementById('calories');
const formAddButton = document.getElementById('add-meal');
const formEditButton = document.getElementById('edit-meal');


loadMealsButton.addEventListener('click', loadMeals);

formAddButton.addEventListener('click', (e) => {
    e.preventDefault();

    const newMeal = {
        food: foodInput.value,
        time: timeInput.value,
        calories: caloriesInput.value
    };

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMeal)
    })
        .then(loadMeals)
        clearForm();
});

formEditButton.addEventListener('click', (e) => {
    e.preventDefault();

    const mealId = formElement.dataset.meal;

    const mealData = {
        _id: mealId,
        food: foodInput.value,
        time: timeInput.value,
        calories: caloriesInput.value
    };

    fetch(`${baseUrl}/${mealId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mealData)
    })
        .then(loadMeals)
        .then((e) => {
            formAddButton.removeAttribute('disabled');
            formEditButton.setAttribute('disabled', 'disabled');

            clearForm();

            delete formElement.dataset.meal;
        });
});

function clearForm() {
    foodInput.value = '';
    timeInput.value = '';
    caloriesInput.value = '';
}

function loadMeals() {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(result => {
            renderMeals(Object.values(result));
        });
}

function renderMeals(meals) {
    mealsList.innerHTML = '';

    meals
        .map(renderMeal)
        .forEach(mealElement => mealsList.appendChild(mealElement));
}

function renderMeal(meal) {
    const mealElement = document.createElement('div');
    mealElement.className = 'meal';

    const h2Element = document.createElement('h2');
    h2Element.textContent = meal.food;
    const h3TimeElement = document.createElement('h3');
    h3TimeElement.textContent = meal.time;
    const h3CaloriesElement = document.createElement('h3');
    h3CaloriesElement.textContent = meal.calories;

    const changeButton = document.createElement('button');
    changeButton.className = 'change-meal';
    changeButton.textContent = 'Change';

    changeButton.addEventListener('click', (e) => {
        foodInput.value = meal.food;
        timeInput.value = meal.time;
        caloriesInput.value = meal.calories;

        mealElement.remove();

        formEditButton.removeAttribute('disabled');
        formAddButton.setAttribute('disabled', 'disabled');

        formElement.dataset.meal = meal._id;
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-meal';
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', (e) => {
        fetch(`${baseUrl}/${meal._id}`, {
            method: 'DELETE'
        })
            .then(loadMeals);
    });

    mealElement.appendChild(h2Element);
    mealElement.appendChild(h3TimeElement);
    mealElement.appendChild(h3CaloriesElement);
    mealElement.appendChild(changeButton);
    mealElement.appendChild(deleteButton);

    return mealElement;
}