import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import gamesReducer from './reducers/games';
import betsReducer from './reducers/bets';
import updateUserReducer from './reducers/updateUser';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        games: gamesReducer,
        bets: betsReducer,
        updateUser: updateUserReducer
    },
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;