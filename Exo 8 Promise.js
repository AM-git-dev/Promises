async function fetchOK() {

    const url = 'https://random.dog/woof.json?ref=public_apis';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Erreur:', error);
    }
}


fetchOK();


async function fetchError() {
    const invalidUrl = 'https://randam.dag/woof.json?ref=public_apis';
    try {
        const response = await fetch(invalidUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Erreur simulée:', error);
    }
}
fetchError();