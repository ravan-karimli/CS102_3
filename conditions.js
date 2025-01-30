// 1. if Statement --> Bir şərt ödənildikdə müəyyən kodu icra edir.
let age = 20;

if (age >= 18) {
    console.log("Siz yetkinsiniz.");
} else {
    console.log("Siz yetkin deyilsiniz.")
}



// 2. if...else Statement --> Şərt doğru (true) olduqda bir kod, əks halda (false) digər kod icra olunur.
let num = 10;

if (num % 2 === 0) {
    console.log("Bu rəqəm cütdür.");
} else {
    console.log("Bu rəqəm təkdir.");
}
// ✅ Çıxış: Bu rəqəm cütdür. Çünki (10 % 2)-də qalıq 0 olduğuna görə şərt true olur.



// 3. if...else if...else Statement --> Birdən çox şərti yoxlamaq üçün istifadə olunur.
let score = 85;

if (score >= 90) {
    console.log("Sizin qiymətiniz: A");
} else if (score >= 80) {
    console.log("Sizin qiymətiniz: B");
} else if (score >= 70) {
    console.log("Sizin qiymətiniz: C");
} else {
    console.log("Sizin qiymətiniz: D və ya F");
}
// ✅ Çıxış: Sizin qiymətiniz: B



// 4. switch Statement --> Birdən çox şərti yoxlamaq üçün daha oxunaqlı bir alternativdir. Burada şərt case qarşısında qeyd olunur.
let day = 3;
let dayName;

switch (day) {
    case 1:  // day == 1 yoxlayır. 
        dayName = "Bazar ertəsi";
        break;
    case 2: // day == 2 yoxlayır. Bunu bütün sətrlərdə yoxlayır.
        dayName = "Çərşənbə axşamı";
        break;
    case 3:
        dayName = "Çərşənbə";
        break;
    case 4:
        dayName = "Cümə axşamı";
        break;
    case 5:
        dayName = "Cümə";
        break;
    case 6:
        dayName = "Şənbə";
        break;
    case 7:
        dayName = "Bazar";
        break;
    default:
        dayName = "Yanlış gün!";
}

console.log("Bugün: " + dayName);   
// ✅ Çıxış: Bugün: Çərşənbə. Çünki yuxarıda "day" dəyərini 3 təyin elədik və 3 - ə qarsı case 3-dən uyğun gəlir deyə "Çərşənbə" yazılır.

// Burada yazılan "default"un yazılmaa səbəbi əgər case-lərdə olan heç bir dəyər uyğun olmasa bu zaman bu default bir cavab qaytarır.



// switch ilə if-else fərqi
// if-else bir neçə şərti müqayisə etmək lazımdırsa (>, <, >=, <=, ===, !==) və ya mürəkkəb məntiq varsa. istifadə olunur

// switch sabit (constant) dəyərləri yoxlayırsa (case 1, case "apple", case true) isitfadə olunur. Bəzi hallarda daha oxunaqlı olduğu üçün işlədilir (məsələn, menyu seçimləri).



// 5. Ternary Operator (? :) --> Ternary operatorudur. If-else in bir sətirdə yazıla bilən versiyasıdır.
let age_1 = 18;
let message = (age_1 >= 18) ? "Yetkin yaşdasiniz" : "Yetkin deyilsiniz"; // Cavab "Yetkin yaşdasınız" olacaq
console.log(message);

// Burda (age >= 18) şərtdir. "?" işarəsindən sonra true olan halda qayıdacaq cavab yazılır, ":" ishtərəsindən sonra false olan halda qayıdacaq cavab yazılır. İndi if-else ilə arasındakı fərqi görmək üçün aşağıdakı nümunəyə baxaq
let age_2 = 18;

let message_1;
if (age_2 >= 18) {
    message_1 = "Yetkinyasiniz";
} else {
    message_1 = "Yetkin deyilsiniz";
}
console.log(message_1); // Cavab "Yetkin yaşdasınız" olacaq