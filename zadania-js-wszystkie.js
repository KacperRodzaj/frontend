// ===================================================================
// ZADANIA JAVASCRIPT - KOMPLETNY ZESTAW
// Wszystkie 7 zadań w jednym pliku (JavaScript basics to SPA)
// Czas: ~8-10h, Punkty: 200 pkt
// ===================================================================

console.log(' Zadania JavaScript\n');

// ===================================================================
// ZADANIE 1: PIERWSZE KROKI (30 min, 15 pkt)
// ===================================================================
console.log('=== ZADANIE 1: Pierwsze kroki z JavaScript ===\n');

// Cz. A - Konfiguracja
console.log(' Skrypt załadowany!');

// Cz. B - Zmienne i typy danych
const imie = 'Piotr';           // String
const wiek = 28;                // Number
const jestStudentem = false;    // Boolean
const jezyki = ['JavaScript', 'HTML', 'CSS'];  // Array
const daneOsobowe = { imie: 'Kacper', wiek: 22, miasto: 'Krosno' };  // Object
const nic = null;               // null
let nieZadeklarowane;           // undefined

console.log('Typy danych:');
console.log('  typeof imie:', typeof imie);
console.log('  typeof wiek:', typeof wiek);
console.log('  typeof jestStudentem:', typeof jestStudentem);
console.log('  typeof jezyki:', typeof jezyki);
console.log('  typeof daneOsobowe:', typeof daneOsobowe);
console.log('  typeof nic:', typeof nic);  // "object" - bug JS
console.log('  typeof nieZadeklarowane:', typeof nieZadeklarowane);

// Cz. C - Operatory
console.log('\nOperatory arytmetyczne:');
console.log('  5 + 3 =', 5 + 3);
console.log('  10 - 4 =', 10 - 4);
console.log('  6 * 7 =', 6 * 7);
console.log('  20 / 4 =', 20 / 4);
console.log('  5 % 2 =', 5 % 2);
console.log('  2 ** 3 =', 2 ** 3);

console.log('\nPorównania == vs ===:');
console.log('  5 == "5":', 5 == '5', '(koercja - true)');
console.log('  5 === "5":', 5 === '5', '(ścisłe - false)');

console.log('\nOperatory logiczne:');
console.log('  true && false:', true && false);
console.log('  true || false:', true || false);
console.log('  !true:', !true);

// ===================================================================
// ZADANIE 2: INSTRUKCJE WARUNKOWE I PĘTLE (45 min, 20 pkt)
// ===================================================================
console.log('\n=== ZADANIE 2: Instrukcje warunkowe i pętle ===\n');

// Cz. A - Instrukcje warunkowe

// 1. Parzystość
function jestParzysta(liczba) {
    return liczba % 2 === 0 ? 'Parzysta' : 'Nieparzysta';
}
console.log('Parzystość: 4 -', jestParzysta(4));

// 2. Kalkulator ocen
function ocena(punkty) {
    if (punkty >= 90) return 'Ocena: 6';
    else if (punkty >= 75) return 'Ocena: 5';
    else if (punkty >= 60) return 'Ocena: 4';
    else if (punkty >= 50) return 'Ocena: 3';
    else if (punkty >= 30) return 'Ocena: 2';
    else return 'Ocena: 1';
}
console.log('Punkty 85:', ocena(85));

// 3. Switch - dzień tygodnia
function dzienTygodnia(nr) {
    switch (nr) {
        case 1: return 'Poniedziałek';
        case 2: return 'Wtorek';
        case 3: return 'Środa';
        case 4: return 'Czwartek';
        case 5: return 'Piątek';
        case 6: return 'Sobota';
        case 7: return 'Niedziela';
        default: return 'Błąd';
    }
}
console.log('Dzień 3:', dzienTygodnia(3));

// 4. Ternarny - pełnoletność
const wiekTest = 25;
console.log('Wiek 25:', wiekTest >= 18 ? 'Pełnoletni' : 'Niepełnoletni');

