import SearchInput from "./SearchInput";

const Nav = () => {

    return ( 
        <>
            <div className="fixed w-full lg:mt-10 flex justify-center">
                <div className="flex justify-between items-center lg:rounded-md p-8 w-full lg:w-4/5 bg-slate-50 shadow-md">
                    <h3 className="text-xl font-bold text-slate-800">Rick & Morty</h3>
                    <SearchInput/>
                </div>
            </div>
        </>
     );
}
 
export default Nav;