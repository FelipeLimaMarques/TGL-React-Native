import * as actionTypes from '../actions/actionTypes';
import { ToastAndroid } from 'react-native';
import { AnyAction } from 'redux';
import { IBet, IBetFormated } from '../../utils/interfaces';
import { randComplete } from '../../utils/functions';

interface IBets {
    saved: Array<IBetFormated>,
    filtered: Array<IBetFormated>,
    filterIds: Array<number>,
    bets: Array<{
        numbers: string,
        game_id: number
    }>,
    bet: IBet,
    totalPrice: number,
    showCart: boolean,
    error: Error | null,
    loading: boolean,
}

const initialState: IBets = {
    saved: [],
    filtered: [],
    filterIds: [],
    bets: [],
    bet: {
        numbers: [],
        game_id: 0,
    },
    totalPrice: 0,
    showCart: false,
    error: null,
    loading: false,
}

const addNumber = (state: IBets, action: AnyAction) => {
    if (state.bet.numbers.includes(action.number)) {
        return removeNumber(state, action);
    };

    if (state.bet.numbers.length >= action.maxLength) {
        ToastAndroid.show(`Você não pode selecionar mais do que ${action.maxLength} números.`, ToastAndroid.SHORT);

        return state;
    }
    else {
        let aux: Array<number> = [...state.bet.numbers];
        aux = aux.concat(action.number);
        aux = aux.sort((a, b) => a - b);

        return  { ...state,
            bet: {
                numbers: aux,
                game_id: action.id
            }
        }
    }
}

const removeNumber = (state: IBets, action: AnyAction) => {
    let aux: Array<number> = [...state.bet.numbers];
    aux = aux.filter((current) => current !== action.number);

    return { ...state,
        bet: {
            numbers: aux,
            game_id: action.id
        }
    }
}

const clearNumbers = (state: IBets, action: AnyAction) => {
    return { ...state,
        bet: {
            numbers: [],
            game_id: action.id
        }
    }
}

const completeNumbers = (state: IBets, action: AnyAction) => {
    if (state.bet.numbers.length >= action.maxLength) {
        ToastAndroid.show(`Você não pode selecionar mais do que ${action.maxLength} números.`, ToastAndroid.SHORT);

        return state;
    }
    else {
        let aux: Array<number> = [...state.bet.numbers];
        const oldLength: number = aux.length;
        aux = randComplete(aux, action.maxLength, oldLength, action.range);
        
        return { ...state,
            bet: {
                numbers: aux,
                game_id: action.id
            }
        }
    }
}

const showCart = (state: IBets, action: AnyAction) => {
    return { ...state,
        showCart: true
    }
}

const hideCart = (state: IBets, action: AnyAction) => {
    return { ...state,
        showCart: false
    }
}

const addToCart = (state: IBets, action: AnyAction) => {
    if (state.bet.numbers.length === action.maxNumber) {
        const bets = [...state.bets];
        const stringfied = { ...action.bet, numbers: action.bet.numbers.join(', ')}
        const newBets = bets.concat(stringfied);
    
        return { ...state,
            bets: newBets,
            totalPrice: state.totalPrice + action.price,
            bet: {
                numbers: [],
                game_id: 0,
            }
        }
    }
    else {
        ToastAndroid.show(`Selecione ${action.maxNumber} números!`, ToastAndroid.SHORT);
        return state;
    }
}

const removeFromCart = (state: IBets, action: AnyAction) => {
    const bets = [...state.bets];
    bets.splice(action.index, 1);

    return { ...state,
        bets: bets,
        totalPrice: state.totalPrice - action.price
    }
}

const clearCart = (state: IBets, action: AnyAction) => {
    return { ...state,
        bets: [],
        totalPrice: 0
    }
}

const filterBets = (state: IBets , action: AnyAction) => {
    const saved = [...state.saved];
    const ids = [...state.filterIds];
    const hasId = ids.includes(action.id)
    if (hasId) {
        const index = ids.indexOf(action.id)
        ids.splice(index, 1)
    } else {
        ids.push(action.id)
    }

    if (ids.length === 0) {
        return { ...state,
            filtered: saved,
            filterIds: ids
        }
    }

    const newState = saved.filter(game => {
        return ids.includes(game.game_id)
    });

    return { ...state,
        filtered: newState,
        filterIds: ids
    }
}

const unfilterBets = (state: IBets , action: AnyAction) => {
    const saved = [...state.saved];

    return { ...state,
        filtered: saved,
        filterIds: []
    }
}

const saveBetsStart = (state: IBets , action: AnyAction) => {
    return { ...state,
        error: null,
        loading: true
    };
}

const saveBetsSuccess = (state: IBets , action: AnyAction) => {
    ToastAndroid.show('Comprado com sucesso.', ToastAndroid.SHORT);

    return { ...state,
        loading: false,
    };
}

const saveBetsFail = (state: IBets , action: AnyAction) => {
    return { ...state,
        error: action.error,
        loading: false
    };
}

const fetchBetsStart = (state: IBets , action: AnyAction) => {
    return { ...state,
        saved: [],
        filtered: [],
        error: null,
        loading: true
    };
}

const fetchBetsSuccess = (state: IBets , action: AnyAction) => {
    return { ...state,
        saved: action.bets,
        filtered: action.bets,
        loading: false
    };
}

const fetchBetsFail = (state: IBets , action: AnyAction) => {
    return { ...state,
        error: action.error,
        loading: false
    };
}

const betsReducer = (state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.ADD_NUMBER: return addNumber(state, action);
        case actionTypes.REMOVE_NUMBER: return removeNumber(state, action);
        case actionTypes.CLEAR_NUMBERS: return clearNumbers(state, action);
        case actionTypes.COMPLETE_NUMBERS: return completeNumbers(state, action);
        case actionTypes.SHOW_CART: return showCart(state, action)
        case actionTypes.HIDE_CART: return hideCart(state, action)
        case actionTypes.ADD_TO_CART: return addToCart(state, action);
        case actionTypes.REMOVE_FROM_CART: return removeFromCart(state, action);
        case actionTypes.CLEAR_CART: return clearCart(state, action);
        case actionTypes.FILTER_BETS: return filterBets(state, action);
        case actionTypes.UNFILTER_BETS: return unfilterBets(state, action);
        case actionTypes.SAVE_BETS_START: return saveBetsStart(state, action);
        case actionTypes.SAVE_BETS_SUCCESS: return saveBetsSuccess(state, action);
        case actionTypes.SAVE_BETS_FAIL: return saveBetsFail(state, action);
        case actionTypes.FETCH_BETS_START: return fetchBetsStart(state, action);
        case actionTypes.FETCH_BETS_SUCCESS: return fetchBetsSuccess(state, action);
        case actionTypes.FETCH_BETS_FAIL: return fetchBetsFail(state, action);
        default: return state;
    }
}

export default betsReducer;