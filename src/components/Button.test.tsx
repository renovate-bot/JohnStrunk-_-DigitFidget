import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from 'vitest';
import Button from "./Button";

describe("Button component", () => {
    it("renders primary style", () => {
        render(<Button variant="primary">Primary</Button>);
        const btn = screen.getByRole("button", { name: /primary/i });
        expect(btn).toHaveClass("border-ega-yellow");
        expect(btn).toHaveTextContent("Primary");
    });

    it("renders secondary style", () => {
        render(<Button variant="secondary">Secondary</Button>);
        const btn = screen.getByRole("button", { name: /secondary/i });
        expect(btn).toHaveClass("border-ega-cyan");
        expect(btn).toHaveTextContent("Secondary");
    });

    it("passes standard button props", () => {
        const handleClick = vi.fn();
        render(
            <Button variant="primary" onClick={handleClick} type="submit" disabled>
                Click Me
            </Button>
        );
        const btn = screen.getByRole("button", { name: /click me/i });
        expect(btn).toBeDisabled();
        fireEvent.click(btn);
        expect(handleClick).not.toHaveBeenCalled(); // Disabled, so not called
    });

    it("calls onClick when enabled", () => {
        const handleClick = vi.fn();
        render(
            <Button variant="secondary" onClick={handleClick}>
                Clickable
            </Button>
        );
        const btn = screen.getByRole("button", { name: /clickable/i });
        fireEvent.click(btn);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
