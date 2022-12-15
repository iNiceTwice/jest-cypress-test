import { memo } from "react";

const CharacterStatusColor = ({status}) => {

    const statusColors = {
        Alive:"bg-green-300",
        Dead:"bg-red-300",
        unknown:"bg-slate-300"
    }

    return <div className={`h-fit mx-2 rounded-full p-2 ${statusColors[status]}`}></div>
}

const Character = ({ data }) => {
    return ( 
        <>
            <div className="w-full bg-slate-50 rounded-md shadow-md flex items-center">
                <div className="flex items-center w-full h-full">
                    <img className="h-40 rounded-tl-md rounded-bl-md" alt={ data.name } src={data.image}/>
                    <div className="ml-4">
                        <h2 className="flex items-center font-medium text-slate-900">{ data.name } <CharacterStatusColor status={ data.status }/></h2>
                        <p>Gender: { data.gender }</p>
                        <p>Species: { data.species }</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default memo(Character);