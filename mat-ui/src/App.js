import React from 'react';
import { Header, Content } from './modules/layout';
import { Grid } from '@material-ui/core';
import './App.css';


function App() {
  return (
    <Grid container className="App" justify='flex-start' direction='column'>
      <Header />
      <Content />
    </Grid>
  );
}

export default App;