// Cz. B - Pętle
console.log('\nFor (1-10):');
for (let i = 1; i <= 10; i++) {
    process.stdout.write(i + ' ');  // Node.js, w przeglądarce brak
}
console.log('\n');

console.log('While (10-0):');
let x = 10;
while (x >= 0) {
    process.stdout.write(x + ' ');
    x--;
}
console.log('\n');

console.log('For...of (array):');
const tab = ['A', 'B', 'C'];
for (const el of tab) {
    process.stdout.write(el + ' ');
}
console.log('\n');

console.log('For...in (object):');
const obj = { a: 1, b: 2, c: 3 };
for (const k in obj) {
    console.log('  ' + k + ': ' + obj[k]);
}

console.log('\nBreak/Continue:');
for (let i = 0; i <= 10; i++) {
    if (i === 3) continue;
    if (i === 7) break;
    process.stdout.write(i + ' ');
}
console.log('\n');

// Cz. C - Tabliczka mnożenia
console.log('\nTabliczka mnożenia 1-10:');
let tabliczka = '';
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        tabliczka += (i * j).toString().padStart(3, ' ') + ' ';
    }
    tabliczka += '\n';
}
console.log(tabliczka);

// ===================================================================
// ZADANIE 3: FUNKCJE I ZAKRESY (50 min, 25 pkt)
// ===================================================================
console.log('=== ZADANIE 3: Funkcje i zakresy zmiennych ===\n');

// Cz. A - Deklaracje funkcji (4 sposoby)

// 1. Function Declaration
function deklaracja() {
    return 'Function Declaration';
}
console.log('1.', deklaracja());

// 2. Function Expression
const wyrażenie = function() {
    return 'Function Expression';
};
console.log('2.', wyrażenie());

// 3. Arrow Function
const strzałka = () => 'Arrow Function';
console.log('3.', strzałka());

// 4. IIFE (Immediately Invoked Function Expression)
(function() {
    console.log('4. IIFE');
})();

// Cz. B - Parametry

// Parametry domyślne
function powitanie(imie = 'Gość', tytuł = 'Pan/Pani') {
    return `${tytuł} ${imie}`;
}
console.log('\nParametry domyślne:', powitanie('Anna', 'Pani'));

// Rest parametry
function suma(...liczby) {
    return liczby.reduce((a, b) => a + b, 0);
}
console.log('Suma (1,2,3,4,5):', suma(1, 2, 3, 4, 5));

// Return obiekt
function dane() {
    return { x: 10, y: 20, z: 30 };
}
console.log('Return obiekt:', dane());

// Callback
function wykonaj(funkcja, a, b) {
    return funkcja(a, b);
}
console.log('Callback (add):', wykonaj((x, y) => x + y, 5, 3));

// Higher-order function
function razy(n) {
    return function(x) {
        return x * n;
    };
}
const razy2 = razy(2);
console.log('Higher-order (razy2(5)):', razy2(5));

// Cz. C - Zakresy i closures
console.log('\nZakresy i closures:');

// var vs let w pętli (problem klasyczny)
const funkcjewVar = [];
for (var i = 0; i < 3; i++) {
    funkcjewVar.push(() => i);
}
console.log('Pętla var (todas 3):', funkcjewVar.map(f => f()));

const funkcjewLet = [];
for (let j = 0; j < 3; j++) {
    funkcjewLet.push(() => j);
}
console.log('Pętla let (0,1,2):', funkcjewLet.map(f => f()));

// Closure - licznik
function licznik() {
    let stan = 0;
    return {
        zwiększ: () => ++stan,
        zmniejsz: () => --stan,
        odczyt: () => stan
    };
}
const mójLicznik = licznik();
console.log('Licznik++:', mójLicznik.zwiększ());
console.log('Licznik++:', mójLicznik.zwiększ());
console.log('Licznik-:', mójLicznik.zmniejsz());
console.log('Licznik odczyt:', mójLicznik.odczyt());

