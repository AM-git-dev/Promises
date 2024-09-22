const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve ('1 is resolved'), 1000);
});

const secondPromise = new Promise ((resolve, reject) => {
   setTimeout(() => reject ('2 is rejected'), 2000); 
});

async function f() {

    try {
        const result1 = await firstPromise;
        console.log(result1);
        
        const result2 = await secondPromise;
        console.log(result2);
    } catch (error) {
        console.log("Erreur:", error);
    }
}

f();
