import { createMuiTheme }  from '@material-ui/core/styles'
const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#368CBE',
      dark: '#005f8e'
    },
    secondary: { main: '#e6e8e6' }
  },
  overrides: {
    MuiGrid: {
      'spacing-xs-1': {
        '& > $item': {
          margin: 4,
        },
      },
    },
  }
})
export default theme