import {useEffect, useState} from "react";


export const Services = () => {
    const [first, setFirst] = useState("This is normal data")
    const [second, setSecond] = useState("This is large data")
    useEffect(() => {
        console.log("Service component is created")
        return () => {
            console.log("Service component is destroyed")
        }

    },[second]);
    return (
        <div className="flex flex-col items-center justify-center w-full gap-2">
            <h1>{first}</h1>
            <button onClick={()=> setFirst("Normal data has changed")} className="bg-red-300 p-2 rounded-full">Change Normal Data</button>
            <h1 >{second}</h1>
            <button onClick={()=> setSecond("Large data has changed")} className="bg-purple-200 rounded-full p-2">Change Large Data</button>
        </div>
    )
}
