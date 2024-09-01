/* 2. POST Method. Practice making a POST request using the Fetch API with async/await and handling the response.

Make a POST request to the URL https://reqres.in/api/users with a JSON payload containing user information ( e.g., name and job).
Log the response data to the console.
3p
*/

'use strict';

async function postData() {
  try {
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
  }
}
