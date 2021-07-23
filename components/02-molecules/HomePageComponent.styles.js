import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  '@keyframes fade': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0.1,
    },
  },
  '@keyframes bounce': {
    from: {
      color: theme.palette.primary.salmon,
      transform: 'translate(-30%, 0%)',
    },
    to: {
      color: theme.palette.primary.main,
      transform: 'translate(0%, 0%)',
    },
  },
  fade: {
    animationName: '$fade',
    animationDuration: '5000ms',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-out',
  },
  invisible: {
    opacity: '0.025',
  },
  animationText: {
    // height: '100%',
    fontFamily: theme.typography.bold,
    color: theme.palette.primary.main,
    textAlign: 'center',
    fontSize: '2.5rem',
    animationName: '$bounce',
    animationDuration: '1000ms',
    animationIterationCount: 1,
    animationDirection: 'alternate',
    animationTimingFunction: 'cubic-bezier(0.9, 0, 0.4, 1)',
    // position: 'relative',
  },
  ethosText: {
    fontFamily: theme.typography.regular,
    color: theme.palette.primary.darkGrey,
    fontSize: '1rem',
  },
  mainText: {
    fontFamily: theme.typography.bold,
    color: theme.palette.primary.darkGrey,
    fontSize: '1rem',
    textAlign: 'center',
  },
  footerTitle: {
    cursor: 'pointer',
    color: theme.palette.primary.black,
    fontSize: '1rem',
    textAlign: 'center',
    '&:hover': {
      opacity: 0.5,
      color: theme.palette.primary.darkGrey,
    },
  },
  contact: {
    fontFamily: theme.typography.regular,
    color: theme.palette.primary.salmon,
    fontSize: '1.1rem',
    marginTop: '2rem',
    textAlign: 'center',
    '&:hover': {
      opacity: '0.5',
    },
  },
}));
