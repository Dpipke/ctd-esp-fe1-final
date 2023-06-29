import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import {
  fetchFavoriteCharacters,
} from "../reducers/favoritosReducer";
import { Link } from "react-router-dom";

/**
 * Página de favoritos. Aquí se mostrarán los personajes marcados como favoritos.
 *
 * @returns la página de favoritos
 */
const Favorites = () => {
  const favoriteCharacters = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    dispatch(fetchFavoriteCharacters());
  }, [dispatch]);

  const filteredCharacters = favoriteCharacters.characters.filter((character) =>
    favoriteCharacters.list.includes(character.id)
  );


  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Favorite Characters</h1>
      </div>
      {filteredCharacters.length > 0 ? ( 
        <GrillaPersonajes charactersProp={filteredCharacters} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', height: '70vh', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontSize: '18px', fontStyle: 'italic', fontWeight: 'bold', opacity: '0.5' }}>
                Aún no has agregado personajes
            </p>
            <Link to="/">
              <p style={{ fontSize: '16px', textDecoration: 'underline', opacity: '0.5', transition: 'colors 0.3s ease' }}>
                Añadi tus personajes favoritos desde aquí
              </p>
            </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;