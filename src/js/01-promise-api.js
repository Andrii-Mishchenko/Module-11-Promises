

const promise = new Promise((resolve, reject) => {
    const canFulfill = Math.random() > 0.5;
    console.log(canFulfill)

    setTimeout(() => {
        if (canFulfill) {
            resolve('Промис выполнился успешно с результатом (исполнен, fulfilled)');
        }

        reject('Промис выполнился с ошибкой (отколнен, rejected)')
    }, 1000)
});

promise.then(onFulfilled, onRejected)

function onFulfilled(result) {
    console.log('result', result); //Этот колбек выполнится если resolve
};

function onRejected(error){
    console.log('error', error); //Этот колбек выполнится если reject
};


/*
* Цепочки промисов (chaining)
*/
promise
    .then(onFulfilled)
    .then(
        x => {
            console.log(x);

            return 10;
        },
    )
    .then(
        y => console.log(y),
    )
    .catch(error => console.log(error))
    .finally(() => console.log('Будет выполнен в любом случае'));



const getMessage = function () {
  const input = prompt('Введите сообщение');

  return Promise.resolve(input);
};

const logger = message => console.log(message);

getMessage().then(message => logger(message));

// Или еще короче
getMessage().then(logger);
