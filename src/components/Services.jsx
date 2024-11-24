import {useEffect} from "react";


export const Services = () => {
    useEffect(() => {
        console.log("Service component is created")
        return () => {
            console.log("Service component is destroyed")
        }

    }, []);
    return (
        <div>Services</div>
    )
}
