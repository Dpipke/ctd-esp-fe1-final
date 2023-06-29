import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
    Reducer
  } from "@reduxjs/toolkit";
  import { buscarPersonajesAPI } from "../services/personaje.services";
  import Personaje from "../types/personaje.types";
  
  export interface PersonajesState {
    status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
    characters: Personaje[];
    errorMessage: string | null;
    busqueda: string; 
  }
  
  const initialState: PersonajesState = {
    status: "IDLE",
    characters: [],
    errorMessage: null,
    busqueda: ""
  };
  
  export const fetchCharactersThunk = createAsyncThunk(
    "personajes/fetchThunk",
    async (query: string) => {
      try {
        const personajes: Personaje[] = await buscarPersonajesAPI(query);
        return personajes;
      } catch (e) {
        return e;
      }
    }
  );

  export const fetchCharData = (charDataToMap: any): Personaje => {
    return {
      id: charDataToMap.id,
      name: charDataToMap.name,
      status: charDataToMap.status,
      image: charDataToMap.image,
      species: charDataToMap.species,
      episode: charDataToMap.episode
    };
  };
  
  
  
  const persojeslice = createSlice({
    name: "personajes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCharactersThunk.pending, (state) => {
          state.status = "LOADING";
        })
        .addCase(
          fetchCharactersThunk.fulfilled,
          (state, action: PayloadAction<Personaje[] | any>) => {
            state.status = "COMPLETED";
            state.characters = action.payload;
          }
        )
        .addCase(
          fetchCharactersThunk.rejected,
          (state, action: PayloadAction<Personaje[] | any>) => {
            state.status = "FAILED";
            state.errorMessage = action.payload;
          }
        );
    }
  });
  
  export default persojeslice.reducer;
  