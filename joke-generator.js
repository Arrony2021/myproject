const fetch = require('node-fetch');

async function getRandomJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();

        if (data.type === 'single') {
            console.log(data.joke);
        } else {
            console.log(`${data.setup} - ${data.delivery}`);
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

getRandomJoke();