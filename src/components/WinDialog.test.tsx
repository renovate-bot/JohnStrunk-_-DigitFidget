import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import WinDialog from "./WinDialog";

describe("WinDialog", () => {
    it("renders win message, moves, and time", () => {
        render(<WinDialog moves={12} time={83} onOk={() => {/* no-op for test */ }} />);
        expect(screen.getByText(/You Win!/i)).toBeInTheDocument();
        expect(screen.getByText(/Moves:/i)).toBeInTheDocument();
        expect(screen.getByText("12")).toBeInTheDocument();
        expect(screen.getByText(/Time:/i)).toBeInTheDocument();
        expect(screen.getByText("01:23")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /OK/i })).toBeInTheDocument();
    });

    it("calls onOk when OK button is clicked", () => {
        const onOk = vi.fn();
        render(<WinDialog moves={5} time={10} onOk={onOk} />);
        const okButtons = screen.getAllByRole("button", { name: /OK/i });
        okButtons.forEach(btn => fireEvent.click(btn));
        expect(onOk).toHaveBeenCalled();
    });
});
