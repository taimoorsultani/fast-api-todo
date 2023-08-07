import { render, screen, waitFor } from "@testing-library/react";
import Home from "./Home";
import { AdminContext, testDataProvider } from "react-admin";

const mockDataProvider = testDataProvider({
  stats: (resource: string) => {
    return Promise.resolve({
      total_todos: 6,
      completed_todos: 4,
      incompleted_todos: 2,
      average_duration_per_todo: "3 seconds",
      average_total_todos_per_user: 5,
      average_completed_todos_per_user: 9,
      average_incompleted_todos_per_user: 10,
    });
  },
});

const missingMockDataProvider = testDataProvider({
  stats: (resource: string) => {
    return Promise.resolve({
      total_todos: 6,
      completed_todos: 4,
      incompleted_todos: 2,
      average_duration_per_todo: "3 seconds",
    });
  },
});

test("renders home, all data received", async () => {
  render(
    <AdminContext dataProvider={mockDataProvider}>
      <Home />
    </AdminContext>
  );

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

  await waitFor(() => {
    expect(screen.getByText("Average Todos per user")).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(
      screen.getByText("Average Completed Todos per user")
    ).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(
      screen.getByText("Average InCompleted Todos per user")
    ).toBeInTheDocument();
  });
});

test("renders home, average field not received", async () => {
  render(
    <AdminContext dataProvider={missingMockDataProvider}>
      <Home />
    </AdminContext>
  );

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

  await waitFor(() => {
    expect(
      screen.queryByText("Average Todos per user")
    ).not.toBeInTheDocument();
  });

  await waitFor(() => {
    expect(
      screen.queryByText("Average Completed Todos per user")
    ).not.toBeInTheDocument();
  });

  await waitFor(() => {
    expect(
      screen.queryByText("Average InCompleted Todos per user")
    ).not.toBeInTheDocument();
  });
});
