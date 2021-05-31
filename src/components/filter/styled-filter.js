import styled from 'styled-components';

export const Left = styled.div`
    margin: 0 1rem;

    .MuiAccordionDetails-root, .MuiAccordionSummary-root {
        padding: 0;
    }

    @media (max-width: 768px) {
        position: relative;
        right: 0;
        width: auto;

        .MuiAccordionSummary-root {
            padding: 0 1rem;
        }
    }
`;

export const Right = styled.div`
    margin: 0 1rem;

    .MuiAccordionDetails-root, .MuiAccordionSummary-root {
        padding: 0;
    }

    @media (max-width: 768px) {
        position: relative;
        left: 0;
        width: auto;

        .MuiAccordionSummary-root {
            padding: 0 1rem;
        }
    }
`;

export const Sort = styled.div`
    margin: 0 1rem;

    .MuiAccordionDetails-root, .MuiAccordionSummary-root {
        padding: 0;
    }

    .MuiMenuItem-root {
        line-height: 1;
        white-space: nowrap;
        letter-spacing: 0;
        padding-bottom: 6px;
    }

    .MuiListItem-gutters {
        padding-left: 0.2rem;
        padding-right: 0.2rem;
    }

    @media (max-width: 768px) {
        position: relative;
        left: 0;
        width: auto;

        .MuiAccordionSummary-root {
            padding: 0 1rem;
        }
    }
`;


export const FilterMenu = styled.div`

    width: 100%;
    overflow-y: auto;
    border: 1px solid #d5d5d5;
    border-bottom: 1px solid white;
    padding: 0.5rem;
    max-height: 8rem;

    p {
        margin-top: 0.2rem;
        font-size: 14px;
        font-weight: 400;
    }

    ::-webkit-scrollbar {
        -webkit-appearance: none;
    }
    
    ::-webkit-scrollbar:vertical {
        width: 11px;
    }
    
    
    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid white; 
        background-color: rgba(0, 0, 0, .5);
    }
`;