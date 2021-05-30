import React, { useState } from 'react';
import { FilterMenu, Left, Right } from './styled-filter';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Filter({data, name, orientation, filter}) {
    const [checked, setChecked] = useState([]);

    // set up alignment by given orientation 
    switch(orientation) {
        case 'Left':
            var Block = Left
          break;
        case 'Right':
            var Block = Right
          break;
      }
    
    // when clicking on a brand at filter brands/type section then toggle function on parent Home component
    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        
        setChecked(newChecked);
        filter(newChecked);
    }

    return (
            <Block>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                    <h5>{name}</h5>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FilterMenu>
                            { (data[name]?.length > 0) && 
                                data[name].map((brand, index) => {
                                    return (
                                        <p key={index}>
                                            <label>
                                                <input
                                                    onChange={() => {handleToggle(brand)}} 
                                                    type="checkbox"/>
                                                <span> { brand }</span>
                                            </label>                            
                                        </p>
                                    )
                                })
                            }
                        </FilterMenu>
                    </AccordionDetails>
                </Accordion>
            </Block>

    )
}

export default Filter
