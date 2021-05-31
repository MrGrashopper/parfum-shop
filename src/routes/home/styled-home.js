import styled from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5rem;

    @media (min-width: 1920px) {
        padding: 10rem;
        margin-top: 5rem;
    }
`;

export const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    .MuiAccordion-rounded:last-child, .MuiAccordion-rounded:first-child {
        border-radius: 0;
    }

    .MuiPaper-elevation1 {
        box-shadow: none;
        border: none;
        border-bottom: 1px solid #d5d5d5;
    }

    .MuiAccordionSummary-root {
        max-height: 2rem;
        min-height: 2rem;
    }

    .MuiAccordionSummary-root.Mui-expanded {
        min-height: 2rem;
    }

    @media (max-width: 768px) {
        display: block;
        margin-top: 0;
        margin-left: 0rem;
    }
`;


export const AbsolutContainer = styled.div`
    position: absolute;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
`;