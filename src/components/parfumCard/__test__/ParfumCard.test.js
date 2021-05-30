import React from 'react';
import ParfumCard from '../ParfumCard';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('ParfumCard renders without crashing', () => {
    function renderCard() {
        return render(
            <ParfumCard 
                id="1" 
                name="Hugo Boss" 
                slug="HugoBoss" 
                brand="HugoBoss" 
                type="Eau de Parfum" 
                image="" 
                price={2250}
                size="30ml" 
                rating={95}/>
        )
    }

    it('should match with snapshot', () => {
        expect(renderCard()).toMatchSnapshot();
    });

    it('should match parfum name', () => {
        const { getByTestId } = renderCard();
        const element = screen.getByTestId('testName')
        expect(element.textContent).toEqual("Hugo Boss")
        expect(element.textContent).not.toEqual("Jill Sander")
    });
  })