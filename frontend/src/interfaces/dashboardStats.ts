export interface DashboardStats {
  total_todos: number;
  completed_todos: number;
  incompleted_todos: number;
  average_duration_per_todo: string;
  average_total_todos_per_user?: number;
  average_completed_todos_per_user?: number;
  average_incompleted_todos_per_user?: string;
}
