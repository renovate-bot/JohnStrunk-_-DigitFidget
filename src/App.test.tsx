import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
    it('renders main menu', () => {
        window.history.pushState({}, '', '/DigitFidget/');
        render(<App />);
        expect(screen.getByText(/digit fidget/i)).toBeInTheDocument();
    });
});
