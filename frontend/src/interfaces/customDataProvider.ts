import { DataProvider } from "react-admin";

import { DashboardStats } from "./dashboardStats";

export interface CustomDataProvider extends DataProvider {
  stats: (resource: string) => Promise<DashboardStats>;
}
