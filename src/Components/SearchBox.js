import { Container, TextField, makeStyles } from "@material-ui/core";
import { useState } from "react";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import './SearchBox.css';

const useStyles = makeStyles((theme) => ({
    input: {
        color: "#FFF",
    },
}));

export default function SearchBox(props) {

    const classes = useStyles();
    const [query, setQuery] = useState('')

    function handleSearch(e) {
        setQuery(e.target.value);
        props.func(e.target.value)
	}
    
    return (
        <Container>
            <div className="searchBox">
                <SearchRoundedIcon fontSize="large" style={{fill: "white"}}/>
                <form noValidate autoComplete="off">
                    <TextField
                        id="searchBox"
                        placeholder="Search User"
                        InputProps={{ disableUnderline: true }}
                        inputProps={{ className: classes.input }}
                        value={query}
                        onChange={handleSearch}
                    />
                </form>
                <CloseRoundedIcon style={{fill: "white"}} onClick={()=> setQuery('')}/>
            </div>
        </Container>   
    );
}