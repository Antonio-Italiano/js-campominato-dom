/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 
caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, 
la cella cliccata si colora di azzurro ed emetto un messaggio in console 
con il numero della cella cliccata.*/ 

/-------------------- FUNZIONI ------------------/
// FUNZIONE PER CREARE LA CELLA
const createCell = (content) => {
    // Creo la cella 
    const cell = document.createElement('div');
    cell.append(content);
    cell.classList.add('col');

    // Aggiungo l'event listner
    cell.addEventListener('click', () => {        
        // Aggiungo la classe quando è active 
        
        
            cell.classList.add('clicked');
            console.log(content);
            // aggiungo alla array i numeri solo se non sono gia usciti
            if (!listCellClicked.includes(content)) {                
                listCellClicked.push(content);        
                // aumento il contatore di 1 ogni volta che l'utente schiaccia la casella corretta
                scoreCounter = (i++); 
                console.log(scoreCounter);
            }
        

    })
    
    return cell;
    
}

const getUniqueRandomNumber = (min, max, list) => {
    max++;
    let randomNumber;
    do{
        randomNumber = Math.floor(Math.random() * (max - min)) + min;
    }  while (list.includes (randomNumber)); 
    
    return randomNumber;
}

// PRENDO ELEMENTI DOM 
const grid = document.getElementById('grid');
const select = document.getElementById('select');
const button = document.getElementById('btn');
// console.log(grid)

/--------------- OPERAZIONI PRELIMINARI ------------/

const selectValue = select.value;

/---- IMPOSTAZIONI --------/
// GRIGLIA
let rows = 10;
let cels = 10;

// CONTATORE PUNTEGGIO
let scoreCounter; 
let i = 1;
const listCellClicked = [];
console.log(listCellClicked)

// CREO BOMBE
const arsenalBombs = [];
// creo 16 bombe 
for(let i = 1; i <= 16 + 1; i++) {
    // genero 16 numeri diversi
    const bombs = getUniqueRandomNumber(1, 100, arsenalBombs);
    // aggiungo il numero nella lista delle bombe
    arsenalBombs.push(bombs)
    console.log('bomba   ' + bombs);
}



if (selectValue == '2'){
rows = 9;
    cels = 9;
} else if (selectValue == '3'){
    rows = 7;
    cels = 7;
}
const totalCels = rows * cels;

console.log(totalCels , selectValue);


/-------------------- EVENTI -----------------------/
// EVENT LISTNER SUL BOTTONE
button.addEventListener('click', () => {  
    
    grid.innerHTML = '';
    
    
    // STAMPO LE CELLE IN PAG 
    for(let i = 1; i < totalCels + 1; i++) {
        
        // Creo la cella invocando la funzione createCell
        const cell = createCell(i);

        // Aggiungo cell come figlio di grid 
        grid.appendChild(cell);
    }
})


    
    