import { useContext } from "react";
import { CharactersContext } from "../context/characters/CharContext";

const Pagination = ({ pages }) => {

    const { state, setState } = useContext(CharactersContext)

    const totalPages = Array(state.pages).fill(null).map(( pos, i )=>(i + 1))

    const handleClick = (selectedPage) => {
        setState(prevState => ({...prevState, currentPage: selectedPage }))

    }

    return ( 
        <>
            <div className="flex w-full lg:w-4/5 bg-slate-50 rounded-md justify-center py-2">
                {
                    totalPages.map(( page, i )=>(
                        <button onClick={() => handleClick( page ) } key={ i } className="mx-1">{ page }</button>
                    ))
                }
            </div>
        </>
     );
}
 
export default Pagination;