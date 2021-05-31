import styled from 'styled-components';

export const CardContainer = styled.div`
    margin-bottom: 1rem;
    border: 1px solid transparent;
    padding-bottom: 1rem;
    width: 15rem;

    &:hover {
        border: 1px solid #d5d5d5;
        cursor: pointer;
    }
  }
`;

export const CardImage = styled.p`
  height: 15rem;
  width: 10rem;
  margin: auto;

    img {
      object-fit: contain;
      height: 100%;
      width: inherit;
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 2rem;
    }
`;

export const CardTitle = styled.p`
  font-size: 14px;
  margin: 1rem;
  font-weight: 700;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
`;

export const CardType = styled.p`
  font-size: 14px;
  color: #737373;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const CardPrice = styled.p`
  font-size: 14px;
  color: #4a4a4a;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.2rem;
`;

export const CardRating = styled.p`
  text-align: center;
  
  .MuiRating-root {
    font-size: 14px;
    color: #4a4a4a;
  }
`;
