import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', ()=> {
  beforeEach(()=>{
    render(<App />);
  });

  it('renders learn react link', () => {
    expect(screen).toBeDefined();
  });
})

