import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { fetchCharactersThunk } from "../reducers/personajesReducer";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { useState } from "react";

 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
 const PaginaInicio = () => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState("");

    const handleRemoveClick = ()=> {
        dispatch(fetchCharactersThunk(""));
        setInputValue("");
    }

    return (
        <div className="container">
            <div className="actions">
                <h3>Catálogo de Personajes</h3>
                <button className="danger" onClick={handleRemoveClick}>Limpiar filtro</button>
            </div>
            <Filtros inputValue={inputValue} setInputValue={setInputValue}/>
            <Paginacion />
            <GrillaPersonajes />
            <Paginacion />
        </div>
    )
}

export default PaginaInicio;