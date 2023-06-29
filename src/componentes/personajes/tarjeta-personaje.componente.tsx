import Personaje from "../../types/personaje.types";
import BotonFavorito from '../botones/boton-favorito.componente';
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchToggleFavorite } from "../../reducers/favoritosReducer";


import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * @param {Personaje} character - The properties of the character
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({ character }: { character: Personaje }) => {
    const favoritesState = useAppSelector((state) => state.favorites);
    const dispatch = useAppDispatch();

    const onClickFav = () => {
        console.timeLog("hoa")
        dispatch(fetchToggleFavorite(character.id));
      };

    const isFav = Array.isArray(favoritesState.list) && favoritesState.list.includes(character.id);

    return <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name}/>
        <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito esFavorito={isFav} onClick={onClickFav}/>
        </div>
    </div>
}

export default TarjetaPersonaje;
