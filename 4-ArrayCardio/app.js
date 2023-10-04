const people = [
  "Ali, Alpar",
  "Angelo, Angeli",
  "Ariel, Hollinshead",
  "Mark, Azbel",
  "Berta, Karlik",
  "Czesław, Bieżanko",
  "Çağlar, Keyder",
  "Erol, Çerasi",
  "Ersin, Kalaycıoğlu",
  "Feryal, Özel",
  "İsenbike, Togan",
  "Joseph Henry, Green",
  "Margaret, Billingham",
  "María Luisa, Aguilar",
  "Mehmet, Özdoğan",
  "Osman Cevdet, Çubukçu",
];

const inventors = [
    { first: 'Johannes', last: 'Kepler', year: '1571', passed: '1630'},
    { first: 'Nicolaus', last: 'Copernicus', year: '1473', passed: '1900'},
    { first: 'Max', last: 'Planck', year: '1858', passed: '1900'}
]



//FILTER
const fifteen = inventors.filter((i) => (i.year >= 1500 && i.year <= 1599));
    
//     if(i.year >= 1500 && i.year <= 1599){
//         return true // keep it
    // }else{
    //     return false
    // } // not necessary

// }});
console.log(fifteen);
console.table(fifteen);




//MAP
const scientist = inventors.map((a) => a.first + ' ' +  a.last);
console.log(scientist);




//SORT
const ordered = inventors.sort(function(a,b){
    if(a.year > b.year){
        return 1
    }else{
        return -1
    }
});

const secondOrdered = inventors.sort((a,b) => (a - b));  ////????????

const thirdOrdered = inventors.sort((a,b) => a.passed > b.passed ? 1 : -1);

console.log(ordered);
console.table(ordered);

console.log(secondOrdered);
console.table(secondOrdered);

console.log(thirdOrdered);
console.table(thirdOrdered);




//REDUCE
var totalYears = 0;

for (var i = 0; i < inventors.length; i++){
    totalYears = totalYears + (inventors[i].passed - inventors[i].year)
}


console.log(totalYears);



const totalYearsTwo = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)

}, 0);

console.log(totalYearsTwo);

// reduce() metodu, dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür.
// Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır.

// Yapısı (Syntax)
// array.reduce(function(accumulator, currentValue, index, arr), initialValue)



const oldest = inventors.sort(function(a,b){

    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    return lastGuy > nextGuy ? -1 : 1
    // if(lastGuy > nextGuy){
    //     return -1
    // }else{
    //     return 1
    // }
});

console.log(oldest);
console.table(oldest);


 
// const category = document.querySelector('.mw-category');
// //const links = category.querySelectorAll('a');
// const links = Array.from[category.querySelectorAll('a')];
// //const links = [...category.querySelectorAll('a')];


// //const category = document.querySelector('.mw-category a');


// const de = links.map(link => link.textContent); // bu fonksiyonu isimleri içeren arrayi yazdırmak için kullandık başta links sadece [a,a,a,a,a..]
//                // şeklinde bir arraydi anın içindeki textContenti artık biliyoruz
// const deList = de.filter(streetName => streetName.includes('de'));

// // querySelector returns a node list

// // bir HTML belgesinde bulunan her şey bir node olarak tanımlanır. Örnek olarak: Belgenin tamamı, document node olarak tanımlanır.

// // node list is not an array if we want to use map function we should use an array


const alpha = people.sort((a,b) => {

    const [alast, afirst] = a.split(', ');
    const [blast, bfirst] = b.split(', ');

    return bfirst > afirst ? 1 : -1

});

console.log(alpha);



//SUM REDUCE
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'car', 'van'];

const transportation = data.reduce(function(obj,item){

    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;

}, {}); //burdaki köşeli parantez initialValue

console.log(transportation);

