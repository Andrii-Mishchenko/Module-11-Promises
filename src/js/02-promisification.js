// Старый способ:
const makeOrder = (dish, onSuccess, onError) => {
    const DELAY = 1000;

    const passed = Math.random() > 0.5;

    setTimeout(() => {
        if (passed) {
            onSuccess('вот Ваше блюдо');
        } else {
            onError('Извините, закончились продукты')
        }
    }, DELAY);
}

makeOrder('пирожок', onMakeOrderSuccess, onMakeOrderError);

function onMakeOrderSuccess(result) {
    console.log('onMakeOrderSuccess');
    console.log(result)
}
function onMakeOrderError(error) {
    console.log('onMakeOrderError');
    console.log(error)
}


// через промисы
const makeOrder = (dish) => {
    const DELAY = 1000;

    return new Promise((resolve, reject) => {
        const passed = Math.random() > 0.5;
        
        setTimeout(() => {
            if (passed) {
                resolve('вот Ваше блюдо');
            } else {
                reject('Извините, закончились продукты')
            }
        }, DELAY);
    });

}

makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderSuccess);

function onMakeOrderSuccess(result) {
    console.log('onMakeOrderSuccess');
    console.log(result)
}
function onMakeOrderError(error) {
    console.log('onMakeOrderError');
    console.log(error)
}


// // синхронная функция через промисы
// // Если нам не нужно отслеживать ошибку:
// const makeOrder = (dish, onSuccess) => {
//     return Promise.resolve('вот Ваше блюдо'); // короткий метод одно и то же что и выражение ниже 
    
// //     return new Promise(resolve => {
// //       resolve('вот Ваше блюдо');
// //   })          
// }

// makeOrder('пирожок').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result)
// }
// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error)
// }


// Покемоны

// // Длинный способ
// const fetchPokemonId = (id, onSuccess, onError) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(r => r.json())
//     .then(pokemon => {
//         onSuccess(pokemon);
//     })
//     .catch(error => {
//         onError(error);
//     })
// }

// fetchPokemonId(1, onFetchSuccess, onFetchError);


// // Короткий способ
// const fetchPokemonId = id => {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         .then(r => r.json())
// }

// fetchPokemonId(1).then(onFetchSuccess).catch(onFetchError)

// // Колбеки
// function onFetchSuccess(pokemon) {
//     console.log('onFetchSuccess ->', onFetchSuccess)
//     console.log(pokemon)
// }

// function onFetchError(error) {

//          console.log('это в блоке catch', onFetchError);
//         console.log(error);
// }


// const makePromise = () => {
    
//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;

//         setTimeout(() => {
//             if (passed) {
//                 resolve('Это resolve');
//             }
//             reject('Ошибка')
//         }, 1000);
//     })
// }

// makePromise()
//     .then(result => console.log(result))
//     .catch(error => console.log(error));