// MEMASAK MIE
function masakMie(rasa)  {
    console.log("Basyasman memasak mie dengan rasa " + rasa);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rasa) {
                
                resolve("Mie rasa " + rasa + " sudah matang!🤩🤩");
            } else {
                reject("Gagal memasak mie, rasa tidak tersedia!😢");
            }
        }, 3000);
    })
}

// JALANKAN
console.log("Kayyisa Mencuci Piring")
masakMie("Soto").then((mie) => {
    console.log("Basyasman: " + mie); 
}).catch((error) => {
    console.log("Error: " + error);
});
console.log("Kayyisa : Piring Sudah Bersih!😗")