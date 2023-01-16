function kali(a, b) {
    return a * b;
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