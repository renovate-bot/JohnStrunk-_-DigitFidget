import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the landing page", () => {
    render(<App />);
    expect(screen.getByText("Digit Fidget")).toBeInTheDocument();
    expect(screen.getByText("A number puzzle game.")).toBeInTheDocument();
  });
});
