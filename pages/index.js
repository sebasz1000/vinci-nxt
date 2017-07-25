import Layout from '../comps/layout/Layout.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin'

const vinciTheme = getMuiTheme({
    palette: {
        textColor: '#455676',
    }
});

export default () => (
    
    <MuiThemeProvider muiTheme={vinciTheme}>
        <Layout />
    </MuiThemeProvider>
)
//injectTapEventPlugin();