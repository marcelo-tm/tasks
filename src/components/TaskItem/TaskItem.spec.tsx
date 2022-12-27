import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { TaskItem } from "./TaskItem";
import { Task } from "../../types/Task";

const mockObj = {
  onChange: vi.fn(),
  onDelete: vi.fn(),
};

describe("TaskItem", () => {
  it("should render correctly", () => {
    const task: Task = {
      id: "123",
      name: "Test task",
      done: false,
    };

    render(
      <TaskItem
        task={task}
        onChange={mockObj.onChange}
        onDelete={mockObj.onDelete}
      />
    );
    const checkbox = screen.getByRole("checkbox");
    const label = screen.getByLabelText("Test task");
    const button = screen.getByRole("button");

    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should not check checkbox when done is false", () => {
    const task: Task = {
      id: "123",
      name: "Test task",
      done: false,
    };

    render(
      <TaskItem
        task={task}
        onChange={mockObj.onChange}
        onDelete={mockObj.onDelete}
      />
    );
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

    expect(checkbox.checked).toBe(false);
  });

  it("should check checkbox when done is true", () => {
    const task: Task = {
      id: "123",
      name: "Test task",
      done: true,
    };

    render(
      <TaskItem
        task={task}
        onChange={mockObj.onChange}
        onDelete={mockObj.onDelete}
      />
    );
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

    expect(checkbox.checked).toBe(true);
  });

  it("should call onChange callback", () => {
    const task: Task = {
      id: "123",
      name: "Test task",
      done: false,
    };

    const spyFn = vi.spyOn(mockObj, "onChange");

    render(
      <TaskItem
        task={task}
        onChange={mockObj.onChange}
        onDelete={mockObj.onDelete}
      />
    );
    mockObj.onChange();

    expect(spyFn).toBeCalled();
  });

  it("should call onDelete callback", () => {
    const task: Task = {
      id: "123",
      name: "Test task",
      done: false,
    };

    const spyFn = vi.spyOn(mockObj, "onDelete");

    render(
      <TaskItem
        task={task}
        onChange={mockObj.onChange}
        onDelete={mockObj.onDelete}
      />
    );
    mockObj.onDelete();

    expect(spyFn).toBeCalled();
  });
});
