import { useEffect } from 'react';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchCharactersThunk } from "../../reducers/personajesReducer";
import Personaje from "../../types/personaje.types";

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

 interface GrillaPersonajesProps {
  charactersProp?: Personaje[];
}

const GrillaPersonajes: React.FC<GrillaPersonajesProps> = ({ charactersProp }) => {
  const dispatch = useAppDispatch();
  const { characters: charactersFromState, status } = useAppSelector((state) => state.personajes);
  
  const characters = charactersProp || charactersFromState;

  useEffect(() => {
    if (!charactersProp) {
      dispatch(fetchCharactersThunk(""));
    }
  }, [dispatch, charactersProp]);


    if (status === "LOADING") return <div>Cargando personajes...</div>;
    if (status === "FAILED") return <div>No se pudo cargar los personajes.</div>;
    if (!characters || characters.length === 0) return <></>;
    
    return (
        <div className="grilla-personajes">
          {characters.map((character, index) => (
            <TarjetaPersonaje key={index} character={character} />
          ))}
        </div>
      );
}
 
export default GrillaPersonajes;