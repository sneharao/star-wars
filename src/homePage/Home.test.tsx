import { render } from '@testing-library/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import * as fetchData from '../shared/fetchData';
import Home from './Home';

const mockCharacterList = [
  {
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
  },
  {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [
      "https://swapi.dev/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:10:51.357000Z",
    "edited": "2014-12-20T21:17:50.309000Z",
    "url": "https://swapi.dev/api/people/2/"
  }
];

describe('Home component', () => {
  let container: HTMLDivElement | null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
  });
  test('renders with correct header text', () => {
    const { getByTestId } = render(<Home />, { wrapper: BrowserRouter });
    expect(getByTestId('headerText')).toBeInTheDocument();
    expect(getByTestId('headerText').innerHTML).toBe('Character list');
  });

  test('loads two records as returned by the service', () => {
    const mockGetCharacters = jest.spyOn(fetchData, 'getCharacterList');
    mockGetCharacters.mockImplementation(() => Promise.resolve(mockCharacterList));
    setTimeout(() => {
      const { getByTestId } = render(<Home />, { wrapper: BrowserRouter });
      expect(getByTestId('cardContent')).toBeInTheDocument();
      expect(getByTestId('cardContent')).toHaveLength(2);
    }, 500);
  });

  test('should navigate to details page on click of card ', () => {
    const mockGetCharacters = jest.spyOn(fetchData, 'getCharacterList');
    mockGetCharacters.mockImplementation(() => Promise.resolve(mockCharacterList));
    setTimeout(() => {
      const { getByTestId } = render(<Home />, { wrapper: BrowserRouter });
      const card = getByTestId('cardContent');
      card.click();
      expect(useNavigate).toHaveBeenCalledWith('/detail');
    }, 500);
  });
})


