import React, { useState, useEffect, useRef,} from "react";
import "./Topbar.css";
import PropTypes from 'prop-types';
import { MenuItem, Drawer,} from '@material-ui/core';
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

export default function Topbar(props) {

    const headersData = [
        {
            label: "Home",
            href: "#home",
        },
        {
            label: "Mon Expérience",
            href: "#exp",
        },
        {
            label: "A propos",
            href: "#aboutme",
        },
    ];


    const [state, setState] = useState({
        mobileView: false,
        hide: false,
        drawerOpen: false
    });

    const _togle_hide = () => {
        setState( {hide: !state.hide});
    };

    const { mobileView, drawerOpen} = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));




    const { classes } = props;
    const color = props.color ? props.color : "primary";

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <a key={label} href={href} onClick={handleDrawerClose
                }>
                    <MenuItem>{label}</MenuItem>
                </a>
            );
        });
    };

        return (
            <>
                <AppBar position="sticky" color={color}>
                    <Toolbar>
                        <Typography variant="h6" className="title">
                            {props.title}
                        </Typography>
                        <div style={{cursor: 'pointer'}} onClick={() => {window.open("https://fr.linkedin.com/in/enzo-biamonti-b3109a155", "_blank")}}>
                            <LinkedInIcon style={{marginInline: '10px'}}/>
                        </div>
                        <div style={{cursor: 'pointer'}} onClick={() => {window.open("https://github.com/Ebiam", "_blank")}} >
                            <GitHubIcon style={{marginInline: '10px'}}/>
                        </div>
                        <IconButton edge="start" color="inherit" aria-label="menu">

                            <Drawer
                                {...{
                                    anchor: "left",
                                    open: drawerOpen,
                                    onClose: handleDrawerClose,
                                }}
                            >
                                <div >{getDrawerChoices()}</div>
                            </Drawer>
                            <MenuIcon style={{marginInline: '10px'}} onClick={handleDrawerOpen} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </>
        );
}

Topbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(Topbar);
