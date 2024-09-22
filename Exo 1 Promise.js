const allIsGood = true
const myPromise = new Promise((resolve, reject) => {

    if (allIsGood) {
       setTimeout(() => resolve("It's Ok !"), 2000);
    } else {
        reject ("Error")
    }
});

myPromise
  .then(results => {
    console.log(results); 
  })
  .catch(error => {
    console.log(error); 
  });