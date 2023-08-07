import React, { useState, useCallback, useEffect } from 'react';
import { useDataProvider, useRedirect } from 'react-admin';
import { Box, Button } from '@mui/material';

import Stats from '../components/Stats';
import { CustomDataProvider, DashboardStats } from '../interfaces';

const Home: React.FC = () => {
  const redirect = useRedirect();
  const dataProvider = useDataProvider<CustomDataProvider>();

  const [data, setData] = useState<DashboardStats>({
    total_todos: 0,
    completed_todos: 0,
    incompleted_todos: 0,
    average_duration_per_todo: '',
  });

  const fetchData = useCallback(async () => {
    dataProvider.stats('home').then((result) => {
      setData(result);
    });
  }, [dataProvider]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onLogin = () => {
    redirect('/login');
  };

  const onRegister = () => {
    redirect('/register');
  };

  return (
    <Box sx={{ height: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={onLogin}>Log In</Button>
        <Button onClick={onRegister}>Register</Button>
      </Box>
      <Stats statsData={data} />
    </Box>
  );
};

export default Home;
