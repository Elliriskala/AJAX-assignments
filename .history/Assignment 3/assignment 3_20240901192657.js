/* Error Handling. Practice error handling while using the Fetch API

Attempt to make a GET request to a non-existent URL (e.g., https://reqres.in/api/unknown/23).
Handle the error using try/catch blocks.
Also try other methods (POST, PUT, DELETE)
Log an error message to the console in case of an error.
4p

*/

'use strict';

async function getData() {
  try{
    const response = await fetch('https://reqres.in/api/unknown/23');
    if (!response.ok) {
      throw new Error('There was a problem with the fetch operation');
    }
    const data = await response.json();
    console.log('GET response data:', data);
  } catch (error) {
    console.error(error.message);
  }
}

getData();

async function postData() {

  const userData = {
    name: '',
    job: ''
  };

  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

postData();

