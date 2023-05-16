import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Container, CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#8f94fb', // light blue
      main: '#4a4fcf', // main blue
      dark: '#1a1f80', // dark blue
      contrastText: '#ffffff', // white text
    },
    secondary: {
      light: '#ff79b0', // light pink
      main: '#ff3d80', // main pink
      dark: '#c60055', // dark pink
      contrastText: '#ffffff', // white text
    },
    background: {
      paper: '#1f1f1f', // very dark grey
      default: '#121212', // almost black
    },
  },
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <App />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
