import { ToastAndroid } from 'react-native';
import * as actionTypes from '../actions/actionTypes';
import { AnyAction } from 'redux';

interface IAuth {
    token: string | null,
    error: string | null,
    loading: boolean,
}

const initialState: IAuth = {
    token: null,
    error: null,
    loading: false,
}

const loginStart = ( state: IAuth, action: AnyAction ) => {
    return { ...state, 
        token: null,
        loading: true
    };
};

const loginSuccess = (state: IAuth, action: AnyAction) => {
    ToastAndroid.show('Logado com sucesso.', ToastAndroid.SHORT);

    return { ...state,
        token: action.token,
        loading: false
    };
};

const checkAuthStateStart = (state: IAuth, action: AnyAction) => {
    return { ...state,
        loading: true,
        error: null
    }
}

const checkAuthStateSuccess = (state: IAuth, action: AnyAction) => {
    return { ...state,
        token: action.token,
        loading: false
    };
};

const loginFail = (state: IAuth, action: AnyAction) => {
    return { ...state,
        valid: true,
        loading: false,
        error: action.error
    };
};

const logoutStart = (state: IAuth, action: AnyAction) => {
    return { ...state,
        loading: true,
        error: null
    }
}

const logoutSuccess = (state: IAuth, action: AnyAction) => {
    return { ...state,
        token: null,
        loading: false
     };
};

const logoutFail = (state: IAuth, action: AnyAction) => {
    return { ...state,
        loading: false,
        error: action.error
    }
}

const registerStart = ( state: IAuth, action: AnyAction ) => {
    return { ...state,
        error: null,
        loading: true
    };
};

const registerSuccess = (state: IAuth, action: AnyAction) => {
    ToastAndroid.show('Registrado com sucesso.', ToastAndroid.SHORT);

    return { ...state,
        loading: false,
    };
};

const registerFail = (state: IAuth, action: AnyAction) => {
    return { ...state,
        error: action.error,
        loading: false
    };
};

const resetPasswordStart = ( state: IAuth, action: AnyAction ) => {
    return { ...state,
        error: null,
        loading: true
    };
};

const resetPasswordSuccess = (state: IAuth, action: AnyAction) => {
    ToastAndroid.show('E-mail enviado. Faça a alteração da senha pelo site.', ToastAndroid.SHORT);
    
    return { ...state,
        loading: false,
    };
};

const resetPasswordFail = (state: IAuth, action: AnyAction) => {
    return { ...state,
        error: action.error,
        loading: false
    };
};

const authReducer = ( state = initialState, action: AnyAction) => {
    switch ( action.type ) {
        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        case actionTypes.LOGOUT_START: return logoutStart(state, action);
        case actionTypes.LOGOUT_SUCCESS: return logoutSuccess(state, action);
        case actionTypes.LOGOUT_FAIL: return logoutFail(state, action);
        case actionTypes.REGISTER_START: return registerStart(state, action);
        case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
        case actionTypes.REGISTER_FAIL: return registerFail(state, action);
        case actionTypes.RESET_PASSWORD_START: return resetPasswordStart(state, action);
        case actionTypes.RESET_PASSWORD_SUCCESS: return resetPasswordSuccess(state, action);
        case actionTypes.RESET_PASSWORD_FAIL: return resetPasswordFail(state, action);
        case actionTypes.CHECK_AUTH_STATE_START: return checkAuthStateStart(state, action);
        case actionTypes.CHECK_AUTH_STATE_SUCCESS: return checkAuthStateSuccess(state, action);
        default: return state;
    }
}

export default authReducer;