import { render, screen, waitFor } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { AdminContext, testDataProvider } from "react-admin";

const mockDataProvider = testDataProvider({
  stats: (resource: string) => {
    return Promise.resolve({
      total_todos: 6,
      completed_todos: 4,
      incompleted_todos: 2,
      average_duration_per_todo: "3 seconds",
    });
  },
});

test("renders dashboard", async () => {
  render(
    <AdminContext dataProvider={mockDataProvider}>
      <Dashboard />
    </AdminContext>
  );

  await waitFor(() => {
    expect(screen.getByText(/Welcome to admin/i)).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText("Total Todos")).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText("Completed Todos")).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText("InCompleted Todos")).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText("Average Duration per Todo")).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText("3 seconds")).toBeInTheDocument();
  });
});
