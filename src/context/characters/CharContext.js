import { useState, createContext } from "react"
import axios from "axios"

const initialState = {
    characters:[],
    pages:null,
    currentPage:1
}

export const CharactersContext = createContext()
 
export const CharactersProvider = ({children}) => {

    const [ state, setState ] = useState(initialState)

    const getCharacters = async () => { 
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${state.currentPage}`)
        setState({ ...state, pages:res.data.info.pages, characters: res.data.results })
    }
    
    const getCharactersByQuery = async (query) => {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${state.currentPage}&name=${query}`)
        setState({ ...state, pages:res.data.info.pages, characters: res.data.results })
    }

    return (
        <CharactersContext.Provider
            value={{
                getCharacters,
                getCharactersByQuery,
                state,
                setState
            }}
        >
            { children }
        </CharactersContext.Provider>
    )
}




