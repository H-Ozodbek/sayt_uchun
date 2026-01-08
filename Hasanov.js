/* Created by Hasanov Ozodbek */
/* @create-date: 16.06.2022; @create-time: 23:00 */



// consoleFunc(16); // bu funksiyani ichiga yoshingizni kiritishingiz kerak.




var host = document.location.host, //Sayt qaysi hostingda turganini bilish
    hostname = document.location.hostname, //Sayt turgan hosting nomini bilish bilish
    stringLink = document.location.toString(); //saytning url ni string tipida qaytaradi
    // siteLink = document.location.href,
    // saytManziliniOzgartirish = document.location.replace(siteLink);

function consoleFunc(y) {
    let age = `${y}`;
    age = Number.parseInt(age);
    console.log("%c Salom bu consoledagi textga style berish.", "color:red; font-size:xx-large;");
    console.log("%c Salom bu consoledagi %ctextga style berish.", "color:red; font-size:xx-large;", 'color:blue; font-size:xx-large;');
    console.log("Assalomu aleykum !!!, %sning yoshi hozir %d-da.", "Ozodbek", age);
    // console.warn("Bu ogohlantirish !!!"); // bu consolga warn-ogohlanirish oynasi ko'rinishida chiqadi
    // console.error("Bu taqiqlash ya'ni xato !!!"); // bu consolga error-xatolik oynasi ko'rinishida chiqadi

    console.info("Xush kelibsiz !!!", "Welcome !!!"); // bu consolga info-ma'lumot oynasi ko'rinishida chiqadi

    const Gdata = [{
            ism: "Abdurahmon domla",
            vazifa: "O'qituvchi",
            yosh: 24
        },
        {
            ism: "Ozodbek",
            vazifa: "O'quvchi",
            yosh: age
        },
        {
            ism: "Husanboy aka",
            vazifa: "O'quvchi",
            yosh: false
        },
        {
            ism: "Shaxboz aka",
            vazifa: "O'quvchi",
            yosh: false
        },
        {
            ism: "Diyorbek aka",
            vazifa: "O'quvchi",
            yosh: false
        }
    ]; //massiv ichida joylashgan obyektlar
    console.assert(Gdata); //tushunmadim vazifasini
    console.table(Gdata); //Gdata nomli massivni jadval ko'rinishiga otkazadi
    console.debug("hello", 'salom'); //tushunmadim vazifasini
    const tozala = console.clear(); // bu f consolda ishlatilgan barcha narsani tozalaydi
    console.group("Guruhdagilar");
    console.groupCollapsed("O'qituvchi");
    console.log("Abdurahmon domla");
    console.groupEnd();
    console.groupCollapsed("O'quvchilar");
    console.log("Shaxboz aka");
    console.log("Husanboy aka");
    console.log("Diyorbek aka");
    console.log("Men");
    console.groupEnd();
    console.groupEnd();

    let data = [1, 2, 3, 4, 5, 6, 7];
    let data1 = [8, 9, 10, 11, 12, 13, 14];
    let data2 = [16, 17, 18, 19, 20, 21];
    // console.log(...data);
    let combined = [...data, ...data1, ...data2];
    console.log(...combined);
    console.log(Math.max(...combined));
};

// consoleFunc(16);


let a = document.baseURI; // Faylning qayerda joylasshganligini ko'rsatadi.
console.warn(a);


// let lang=navigator.language;
// let gLoc=navigator.geolocation;
// let mD=navigator.mediaDevices;
// let onLine=navigator.onLine;
// let storage=navigator.storage;
// let vib=navigator.vibrate(200);
// let lock=navigator.locks.request();


const infoMalumot = "ⓘ",
    warnOgohlantirish = "!",
    errorXato = "⊗",
    funksiyaIcon = "ƒ";

// var e = new Error('Bu xatolik operatori.');
// console.log(e.stack);

// battery ( batareya ) bilan ishlash

navigator.getBattery().then((battery) => {
    console.log(battery);
})

navigator.getBattery().then((battery) => {
    console.log(battery.level);
})

navigator.getBattery().then((battery) => {
    console.log(battery.charging);
})

navigator.getBattery().then((battery) => {
    let a = battery.charging;
    let b = battery.level;
    let c = (a == true) ? "Kompyuter zaryadlanmoqda." : "Kompyuter zaryadlanmayapti.";
    console.log(c);
    // b=parseInt(b);
    // b = parseFloat(b);
    // b = String(b);
    // b = toString(b);
    b = Array.from(b);
    console.log("Qurilma zaryadi %s% ", b);
});

