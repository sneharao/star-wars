import React, { Children } from 'react';
import { act, render, screen } from '@testing-library/react';
import DetailsPage from './Detail';
// import { createMemoryHistory } from 'history';
import { BrowserRouter, RouterProvider, Router } from 'react-router-dom';
import { unmountComponentAtNode } from 'react-dom';
const mockObj = {
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.dev/api/planets/1/",
  "films": [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/"
  ],
  "species": [],
  "vehicles": [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/"
  ],
  "starships": [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.dev/api/people/1/"
};
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/example/path",
    state: { ...mockObj }
  })
}));
describe('Details component', () => {

  test('component is rendered with proper heading',()=>{
    const {getByTestId} =  render(<DetailsPage />
    , { wrapper: BrowserRouter });
    expect(getByTestId('headerText')).toBeInTheDocument();
    expect(getByTestId('headerText').innerHTML).toBe('Character detail');
  });

  test('name is equal to what is passed in useLocation',()=>{
    const {getByTestId} =  render(<DetailsPage />
    , { wrapper: BrowserRouter });
    expect(getByTestId('nameValue')).toBeInTheDocument();
    expect(getByTestId('nameValue').innerHTML).toBe(`Name: ${mockObj.name}`);
  })


  
});

