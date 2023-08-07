import React, { useState, useCallback, useEffect } from "react";
import { useDataProvider } from "react-admin";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import Stats from "../components/Stats";
import { CustomDataProvider, DashboardStats } from "../interfaces";

const Home: React.FC = () => {
  const dataProvider = useDataProvider<CustomDataProvider>();

  const [data, setData] = useState<DashboardStats>({
    total_todos: 0,
    completed_todos: 0,
    incompleted_todos: 0,
    average_duration_per_todo: "",
  });

  const fetchData = useCallback(async () => {
    dataProvider.stats("home").then((result) => {
      setData(result);
    });
  }, [dataProvider]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Box sx={{ height: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button to={"/login"} component={Link}>
          Log In
        </Button>
        <Button to={"/register"} component={Link}>
          Register
        </Button>
      </Box>
      <Stats statsData={data} />
    </Box>
  );
};

export default Home;
