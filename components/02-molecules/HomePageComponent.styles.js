import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  '@keyframes fade': {
    from: {
      opacity: 1,

      //   left: '-300px',
      //   transform: 'tranlsateY(90%)',
    },
    to: {
      opacity: 0.1,

      //   top: '100px',
      //   left: '100%',
      //   opacity: 0.2,
      //   transform: 'rotate(1deg)',

      //   transform: 'tranlateY(20%)',
    },
  },
  '@keyframes bounce': {
    from: {
      //   opacity: 1,

      //   left: '-300px',
      color: theme.palette.primary.salmon,
      transform: 'translate(0%, -30%)',
    },
    to: {
      //   top: '100px',
      //   color: theme.palette.primary.main,
      //   left: '100%',
      //   //   opacity: 0.2,
      //   //   transform: 'rotate(1deg)',
      color: theme.palette.primary.main,
      transform: 'translate(0%, 100%)',
    },
  },
  fade: {
    animationName: '$fade',
    animationDuration: '5000ms',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-out',
  },
  //   withAnimation: {
  //     animationPlayState: disabled ? 'paused' : 'running',
  //   },
  animationText: {
    // height: '100%',
    fontFamily: theme.typography.bold,
    color: theme.palette.primary.main,
    fontSize: '2.5rem',
    animationName: '$bounce',
    animationDuration: '1000ms',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'cubic-bezier(0.8, 0, 0.58, 1)',
    // position: 'relative',
  },

  // @keyframes blink{
  // 0%{opacity: 0;}
  // 50%{opacity: .5;}
  // 100%{opacity: 1;}
  // }
}));
