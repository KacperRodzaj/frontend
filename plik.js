// String
let imie = "Kacper";
//Number
let wiek = 22;
//Boolean
let czyStudent = true;
//Array
let jezyki = ["Angielski", "Polski","Niemiecki"];
//Object
let ja = {imie:"Kacper",
    wiek: 25,
    miasto: "Krosno"
};
//null i undefined
let pustaWartosc = null;
let niezidentyfikowana;

//wypisywanie
console.log(typeof imie, "imie");
console.log(typeof wiek, "wiek");
console.log(typeof czyStudent, "czyStudent");
console.log(typeof jezyki, "języki");
console.log(typeof ja, "ja");
console.log(typeof pustaWartosc, "pustaWartosc");
console.log(typeof niezidentyfikowana, "niezidentyfikowana");

//Operacje arytmetyczne
let a = 2;
let b = 5;

console.log("a + b =", a+b);
console.log("a - b =", a-b);
console.log("a * b =", a*b);
console.log("a / b =", a/b);
console.log("a % b =", a%b);

// Porównania

console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");

//Operatory logiczne

let x= true;
let y=false;

console.log("x && y =", x&&y);
console.log("x || y =", x||y);
console.log("!x =", !x);

// 4. Sprawdzanie czy liczba jest parzysta

function czyParzysta(liczba)
{
    if (liczba % 2 == 0 )
    {
        console.log(liczba + "Jest parzysta")
    }else 
    {
        console.log(liczba + "Jest nieparzysta")
    }
}
// 5. Kalkulator ocen 0-100
function ocenaSlowna(punkty) {
let ocena;
if (punkty < 50) {
ocena = "niedostateczny";
} else if (punkty < 70) {
ocena = "dostateczny";
} else if (punkty < 85) {
ocena = "dobry";
} else if (punkty <= 100) {
ocena = "bardzo dobry";
} else {
ocena = "poza zakresem";
}
console.log("Punkty:", punkty, "Ocena:", ocena);
}
ocenaSlowna(73);

// 6. Dzień tygodnia po numerze (1–7)
function dzienTygodnia(nr) {
switch (nr) {
case 1: console.log("Poniedziałek"); break;
case 2: console.log("Wtorek"); break;
case 3: console.log("Środa"); break;
case 4: console.log("Czwartek"); break;
case 5: console.log("Piątek"); break;
case 6: console.log("Sobota"); break;
case 7: console.log("Niedziela"); break;
default: console.log("Nieprawidłowy numer dnia");
}
}
dzienTygodnia(3);

// 7. Operator trójargumentowy (pełnoletność)
function czyPelnoletni(wiek) {
const wynik = (wiek >= 18) ? "pełnoletni" : "niepełnoletni";
console.log("Wiek:", wiek, "-", wynik);
}
czyPelnoletni(20);

// 8. Pętla for 1 do 10
for (let i = 1; i <= 10; i++) {
console.log("i =", i);
}

// 9. while odliczanie 10 do 0
let j = 10;
while (j >= 0) {
console.log("j =", j);
j--;
}

// 10. do...while iteracja po tablicy
const liczby = [3, 7, 2, 9];
let k = 0;
do {
console.log("liczby[k] =", liczby[k]);
k++;
} while (k < liczby.length);

// 11. for...in po właściwościach obiektu
const auto = {
marka: "BMW",
model: "X5",
rok: 2020
};
for (let klucz in auto) {
console.log(klucz, ":", auto[klucz]);
}

// 12. for...of po tablicy, z break/continue
const imiona = ["Ania", "Bartek", "Cezary", "Daria"];

for (let imie of imiona) {
if (imie === "Bartek") continue; // pomiń Bartka
if (imie === "Daria") break; // przerwij na Darii
console.log("Imię:", imie);
}
// 13. Tabliczka mnozenia

for (let i = 1; i<=10; i++)
{
let wiersz = "";
for (let j = 1; j<=10; j++)
{
    const wynik = i*j;
    wiersz += wynik.toString().padStart(4, " ");
}
console.log(wiersz);
}
