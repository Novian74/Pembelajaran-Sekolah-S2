let tampil = document.querySelector("#belajar");

// klik.addEventListener("click", hasil);
klik.onclick = function () {
    a = "ridwan";
    alert(a);
}

function hasil() {
    alert("hi gus");
}

function zodiak() {
    let tgl = document.getElementsByName("tgl").length;
    let bln = document.querySelector("#tanggal").value;
    let hasil = "salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil = "zodiak belum di buat";
        if (bln == 1) {
            if (tgl >= 0 && tgl <= 19) {
                hasil = 'Capricorn';
            }
            if (tgl >= 20 && tgl <= 31) {
                hasil = 'Aquarius';
            }
        }
        if (bln == 2) {
            if (tgl >= 0 && tgl <= 18) {
                hasil = 'Aquarius';
            }
            if (tgl >= 19 && tgl <= 29) {
                hasil = 'Pisces';
            }
        }
        if (bln == 3) {
            if (tgl > 0 && tgl < 20) {
                hasil = 'Pisces';
            }
            if (tgl > 0 && tgl < 20) {
                hasil = 'Pisces';
            }
        }
        if (bln == 4) {
            if (tgl > 0 && tgl < 19) {
                hasil = 'Aries';
            }
            if (tgl > 20 && tgl < 31) {
                hasil = 'Taurus';
            }
        }
        if (bln == 5) {
            if (tgl > 21 && tgl < 31) {
                hasil = 'Gemini';
            }
            if (tgl > 0 && tgl < 20) {
                hasil = 'Libra';
            }
        }
        if (bln == 6) {
            if (tgl > 0 && tgl < 21) {
                hasil = 'Gemini';
            }
            if (tgl > 22 && tgl < 31) {
                hasil = 'Cancer';
            }
        }
        if (bln == 7) {
            if (tgl > 23 && tgl < 31) {
                hasil = 'Leo';
            }
            if (tgl > 0 && tgl < 20) {
                hasil = 'Cancer';
            }
        }
        if (bln == 8) {
            if (tgl > 0 && tgl < 22) {
                hasil = 'Leo';
            }
            if (tgl > 23 && tgl < 31) {
                hasil = 'Virgo';
            }
        }
        if (bln == 9) {
            if (tgl > 0 && tgl < 23) {
                hasil = 'Virgo';
            }
            if (tgl > 23 && tgl < 31) {
                hasil = 'Libra';
            }
        }
        if (bln == 10) {
            if (tgl > 0 && tgl < 22) {
                hasil = 'Libra';
            }
            if (tgl > 23 && tgl < 31) {
                hasil = 'Scorpio';
            }
        }
        if (bln == 11) {
            if (tgl > 0 && tgl < 21) {
                hasil = 'Scorpio';
            }
            if (tgl > 22 && tgl < 31) {
                hasil = 'Sagitarius';
            }
        }
        if (bln == 12) {
            if (tgl > 0 && tgl < 21) {
                hasil = 'Sagitarius';
            }
            if (tgl > 22 && tgl < 31) {
                hasil = 'Capricorn';
            }
        }
    }
    console.log(hasil);
    tampil.innerHTML = hasil;
}

lulus(60);
function lulus(nilai) {
    let hasil = "Nilai Salah";
    let kkm = 80;
    if (nilai > 0 && nilai <= 100) {
        if (nilai >= kkm) {
            hasil = "Lulus";
        }
        if (nilai < kkm) {
            hasil = "tidak lulus";
        }
    }
    console.log(hasil);
}

console.log(terbilang(2000002));
function terbilang(angka) {
    let bilangan = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
    if (angka < 12) {
        return bilangan[angka];
    } else if (angka < 20) {
        return terbilang(angka - 10) + "belas";
    } else if (angka < 100) {
        return terbilang(Math.floor(parseInt(angka) / 10)) + " puluh " + terbilang(parseInt(angka) % 10);
    } else if (angka < 200) {
        return "seratus " + terbilang(parseInt(angka) - 100);
    } else if (angka < 1000) {
        return terbilang(Math.floor(parseInt(angka) / 100)) + " ratus " + terbilang(parseInt(angka) % 100);
    } else if (angka < 2000) {
        return "seribu " + terbilang(parseInt(angka) - 1000);
    } else if (angka < 1000000) {
        return terbilang(Math.floor(parseInt(angka) / 1000)) + " ribu " + terbilang(parseInt(angka) % 1000);
    } else if (angka < 1000000000) {
        return terbilang(Math.floor(parseInt(angka) / 1000000)) + " juta " + terbilang(parseInt(angka) % 1000000);
    } else if (angka < 1000000000000) {
        return terbilang(Math.floor(parseInt(angka) / 1000000000)) + " miliyar " + terbilang(parseInt(angka) % 1000000000);
    } else if (angka < 1000000000000000) {
        return terbilang(Math.floor(parseInt(angka) / 1000000000000)) + " trilyun " + terbilang(parseInt(angka) % 1000000000000);
    }
}

prima(2);
function prima(bilangan) {
    let prima = true;
    if (bilangan === 1) {
        console.log("1 bukan bilangan prima");
    } else if (bilangan > 1) {
        for (let i = 2; i < bilangan; i++) {
            if (bilangan % i == 0) {
                prima = false;
                break;
            }
        }
        if (prima) {
            console.log(`${bilangan} adalah bilangan prima`);
        } else {
            console.log(`${bilangan} bukan bilangan prima`);
        }
    } else {
        console.log("Bilangan ini bukan bilangan prima");
    }
}