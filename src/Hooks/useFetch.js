/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/**Realizamos este useFetch con el propósito de evitar redibujar renderizar todo el componente cada vez que se realiza una petición fetch */

import { useEffect, useState } from "react"

const localCache = {}


export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null, 
        isLoading: true,
        hasError: false,
        error: null
    })

    //En el array de las dependencias [ url ], significa que cuando la url cambie en ese momento se vuelve ha activar el useEffect

    useEffect(() => {
       getFetch()
    }, [url])
    
    //Vuelvo a actualizar el estado cada vez que se actualizan las dependencias. 
    const setLoadingState = ()=>{
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }


    const getFetch = async()=>{

        //Almacenamiento de información en cache
        if(localCache[url]){
            console.log('Usando cache')
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }
        
        setLoadingState();

        const resp = await fetch(url);

        //Sleep duerme un 1,5 segundos esperar para continuar la linea
        await new Promise( resolve => setTimeout(resolve, 1000));

        if(!resp.ok){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message:resp.statusText,
                }
            })
            return;
        }

        const data = await resp.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        //manejo del cache
        localCache[url] = data
      /*   console.log({data})  */
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error
    }
}
