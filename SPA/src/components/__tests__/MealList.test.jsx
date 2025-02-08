import { MealList } from "../MealList";
import { renderWithRouter } from "../../../_src/utils/testing";
import { screen } from "@testing-library/react";

describe('MealList', () => { 
    it('renders correctly', () => {
        renderWithRouter(<MealList meals={[
          {
            strMeal: 'Cheese cake',
            idMeal: '123',
            strMealThumb: '/meal.png',
          },
          {
            strMeal: 'Chocolate cake',
            idMeal: '456',
            strMealThumb: '/choco.png',
          },
        ]} />)
        
        expect(screen.getByRole('list')).toBeInTheDocument();

    });
    
    

 })