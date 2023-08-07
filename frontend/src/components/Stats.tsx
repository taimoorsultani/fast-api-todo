import React, { useMemo } from "react";
import { Box, Grid, Card, Typography, CardContent } from "@mui/material";

import statsStyles from "./statsStyles";
import { DashboardStats } from "../interfaces";

interface StatData {
  id: string;
  name: string;
  value: number | string;
}

interface IStats {
  statsData: DashboardStats;
}

const DATA: StatData[] = [
  {
    id: "total_todos",
    name: "Total Todos",
    value: 0,
  },
  {
    id: "completed_todos",
    name: "Completed Todos",
    value: 0,
  },
  {
    id: "incompleted_todos",
    name: "InCompleted Todos",
    value: 0,
  },
  {
    id: "average_duration_per_todo",
    name: "Average Duration per Todo",
    value: 0,
  },
  {
    id: "average_total_todos_per_user",
    name: "Average Todos per user",
    value: 0,
  },
  {
    id: "average_completed_todos_per_user",
    name: "Average Completed Todos per user",
    value: 0,
  },
  {
    id: "average_incompleted_todos_per_user",
    name: "Average InCompleted Todos per user",
    value: 0,
  },
];

const Stats: React.FC<IStats> = ({ statsData }) => {
  const data = useMemo(() => {
    if (statsData) {
      return Object.keys(statsData)
        .map((key) => ({
          id: key,
          name: DATA.find((item) => item.id === key)?.name as string | "",
          value: statsData[key as keyof DashboardStats] as number | 0,
        }))
        .filter((item) => item.value !== null);
    }
    return [] as StatData[];
  }, [statsData]);

  return (
    <Box sx={statsStyles.main}>
      <Grid container spacing={4} sx={statsStyles.grid}>
        {data.map((item: StatData) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card sx={statsStyles.card}>
                <CardContent>
                  <Typography variant="h5" color="text.secondary" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="h5">{item.value}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Stats;
