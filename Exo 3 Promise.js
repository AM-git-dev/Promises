const allIsGood = true

const firstPromise = new Promise ((resolve) => {
    setTimeout(() => resolve ('1 is resolved'), 1000)
});

const secondPromise = new Promise ((resolve, reject) => {
    if (allIsGood) {
        setTimeout(() => resolve("2 is resolved !"), 2000);
     } else { 
        
        setTimeout(() => reject ("The Second Promise is in Error"), 2000);
     }
})

Promise.all([firstPromise, secondPromise])
.then((state) => {
    console.log("All promises resolved:", state);
})
.catch((error) => {
    console.log('Error: ', error);
});
