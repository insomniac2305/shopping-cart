import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../components/Home";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  test("renders call to action heading", () => {
    render(<Home />, { wrapper: BrowserRouter });

    expect(screen.getByRole("heading").textContent).toMatch(
      /get in the game!/i
    );
  });

  test("renders call to action text", () => {
    render(<Home />, { wrapper: BrowserRouter });

    expect(
      screen.getByText(/grab your favorite games at the best prices/i)
    ).toBeInTheDocument();
  });

  test("renders link to shop", () => {
    render(<Home />, { wrapper: BrowserRouter });

    expect(screen.getByRole("link")).toHaveAttribute("href", "/shop");
  });
});
