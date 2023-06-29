import Personaje from "../types/personaje.types";

export const buscarPersonajesAPI = async (
  nombre?: string
): Promise<Personaje[]> => {
  let params = "?";
  if (nombre) {
    params += `name=${nombre}`;
  }
  return fetch(`https://rickandmortyapi.com/api/character/${params}`)
    .then((data) => data.json())
    .then((data) => data.results);
};
