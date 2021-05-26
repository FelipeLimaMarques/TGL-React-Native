import * as actionTypes from '../actions/actionTypes';
import { AnyAction } from 'redux';
import { ITypes, IGame } from '../../utils/interfaces';

interface IGames extends ITypes {
    current: IGame,
    loading: boolean,
    error: Error | null,
}

const initialState: IGames = {
    types: [{
        id: 0,
        type: 'Loading...',
        description: 'Loading...',
        range: 0,
        price: 0,
        'max-number': 0,
        color: 'transparent',
        'min-cart-value': 0  
    }],
    current: {
        id: 0,
        type: 'Loading...',
        description: 'Loading...',
        range: 0,
        price: 0,
        'max-number': 0,
        color: 'transparent',
        'min-cart-value': 0
    },
    loading: false,
    error: null,
}

const setCurrentGame = (state: IGames , action: AnyAction) => {
    const types = [...state.types]
    const found = types.find(type => type.id === action.id)

    return { ...state,
        current: {
            id: found!.id,
            type: found!.type,
            description: found!.description,
            range: found!.range,
            price: found!.price,
            'max-number': found!['max-number'],
            color: found!.color,
            'min-cart-value': found!['min-cart-value']
        }
    };
};

const clearCurrentGame = (state: IGames , action: AnyAction) => {
    return { ...state,
        current: {
            id: 0,
            type: 'Loading...',
            description: 'Loading...',
            range: 0,
            price: 0,
            'max-number': 0,
            color: 'transparent',
            'min-cart-value': 0
        }
    }
}

const fetchGamesStart = ( state: IGames, action: AnyAction ) => {
    return { ...state,
        loading: true,
        error: null,
    };
};

const fetchGamesSuccess = (state: IGames, action: AnyAction) => {
    return { ...state, 
        types: action.data,
        loading: false
     };
};

const fetchGamesFail = (state: IGames, action: AnyAction) => {
    return { ...state,
        loading: false,
        error: action.error,
    };
};

const gamesReducer = ( state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.SET_CURRENT_GAME: return setCurrentGame(state, action);
        case actionTypes.CLEAR_CURRENT_GAME: return clearCurrentGame(state, action);
        case actionTypes.FETCH_GAMES_START: return fetchGamesStart(state, action);
        case actionTypes.FETCH_GAMES_SUCCESS: return fetchGamesSuccess(state, action);
        case actionTypes.FETCH_GAMES_FAIL: return fetchGamesFail(state, action);
        default: return state;
    }
}

export default gamesReducer;