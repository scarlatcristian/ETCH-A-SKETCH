let color = 'black';
let click = true;

function fillBoard (size){
    let board = document.querySelector('.board');
    let square = board.querySelectorAll('div');
    square.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;//each column will have a width of 1/16 of the container width
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size
    for(let i =0; i < amount; i++){
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquares);
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement("beforeend", square)
};
};

fillBoard(16);

function changeSize(input){
    if(input >= 2 && input <= 100){
        document.querySelector('.error').style.display = 'none';
        fillBoard(input);
    }
    else{
        document.querySelector('.error').style.display = 'flex';
    }
};

function colorSquares(){
    if (click){
        if(color ==='random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else{
            this.style.backgroundColor = color;
        }
    }
};

function changeColor(choice){
    color = choice;
};

function clearBoard(){
    let board = document.querySelector('.board');
    let square = board.querySelectorAll('div');
    square.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName !='BUTTON'){
        click = !click;
        if(click){
            document.querySelector('.mode').textContent = "Mode: Coloring";
        }else{
            document.querySelector('.mode').textContent = "Mode: Not coloring";
    }
    }
});