const btnRock = document.getElementById(`rock`);
const btnPaper = document.getElementById(`paper`);
const btnScissors = document.getElementById(`scissors`);
const resultText = document.getElementById(`result`);
const resultGamer = document.getElementById(`result_gamer`);
const resultMachine = document.getElementById(`result_machine`);


const rock = `rock`;
const paper = `paper`;
const scissors = `scissors`;

const TIE = 0;
const WIN = 1;
const LOOSE = 2;


// TODO: BOTONES 

btnRock.addEventListener(`click`, () => {
    play(rock);
});

btnPaper.addEventListener(`click`, () => {
    play(paper);
});

btnScissors.addEventListener(`click`, () => {
    play(scissors);
});

// TODO: PANEL DE CONTROL

function play(optionUser) {

    resultGamer.src = `img/${optionUser}.svg`;

    resultText.innerHTML = `The machine is thinking`;

    const interval = setInterval(() => {
        const machineOption = calcMachine();
        resultMachine.src = `img/${machineOption}.svg`;

    }, 300)

    setTimeout(() => {

        clearInterval(interval);

        const machineOption = calcMachine();
        const result = calcPlay(optionUser, machineOption);
    
        resultMachine.src = `img/${machineOption}.svg`;

        switch(result) {
            case TIE: 
                resultText.innerHTML =  `TIE!`;
                break;
            case WIN:
                resultText.innerHTML = `YOU WIN!`;
                break;
            case LOOSE:
                resultText.innerHTML = `YOU LOOSE`;
                break;
    } }, 2000);

}

// TODO: Convertidor Machine 

function calcMachine () {
    const number = Math.floor(Math.random() * 3);

    switch (number) {
        case 0: 
            return rock;
        case 1: 
            return paper
        case 2: 
            return scissors

    }
}

// TODO: CALCULOS DEL JUEGO

function calcPlay(optionUser, machineOption) {
    if (optionUser === machineOption) {
        return TIE;
    }

    else if (optionUser === rock) {
        if (machineOption === scissors) return WIN;
        else if (machineOption === paper) return LOOSE;
    }

    else if (optionUser === paper) {
        if (machineOption === rock) return WIN;
        else if (machineOption === scissors) return LOOSE;
    }

    else if (optionUser === scissors) {
        if (machineOption === paper) return WIN;
        else if (machineOption === rock) return LOOSE
    }
}
