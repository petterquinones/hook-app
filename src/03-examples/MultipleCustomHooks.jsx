/* eslint-disable no-unused-vars */
/**Si hacemos la petición http, en este componente cada vez que dicha petición se realiza volveremos a redibujar el componente, por lo cual es mejor usar un hooks, al hacer uso de hooks evitamos que se dispare la petición cada vez que se redibuje el componente.*/

import { useCounter, useFetch } from "../Hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

  const {incremet, decrement,counter} = useCounter();
  const {data, isLoading, hasError, error}=useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
        <h1>Información de Pokemon. </h1>
        <hr/>

        { isLoading 
        ? <LoadingMessage/> 
        : (
          <PokemonCard 
          name ={data?.name} 
          id={data?.id} 
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny
          ]}
          />)}

        {/* <h2> {data?.name} </h2> */}
        {/* <pre> { JSON.stringify(data , null , 2)} </pre> */}

        <button className="btn btn-primary mt-4"
        onClick={ ()=> counter > 1 ? decrement() : null}>
          Anterior
        </button>

        <button className="btn btn-primary mt-4"
        onClick={ ()=>incremet()}>
          Siguiente
        </button>

    </>
  )
} 
