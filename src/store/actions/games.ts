import * as actionTypes from './actionTypes';
import { ToastAndroid } from 'react-native';
import axios from '../../axios';
import { AppDispatch } from '../store';
import { ITypes, IGame } from '../../utils/interfaces';

export const setCurrentGame = (id: number) => {
    return {
        type: actionTypes.SET_CURRENT_GAME,
        id
    };
};

export const clearCurrentGame = () => {
    return {
        type: actionTypes.CLEAR_CURRENT_GAME
    }
}

export const fetchGamesStart = () => {
    return {
        type: actionTypes.FETCH_GAMES_START
    };
};

export const fetchGamesSuccess = (data: ITypes) => {
    return {
        type: actionTypes.FETCH_GAMES_SUCCESS,
        data
    };
};

export const fetchGamesFail = (error: Error) => {
    return {
        type: actionTypes.FETCH_GAMES_FAIL,
        error
    };
};

export const fetchGames: Function = () => {
    return (dispatch: AppDispatch) => {
        dispatch(fetchGamesStart());
        axios.get('/games')
            .then(res => {
                dispatch(fetchGamesSuccess(res.data.types));
            })
            .catch(err => {
                if (!err.status) {
                    ToastAndroid.show('Não foi possível recuperar os jogos.', ToastAndroid.SHORT)
                    dispatch(fetchGamesFail(err));
                } else {
                    dispatch(fetchGamesFail(err.response.data.error));
                }
            })
    };
};
