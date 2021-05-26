import * as actionTypes from "./actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";
import axios from "../../axios";
import { AppDispatch } from "../store";
import { IBet, IBetFormated, IGame } from "../../utils/interfaces";

export const addNumber = (number: number, maxLength: number, id: number) => {
  return {
    type: actionTypes.ADD_NUMBER,
    number,
    maxLength,
    id,
  };
};

export const removeNumber = (number: number, id: number) => {
  return {
    type: actionTypes.REMOVE_NUMBER,
    number,
    id,
  };
};

export const clearNumbers = (id: number) => {
  return {
    type: actionTypes.CLEAR_NUMBERS,
    id,
  };
};

export const completeNumbers = (
  maxLength: number,
  range: number,
  id: number
) => {
  return {
    type: actionTypes.COMPLETE_NUMBERS,
    maxLength,
    range,
    id,
  };
};

export const showCart = () => {
  return {
    type: actionTypes.SHOW_CART,
  };
};

export const hideCart = () => {
  return {
    type: actionTypes.HIDE_CART,
  };
};

export const addToCart = (bet: IBet, game: IGame) => {
  return {
    type: actionTypes.ADD_TO_CART,
    bet: {
      numbers: bet.numbers,
      game_id: game.id,
    },
    price: game.price,
    maxNumber: game["max-number"],
  };
};

export const removeFromCart = (index: number, price: number) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    index,
    price,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};

export const filterBets = (id: number) => {
  return {
    type: actionTypes.FILTER_BETS,
    id,
  };
};

export const unfilterBets = () => {
  return {
    type: actionTypes.UNFILTER_BETS,
  };
};

export const saveBetsStart = () => {
  return {
    type: actionTypes.SAVE_BETS_START,
  };
};

export const saveBetsSuccess = () => {
  return {
    type: actionTypes.SAVE_BETS_SUCCESS,
  };
};

export const saveBetsFail = (error: Error) => {
  return {
    type: actionTypes.SAVE_BETS_FAIL,
    error,
  };
};

export const saveBets: Function = (bets: Array<IBet>, navigation: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const token = await AsyncStorage.getItem("@login_token");
      const betsObj = {
        bets,
      };

      dispatch(saveBetsStart());
      const res = await axios.post("/bets", betsObj, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(saveBetsSuccess());
      dispatch(clearCart());
      dispatch(fetchBets())
      navigation.closeDrawer()
      navigation.navigate("RecentGames");
    } catch (err) {
      if (!err.status) {
        ToastAndroid.show(
          "Não foi possível salvar as apostas.",
          ToastAndroid.SHORT
        );
        dispatch(saveBetsFail(err));
      } else {
        dispatch(saveBetsFail(err.response.data.error));
      }
    }
  };
};

export const fetchBetsStart = () => {
  return {
    type: actionTypes.FETCH_BETS_START,
  };
};

export const fetchBetsSuccess = (bets: Array<IBetFormated>) => {
  return {
    type: actionTypes.FETCH_BETS_SUCCESS,
    bets,
  };
};

export const fetchBetsFail = (error: Error) => {
  return {
    type: actionTypes.FETCH_BETS_FAIL,
    error,
  };
};

export const fetchBets: Function = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchBetsStart());
      const token = await AsyncStorage.getItem("@login_token");
      const res = await axios.get("/bets", {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(fetchBetsSuccess(res.data.bets));
    } catch (err) {
      if (!err.status) {
        ToastAndroid.show(
          "Não foi possível recuperar as apostas.",
          ToastAndroid.SHORT
        );
        dispatch(fetchBetsFail(err));
      } else {
        dispatch(fetchBetsFail(err.response.data.error));
      }
    }
  };
};