let lang = navigator.language;
let langs = navigator.languages;
console.log(lang, ...langs)

// sayt titlesini olish
let title = document.title;

// saytga ulangan scriptlar
let script = document.scripts;

// Saytga ulangan 1-chi scriptning linkini ko'rish
let script1 = document.scripts[0].src;

// saytga ulangan styllar
let styles = document.styleSheets;

// Saytga ulangan 1-chi stilning linkini ko'rish
let style1 = document.styleSheets[0].href;

// sayt kodini consolega chiqarish
// let scrollingElement = document.scrollingElement;

// onLine ligini bilishni yana bir usuli
let onLine = navigator.onLine;



var zero = 0,
    empty = "",
    knull = null,
    notANumber = NaN,
    notDefined;

// let manzilga_yonaltirish = document.location.href('file:///D:/Katalog/darslar/Bootstrap_darslar/');

// let manzilni_ozgartir=document.location.replace('fayl nomi.html');
// document.activeElement
// document.all
// document.baseURI
// document.childNodes[1]
// document.children[0].hidden='';
// document.children[0].hidden='true';
// document.children[0].innerHTML
// document.children[0].firstChild//head code
// document.children[0].lastChild//body code
// document.documentURI // hujjatning qayerda joylashganin ko'rsatadi


var sayt_domeni = document.domain,
    hujjatning_manzili = document.documentURI;

// console.clear();

// class bilan ishlash

class Data { //classga Data degan nom berdik
    name = "Ozodbek"; // o'zgaruvchi e'lon qilishda = belgisidan fo.d kerak
    famliy_name = "Hasanov";
    constructor(ism, fam) {
        ism = "Ozodbek"; // o'zgaruvchi e'lon qilishda = belgisidan fo.d kerak
        fam = "Hasanov";
    }
}
let d = new Data(); // Classning obyektdan yagona farqi uni bitta o'zgaruvchiga tenglashtirib e'lon qilish kerak.

console.log(d); //obyektni chiarish
console.log(d.name); // obyekt ichidagi o'zgaruvchini chqarish


/*

class meva {
    constructor(mevaNomi) {
       this.name = mevaNomi;
    }
 }
 var n= prompt('Meva nomi: ');
 var meva = new meva(n);
 document.getElementById("demo").innerHTML = meva.name;

 //bu kodda sahifa ochilganda meva nomini so'raydi va uni demo nomli elementga chiqaradi
*/

// console.log("%cOzodbek !!!",
//     "color:blue; font-size:xx-large;"
// );

// document.URL = "https://hasanov.w3spaces.com";

let kodirovka = document.characterSet = "UTF-8";
console.log(kodirovka);

// console.log("%c INSHAALLAH ☪️ ", "color:white; font-size:50px;");
// console.log("%c ALHAMDULILLAH ☪️ ", "color:white; font-size:50px;");
// console.log("%c SUBHANALLOH ☪️ ", "color:white; font-size:50px;");
// console.log("%c ALLOHUAKBAR ☪️ ", "color:white; font-size:50px;");

// console.log("%c Ey Robbim! Qalbimga qarshi chiqa olmayapman. Elnurani juda yaxshi ko'raman ", "color:white; font-size:50px;");


// let urle=new URIError('url xato');




// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ,
// assert: ƒ assert()
// clear: ƒ clear()
// context: ƒ context()
// count: ƒ count()
// countReset: ƒ countReset()
// debug: ƒ debug()
// dir: ƒ dir()
// dirxml: ƒ dirxml()
// error: ƒ error()
// group: ƒ group()
// groupCollapsed: ƒ groupCollapsed()
// groupEnd: ƒ groupEnd()
// info: ƒ info()
// log: ƒ log()
// memory: MemoryInfo {totalJSHeapSize: 10000000, usedJSHeapSize: 10000000, jsHeapSizeLimit: 269000000}
// profile: ƒ profile()
// profileEnd: ƒ profileEnd()
// table: ƒ table()
// time: ƒ time()
// timeEnd: ƒ timeEnd()
// timeLog: ƒ timeLog()
// timeStamp: ƒ timeStamp()
// trace: ƒ trace()
// warn: ƒ warn()
// }


// Logging object JSON
console.log({
    'Email': 'hasanovozodbek33@gmail.com',
    'Groups': {},
    'Id': 0,
    'IsHiddenInUI': true,
    'IsSiteAdmin': true,
    'LoginName': 'hasanovozodbek33@gmail.com',
    'PrincipalType': 7,
    'Title': 'Hasanov Ozodbek'
});



