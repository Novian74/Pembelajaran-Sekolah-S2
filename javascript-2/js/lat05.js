function kali(d, e) {
    return d * e;
}

console.log(kali(2, 3));

let perkalian = (a, b) => a * b;

console.log(perkalian(4, 2));

let zodiak = (tgl, bln) => {
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil = "zodiak belum di buat";
        if (bln == 1) {
            if (tgl >= 0 && tgl <= 19) {
                return 'Capricorn';
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
    } else {
        hasil = "salah";
    }
    return hasil;
};

console.log(zodiak(2, 6));

let lulus = (nilai) => {
    let kkm = 80;
    if (nilai > 0 && nilai <= 100) {
        if (nilai >= kkm) {
            hasil = "Lulus";
        }
        if (nilai < kkm) {
            hasil = "Tidak Lulus";
        }
    } else {
        hasil = "Nilai Salah";
    }
    return hasil;
}

console.log(lulus(70));

let terbilang = (angkaa) => {
    let bilangan = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
    if (angkaa < 12) {
        return bilangan[angkaa];
    } else if (angkaa < 20) {
        return terbilang(angkaa - 10) + "belas";
    } else if (angkaa < 100) {
        return terbilang(Math.floor(parseInt(angkaa) / 10)) + " puluh " + terbilang(parseInt(angkaa) % 10);
    } else if (angkaa < 200) {
        return "seratus " + terbilang(parseInt(angkaa) - 100);
    } else if (angkaa < 1000) {
        return terbilang(Math.floor(parseInt(angkaa) / 100)) + " ratus " + terbilang(parseInt(angkaa) % 100);
    } else if (angkaa < 2000) {
        return "seribu " + terbilang(parseInt(angkaa) - 1000);
    } else if (angkaa < 1000000) {
        return terbilang(Math.floor(parseInt(angkaa) / 1000)) + " ribu " + terbilang(parseInt(angkaa) % 1000);
    } else if (angkaa < 1000000000) {
        return terbilang(Math.floor(parseInt(angkaa) / 1000000)) + " juta " + terbilang(parseInt(angkaa) % 1000000);
    } else if (angkaa < 1000000000000) {
        return terbilang(Math.floor(parseInt(angkaa) / 1000000000)) + " miliyar " + terbilang(parseInt(angkaa) % 1000000000);
    } else if (angkaa < 1000000000000000) {
        return terbilang(Math.floor(parseInt(angkaa) / 1000000000000)) + " trilyun " + terbilang(parseInt(angkaa) % 1000000000000);
    }
}

console.log(terbilang(30));

let prima = (bilangan) => {
    hasil = "";
    let prima = true;
    if (bilangan === 1) {
        hasil = "1 bukan bilangan prima";
    } else if (bilangan > 1) {
        for (let i = 2; i < bilangan; i++) {
            if (bilangan % i == 0) {
                prima = false;
                break;
            }
        }
        if (prima) {
            hasil = bilangan + " adalah bilangan prima";
        } else {
            hasil = bilangan + " bukan bilangan prima";
        }
    } else {
        hasil = "Bilangan ini bukan bilangan prima";
    }
    return hasil;
}

console.log(prima(5));
