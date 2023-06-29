// import { createStore } from 'redux';

// const rootReducer = (state = {}, action: any) => {
//   return state;
// };

// const initialState = {};


// const store = createStore(rootReducer, initialState);

// export default store;

import personajesReducer from "../reducers/personajesReducer";
import favoritosReducer from "../reducers/favoritosReducer";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    personajes: personajesReducer,
    favorites: favoritosReducer,

    //agregar el reducer de personajesFavoritos
  }
});

//Hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
