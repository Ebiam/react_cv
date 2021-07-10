import React from "react";
import "./Topbar.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Chip from "@material-ui/core/Chip";

const styles = theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
});

class Topbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hide: false,
        }
    }

    _togle_hide(){
        this.setState( {hide: !this.state.hide});
    }
    render(){

        const { classes } = this.props;

        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className="title">
                            {this.props.title}
                        </Typography>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <div onClick={() => {window.open("https://fr.linkedin.com/in/enzo-biamonti-b3109a155", "_blank")}}>
                                <LinkedInIcon style={{marginInline: '10px'}}/>
                            </div>
                            <div onClick={() => {window.open("https://github.com/Ebiam", "_blank")}} >
                                <GitHubIcon style={{marginInline: '10px'}}/>
                            </div>
                            <MenuIcon style={{marginInline: '10px'}} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </>
        );
    }
}

Topbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Topbar);
