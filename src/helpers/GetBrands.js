import { useState, useEffect } from "react";

// custom Hook: get all brands from given parfums
const GetBrands = (params) => {
    const [brands, setBrands] = useState(null);

    useEffect(() => {   
        if (params != null) {
            const brandArr = [];

            params.reduce((acc, current) => {
                if(!brandArr.includes(current.brand)) {
                    brandArr.push(current.brand)
                };
                setBrands(brandArr);
            }) 
        }

    }, [params])
    return { brands }
}

export default GetBrands;