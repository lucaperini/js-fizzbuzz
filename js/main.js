const layOut = document.getElementById('alveare')
for(let i = 1; i <=100; i++ ){
    let newCell = document.createElement('div');
    newCell.classList.add('cell', 'mb-3','d-inline-block');
    newCell.innerHTML=i;
    layOut.append(newCell);
    if((i % 3 == 0) && (i % 5 == 0)){
        newCell.innerHTML = "FizzBuzz";
        newCell.classList.add('bee');
    } else if (i % 3 == 0){
        newCell.innerHTML ="Fizz";
        newCell.classList.add('bg-success');
    } else if (i % 5 == 0) {
        newCell.innerHTML="Buzz";
        newCell.classList.add('bg-danger');
    } else {
    newCell.innerHTML=i;
    }
}