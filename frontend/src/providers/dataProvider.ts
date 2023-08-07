import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";

import { basePath } from "./env";
import { CustomDataProvider } from "../interfaces/customDataProvider";
import { DashboardStats } from "../interfaces";

const httpClient = (url: string, options: any = {}) => {
  options.user = {
    authenticated: true,
    token: `Bearer ${localStorage.getItem("token")}`,
  };
  if (url.includes("/users/") && options.method === "PUT") {
    // We use PATCH for update on the backend for users, since PATCH is selective PUT, this change should be fine
    options.method = "PATCH";
  }
  return fetchUtils.fetchJson(url, options);
};

const dataProvider: CustomDataProvider = {
  ...simpleRestProvider(`${basePath}/api/v1`, httpClient),
  stats: async (resource: string) => {
    const url = `${basePath}/api/v1/${resource}`;
    const response = await httpClient(url);
    if (response.status === 200 && response.json) {
      return response.json as DashboardStats;
    }
    return {
      total_todos: 0,
      completed_todos: 0,
      incompleted_todos: 0,
      average_duration_per_todo: "",
    };
  },
};

export { dataProvider };
