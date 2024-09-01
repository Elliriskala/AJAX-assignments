/* 5. In this assignment we will work with the Restaurant API to build upon the previous lab's restaurant assignment (Assignment 2). Extend the previous restaurant assignment by integrating the Restaurant API and enhancing the app to display the current day's menu for selected restaurants.

Begin by revisiting your previous restaurant assignment code.
Modify the app to fetch restaurant data using a single AJAX call to the Restaurant API endpoint. Replace the previous hard-coded array of restaurants.
Implement the necessary logic to display the retrieved restaurant data in your app.
When a user clicks on a restaurant, make another AJAX call to fetch the current day's menu for the selected restaurant from the API.
Enhance the modal functionality to show both the restaurant details (name, address, etc.) and the current day's menu.
Ensure that the modal is populated with the relevant information when a user clicks on a restaurant.
Implement error handling for the AJAX calls, displaying appropriate messages if data retrieval fails.
Test the app thoroughly to ensure that restaurant data and menus are displayed accurately.
Make effective use of CSS for styling and layout.
10p
*/

'use strict';

const target = document.querySelector('tbody');
const modal = document.querySelector('dialog');
const info = document.querySelector('#info');
const closeModal = document.querySelector('#close-modal');

closeModal.addEventListener('click', function () {
  modal.close();
});

// Fetching restaurant data

async function  fetchRestaurants() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('There was a problem with the fetch operation');
    return await response.json();
  } catch (error) {
      console.error('Error:', error);
      return [];
    }
}

async function restaurantDetails(restaurant) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('There was a problem with fething restaurants details');
    return await response.json();
  } catch (error) {
      console.error('Error:', error);
      return { restaurant: restaurant, menu: [] };
  }
}

function menuHTML(menu) {
  return `
        <ul>
            ${menu.map(item => `<li>${item.dishName} - ${item.price}</li>`).join('')}
        </ul>
    `;
}

function displayModal(restaurant, menu) {
  const restaurantHTML = `
                <header>
                  <h3>${restaurant.name}</h3>
                  <p>${restaurant.company}</p>
                </header>
                <address>
                  ${restaurant.address}<br>
                  ${restaurant.postalCode} ${restaurant.city}<br>
                  ${restaurant.phone}<br>
            </address>
                <div>
                  <h4>Today's Menu</h4>
                  ${menu.length ? menuHTML(menu) : '<p>No menu available</p>'}
                </div>
            `;

            info.innerHTML = '';
            info.insertAdjacentHTML('beforeend', restaurantHTML);

            modal.showModal();
}

async function displayRestaurants(restaurants) {
  let restaurants = await fetchRestaurants();
  // Displaying the restaurants in alphabetical order
  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  for (const restaurant of restaurants) {
    if (restaurant) {
          const name = document.createElement('td');
          name.innerText = restaurant.name;

          const address = document.createElement('td');
          address.innerText = restaurant.address;

          const row = document.createElement('tr');

          // highlighting selected restaurant

          row.addEventListener('click', function () {
            const highlights = document.querySelectorAll('.highlight');
            for (const highligted of highlights) {
              highligted.classList.remove('highlight');
            }
            row.classList.add('highlight');

            const { restaurant: restDetails, menu } = fetchRestaurantDetails(restaurant.id);
                displayRestaurantInModal(restDetails, menu);
            });

            row.append(name, address);
            target.append(row);
        }
    }
}

displayRestaurants();