// element yaratish
// var element = document.createElement('h1');
// element.textContent = "Hasanov Ozodbek";
// element.style.fontFamily= "sans-serif";
// document.body.appendChild(element); //add the newly created element to the DOM


// svg teg qo'shish
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 1200;
svg.height = 50;
var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');
text.setAttribute('y', '50');
text.style.fontFamily = 'sans-serif';
text.style.fontSize = '24';
text.textContent = 'As Salamu Alaykum va Rohmatulilohu Barokatuh.';
svg.appendChild(text);
// document.body.appendChild(svg);


// Saytga rasm qo'shish
var img = new Image();
img.src = '../img/my_pic.jpg';
// img.src = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';
// document.body.appendChild(img);



// Misollar
// null == undefined; // true
// null === undefined; // false
// typeof null; // 'object';

// ### Testing for NaN using isNaN()
// window.isNaN()

// isNaN(NaN);  // true
// isNaN(1);  // false: 1 is a number
// isNaN(-2e-4);  // false: -2e-4 is a number (-0.0002) in scientific notation
// isNaN(Infinity);  // false: Infinity is a number
// isNaN(true);  // false: converted to 1, which is a number
// isNaN(false);  // false: converted to 0, which is a number
// isNaN(null);  // false: converted to 0, which is a number
// isNaN("");  // false: converted to 0, which is a number
// isNaN(" ");  // false: converted to 0, which is a number
// isNaN("45.3");  // false: string representing a number, converted to 45.3
// isNaN("1.2e3");  // false: string representing a number, converted to 1.2e3
// isNaN("Infinity");  // false: string representing a number, converted to Infinity
// isNaN(new Date);  // false: Date object, converted to milliseconds since epoch
// isNaN("10$");  // true : conversion fails, the dollar sign is not a digit
// isNaN("hello");  // true : conversion fails, no digits at all
// isNaN(undefined);  // true : converted to NaN
// isNaN();  // true : converted to NaN (implicitly undefined)
// isNaN(function(){}); // true : conversion fails
// isNaN({});  // true : conversion fails
// isNaN([1, 2]);  // true : converted to "1, 2", which can't be converted to a number


// // The one and only
// Number.isNaN(NaN);  // true
// // Numbers
// Number.isNaN(1);  // false
// Number.isNaN(-2e-4);  // false
// Number.isNaN(Infinity);  // false
// // Values not of type number
// Number.isNaN(true);  // false
// Number.isNaN(false);  // false
// Number.isNaN(null);  // false
// Number.isNaN("");  // false
// Number.isNaN(" ");  // false
// Number.isNaN("45.3");  // false
// Number.isNaN("1.2e3");  // false
// Number.isNaN("Infinity");  // false
// Number.isNaN(new Date);  // false
// Number.isNaN("10$");  // false
// Number.isNaN("hello");  // false
// Number.isNaN(undefined);  // false
// Number.isNaN();  // false
// Number.isNaN(function(){}); // false
// Number.isNaN({});  // false
// Number.isNaN([]);  // false
// Number.isNaN([1]);  // false
// Number.isNaN([1, 2]);  // false
// Number.isNaN([true]);  // false

// Not a Number === NaN

// window.hasOwnProperty('NaN'); // true
// NaN; // NaN
// typeof NaN; // 'number'
// NaN == NaN  // false
// NaN === NaN // false



// 1 / 0; // Infinity cheksiz
// Wait! WHAAAT?


// console ochilganda chiqadigan codlar
if (typeof window.console !== 'undefined') {
    console.log("My name is  Hasanov Ozodbek");
}

// vaqt funksiyasi
// vaqtni hisoblashni boshlaydi
// console.time('response in');

// shu joyga funksiya yoziladi

// vaqtning tugash vaqtini chiqaradi
// console.timeEnd('response in');


// console xossasi
// console.log("%cHello %cWorld%c!!", // bu string tipidagi matn
//     "color: blue;", // applies color formatting to the 1st substring 1chi so'zga rang berdik
//     "font-size: xx-large;", // applies font formatting to the 2nd substring 2chi so'zga o'lcham berdik
//     "/* no CSS rule*/" // does not apply any rule to the remaining substring 3chi so'zga izoh byozdik
// );







// ma'lumot turlarini String tipiga o'tkazish
var intString = String(32); // "32"
var booleanString = String(true); // "true"
var nullString = String(null); // "null"

var ism = `Ozodbek`,
    fam = `Hasanov`,
    toliqNom = `${fam} ${ism} !`;
console.log(toliqNom); // "Hasanov Ozodbek !"


