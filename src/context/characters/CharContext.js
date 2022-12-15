import { useState, createContext } from "react"
import axios from "axios"

const initialState = {
    characters:[],
    pages:null,
    currentPage:1
}

export const CharactersContext = createContext()
 
export const CharactersProvider = ({children}) => {

    const API = "https://rickandmortyapi.com/api/character"
    const [ state, setState ] = useState(initialState)
    
    const getCharacters = async (query) => {
        const res = await axios.get(`${API}/?name=${query}&page=${state.currentPage}`)
        setState({ ...state, pages:res.data.info.pages, characters: res.data.results })
    }

    return (
        <CharactersContext.Provider
            value={{
                getCharacters,
                state,
                setState
            }}
        >
            { children }
        </CharactersContext.Provider>
    )
}




