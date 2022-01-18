import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './layouts/main/pages/home/Home';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('renders app', () => {
    render(<App />);
    const linkElement = screen.getByText(/React-Bootstrap/i);
    expect(linkElement).toBeInTheDocument();
});
