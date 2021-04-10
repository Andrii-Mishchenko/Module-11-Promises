import '../css/styles.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody'),
}

refs.startBtn.addEventListener('click', onStart);
let raceCounter = 0;

function onStart() {
    raceCounter += 1;
    const promises = horses.map(horse => run(horse));

    updateWinnerField('');
    updateProgressField('🤖 Заезд начался, ставки не принимаются!');

    determineWinner(promises);
    waitForAll(promises);
}

function determineWinner(horsesPromis) {
    Promise.race(horsesPromis).then(({ horse, time }) => {
        updateWinnerField(`Победил ${horse}, финишировав за ${time}
            времени`);
        updateResultsTable({ horse, time, raceCounter });
    });
};

function waitForAll(horsesPromis) {
    Promise.all(horsesPromis).then(()=> {
        updateProgressField('Заезд окончен, принимаются ставки.');
    });
}

function updateWinnerField(message) {
    refs.winnerField.textContent = message;
}

function updateProgressField(message) {
    refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
    const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
    refs.tableBody.insertAdjacentHTML('beforeend', tr);
    
}

console.log('%c🤖 Заезд начался, ставки не принимаются!','color: green; font-size: 14px;',);



/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */
// Promise.race(promises).then(({ horse, time }) => console.log(`%c🎉 Победил ${horse}, финишировав за ${time}
//     времени`,'color: orange; font-size: 14px;',));

/*
 * Promise.all([]) для ожидания всех промисов. возвращает массив результатов выполнения промисов
 */    
// Promise.all(promises).then(x => {
//     console.log(x);
//     console.log('%c📝 Заезд окончен, принимаются ставки.', 'color: red; font-size: 14px;',);
// });


function run(horse) {
    return new Promise((resolve) => {
        const time = getRandomTime(2000, 3000);

        setTimeout(() => {
            resolve({ horse, time })
        }, time);
    })
};

// run(horses[1])
//     .then(r => console.log(r));
 

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};