/* 1. GET Method. Practice using the Fetch API with async/await to make a GET request and log the response.

Utilize the Fetch API with async/await to make a GET request to the URL https://reqres.in/api/users/1.
Log the response data to the console.
2p
*/

'use strict';


async function showData() {
  try{
    const response = await fetch('https://reqres.in/api/users/1');
    if (!response.ok) {
      throw new Error('Invalid input!');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
  console.error('There was a problem with the fetch operation:', error);
  }
}

showData();
