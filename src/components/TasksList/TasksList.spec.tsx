import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { TasksList } from "./TasksList";
import { Task } from "../../types/Task";

const mockOnChange = vi.fn();

const tasks: Task[] = [
  {
    id: "123",
    name: "First Task",
    done: true,
  },
  {
    id: "456",
    name: "Second Task",
    done: false,
  },
  {
    id: "789",
    name: "Third Task",
    done: false,
  },
  {
    id: "012",
    name: "Fourth Task",
    done: false,
  },
];

describe("TasksList", () => {
  it("should render correctly", () => {
    render(<TasksList tasks={tasks} onChange={mockOnChange} />);

    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");

    expect(items.length).toBe(4);
  });
});
