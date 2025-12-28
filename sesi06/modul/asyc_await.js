// MEMASAK MIE
function masakMie(rasa)  {
    console.log("Basyasman memasak mie dengan rasa " + rasa);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rasa) {
                
                resolve("Mie rasa " + rasa + " sudah matang!🤩🤩");
            } else {
                reject("Gagal memasak mie, rasanya tidak tersedia. kasiann dehhh!😭🙏");
            }
        }, 3000);
    })
}

// FUNGSI ASYNC AWAIT
async function hidangkan(rasa) {
    try {
        const mie = await masakMie("soto");
        console.log("Basyasman: " + mie);
    } catch (error) {
        console.log("Error: " + error);
    }
}


// JALANKAN
console.log("ASYNC AWAIT");
console.log("Kayyisa Mencuci Piring💦")
hidangkan();
console.log("Kayyisa : Piring Sudah Bersih!😗")