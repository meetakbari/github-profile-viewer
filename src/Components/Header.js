import './Header.css'
import { Typography, Grid } from '@material-ui/core'
import HeaderIcon from '../images/github-icon.png';

export default function Header() {
    return (
        <Grid container direction="row" alignItems="center" className="h-container">
            <Grid item xs={1}>
                <img src={HeaderIcon} alt="GitHub-Icon" className="header-icon"/>
            </Grid>
            <Grid item>
                <Typography variant="h4" color="initial" className="header-text">GitHub Profile Viewer</Typography> 
            </Grid>
        </Grid>
    )
}