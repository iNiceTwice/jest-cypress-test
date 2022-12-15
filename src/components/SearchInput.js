import { BiSearch } from "react-icons/bi"
import { useContext, useState, useEffect } from "react";
import { CharactersContext } from "../context/characters/CharContext";
import useDebounce from "../hooks/useDebounce"

const SearchInput = () => {

    const { getCharacters, state, setState } = useContext(CharactersContext)
    const [ query, setQuery ] = useState("")
    const debounceSearch = useDebounce(query, 400)

    const handleChange = (e) => {
        setQuery(e.target.value)
        setState({...state, currentPage:1})
    }
    
    const fetchCharacters = async () => {
        await getCharacters(debounceSearch)
    }
    useEffect(() => {
        fetchCharacters()
    },[debounceSearch,state.currentPage])

    return ( 
        <>
            <div className="flex flex-row-reverse items-center border border-slate-800/30 rounded-md">
                <BiSearch className="h-fit mr-2 text-slate-900/20" size={25}/>
                <input onChange={ handleChange } className="w-96 h-10 px-4 bg-slate-50 outline-none" />
            </div>
        </>
     );
}
 
export default SearchInput;