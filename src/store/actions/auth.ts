import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as actionTypes from "./actionTypes";
import axios from "../../axios";
import { AppDispatch } from "../store";

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START,
  };
};

export const loginSuccess = (token: string) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token,
  };
};

export const loginFail = (error: string) => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error,
  };
};

export const logoutStart = () => {
  return {
    type: actionTypes.LOGOUT_START,
  };
};

export const logoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
};

export const logoutFail = (error: Error) => {
  return {
    type: actionTypes.LOGOUT_FAIL,
    error,
  };
};

export const logout: Function = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(logoutStart());

      await AsyncStorage.removeItem("@login_token");
      await AsyncStorage.removeItem("@user_id");

      dispatch(logoutSuccess());
    } catch (err) {
      dispatch(logoutFail(err));
    }
  };
};
//

export const getUserId: Function = (email: string, token: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await axios.get("/users", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const user = res.data.users.find((user: any) => user.email === email);

      await AsyncStorage.setItem("@user_id", user.id.toString());
    } catch (err) {
      console.log(err);
    }
  };
};

export const login: Function = (
  email: string,
  password: string
) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(loginStart());
      const loginData = {
        email,
        password,
      };

      if (loginData.email !== "" && loginData.password !== "") {
        const res = await axios.post("/sessions", loginData);

        await AsyncStorage.setItem("@login_token", res.data.token);

        dispatch(loginSuccess(res.data.token));
        dispatch(getUserId(loginData.email, res.data.token));
      } else {
        dispatch(loginFail("Erro."));
        ToastAndroid.show("Preencha todos os campos", ToastAndroid.SHORT);
      }
    } catch (err) {
      if (!err.status) {
        ToastAndroid.show("Não foi possível logar", ToastAndroid.SHORT);
        dispatch(loginFail(err));
      } else {
        ToastAndroid.show("E-mail ou Senha inválidos", ToastAndroid.SHORT);
        dispatch(loginFail(err.message));
      }
    }
  };
};
//

export const registerStart = () => {
  return {
    type: actionTypes.REGISTER_START,
  };
};

export const registerSuccess = () => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
  };
};

export const registerFail = (error: string) => {
  return {
    type: actionTypes.REGISTER_FAIL,
    error,
  };
};

export const register: Function = (
  navigation: any,
  name: string,
  email: string,
  password: string
) => {
  return (dispatch: AppDispatch) => {
    const registerData = {
      email,
      password,
      name,
    };

    if (
      registerData.email !== "" &&
      registerData.password !== "" &&
      registerData.name !== ""
    ) {
      dispatch(registerStart());
      axios
        .post("/users", registerData)
        .then((res) => {
          dispatch(registerSuccess());
          navigation.goBack();
        })
        .catch((err) => {
          if (!err.status) {
            ToastAndroid.show(
              "Não foi possível registrar.",
              ToastAndroid.SHORT
            );
            dispatch(registerFail(err));
          } else {
            ToastAndroid.show(
              "Registro não pôde ser efetuado.",
              ToastAndroid.SHORT
            );
            dispatch(registerFail(err.message));
          }
        });
    } else {
      dispatch(registerFail("Erro."));
    }
  };
};

export const resetPasswordStart = () => {
  return {
    type: actionTypes.RESET_PASSWORD_START,
  };
};

export const resetPasswordSuccess = () => {
  return {
    type: actionTypes.RESET_PASSWORD_SUCCESS,
  };
};

export const resetPasswordFail = (error: string) => {
  return {
    type: actionTypes.RESET_PASSWORD_FAIL,
    error,
  };
};

export const resetPassword: Function = (navigation: any, email: string) => {
  return (dispatch: AppDispatch) => {
    const resetData = {
      email,
      redirect_url: "http://localhost:3000/update_password",
    };

    if (email !== "") {
      dispatch(resetPasswordStart());
      axios
        .post("/passwords", resetData)
        .then((res) => {
          dispatch(resetPasswordSuccess());
          navigation.goBack();
        })
        .catch((err) => {
          if (!err.status) {
            ToastAndroid.show(
              "Não foi possível enviar e-mail de reset de senha.",
              ToastAndroid.SHORT
            );
            dispatch(resetPasswordFail(err));
          } else {
            ToastAndroid.show("E-mail não encontrado.", ToastAndroid.SHORT);
            dispatch(resetPasswordFail(err.message));
          }
        });
    } else {
      dispatch(resetPasswordFail("Erro."));
      ToastAndroid.show("Preencha o campo e-mail.", ToastAndroid.SHORT);
    }
  };
};

export const checkAuthStateStart = () => {
  return {
    type: actionTypes.CHECK_AUTH_STATE_START
  }
}

export const checkAuthStateSuccess = (token: string) => {
  return {
    type: actionTypes.CHECK_AUTH_STATE_SUCCESS,
    token,
  };
};

export const checkAuthState: Function = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(checkAuthStateStart())
      const token = await AsyncStorage.getItem("@login_token");

      dispatch(checkAuthStateSuccess(token!));
    } catch (err) {
      dispatch(logout());
    }
  };
};
