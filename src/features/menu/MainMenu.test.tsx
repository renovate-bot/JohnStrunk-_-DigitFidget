import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MainMenu } from "./MainMenu";

describe("MainMenu", () => {
  it("renders the title", () => {
    render(
      <BrowserRouter>
        <MainMenu />
      </BrowserRouter>,
    );
    expect(screen.getByText("Digit Fidget")).toBeInTheDocument();
  });

  it("renders difficulty buttons", () => {
    render(
      <BrowserRouter>
        <MainMenu />
      </BrowserRouter>,
    );
    expect(screen.getByText("Easy")).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();
    expect(screen.getByText("Hard")).toBeInTheDocument();
    expect(screen.getByText("Extreme")).toBeInTheDocument();
  });

  it("renders about and high scores links", () => {
    render(
      <BrowserRouter>
        <MainMenu />
      </BrowserRouter>,
    );
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("High Scores")).toBeInTheDocument();
  });
});
