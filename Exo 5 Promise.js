
function firstPromise () {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) {
            resolve ('1 is resolved');
        } else {
            reject ('1 is rejected');
        }
    }, 1000);
       
});
}

async function f() {

    try {
        const result1 = await firstPromise();
        console.log(result1);

        const result2 = await firstPromise();
        console.log(result2);

        const result3 = await firstPromise();
        console.log(result3);
    } catch (error) {
        console.log("Erreur:", error);
    }
}

f();