import styled from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5rem;
    
`;

export const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 3rem;
    
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 1rem;
    margin-left: 6rem;

    .MuiAccordion-rounded:last-child, .MuiAccordion-rounded:first-child {
        border-radius: 0;
    }

    .MuiPaper-elevation1 {
        box-shadow: none;
        border: none;
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