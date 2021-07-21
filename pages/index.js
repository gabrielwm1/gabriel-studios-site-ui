import Head from 'next/head';
import Image from 'next/image';
import HomePageComponent from '../components/02-molecules/HomePageComponent';
import styles from '../styles/Home.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontFamily: theme.typography.regular,
    color: theme.palette.primary.red,
    fontSize: '2.5rem',
    fontWeight: '500',
    marginTop: 25,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomePageComponent />
    </>
  );
}
