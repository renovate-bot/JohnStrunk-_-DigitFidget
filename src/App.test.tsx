import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
    it('renders main menu', () => {
        render(<App />);
        expect(screen.getByText(/digit fidget/i)).toBeInTheDocument();
    });
});
