import { createTheme } from '@material-ui/core/styles';
import '../styles/Home.module.css';

const Theme = createTheme({
  typography: {
    bold: 'Roboto-Bold, Arial',
    regular: 'Roboto-Regular, Arial',
  },
  palette: {
    primary: {
      main: '#AA0090',
      white: '#FFFFFF',
      salmon: '#FF9A9A',
      lightPurple: '#DC9EFF',
      orange: '#FFCF5B',
      blue: '#74D0FF',
      black: '#000000',
      darkGrey: '#7F7F7F',
      neonGreen: '#9DFFA5',
      yellowGreen: '#CFFF5B',
    },
    secondary: {
      main: '#FAB513',
    },
  },
});
export default Theme;
