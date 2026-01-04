import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AboutPage } from "./AboutPage";

describe("AboutPage", () => {
  it("renders the title", () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>,
    );
    expect(screen.getByText("About Digit Fidget")).toBeInTheDocument();
  });

  it("renders the back button", () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>,
    );
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("renders content from rules", () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>,
    );
    expect(screen.getByText(/toggle digits on a grid/i)).toBeInTheDocument();
    expect(screen.getByText(/Game generation/i)).toBeInTheDocument();
    expect(screen.getByText(/Winning conditions/i)).toBeInTheDocument();
  });
});
