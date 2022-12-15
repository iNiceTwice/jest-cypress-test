import { useContext, useEffect, useState } from "react";
import Character from "./Character";
import { CharactersContext } from "../context/characters/CharContext";


const CharactersContainer = () => {

    const { getCharacters, state } = useContext(CharactersContext)

    const fetchCharacters = async () => {
        try {
            await getCharacters()
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        fetchCharacters()
    },[state.currentPage])

    return ( 
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 w-full lg:w-4/5 rounded-md h-fit mt-48">
                {
                    state.characters?.map(char => (
                        <Character key={ char.id } data={ char } />
                    ))
                }
            </section>
        </>
     );
}
 
export default CharactersContainer;