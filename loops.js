// 1. for Loop --> Təyin edilmiş bir sayda təkrarlama üçün istifadə olunur. Bu funksiya döngülərin sayının dəqiq sayı bilinəndə istifadə olunur.
for (let i = 0; i < 5; i++) {
    console.log("Number: " + i);
}
// ✅ Çıxış: 
// Number: 0
// Number: 1
// Number: 2
// Number: 3
// Number: 4



// 2. for...in Loop --> Obyektlərin xüsusiyyətlərini və ya massivlərin indekslərini təkrarlamaq üçün istifadə olunur.
let person = {
    name: "John",
    age: 25,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// ✅ Çıxış: 
// name: John
// age: 25
// city: New York



// 3. for...of Loop --> Obyektlərdəki dəyərləri və ya massivlərin elementlərini təkrarlamaq üçün istifadə olunur.
let numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    console.log(number);
}
// ✅ Çıxış: 
// 10
// 20
// 30
// 40
// 50



// 4. while Loop --> Şərt doğru olduqca təkrarlamağa davam edir. Bu funskyanı döngülərin sayı bilinməyəndə istifadə olunur
let j = 0;
while (j < 5) {
    console.log("Number: " + j);
    j++; // Şərtin dəyişməsi üçün mütləq artırmaq lazımdır. Hər dövrdə j 1 vahid artacaq və 5-ə bərabər olanda artıq dayanacaq.
}
// ✅ Çıxış: 
// Number: 0
// Number: 1
// Number: 2
// Number: 3
// Number: 4



// 5. do...while Loop --> Şərt əvvəlcə yoxlanmadan əməliyyatları icra edir və sonra şərtə baxır. Bu, ən az bir dəfə əməliyyatın yerinə yetirilməsini təmin edir.
let k = 0;
do {
    console.log("Number: " + k);
    k++; // Şərtin dəyişməsi üçün artırma lazımdır
} while (k < 5);
// ✅ Çıxış: 
// Number: 0
// Number: 1
// Number: 2
// Number: 3
// Number: 4