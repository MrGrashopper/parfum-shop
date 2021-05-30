import { useState, useEffect } from "react";

// custom Hook: get all types of parfums from given parfums
const GetTypes = (params) => {
    const [types, setTypes] = useState(null);

    useEffect(() => {   
        if (params != null) {
            const typesArr = [];

            params.reduce((acc, current) => {
                if(!typesArr.includes(current.type)) {
                    typesArr.push(current.type)
                };
                setTypes(typesArr);
            }) 
        }

    }, [params])
    return { types }
}

export default GetTypes;