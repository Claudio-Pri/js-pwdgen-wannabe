

//Dichiarazione variabili

let nome = prompt("Qual'è il tuo nome?");
let cognome = prompt("Qual'è il tuo cognome?");
let colorePreferito = prompt("Qual'è il tuo colore preferito?");
let myPassword = nome + cognome + colorePreferito + '130';


console.log(myPassword);
console.log(typeof myPassword);

document.getElementById('mia_pass').innerHTML = myPassword;


