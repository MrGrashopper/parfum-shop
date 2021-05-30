// exporting functions to leave the component clean

// when clicking of a filter sort by brand && || type and return filtered parfums
export const FilterBrandType = (brandState, typeState, Parfums)=>{
    if (brandState  && !typeState) {
        const filteredBrands = Parfums.filter(parfum => brandState.includes(parfum.brand));
        return(filteredBrands)}

    else if (!brandState && typeState) {
        const filteredTypes = Parfums.filter(parfum => typeState.includes(parfum.type));
        return(filteredTypes)}

    else if (brandState && typeState) {
        const filteredBrands = Parfums.filter(parfum => brandState.includes(parfum.brand));
        const filteredTypes = filteredBrands.filter(parfum => typeState.includes(parfum.type));
        return(filteredTypes)}

    else if (!brandState && !typeState) {
        return(Parfums);
    }    
}

// sort parfums by price 
export const HandleSorting = (kind, parfums) => {
    switch (kind) {
        case 1:
            const sortByLowestPrice = parfums.sort((a, b) => (a.price > b.price) ? 1 : -1);
            return(sortByLowestPrice);

        case 2:
            const sortByHighestPrice = parfums.sort((a, b) => (a.price < b.price) ? 1 : -1);
            return(sortByHighestPrice);  
  
    }
}

// check if filter types are present
export const FilterTypes = (types) => {
    if (types.length > 0) {
        return(types);
    } else {
        return(0);
    }    
}

// check if filter brands are present
export const FilterBrands = (brands) => {   
    if (brands.length > 0) {
        return(brands);
    } else {
        return(null);
    } 
};