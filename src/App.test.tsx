import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the main menu by default", () => {
    window.history.pushState({}, "Test page", "/DigitFidget/");
    render(<App />);
    expect(screen.getByText("Digit Fidget")).toBeInTheDocument();
    expect(screen.getByText("Easy")).toBeInTheDocument();
  });
});
