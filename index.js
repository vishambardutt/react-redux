let redux = require('redux');
let reduxLogger = require('redux-logger');
let createStore = redux.createStore;
let combineReducers = redux.combineReducers;
let Logger = reduxLogger.createLogger();
let applyMiddleware = redux.applyMiddleware;
// action
let BUY_CAKE = "BUY_CAKE";
let BUY_CHOCOLATE = 'BUY_CHOCOLATE';
let BUY_ICECREAM = 'BUY_ICECREAM'

// action creater
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Buy Cake form store'
    }

}

function buyChocolate() {
    return {
        type: BUY_CHOCOLATE,
        info: 'Buy chocolate form store'
    }

}

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: 'Buy icecream form store'
    }

}

let initialCakesState = {
    numbOfCakes: 10
   
}
let initialChocolatesState = {
   numbOfChocolates: 15
   
}
let initialIceCreamState = {
   numbOfIcecreams: 20
}
//reducer
// let reducer = (state = initialState, action)=>{
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numbOfCakes: state.numbOfCakes - 1
//         }
//         case BUY_CHOCOLATE: return {
//             ...state,
//             numbOfChocolates: state.numbOfChocolates - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numbOfIcecreams: state.numbOfIcecreams - 1
//         }

//         default: return state
//     }
// }

let CakeReducer = (state = initialCakesState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numbOfCakes: state.numbOfCakes - 1
        }
        default: return state
    }
}

let ChocolateReducer = (state = initialChocolatesState, action) => {
    switch (action.type) {
        case BUY_CHOCOLATE: return {
            ...state,
            numbOfChocolates: state.numbOfChocolates - 1
        }
        default: return state
    }
}

let IcecreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numbOfIcecreams: state.numbOfIcecreams - 1
        }
        default: return state
    }
}
let rootReducer = combineReducers({
    Cake:CakeReducer,
    Chocolate:ChocolateReducer,
    Ice:IcecreamReducer
})
let store = createStore(rootReducer, applyMiddleware(Logger));
console.log('Initial State', store.getState());
let unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyChocolate());
store.dispatch(buyChocolate());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();

