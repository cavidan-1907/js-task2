//1. Yaradılan funksiya iki parametr tələb edir : məsafə və zaman.
//2. Şərtlər :        
//1. Əgər avtomobilin ortalama sürəti 0-60 km/s arasıdırsa 100km-ə ortalama 6 litr yanacaq sərf edir.
// 2. Əgər avtomobilin ortalama sürəti 60-90 km/s arasıdırsa 100km-ə ortalama 9 litr yanacaq sərf edir.
// 3. Əgər avtomobilin ortalama sürəti 90-120- km/s arasıdırsa 100km-ə ortalama 8 litr yanacaq sərf edir.
//  4. Əgər avtomobilin ortalama sürəti 120 km/s-dan çoxdursa 100km-ə ortalama 10 litr yanacaq sərf edir.
// Funksiya çıxışda "130 km yolu 2 saat müddətinə getmək üçün, sizin ortalama sürətiniz 75 km saat olmalıdır. Sizə lazım olacaq yanacaq miqdarı 12 litr, ortalama yanacaq sərfiyyatı isə 9 l/100 km olacaq" tipli string qaytarmalıdır. 

// const yanacaq = function (mesafe, zaman) {
//     let benzin;
//    const  suret = mesafe / zaman;
//     if (suret >= 0 && suret <= 60) {
//         benzin = 6;
//     }
//     else if (suret >= 60 && suret <= 90) {
//         benzin = 9;
//     }
//     else if (suret >= 90 && suret <= 120) {
//         benzin = 8;
//     }
//     else benzin = 10;
//     const yanacaqMiqdari = (mesafe / 100) * benzin;
//     return `${mesafe} km yolu ${zaman} saat müddətinə getmək üçün, sizin ortalama sürətiniz ${suret} km saat olmalıdır. 
//     Sizə lazım olacaq yanacaq miqdarı ${yanacaqMiqdari} litr,   ortalama yanacaq sərfiyyatı isə ${benzin} l/100 km olacaq.`; 
// }
// console.log(yanacaq(150,2));






    // const yanacaq = (mesafe, zaman) => {
    //     let benzin;
    //     const yanacaqMiqdari = (mesafe / 100) * benzin;
    //     const suret = mesafe / zaman;
    //     if (suret >= 0 && suret <= 60) {
    //         benzin = 6;
    //     } else if (suret >= 60 && suret <= 90) {
    //         benzin = 9;
    //     } else if (suret >= 90 && suret <= 120) {
    //         benzin = 8;
    //     } else {
    //         benzin = 10;
    //     }
    //     return `${mesafe} km yolu ${zaman} saat müddətinə getmək üçün, sizin ortalama sürətiniz ${suret} km saat olmalıdır. 
    //     Sizə lazım olacaq yanacaq miqdarı ${yanacaqMiqdari} litr,   ortalama yanacaq sərfiyyatı isə ${benzin} l/100 km olacaq.`;
    // };
    
    // console.log(yanacaq(150, 2));

















    // function yanacaq(mesafe, zaman) {
    //     const suret = mesafe / zaman;
    //     let benzin;
        
    //     if (suret >= 0 && suret <= 60) {
    //         benzin = 6;
    //     } else if (suret > 60 && suret <= 90) {
    //         benzin = 9;
    //     } else if (suret > 90 && suret <= 120) {
    //         benzin = 8;
    //     } else {
    //         benzin = 10;
    //     }
    
    //     const yanacaqMiqdari = (mesafe / 100) * benzin;
        
    //     return `${mesafe} km yolu ${zaman} saat müddətinə getmək üçün, sizin ortalama sürətiniz ${suret} km saat olmalıdır. 
    //     Sizə lazım olacaq yanacaq miqdarı ${yanacaqMiqdari} litr, ortalama yanacaq sərfiyyatı isə ${benzin} l/100 km olacaq.`;
    // }
    
    // console.log(yanacaq(150, 2));
    




    
    const yanacaq = (mesafe, zaman) => {
        const suret = mesafe / zaman;
        const benzin = (suret >= 0 && suret <= 60) ? 6 :
                      (suret > 60 && suret <= 90) ? 9 :
                      (suret > 90 && suret <= 120) ? 8 : 10;
    
        const yanacaqMiqdari = (mesafe / 100) * benzin;
        return `${mesafe} km yolu ${zaman} saat müddətinə getmək üçün, sizin ortalama sürətiniz ${suret} km saat olmalıdır. 
        Sizə lazım olacaq yanacaq miqdarı ${yanacaqMiqdari} litr, ortalama yanacaq sərfiyyatı isə ${benzin} l/100 km olacaq.`;
    };
    
    console.log(yanacaq(150, 2));