// ===================================================================
// ZADANIE 4: MANIPULACJA DOM (90 min, 30 pkt)
// ===================================================================
console.log('\n=== ZADANIE 4: Manipulacja DOM ===\n');
console.log('(Ta część wymaga HTML i przeglądarkę - kod poniżej)\n');

const kodDOM = `
// W przeglądarce, w pliku HTML z <div id="gallery">...</div>

// Cz. A - Wybieranie elementów
const galeriaDiv = document.getElementById('gallery');
const obrazki = document.querySelectorAll('img');
const tytul = document.querySelector('h1');
const rodzic = obrazki[0]?.closest('div');

// Cz. B - Modyfikacja
tytul.textContent = 'Moja Galeria';
obrazki[0].classList.add('active');
obrazki[0].style.opacity = '0.5';
obrazki[0].setAttribute('data-id', '123');
const id = obrazki[0].getAttribute('data-id');

// Cz. C - Lightbox
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<img id="lightbox-img"><button>X</button>';
lightbox.style.display = 'none';
document.body.appendChild(lightbox);

let aktualna = 0;

obrazki.forEach((img, idx) => {
    img.addEventListener('click', () => {
        aktualna = idx;
        lightbox.querySelector('#lightbox-img').src = img.src;
        lightbox.style.display = 'flex';
    });
});

lightbox.querySelector('button').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') aktualna = (aktualna + 1) % obrazki.length;
    if (e.key === 'ArrowLeft') aktualna = (aktualna - 1 + obrazki.length) % obrazki.length;
    if (e.key === 'Escape') lightbox.style.display = 'none';
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        lightbox.querySelector('#lightbox-img').src = obrazki[aktualna].src;
    }
});
`;

console.log(kodDOM);

// ===================================================================
// ZADANIE 5: FORMULARZE I WALIDACJA (90 min, 30 pkt)
// ===================================================================
console.log('\n=== ZADANIE 5: Formularze i walidacja ===\n');

const kodFormularza = `
// HTML: <form id="kontakt">
//   <input id="imie" required>
//   <input id="email" type="email">
//   <input id="telefon" type="tel">
//   <textarea id="wiadomosc" required></textarea>
//   <input id="zgoda" type="checkbox" required>
//   <button type="submit">Wyślij</button>
// </form>

const formularz = document.getElementById('kontakt');
const pola = {
    imie: document.getElementById('imie'),
    email: document.getElementById('email'),
    telefon: document.getElementById('telefon'),
    wiadomosc: document.getElementById('wiadomosc'),
    zgoda: document.getElementById('zgoda')
};

// Regex
const regexEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
const regexTelefon = /^\\d{9}$/;
const regexImie = /^[a-zA-ZąęćńóśźżĄĘĆŃÓŚŹŻ\\s]+$/;

// Walidacja
function waliduj() {
    const błędy = {};
    
    if (pola.imie.value.length < 2) błędy.imie = 'Min 2 znaki';
    if (!regexImie.test(pola.imie.value)) błędy.imie = 'Tylko litery';
    if (!regexEmail.test(pola.email.value)) błędy.email = 'Email nieprawidłowy';
    if (pola.telefon.value && !regexTelefon.test(pola.telefon.value)) {
        błędy.telefon = '9 cyfr';
    }
    if (pola.wiadomosc.value.length < 10) błędy.wiadomosc = 'Min 10 znaków';
    if (!pola.zgoda.checked) błędy.zgoda = 'Musisz wyrazić zgodę';
    
    return błędy;
}

// Obsługa
pola.imie.addEventListener('blur', () => {
    const błędy = waliduj();
    pola.imie.style.border = błędy.imie ? '2px solid red' : '2px solid green';
});

formularz.addEventListener('submit', (e) => {
    e.preventDefault();
    const błędy = waliduj();
    
    if (Object.keys(błędy).length === 0) {
        console.log('Formularz wysłany!');
        formularz.reset();
    } else {
        console.log('Błędy:', błędy);
    }
});
`;

