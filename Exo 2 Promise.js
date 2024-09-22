const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve ('1 is resolved'), 1000);
});

const secondPromise = new Promise ((resolve, reject) => {
   setTimeout(() => reject ('2 is rejected'), 2000); 
});

firstPromise
.then(result1 => {
    console.log(result1)
    return secondPromise;
})
.then(result2 => {
    console.log(result2);
})
.catch(error => {
    console.log("Erreur:", error);
});