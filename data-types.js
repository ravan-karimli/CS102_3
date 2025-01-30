// Data Types in Javascript

// Javascript-də 2 cür data type var:
// 1. Primitive Data Types:
// 2. Reference Data Types:


// Primitive Data Types:

// 1. String --> String dəyəri tək (" ") və ya cüt (' ') dırnaq arasında yazılır.
let string = "Hello World";
console.log(string);

console.log(typeof string);


// 2. Number --> Rəqəmlər birbaşa yazılır, dırnaq olmur.
let number = 10;
console.log(number);

console.log(typeof number);


// 3. Boolean --> Boolean yalnız iki dəyər alır: true (doğru) və false (yanlış)
let boolean = true;
console.log(boolean);

console.log(typeof boolean);


// 4. Null --> "null" xüsusi bir dəyərdir boş bir dəyər mənasını verir. Dəyişənin məqsədli şəkildə boş olduğunu göstərir.
let nullValue = null;
console.log(nullValue);

console.log(typeof nullValue); // object (JavaScript-in səhvi nəticəsində null "object" kimi göstərilir)


// 5. Undefined --> Dəyişən yaradılıb, amma dəyər verilməyib. Buda null kimi bir boş dəyər mənasını verir. Ancaq null-dan fərqli olaraq burada dəyişənin məqsədli olaraq boş olmur.
let undefinedValue;
console.log(undefinedValue);

console.log(typeof undefinedValue);


// 6. Symbol--> Symbol obyektlərdə identifikator və ya açar kimi istifadə edilə bilən unikal dəyərləri təmsil etmək üçün istifadə olunur.
let symbol = Symbol();
console.log(symbol);

console.log(typeof symbol);


// 7. BigInt -->  BigInt 2^53-dən böyük ədədləri saxlamaq üçün istifadə olunur.
let bigint = 9007199254740991n;
console.log(bigint);

console.log(typeof bigint);



// Non-Primitive Data Types:

// 1. Object --> Object bir neçə dəyəri birlikdə saxlamaq üçün istifadə olunur. Burda hər bir data key-value prinsipi ilə saxlanılır. Yəni hər bir datanın özünə uyğun bir "key"-i olur
let person = {
    name: "Mahaddin", // name-key, Mahadin-value
    age: 25 // age-key, 25-value
};
console.log(person);

console.log(typeof person);


// 2. Array

let fruits = ["alma", "banan", "portağal"]; // array yaratmaq

// Array-in uzunluğunu ekrana yazdırmaq
console.log("Array uzunluğu: " + fruits.length);

// İlk elementi ekranda göstərmək
console.log("İlk element: " + fruits[0]);

// Son elementi ekranda göstərmək
console.log("Son element: " + fruits[fruits.length - 1]);
