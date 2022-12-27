import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { Button } from "./Button";

const mockOnClick = vi.fn();

describe("Button", () => {
  it("should render correctly", () => {
    render(<Button onClick={mockOnClick}>Test</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should render primary intent when atribute is provided", () => {
    render(
      <Button onClick={mockOnClick} intent="primary">
        Test
      </Button>
    );
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-sky-300");
  });
});
