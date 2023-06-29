import './filtros.css';
import { ChangeEvent, useState, Dispatch, SetStateAction  } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import { fetchCharactersThunk } from "../../reducers/personajesReducer";

interface FiltrosProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}


const Filtros = ({ inputValue, setInputValue }: FiltrosProps)=> {
  const dispatch = useAppDispatch();

  const buscarPersonajes = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value); 
      dispatch(fetchCharactersThunk(e.target.value));
  };

  return (
      <div className="filtros">
          <label>Filtrar por nombre:</label>
          <input
              onChange={buscarPersonajes}
              type="text"
              placeholder="Rick, Morty, Beth, Alien, ...etc"
              name="nombre"
              value={inputValue}
          />
      </div>
  );
}

export default Filtros;