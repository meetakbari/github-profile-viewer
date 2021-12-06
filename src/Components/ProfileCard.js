import {Card, CardHeader, Avatar, CardContent, Typography} from '@material-ui/core';
import './ProfileCard.css';
import HeaderIcon from '../images/github-icon.png';

export default function ProfileCard(){
    return(
        <Card className="card">
            <CardHeader className="card-left"
                avatar={
                    <img src={HeaderIcon} alt="GitHub-Icon" className="card-profile-image"/>
                }
            />
            <CardContent className="card-right">
                <Typography variant="body2" color="text.secondary">
                This impressive paella 
                </Typography>
            </CardContent>
        </Card>
    )
}