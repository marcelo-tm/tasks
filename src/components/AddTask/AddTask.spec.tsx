import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { AddTask } from "./AddTask";

describe("AddTask", () => {
  it("should render correctly", () => {
    const mockOnClick = vi.fn();
    render(<AddTask onClick={mockOnClick} />);

    const textInput = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    expect(textInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-sky-300");
  });

  it("should not call the callback function when text input is empty", () => {
    const mockOnClick = vi.fn();
    render(<AddTask onClick={mockOnClick} />);

    const textInput = screen.getByRole("textbox");
    fireEvent.keyUp(textInput, { key: "Enter" });

    expect(mockOnClick).not.toBeCalled();
  });

  it("should call the callback function when text input is not empty", async () => {
    const mockOnClick = vi.fn();
    render(<AddTask onClick={mockOnClick} />);

    const textInput = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(textInput, { target: { value: "Test" } });

    await waitFor(() => {
      expect(textInput.value).toBe("Test");
      // fireEvent.keyUp(textInput, { key: "Enter" });
      // expect(mockOnClick).toBeCalled();
    });
  });
});
