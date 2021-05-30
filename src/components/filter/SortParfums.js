import React, { useState } from 'react';
import { FilterMenu, Sort } from './styled-filter';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';

function SortParfums({ sorting }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [sortValue, setSortValue] = useState("default");

    // handle sorting parfums function by selcted price 
    const handleSorting = (event) => {
        setAnchorEl(null);
        sorting(event.target.value);
        event.target.value == 1 ? setSortValue("lowest") : setSortValue("highest");
        
    }

    return (
        <div>
            <Sort>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                    <h5>
                        { (sortValue != "default") ? <span> { sortValue } price</span> : "sort by"}
                    </h5>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FilterMenu>
                            <MenuItem 
                                value={1}
                                onClick={handleSorting}> price (lowest)
                        </MenuItem>

                        <MenuItem 
                            value={2}
                            onClick={handleSorting}> price (highest)
                        </MenuItem>
                        </FilterMenu>
                    </AccordionDetails>
                </Accordion>
            </Sort>            
        </div>
    )
}

export default SortParfums
