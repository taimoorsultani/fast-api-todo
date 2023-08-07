import React, { useEffect, useCallback, useState } from 'react';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import { useDataProvider } from 'react-admin';

import { CustomDataProvider, DashboardStats } from '../interfaces';
import Stats from '../components/Stats';

const Component: React.FC = () => {
  const dataProvider = useDataProvider<CustomDataProvider>();

  const [data, setData] = useState<DashboardStats>({
    total_todos: 0,
    completed_todos: 0,
    incompleted_todos: 0,
    average_duration_per_todo: '',
  });

  const fetchData = useCallback(async () => {
    dataProvider.stats('dashboard').then((result) => {
      setData(result);
    });
  }, [dataProvider]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Card>
      <CardHeader title='Welcome to admin' />
      <Stats statsData={data} />
    </Card>
  );
};

export default Component;
