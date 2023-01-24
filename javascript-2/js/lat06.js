let buah = ['mangga', 'jambu', 'jeruk', 'duren', 'apel'];

console.log(buah);

document.querySelector('#tampil').innerHTML = buah[0];


buah.forEach(e => {
    console.log(e);
});

// function kali(a, b) {
//     return a * b;
// }

// function tampil(a) {
//     return a;
// }

// console.log(kali(2, 3));
// console.log(tampil(2));

let kali = (a, b) => {
    return a * b;
}
let tampil = a => {
    console.log(a);
}

console.log(kali(2, 3));
tampil("belajar");