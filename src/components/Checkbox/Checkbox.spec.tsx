import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { Checkbox } from "./Checkbox";
import { Task } from "../../types/Task";

const mockOnChange = vi.fn();

describe("Checkbox", () => {
  it("should render correctly", () => {
    const task: Task = {
      id: "123",
      name: "Test task",
      done: false,
    };

    render(<Checkbox task={task} onChange={mockOnChange} />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
  });
});
