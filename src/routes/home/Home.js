import React, { useState, useEffect } from 'react';
import Parfums from "../../data/parfums";
import ParfumCard from "../../components/parfumCard/ParfumCard";
import Filter from "../../components/filter/Filter";
import SortParfums from "../../components/filter/SortParfums";
import { FlexContainer, FilterContainer, PaginationContainer } from './styled-home';
import GetBrands from "../../helpers/GetBrands";
import GetTypes from "../../helpers/GetTypes";
import { FilterBrandType, HandleSorting, FilterTypes, FilterBrands } from "../../helpers/Functions";
import Pagination from '@material-ui/lab/Pagination';

function Home() {
    const [parfums, setParfums] = useState(Parfums);
    const [brandState, setBrandState] = useState(null);
    const [typeState, setTypeState] = useState(null);
    const [change, setChange] = useState(false);
    const brandData = GetBrands(Parfums);
    const typeData = GetTypes(Parfums);
    const parfumsPerPage = 12;
    const pageCount = Math.ceil(parfums.length / parfumsPerPage);
    const [page, setPage] = useState(1);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(parfumsPerPage);
    const [sorting, setSorting] = useState(false);

    // filtering parfums by selected types
    const filterTypes = (types) => { 
        const checkTypes =  FilterTypes(types);
        setTypeState(checkTypes);
        setChange(!change);
    };

    // filtering parfums by selected brands
    const filterBrands = (brands) => {   
        const checkBrands = FilterBrands(brands);
        setBrandState(checkBrands);
        setChange(!change);
    };

    // filtering parfums by price (highest/lowest)
    const handleSorting = (kind) => {
        const sortByPrice = HandleSorting(kind, parfums)
        setParfums(sortByPrice);
        setSorting(!sorting);
    }

    // pagination 
    const handlePage = (event, value) => {
        const newEnd = value * parfumsPerPage ;
        const newStart = newEnd - parfumsPerPage;
        setPage(value)
        setStart(newStart);
        setEnd(newEnd);
    };

    // Hook waits for change of brandState/typeState to filter parfums 
    useEffect(() => {
        const filter = FilterBrandType(brandState, typeState, Parfums);
        setParfums(filter)
        setPage(1);
        setStart(0);
        setEnd(parfumsPerPage);
    }, [change])

    return (
        <div>
            <FilterContainer>
                <Filter 
                    data={brandData}
                    name="brands"
                    orientation="Left"
                    filter={filterBrands}/>
                   
                <Filter 
                    data={typeData}
                    name="types"
                    orientation="Right"
                    filter={filterTypes}/>

                <SortParfums sorting={handleSorting}/>
            </FilterContainer>

            <FlexContainer>
                { parfums.slice(start, end).map((parfum, index) => {
                    return (  
                        <React.Fragment key={index}>  
                            <ParfumCard 
                                key={parfum.id}
                                id={parfum.id}
                                name={parfum.name}
                                slug={parfum.slug}
                                brand={parfum.brand} 
                                type={parfum.type} 
                                image={parfum.image} 
                                price={parfum.price} 
                                size={parfum.size} 
                                rating={parfum.rating}/>  
                        </React.Fragment>                        
                    )})}               
            </FlexContainer> 
            
            <PaginationContainer>
                <Pagination 
                    count={pageCount} 
                    page={page} 
                    shape="rounded" 
                    onChange={handlePage} /> 
            </PaginationContainer>   

        </div>
    )
}

export default Home
