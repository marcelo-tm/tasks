import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Header } from "./Header";

describe("Header", () => {
  it("should render correctly", () => {
    render(<Header />);
    const logo = screen.getByRole("img");

    expect(screen.getByText("Tasks List")).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/src/assets/logo.png");
    expect(logo).toHaveAttribute("alt", "Tasks List");
    expect(logo).toBeVisible();
  });
});
