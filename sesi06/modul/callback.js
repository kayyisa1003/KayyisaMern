// MEMASAK MIE
function masakMie(rasa, callback)  {
    console.log("Basyasman memasak mie dengan rasa " + rasa);
    setTimeout(() => {
        callback("Mie rasa " + rasa + " sudah matang!🤩🤩");
    }, 1000);
}

// MENGHIDANGKAN - CALLBACK
function hidangkanMie(Mie) {
    console.log("Basyasman: " + Mie); 
}

// JALANKAN
console.log("CALLBACK");

console.log("Kayyisa Mencuci Piring")
masakMie("Soto", hidangkanMie);
console.log("Kayyisa : Piring Sudah Bersih!😗")