console.log(kodFormularza);

// ===================================================================
// ZADANIE 6: ASYNCHRONICZNOŚĆ I API (90 min, 30 pkt)
// ===================================================================
console.log('\n=== ZADANIE 6: Asynchroniczność i API ===\n');

// Cz. A - Promises
console.log('Promises:');

const mójPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Dane załadowane!');
    }, 1000);
});

mójPromise
    .then(wynik => console.log('  .then:', wynik))
    .catch(błąd => console.log('  .catch:', błąd))
    .finally(() => console.log('  .finally: zakończone'));

// Promise.all
const obietnice = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
];

Promise.all(obietnice).then(wyniki => {
    console.log('Promise.all:', wyniki);
});

// Cz. B - AsyncAwait
async function pobierzDane() {
    try {
        // Symulacja
        const odpowiedź = await new Promise(resolve => 
            setTimeout(() => resolve({ users: ['Anna', 'Bob'] }), 500)
        );
        console.log('Async/await:', odpowiedź);
    } catch (błąd) {
        console.error('Błąd:', błąd);
    }
}

pobierzDane();

// Cz. C - Fetch API (wymaga sieci i przeglądarki)
const kodFetch = `
// Pobierz dane z JSONPlaceholder
async function pobierzUżytkowników() {
    const loader = document.getElementById('loader');
    
    try {
        loader.style.display = 'block';
        const odpowiedź = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!odpowiedź.ok) throw new Error('Błąd ' + odpowiedź.status);
        
        const użytkownicy = await odpowiedź.json();
        
        // Wyświetl w tabeli
        const tabela = document.createElement('table');
        użytkownicy.forEach(u => {
            const wiersz = tabela.insertRow();
            wiersz.insertCell(0).textContent = u.id;
            wiersz.insertCell(1).textContent = u.name;
            wiersz.insertCell(2).textContent = u.email;
        });
        document.body.appendChild(tabela);
        
    } catch (błąd) {
        console.error('Błąd fetch:', błąd);
    } finally {
        loader.style.display = 'none';
    }
}

// Pobierz posty użytkownika
async function pobierzPosty(userId) {
    const odpowiedź = await fetch(
        \`https://jsonplaceholder.typicode.com/users/\${userId}/posts\`
    );
    return await odpowiedź.json();
}

pobierzUżytkowników();
`;

console.log('Fetch API (patrz kod poniżej):\n' + kodFetch);

// ===================================================================
// ZADANIE 7: PROJEKT SPA - MENEDŻER ZADAŃ (180 min, 50 pkt)
// ===================================================================
console.log('\n=== ZADANIE 7: Projekt SPA - Menedżer Zadań ===\n');

