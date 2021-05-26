import * as actionTypes from '../actions/actionTypes';
import { ToastAndroid } from 'react-native';
import { AnyAction } from 'redux';

interface IUpdate {
    userData: {
        name: string,
        email: string,
    },
    error: Error | null,
    loading: boolean,
}

const initialState: IUpdate = {
    userData: {
        name: '',
        email: '',
    },
    error: null,
    loading: false,
}

const fetchUserDataStart = (state: IUpdate , action: AnyAction) => {
    return { ...state,
        loading: true,
        error: null
    }
}

const fetchUserDataSuccess = (state: IUpdate , action: AnyAction) => {
    return { ...state,
        userData: {
            name: action.name,
            email: action.email,
        },
        loading: false,
    }
}

const fetchUserDataFail = (state: IUpdate , action: AnyAction) => {
    return { ...state,
        loading: false,
        error: action.error
    }
}

const updateAccountStart = ( state: IUpdate, action: AnyAction ) => {
    return { ...state,
        error: null,
        loading: true
    };
};

const updateAccountSuccess = (state: IUpdate, action: AnyAction) => {
    ToastAndroid.show('Dados atualizados.', ToastAndroid.SHORT);

    return { ...state,
        loading: false,
    };
};

const updateAccountFail = (state: IUpdate, action: AnyAction) => {
    ToastAndroid.show('Falha ao atualizar os dados.', ToastAndroid.SHORT);

    return { ...state,
        error: action.error,
        loading: false
    };
};

const updateUserReducer = ( state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.FETCH_USER_DATA_START: return fetchUserDataStart(state, action);
        case actionTypes.FETCH_USER_DATA_SUCCESS: return fetchUserDataSuccess(state, action);
        case actionTypes.FETCH_USER_DATA_FAIL: return fetchUserDataFail(state, action);
        case actionTypes.UPDATE_ACCOUNT_START: return updateAccountStart(state, action);
        case actionTypes.UPDATE_ACCOUNT_SUCCESS: return updateAccountSuccess(state, action);
        case actionTypes.UPDATE_ACCOUNT_FAIL: return updateAccountFail(state, action);
        default: return state;
    }
}

export default updateUserReducer;