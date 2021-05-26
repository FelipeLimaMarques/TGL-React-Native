import * as actionTypes from "./actionTypes";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../../axios";
import { AppDispatch } from "../store";
import { IUser } from "../../utils/interfaces";

export const fetchUserDataStart = () => {
  return {
    type: actionTypes.FETCH_USER_DATA_START,
  };
};

export const fetchUserDataSuccess = (name: string, email: string) => {
  return {
    type: actionTypes.FETCH_USER_DATA_SUCCESS,
    name,
    email,
  };
};

export const fetchUserDataFail = (error: Error) => {
  return {
    type: actionTypes.FETCH_USER_DATA_FAIL,
    error,
  };
};

export const fetchUserData: Function = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const token = await AsyncStorage.getItem("@login_token");
      const id = await AsyncStorage.getItem("@user_id");
      dispatch(fetchUserDataStart());
      const res = await axios.get(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(fetchUserDataSuccess(res.data.name, res.data.email));
    } catch (err) {
      if (!err.status) {
        ToastAndroid.show(
          "Não foi possível recuperar os dados.",
          ToastAndroid.SHORT
        );
        dispatch(fetchUserDataFail(err));
      } else {
        ToastAndroid.show("Usuário inexistente.", ToastAndroid.SHORT);
        dispatch(fetchUserDataFail(err.message));
      }
    }
  };
};

export const updateAccountStart = () => {
  return {
    type: actionTypes.UPDATE_ACCOUNT_START,
  };
};

export const updateAccountSuccess = (user: IUser) => {
  return {
    type: actionTypes.UPDATE_ACCOUNT_SUCCESS,
    user,
  };
};

export const updateAccountFail = (error: string) => {
  return {
    type: actionTypes.UPDATE_ACCOUNT_FAIL,
    error,
  };
};

export const updateAccount: Function = (
  navigation: any,
  name: string,
  email: string,
  password: string
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const token = await AsyncStorage.getItem("@login_token");
      const id = await AsyncStorage.getItem("@user_id");
      const updateAccountData = {
        name,
        email,
        password,
      };

      dispatch(updateAccountStart());
      const res = await axios.put(`/users/${id}`, updateAccountData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(updateAccountSuccess(updateAccountData));
      dispatch(fetchUserData())
      navigation.navigate("RecentGames");
    } catch (err) {
      console.log(err)
      if (err) {
        dispatch(updateAccountFail(err.message));
      } else {
        ToastAndroid.show(
          "Não foi possível atualizar os dados.",
          ToastAndroid.SHORT
        );
      }
    }
  };
};
