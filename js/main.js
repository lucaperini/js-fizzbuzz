//Recupero l'elemento <div id="alveare">
const layOut = document.getElementById('alveare');
//Creo un ciclo for da 1 a 100
for(let i = 1; i <=100; i++ ){
//Creo l'elemento <div> nel DOM
    let newCell = document.createElement('div');
//Aggiungo le classi all'elemento appena creato
    newCell.classList.add('cell', 'mb-3','d-inline-block');
//Aggiungo il contenuto scrivendo il valore della variabile i (1...100)
    newCell.innerHTML=i;
//Aggiungo tramite la funzione append il nuovo elemento al padre <div id="alveare">
    layOut.append(newCell);
//Verifico se il valore di i è multiplo sia di 3 che di 5 e nel caso lo sia scrivo FizzBuzz
    if((i % 3 == 0) && (i % 5 == 0)){
        newCell.innerHTML = "FizzBuzz";
        newCell.classList.add('bee');
//Verifico se il valore di i è multiplo di 3 e nel caso lo sia scrivo Fizz
    } else if (i % 3 == 0){
        newCell.innerHTML ="Fizz";
        newCell.classList.add('bg-success');
//Verifico se il valore di i è multiplo di 5 e nel caso lo sia scrivo Buzz
    } else if (i % 5 == 0) {
        newCell.innerHTML="Buzz";
        newCell.classList.add('bg-danger');
    } else {
    console.log(i);
    }
}