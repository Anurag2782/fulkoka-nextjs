// pages/_app.js
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useEffect } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A73E8',
    },
    secondary: {
      main: '#FFC107',
    },
  },
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Prevents the flash of unstyled content (FOUC)
    document.body.style.visibility = 'visible';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
