import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../theme/light-theme';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import '/styles/globals.css';
function MyApp(props) {
  const { Component, pageProps } = props;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
export default MyApp;
