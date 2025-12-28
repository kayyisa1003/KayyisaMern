console.log("hello Calon Husain");

//import dengan nemed export
import { penjumlahan, PI} from './kalkulator.js'; 

//import dengan default export (langsung jadi variabel baru)
import hitungan from './kalkulator.js';

const hasil = penjumlahan(25, 95);
console.log(`hasil penjumlahan: ${hasil}`);

const luasPermukaanBumi = 4 * PI * (6371  * 6371);
console.log(`Luas Permukaan Bumi adalah ${luasPermukaanBumi.toLocaleString()} km²`);


const object = new hitungan(100);
console.log(`nilai angka adalah ${object.angka}`);