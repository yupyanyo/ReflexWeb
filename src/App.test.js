// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ReflexWeb title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ReflexWeb/i);
    expect(titleElement).toBeInTheDocument();
});
