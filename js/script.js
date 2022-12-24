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
        if (!arsenalBombs.includes(content)) {
            
            cell.classList.add('clicked');
            console.log(content);
            // aggiungo alla array i numeri solo se non sono gia usciti
            if (!listCellClicked.includes(content)) {                
                listCellClicked.push(content);

                // aumento il contatore di 1 ogni volta che l'utente schiaccia la casella corretta
            }
            // in caso di vittoria
            if (listCellClicked.length == 84) {
                grid.innerHTML = `<h1 class="text-center text-success">Congratulazioni Hai vinto</h1>`
            }
        } else {
            
            cell.classList.add('boomb');
            console.log(content);
            // inserisco il punteggio in pagina
            // alert('hai perso')
            const myTimeout = setTimeout(myGreeting, 1000);
            function myGreeting(){
                grid.innerHTML = `<h1 class="text-center text-danger">Game over <br>${listCellClicked.length} punti  </h1>`
                
                // azzero il punteggio                            
                listCellClicked.length = 0 ;
            }
        }
    })
    
    return cell;
    
}

// FUNZIONE PER GENERARE UN NUMERO CASUALE
const getUniqueRandomNumber = (min, max, list) => {
    max++;
    let randomNumber;
    do{
        randomNumber = Math.floor(Math.random() * (max - min)) + min;
    }  while (list.includes (randomNumber)); 
    
    return randomNumber;
}



/--------------- OPERAZIONI PRELIMINARI ------------/

// PRENDO ELEMENTI DOM 
const grid = document.getElementById('grid');
const button = document.getElementById('btn');
const notice = document.getElementById('notice');



/---- IMPOSTAZIONI --------/


// CONTATORE PUNTEGGIO
// let i = 1;
const listCellClicked = [];
// console.log(listCellClicked);

grid.innerHTML = `<h1 class="text-center">Schiaccia play per giocare</h1>`

// CREO BOMBE
let arsenalBombs = [];




/-------------------- EVENTI -----------------------/

// EVENT LISTNER SUL BOTTONE
button.addEventListener('click', () => {  
    
    grid.innerHTML = '';
    arsenalBombs.length = 0;
    
    let rows = 10;
    let cols = 10;    
    const totalCels = rows * cols;
    console.log(totalCels);
    
    
    // STAMPO LE CELLE IN PAG 
    for(let i = 1; i < totalCels + 1; i++) {
        
        // Creo la cella invocando la funzione createCell
        const cell = createCell(i);
        
        // Aggiungo cell come figlio di grid 
        grid.appendChild(cell);
    }
    
    // creo 16 bombe 
    for(let i = 1; i <= 16 ; i++) {
    // genero 16 numeri diversi
    const bombs = getUniqueRandomNumber(1, 100, arsenalBombs);
    // aggiungo il numero nella lista delle bombe
    arsenalBombs.push(bombs)
    // console.log('bomba   ' + bombs);
    }    
})


    
    