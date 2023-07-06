import React from 'react';
import { Container, Typography } from '@mui/material';
import NoteList from '../src/components/NoteList';

const App = () => {
  return (
    <>
      <div
        style={{
          background: '#a0ecec',
          border: '2px solid black',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h1" component="h1" style={{ marginBottom: '20px' }}>
          Gyan's Book
          </Typography>
          <NoteList />
        </Container>
      </div>
    </>
  );
};

export default App;