const kodSPA = `
// PEŁNA APLIKACJA SPA: Menedżer Zadań z CRUD, filtrowaniem, localStorage

// === STAN APLIKACJI ===
let zadania = [];
let filter = 'wszystkie';
let sortowanie = 'domyślnie';

// === INICJALIZACJA ===
function init() {
    wczytajZLocalStorage();
    renderuj();
    setupEventListeners();
}

// === CRUD ===
function dodajZadanie(tytuł, priorytet = 'medium', kategoria = 'inne') {
    const zadanie = {
        id: Date.now(),
        tytuł,
        priorytet,
        kategoria,
        wykonane: false,
        dataDodania: new Date()
    };
    zadania.push(zadanie);
    zapiszDoLocalStorage();
    renderuj();
}

function usuńZadanie(id) {
    zadania = zadania.filter(z => z.id !== id);
    zapiszDoLocalStorage();
    renderuj();
}

function zmieńStatus(id) {
    const z = zadania.find(x => x.id === id);
    if (z) z.wykonane = !z.wykonane;
    zapiszDoLocalStorage();
    renderuj();
}

function edytujZadanie(id, nowyTytuł) {
    const z = zadania.find(x => x.id === id);
    if (z) z.tytuł = nowyTytuł;
    zapiszDoLocalStorage();
    renderuj();
}

// === FILTROWANIE I SORTOWANIE ===
function filtruj() {
    let przefiltrowane = zadania;
    
    if (filter === 'aktywne') {
        przefiltrowane = przefiltrowane.filter(z => !z.wykonane);
    } else if (filter === 'wykonane') {
        przefiltrowane = przefiltrowane.filter(z => z.wykonane);
    }
    
    // Sortowanie
    if (sortowanie === 'priorytet') {
        const mapa = { high: 3, medium: 2, low: 1 };
        przefiltrowane.sort((a, b) => mapa[b.priorytet] - mapa[a.priorytet]);
    } else if (sortowanie === 'alfabetycznie') {
        przefiltrowane.sort((a, b) => a.tytuł.localeCompare(b.tytuł));
    }
    
    return przefiltrowane;
}

// === RENDERING ===
function renderuj() {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';
    
    const przefiltrowane = filtruj();
    
    if (przefiltrowane.length === 0) {
        lista.innerHTML = '<p>Brak zadań</p>';
        return;
    }
    
    przefiltrowane.forEach(z => {
        const li = document.createElement('li');
        li.className = \`zadanie \${z.wykonane ? 'wykonane' : ''} priorytet-\${z.priorytet}\`;
        li.innerHTML = \`
            <input type="checkbox" \${z.wykonane ? 'checked' : ''} 
                   onchange="zmieńStatus(\${z.id})">
            <span>\${z.tytuł}</span>
            <span class="kategoria">\${z.kategoria}</span>
            <button onclick="usuńZadanie(\${z.id})">Usuń</button>
        \`;
        lista.appendChild(li);
    });
    
    // Statystyki
    document.getElementById('total').textContent = zadania.length;
    document.getElementById('wykonane').textContent = zadania.filter(z => z.wykonane).length;
    document.getElementById('procent').textContent = 
        zadania.length ? Math.round((zadania.filter(z => z.wykonane).length / zadania.length) * 100) : 0;
}

// === LOCALSTORAGE ===
function zapiszDoLocalStorage() {
    localStorage.setItem('zadania', JSON.stringify(zadania));
}

function wczytajZLocalStorage() {
    const zapisane = localStorage.getItem('zadania');
    zadania = zapisane ? JSON.parse(zapisane) : [];
}

// === EVENT LISTENERS ===
function setupEventListeners() {
    document.getElementById('formularz').addEventListener('submit', (e) => {
        e.preventDefault();
        const tytuł = document.getElementById('tytuł').value;
        const priorytet = document.getElementById('priorytet').value;
        const kategoria = document.getElementById('kategoria').value;
        dodajZadanie(tytuł, priorytet, kategoria);
        e.target.reset();
    });
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            filter = e.target.dataset.filter;
            renderuj();
        });
    });
    
    document.getElementById('sortowanie').addEventListener('change', (e) => {
        sortowanie = e.target.value;
        renderuj();
    });
}

// Start
init();
`;

console.log(kodSPA);

// ===================================================================
// PODSUMOWANIE
// ===================================================================
console.log('\n=== PODSUMOWANIE ===');
console.log('✓ Zadanie 1: Zmienne, typy, operatory (15 pkt)');
console.log('✓ Zadanie 2: Instrukcje warunkowe, pętle (20 pkt)');
console.log('✓ Zadanie 3: Funkcje, zakresy, closures (25 pkt)');
console.log('✓ Zadanie 4: DOM manipulation (30 pkt)');
console.log('✓ Zadanie 5: Formularze, walidacja (30 pkt)');
console.log('✓ Zadanie 6: Asynchroniczność, API (30 pkt)');
console.log('✓ Zadanie 7: SPA Manager (50 pkt)');
console.log('\nŁącznie: 200 pkt, ~8-10 godzin\n');
